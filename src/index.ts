import { getProfile, putProfile, profileExists, setUserMapping, getUsernameByUserId, type Env } from "./storage";
import { ProfileSchema, RESERVED_SLUGS } from "./schema";
import { renderProfilePage } from "./render";
import { validateSupabaseJWT } from "./auth";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // --- API routes ---
    if (path.startsWith("/api/")) {
      return handleApi(request, env, path);
    }

    // --- Health check ---
    if (path === "/health") {
      return new Response("ok", { status: 200 });
    }

    // --- Avatar image ---
    const avatarMatch = path.match(/^\/avatar\/([a-z0-9._-]{3,30})$/);
    if (avatarMatch) {
      const key = `avatars/${avatarMatch[1]}`;
      const obj = await env.PROFILES.get(key);
      if (!obj) return notFound();
      const headers = new Headers();
      headers.set("Content-Type", obj.httpMetadata?.contentType || "image/jpeg");
      headers.set("Cache-Control", "public, max-age=3600");
      return new Response(obj.body, { headers });
    }

    // --- Public profile page ---
    // /:username or /:username/links
    const linksMatch = path.match(/^\/([a-z0-9._-]{3,30})\/links$/);
    const usernameMatch = linksMatch || path.match(/^\/([a-z0-9._-]{3,30})$/);
    if (usernameMatch && request.method === "GET") {
      const username = usernameMatch[1];

      if (RESERVED_SLUGS.has(username)) {
        return notFound();
      }

      const profile = await getProfile(env.PROFILES, username);
      if (!profile) return notFound();

      // Track page view
      trackView(env.ANALYTICS, username).catch(() => {});

      const html = renderProfilePage(profile);
      return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html;charset=UTF-8",
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      });
    }

    // --- Root / landing ---
    if (path === "/") {
      return new Response("cnxt to links — coming soon", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    return notFound();
  },
};

// ---- API handler ----

async function handleApi(
  request: Request,
  env: Env,
  path: string
): Promise<Response> {
  const allowedOrigins = ["https://links.cnxt.to", "https://links-cnxt-dashboard.pages.dev", "http://localhost:5173", "http://localhost:3000"];
  const origin = request.headers.get("Origin") ?? "";
  const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  const corsHeaders = {
    "Access-Control-Allow-Origin": corsOrigin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // POST /api/event — analytics click tracking (public)
  if (path === "/api/event" && request.method === "POST") {
    try {
      const body = (await request.json()) as {
        username?: string;
        linkIndex?: number;
        timestamp?: string;
      };
      if (body.username && typeof body.linkIndex === "number") {
        await trackClick(env.ANALYTICS, body.username, body.linkIndex);
      }
      return new Response("ok", { status: 200, headers: corsHeaders });
    } catch {
      return new Response("bad request", { status: 400, headers: corsHeaders });
    }
  }

  // ---- Auth routes ----
  // Auth (sign-in, magic link, token verification) is handled entirely by the
  // Supabase client in the dashboard. The Worker only validates the resulting JWT.

  // GET /api/username/check/:username — public availability check
  const usernameCheckMatch = path.match(/^\/api\/username\/check\/([a-z0-9._-]{3,30})$/);
  if (usernameCheckMatch && request.method === "GET") {
    const slug = usernameCheckMatch[1];
    if (RESERVED_SLUGS.has(slug)) {
      return jsonResponse({ available: false, reason: "reserved" }, 200, corsHeaders);
    }
    const taken = await profileExists(env.PROFILES, slug);
    return jsonResponse({ available: !taken, reason: taken ? "taken" : null }, 200, corsHeaders);
  }

  // GET /api/auth/me — return current user's profile (JWT-authenticated)
  if (path === "/api/auth/me" && request.method === "GET") {
    const jwt = await validateSupabaseJWT(env.SUPABASE_JWT_SECRET, request.headers.get("Authorization"));
    if (!jwt) return jsonResponse({ error: "unauthorized" }, 401, corsHeaders);
    const username = await getUsernameByUserId(env.ANALYTICS, jwt.sub);
    if (!username) return jsonResponse({ needsSetup: true, email: jwt.email }, 200, corsHeaders);
    const profile = await getProfile(env.PROFILES, username);
    if (!profile) return jsonResponse({ needsSetup: true, email: jwt.email }, 200, corsHeaders);
    const { email: _email, ...publicProfile } = profile;
    return jsonResponse(publicProfile, 200, corsHeaders);
  }

  // GET /api/profile/:username (public — strip email)
  const profileMatch = path.match(/^\/api\/profile\/([a-z0-9._-]{3,30})$/);
  if (profileMatch && request.method === "GET") {
    const profile = await getProfile(env.PROFILES, profileMatch[1]);
    if (!profile)
      return jsonResponse({ error: "not found" }, 404, corsHeaders);
    // Strip email from public response
    const { email: _email, ...publicProfile } = profile;
    return jsonResponse(publicProfile, 200, corsHeaders);
  }

  // POST /api/profile — create new profile (requires Supabase JWT)
  if (path === "/api/profile" && request.method === "POST") {
    const jwt = await validateSupabaseJWT(env.SUPABASE_JWT_SECRET, request.headers.get("Authorization"));
    if (!jwt) return jsonResponse({ error: "unauthorized" }, 401, corsHeaders);

    try {
      const body = await request.json();
      const parsed = ProfileSchema.parse({ ...(body as Record<string, unknown>), email: jwt.email });

      if (RESERVED_SLUGS.has(parsed.username)) {
        return jsonResponse({ error: "username reserved" }, 400, corsHeaders);
      }

      if (await profileExists(env.PROFILES, parsed.username)) {
        return jsonResponse({ error: "username taken" }, 409, corsHeaders);
      }

      // Check if this user already has a profile
      const existingUsername = await getUsernameByUserId(env.ANALYTICS, jwt.sub);
      if (existingUsername) {
        return jsonResponse({ error: "account already has a profile" }, 409, corsHeaders);
      }

      const now = new Date().toISOString();
      const profile = { ...parsed, createdAt: now, updatedAt: now };
      await putProfile(env.PROFILES, profile);
      await setUserMapping(env.ANALYTICS, jwt.sub, parsed.username);

      const { email: _email, ...publicProfile } = profile;
      return jsonResponse(publicProfile, 201, corsHeaders);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "invalid request";
      return jsonResponse({ error: message }, 400, corsHeaders);
    }
  }

  // PUT /api/profile/:username — update existing profile (requires Supabase JWT)
  if (profileMatch && request.method === "PUT") {
    const username = profileMatch[1];

    const jwt = await validateSupabaseJWT(env.SUPABASE_JWT_SECRET, request.headers.get("Authorization"));
    const ownedUsername = jwt ? await getUsernameByUserId(env.ANALYTICS, jwt.sub) : null;
    if (!jwt || ownedUsername !== username) {
      return jsonResponse({ error: "unauthorized" }, 401, corsHeaders);
    }

    const existing = await getProfile(env.PROFILES, username);
    if (!existing)
      return jsonResponse({ error: "not found" }, 404, corsHeaders);

    try {
      const body = (await request.json()) as Record<string, unknown>;
      // Keep original email — don't allow changing it via profile update
      const parsed = ProfileSchema.parse({ ...body, username, email: existing.email });
      const updated = {
        ...parsed,
        createdAt: existing.createdAt,
        updatedAt: new Date().toISOString(),
      };
      await putProfile(env.PROFILES, updated);
      // Strip email from response
      const { email: _email, ...publicProfile } = updated;
      return jsonResponse(publicProfile, 200, corsHeaders);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "invalid request";
      return jsonResponse({ error: message }, 400, corsHeaders);
    }
  }

  // POST /api/avatar — upload avatar image (requires Supabase JWT)
  if (path === "/api/avatar" && request.method === "POST") {
    const jwt = await validateSupabaseJWT(env.SUPABASE_JWT_SECRET, request.headers.get("Authorization"));
    const username = jwt ? await getUsernameByUserId(env.ANALYTICS, jwt.sub) : null;
    if (!jwt || !username) {
      return jsonResponse({ error: "unauthorized" }, 401, corsHeaders);
    }

    const contentType = request.headers.get("Content-Type") || "";
    const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!ALLOWED_TYPES.includes(contentType)) {
      return jsonResponse({ error: "Only JPEG, PNG, WebP, and GIF images are allowed" }, 400, corsHeaders);
    }

    const body = await request.arrayBuffer();
    const MAX_SIZE = 2 * 1024 * 1024; // 2 MB
    if (body.byteLength > MAX_SIZE) {
      return jsonResponse({ error: "Image must be under 2 MB" }, 400, corsHeaders);
    }

    const key = `avatars/${username}`;
    await env.PROFILES.put(key, body, { httpMetadata: { contentType } });

    const profile = await getProfile(env.PROFILES, username);
    if (profile) {
      profile.avatarUrl = `/avatar/${username}`;
      profile.updatedAt = new Date().toISOString();
      await putProfile(env.PROFILES, profile);
    }

    return jsonResponse({ avatarUrl: `/avatar/${username}` }, 200, corsHeaders);
  }

  return jsonResponse({ error: "not found" }, 404, corsHeaders);
}

// ---- Analytics helpers ----

async function trackView(kv: KVNamespace, username: string): Promise<void> {
  const date = new Date().toISOString().split("T")[0];
  const key = `views:${username}:${date}`;
  const current = parseInt((await kv.get(key)) ?? "0", 10);
  await kv.put(key, String(current + 1), { expirationTtl: 60 * 60 * 24 * 90 });
}

async function trackClick(
  kv: KVNamespace,
  username: string,
  linkIndex: number
): Promise<void> {
  const date = new Date().toISOString().split("T")[0];
  const key = `clicks:${username}:${linkIndex}:${date}`;
  const current = parseInt((await kv.get(key)) ?? "0", 10);
  await kv.put(key, String(current + 1), { expirationTtl: 60 * 60 * 24 * 90 });
}

// ---- Helpers ----

function jsonResponse(
  data: unknown,
  status: number,
  headers: Record<string, string> = {}
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

function notFound(): Response {
  return new Response("not found", { status: 404 });
}

import { getProfile, putProfile, profileExists, type Env } from "./storage";
import { ProfileSchema, RESERVED_SLUGS } from "./schema";
import { renderProfilePage } from "./render";

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

    // --- Public profile page ---
    // /:username
    const usernameMatch = path.match(/^\/([a-z0-9-]{3,30})$/);
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
      return new Response("links by cnxt — coming soon", {
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
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // POST /api/event — analytics click tracking
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

  // GET /api/profile/:username
  const profileMatch = path.match(/^\/api\/profile\/([a-z0-9-]{3,30})$/);
  if (profileMatch && request.method === "GET") {
    const profile = await getProfile(env.PROFILES, profileMatch[1]);
    if (!profile)
      return jsonResponse({ error: "not found" }, 404, corsHeaders);
    return jsonResponse(profile, 200, corsHeaders);
  }

  // POST /api/profile — create new profile
  if (path === "/api/profile" && request.method === "POST") {
    // TODO: add auth middleware
    try {
      const body = await request.json();
      const parsed = ProfileSchema.parse(body);

      if (RESERVED_SLUGS.has(parsed.username)) {
        return jsonResponse({ error: "username reserved" }, 400, corsHeaders);
      }

      if (await profileExists(env.PROFILES, parsed.username)) {
        return jsonResponse({ error: "username taken" }, 409, corsHeaders);
      }

      const now = new Date().toISOString();
      const profile = { ...parsed, createdAt: now, updatedAt: now };
      await putProfile(env.PROFILES, profile);
      return jsonResponse(profile, 201, corsHeaders);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "invalid request";
      return jsonResponse({ error: message }, 400, corsHeaders);
    }
  }

  // PUT /api/profile/:username — update existing profile
  if (profileMatch && request.method === "PUT") {
    // TODO: add auth middleware
    const username = profileMatch[1];
    const existing = await getProfile(env.PROFILES, username);
    if (!existing)
      return jsonResponse({ error: "not found" }, 404, corsHeaders);

    try {
      const body = (await request.json()) as Record<string, unknown>;
      const parsed = ProfileSchema.parse({ ...body, username });
      const updated = {
        ...parsed,
        createdAt: existing.createdAt,
        updatedAt: new Date().toISOString(),
      };
      await putProfile(env.PROFILES, updated);
      return jsonResponse(updated, 200, corsHeaders);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "invalid request";
      return jsonResponse({ error: message }, 400, corsHeaders);
    }
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

import type { Profile } from "./schema";
import { FREESURF } from "./freesurf.config";

export interface Env {
  AVATARS: R2Bucket;
  ANALYTICS: KVNamespace;
  ENVIRONMENT: string;
  SUPABASE_JWT_SECRET: string;
}

const SUPABASE_URL = FREESURF.AUTH.SUPABASE_URL;
const SUPABASE_ANON_KEY = FREESURF.AUTH.SUPABASE_ANON_KEY;
const SUPABASE_REST = `${SUPABASE_URL}/rest/v1/link_profiles`;

function supabaseHeaders(jwt?: string): HeadersInit {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: jwt ? `Bearer ${jwt}` : `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };
}

/** Write (upsert) a creator profile */
export async function putProfile(env: Env, profile: Profile, jwt?: string, userId?: string): Promise<void> {
  const body: Record<string, unknown> = {
    username: profile.username,
    email: profile.email,
    display_name: profile.displayName,
    bio: profile.bio,
    avatar_url: profile.avatarUrl || null,
    theme: profile.theme,
    default_view: profile.defaultView,
    links: profile.links,
    created_at: profile.createdAt,
    updated_at: profile.updatedAt,
  };

  if (userId) {
    body.user_id = userId;
  }

  const existing = await getProfile(env, profile.username);
  if (existing) {
    delete body.username;
    await fetch(`${SUPABASE_REST}?username=eq.${encodeURIComponent(profile.username)}`, {
      method: "PATCH",
      headers: supabaseHeaders(jwt),
      body: JSON.stringify(body),
    });
  } else {
    await fetch(SUPABASE_REST, {
      method: "POST",
      headers: supabaseHeaders(jwt),
      body: JSON.stringify(body),
    });
  }
}

/** Read a creator profile, or null if not found */
export async function getProfile(env: Env, username: string): Promise<Profile | null> {
  const res = await fetch(
    `${SUPABASE_REST}?username=eq.${encodeURIComponent(username)}&select=*`,
    { headers: supabaseHeaders() }
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as Record<string, unknown>[];
  if (rows.length === 0) return null;
  return rowToProfile(rows[0]);
}

/** Check if a username is taken */
export async function profileExists(env: Env, username: string): Promise<boolean> {
  const res = await fetch(
    `${SUPABASE_REST}?username=eq.${encodeURIComponent(username)}&select=username`,
    { headers: supabaseHeaders() }
  );
  if (!res.ok) return false;
  const rows = (await res.json()) as Record<string, unknown>[];
  return rows.length > 0;
}

/** Get username by Supabase user_id */
export async function getUsernameByUserId(env: Env, userId: string): Promise<string | null> {
  const res = await fetch(
    `${SUPABASE_REST}?user_id=eq.${encodeURIComponent(userId)}&select=username`,
    { headers: supabaseHeaders() }
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as Record<string, unknown>[];
  return rows.length > 0 ? (rows[0].username as string) : null;
}

function rowToProfile(row: Record<string, unknown>): Profile {
  return {
    username: row.username as string,
    email: row.email as string,
    displayName: row.display_name as string,
    bio: (row.bio as string) || "",
    avatarUrl: (row.avatar_url as string) || undefined,
    theme: (row.theme as string || "minimal-light") as Profile["theme"],
    defaultView: (row.default_view as string || "links") as Profile["defaultView"],
    links: (Array.isArray(row.links) ? row.links : []) as Profile["links"],
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

/**
 * FreeSurf Shared Auth — cross-domain session utility.
 * Depends on: freesurf.config.js for domain/brand values.
 *
 * Strategy:
 * 1. Check local Supabase session (same-domain, e.g. the auth page itself)
 * 2. Fall back to the shared cookie JWT — decode it directly without
 *    initializing Supabase SDK to avoid "Multiple GoTrueClient" conflicts.
 */
import config from "./freesurf.config.js";

const { SUPABASE_URL, SUPABASE_ANON_KEY, COOKIE_NAME, COOKIE_MAX_AGE } = config.AUTH;
const COOKIE_DOMAIN = config.COOKIE_DOMAIN;

let _supabasePromise = null;

function getSupabase() {
  if (!_supabasePromise) {
    _supabasePromise = import("https://esm.sh/@supabase/supabase-js@2").then(
      ({ createClient }) =>
        createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
        })
    );
  }
  return _supabasePromise;
}

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};domain=${COOKIE_DOMAIN};path=/;SameSite=Lax`;
}

function getCookie(name) {
  const prefix = `${name}=`;
  for (const cookie of document.cookie.split(";")) {
    const c = cookie.trim();
    if (c.startsWith(prefix)) return decodeURIComponent(c.slice(prefix.length));
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=${COOKIE_DOMAIN};path=/;SameSite=Lax`;
}

function jwtPayload(token) {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    const data = JSON.parse(json);
    if (data.exp && Date.now() / 1000 > data.exp) return null;
    return data;
  } catch {
    return null;
  }
}

export { getSupabase, setCookie, getCookie, deleteCookie, COOKIE_NAME, COOKIE_DOMAIN, COOKIE_MAX_AGE };

export async function getSharedSession() {
  try {
    // Try local Supabase session first
    const supabase = await getSupabase();
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      persistToCookie(data.session.access_token);
      return { user: data.session.user, accessToken: data.session.access_token };
    }

    // Fall back to cookie — decode JWT directly, no Supabase SDK restoration
    const cookieToken = getCookie(COOKIE_NAME);
    if (cookieToken) {
      const payload = jwtPayload(cookieToken);
      if (payload && payload.sub) {
        return {
          user: { id: payload.sub, email: payload.email || "" },
          accessToken: cookieToken,
        };
      }
      deleteCookie(COOKIE_NAME);
    }
    return null;
  } catch {
    return null;
  }
}

export async function signIn(email, password) {
  const supabase = await getSupabase();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  if (data.session) {
    persistToCookie(data.session.access_token);
    return { user: data.session.user, accessToken: data.session.access_token };
  }
  throw new Error("Sign in failed");
}

export async function signUp(email, password) {
  const supabase = await getSupabase();
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  if (data.session) {
    persistToCookie(data.session.access_token);
    return { user: data.session.user, accessToken: data.session.access_token };
  }
  return null; // email confirmation required
}

export async function oauthSignIn(provider) {
  const supabase = await getSupabase();
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: window.location.origin },
  });
  if (error) throw error;
  // Supabase redirects to the provider; on return, detectSessionInUrl restores the
  // session and getSharedSession() persists it to the shared cookie.
}

export async function setSharedSession() {
  try {
    const supabase = await getSupabase();
    const { data } = await supabase.auth.getSession();
    if (data.session?.access_token) persistToCookie(data.session.access_token);
  } catch { /* fallback */ }
}

export async function clearSharedSession() {
  try {
    const supabase = await getSupabase();
    await supabase.auth.signOut();
  } catch { /* continue */ }
  deleteCookie(COOKIE_NAME);
}

function persistToCookie(accessToken) {
  setCookie(COOKIE_NAME, accessToken, 30);
}

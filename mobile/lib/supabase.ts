import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE } from "./config";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function fetchProfile(token: string) {
  const res = await fetch(`${API_BASE}/api/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function saveProfile(token: string, profile: Record<string, unknown>) {
  const res = await fetch(`${API_BASE}/api/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  });
  return res.json();
}

export async function claimUsername(token: string, username: string) {
  const res = await fetch(`${API_BASE}/api/claim-username`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username }),
  });
  return res.json();
}

export async function uploadAvatar(token: string, uri: string, username: string) {
  const formData = new FormData();
  const ext = uri.split(".").pop() || "jpg";
  formData.append("avatar", {
    uri,
    type: `image/${ext === "png" ? "png" : "jpeg"}`,
    name: `avatar.${ext}`,
  } as any);
  const res = await fetch(`${API_BASE}/api/avatar/${username}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return res.json();
}

import type { Profile } from "./schema";

export interface Env {
  PROFILES: R2Bucket;
  ANALYTICS: KVNamespace;
  ENVIRONMENT: string;
}

const profileKey = (username: string) => `profiles/${username}.json`;

/** Write a creator profile to R2 */
export async function putProfile(
  bucket: R2Bucket,
  profile: Profile
): Promise<void> {
  await bucket.put(profileKey(profile.username), JSON.stringify(profile), {
    httpMetadata: { contentType: "application/json" },
  });
}

/** Read a creator profile from R2, or null if not found */
export async function getProfile(
  bucket: R2Bucket,
  username: string
): Promise<Profile | null> {
  const obj = await bucket.get(profileKey(username));
  if (!obj) return null;
  return (await obj.json()) as Profile;
}

/** Check if a username is taken (key exists in R2) */
export async function profileExists(
  bucket: R2Bucket,
  username: string
): Promise<boolean> {
  const head = await bucket.head(profileKey(username));
  return head !== null;
}

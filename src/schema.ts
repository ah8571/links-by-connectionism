import { z } from "zod";

export const LinkSchema = z.object({
  title: z.string().min(1).max(100),
  url: z.string().url().max(2000),
  icon: z.string().max(50).optional(),
  description: z.string().max(500).optional(),
  platform: z.string().max(50).optional(),
  enabled: z.boolean().default(true),
});

export const ProfileSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-z0-9._-]+$/, "Lowercase alphanumeric, hyphens, underscores, and periods only"),
  email: z.string().email().max(320),
  displayName: z.string().min(1).max(100),
  bio: z.string().max(500).default(""),
  avatarUrl: z.string().max(200).optional(),
  theme: z.enum(["minimal-light", "minimal-dark", "bold"]).default("minimal-light"),
  defaultView: z.enum(["links", "about", "hub"]).default("links"),
  links: z.array(LinkSchema).max(50).default([]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Profile = z.infer<typeof ProfileSchema>;
export type Link = z.infer<typeof LinkSchema>;

/** Slugs reserved for system routes */
export const RESERVED_SLUGS = new Set([
  "api",
  "admin",
  "dashboard",
  "login",
  "logout",
  "settings",
  "signup",
  "register",
  "static",
  "assets",
  "health",
  "_worker",
]);

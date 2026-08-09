-- FreeSurf Links — Supabase table
-- Replaces R2 JSON file storage for link-in-bio profiles

create table if not exists public.link_profiles (
  username text primary key,
  user_id uuid unique references auth.users(id) on delete cascade,
  email text not null,
  display_name text not null,
  bio text default '',
  avatar_url text,
  theme text default 'minimal-light',
  default_view text default 'links',
  links jsonb default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.link_profiles enable row level security;

-- Public read: anyone can view a profile
drop policy if exists "public can read profiles" on public.link_profiles;
create policy "public can read profiles"
  on public.link_profiles
  for select
  using (true);

-- Authenticated write: users manage their own profile
drop policy if exists "users manage own profile" on public.link_profiles;
create policy "users manage own profile"
  on public.link_profiles
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

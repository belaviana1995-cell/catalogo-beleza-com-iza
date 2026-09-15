-- Execute este arquivo no SQL Editor do Supabase antes de usar admin.html.
-- Nunca coloque a service_role key no site, GitHub ou navegador.
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  brand text not null check (brand in ('WePink','Árabes','O Boticário')),
  price_cents integer not null check (price_cents >= 0),
  image_url text,
  available boolean not null default true,
  featured boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.products enable row level security;
create policy "Catálogo público lê produtos disponíveis" on public.products for select using (available = true);
create policy "Proprietária administra catálogo" on public.products for all to authenticated using (auth.uid() = 'COLE_AQUI_O_UUID_DA_PROPRIETARIA'::uuid) with check (auth.uid() = 'COLE_AQUI_O_UUID_DA_PROPRIETARIA'::uuid);

-- Depois: Authentication > Providers > Email habilitado; crie o usuário da proprietária.
-- A URL e a chave anon do projeto são públicas e devem ir somente em supabase-config.js (não versionado).

# Hosting & Routing — FreeSurf Links

How `freesurf.tools` and `links.freesurf.tools` are wired, and the one gotcha
everyone trips on.

## One worker, two domains

Everything is a single Cloudflare Worker (`freesurf-link-in-bio`) — no separate
sites. It serves both domains and routes by hostname + path:

| Request | Served by | What it is |
|---|---|---|
| `freesurf.tools/*` | Worker | The **main** domain: landing, `privacy`, `terms`, `support`, and — the important one — **public handle pages at `freesurf.tools/{handle}`** |
| `links.freesurf.tools/*` | Worker | The **dashboard SPA** (login, profile editor) |

Handles are created by the link-in-bio tool and live on the main domain, so a
profile's public URL is `freesurf.tools/{handle}`, while editing happens on
`links.freesurf.tools`. This is why the **"View Page"** button must point at
`https://freesurf.tools/{handle}`, **not** `links.freesurf.tools/{handle}`.

Current routes (Cloudflare → your zone → Workers Routes / Custom Domains):

- `links.freesurf.tools/*` → route → worker
- `freesurf.tools/*` → route → worker
- `links.freesurf.tools` → production custom domain → worker

## The build gotcha (read this)

`src/dashboard.ts` is **generated** — it is NOT hand-edited. The real dashboard
source lives in `dashboard/`:

```
dashboard/
├── index.html
├── css/style.css
├── js/app.js          ← editor logic (themes, handle editing, save)
└── pages/*.html
```

`npm run build` (`scripts/build-dashboard.mjs`) inlines every file in `dashboard/`
into `src/dashboard.ts`, which the worker serves.

**So: edit files under `dashboard/`, then run `npm run build`.** If you edit
`src/dashboard.ts` directly, the next build (and therefore the next deploy,
because the GitHub Action runs `npm run build`) will silently overwrite it with
the old `dashboard/` source. This has bitten us before.

## Deploying

- GitHub Action `.github/workflows/deploy-worker.yml` auto-deploys on push to
  `main` (paths `src/**`, `dashboard/**`, etc.). It needs repo secrets
  `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit) and `CLOUDFLARE_ACCOUNT_ID`.
- Manual: `npm run deploy` (= `npm run build && wrangler deploy`).

## Caching

The dashboard SPA is served with `Cache-Control: no-cache` (HTML) and
`max-age=300` (assets) so deploys show up quickly. If something looks stale, do a
hard refresh (Ctrl+Shift+R); if it persists, purge the zone cache once.

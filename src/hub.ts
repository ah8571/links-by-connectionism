import { FREESURF } from "./freesurf.config";

export const HUB_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Free Surf | Free Tools & Contractor Network</title>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta name="description" content="Free Surf is an open-source platform connecting people directly with contractors — plus free tools for invoices, link-in-bio pages, cross-posting, and more. No middleman fees, no subscriptions." />
  <style>
    :root {
      --bg: #0b1020;
      --card: #111937;
      --text: #e8ecff;
      --muted: #b3bddf;
      --accent: #5b8cff;
      --accent-2: #78e6c4;
      --border: #2a3568;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Inter, Segoe UI, Roboto, Arial, sans-serif;
      background: radial-gradient(circle at 10% 10%, #16204a 0%, var(--bg) 55%);
      color: var(--text);
      line-height: 1.5;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .wrap { max-width: 960px; margin: 0 auto; padding: 24px; }

    .nav {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 44px; gap: 12px;
    }
    .brand { font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }
    .brand-logo { height: 40px; width: auto; display: block; }
    .nav-right { display: flex; align-items: center; gap: 14px; }

    /* App launcher */
    .app-launcher { position: relative; }
    .app-launcher-btn {
      background: none; border: 1px solid var(--border); color: var(--muted);
      width: 36px; height: 36px; border-radius: 8px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; transition: border-color 0.15s;
    }
    .app-launcher-btn:hover { border-color: var(--accent); color: var(--text); }

    .app-dropdown {
      display: none; position: absolute; right: 0; top: 44px;
      background: var(--card); border: 1px solid var(--border);
      border-radius: 14px; padding: 12px; width: 280px;
      box-shadow: 0 16px 48px rgba(2,7,20,0.5); z-index: 50;
      grid-template-columns: repeat(3, 1fr); gap: 8px;
    }
    .app-dropdown.open { display: grid; }

    .app-dropdown a {
      display: flex; flex-direction: column; align-items: center; gap: 5px;
      padding: 10px 6px; border-radius: 10px; font-size: 0.75rem;
      color: var(--muted); text-align: center; transition: background 0.15s;
    }
    .app-dropdown a:hover { background: rgba(255,255,255,0.05); color: var(--text); text-decoration: none; }
    .app-dropdown .app-icon { font-size: 1.4rem; }

    .hero {
      padding: 40px 0 24px;
      display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: start;
    }
    h1 { margin: 0 0 12px; font-size: clamp(2rem, 4vw, 3.1rem); line-height: 1.12; }
    .lead { margin: 0; color: var(--muted); font-size: 1.05rem; max-width: 60ch; }

    .cta-row { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }

    .btn {
      appearance: none; border: 0; padding: 12px 16px; border-radius: 10px;
      font-weight: 600; cursor: pointer; text-decoration: none;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .btn-primary { background: linear-gradient(135deg, var(--accent), #6b73ff); color: white; }
    .btn-secondary { background: transparent; border: 1px solid var(--border); color: var(--text); }

    .card {
      background: linear-gradient(170deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
      border: 1px solid var(--border); border-radius: 14px;
      padding: 20px; box-shadow: 0 10px 35px rgba(2,7,20,0.35);
    }
    .card h2 { margin-top: 0; margin-bottom: 10px; font-size: 1.1rem; }
    .card p { margin-top: 0; margin-bottom: 16px; color: var(--muted); font-size: 0.95rem; }

    .field { display: grid; gap: 8px; margin-bottom: 12px; }
    label { font-size: 0.92rem; color: var(--muted); }
    input[type="email"] {
      width: 100%; padding: 12px 14px; border-radius: 10px;
      border: 1px solid var(--border); background: #0b1433;
      color: var(--text); outline: none; font-size: 1rem;
    }
    input[type="email"]:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(91,140,255,0.25); }
    .notice { margin-top: 10px; color: var(--muted); font-size: 0.85rem; }

    /* Values */
    .section {
      margin-top: 42px;
      display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px;
    }
    .mini {
      border: 1px solid var(--border); border-radius: 12px;
      padding: 16px; background: rgba(13,21,49,0.55);
    }
    .mini h3 { margin-top: 0; margin-bottom: 8px; font-size: 1rem; color: var(--accent-2); }
    .mini p { margin: 0; color: var(--muted); font-size: 0.92rem; }

    /* Tools section */
    .tools-heading {
      margin-top: 48px; margin-bottom: 18px;
      font-size: 1.2rem; color: var(--muted);
      display: flex; align-items: center; gap: 10px;
    }
    .tools-heading::after {
      content: ""; flex: 1; height: 1px; background: var(--border);
    }

    .tool-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px; margin-bottom: 32px;
    }
    .tool-item {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 14px; border-radius: 10px;
      border: 1px solid var(--border); background: rgba(13,21,49,0.4);
      font-size: 0.9rem; transition: border-color 0.15s;
    }
    .tool-item:hover { border-color: var(--accent); text-decoration: none; }
    .tool-item .ti { font-size: 1.2rem; }
    .tool-item .tl { color: var(--muted); font-size: 0.75rem; }

    .badge {
      font-size: 0.65rem; font-weight: 700; padding: 1px 8px; border-radius: 999px;
      margin-left: auto;
    }
    .badge-live { background: rgba(5,150,105,0.2); color: #34d399; }
    .badge-wip { background: rgba(217,119,6,0.2); color: #fbbf24; }

    footer {
      margin: 48px 0 20px; color: var(--muted);
      font-size: 0.9rem; text-align: center;
    }

    @media (max-width: 860px) {
      .hero { grid-template-columns: 1fr; }
      .section { grid-template-columns: 1fr; }
      .tool-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 480px) {
      .tool-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <div class="brand"><img class="brand-logo" src="/logo-white.png" alt="Free Surf logo" />Free Surf</div>
      <div class="nav-right">
        <a href="https://auth.${FREESURF.ROOT_DOMAIN}" class="btn btn-secondary" style="padding:8px 14px;font-size:0.85rem;">Sign in</a>
        <div class="app-launcher">
          <button class="app-launcher-btn" id="app-launcher-btn" aria-label="Free Surf tools" title="Free Surf tools">⋮⋮⋮</button>
          <div class="app-dropdown" id="app-dropdown">
            <a href="${FREESURF.URLS.invoices}"><span class="app-icon">🧾</span>Invoices</a>
            <a href="${FREESURF.URLS.links}"><span class="app-icon">🔗</span>Links</a>
            <a href="${FREESURF.URLS.post}"><span class="app-icon">📢</span>Post</a>
            <a href="${FREESURF.URLS.hire}"><span class="app-icon">🤝</span>Hire</a>
            <a href="https://github.com/ah8571"><span class="app-icon">💻</span>GitHub</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="hero">
      <section>
        <h1>Find contractors without middleman fees.</h1>
        <p class="lead">
          Free Surf is a free, open-source platform connecting clients and contractors directly.
          No platform percentage. No hidden upcharge. Plus free tools for invoices, link-in-bio pages, cross-posting, and more.
        </p>
        <div class="cta-row">
          <a class="btn btn-primary" href="https://auth.${FREESURF.ROOT_DOMAIN}/?mode=signup">Get started — it's free</a>
          <a class="btn btn-secondary" href="https://github.com/ah8571" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </section>

      <aside class="card" id="newsletter">
        <h2>Get launch updates</h2>
        <p>Join the early list for milestones, pilot access, and release updates.</p>
        <form action="https://newsletter.yourdomain.com/api/public/subscription" method="post" target="_blank">
          <div class="field">
            <label for="email">Email address</label>
            <input id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com" />
          </div>
          <button class="btn btn-primary" type="submit">Subscribe</button>
          <div class="notice">We'll only email about major milestones. No spam.</div>
        </form>
      </aside>
    </main>

    <section class="section" aria-label="platform-values">
      <article class="mini">
        <h3>No middleman tax</h3>
        <p>Clients and contractors connect directly with transparent rates.</p>
      </article>
      <article class="mini">
        <h3>Open-source trust</h3>
        <p>Core platform code is open so policy and mechanics stay visible.</p>
      </article>
      <article class="mini">
        <h3>Free tools included</h3>
        <p>Invoices, link pages, cross-posting — all free, all open source.</p>
      </article>
    </section>

    <!-- Tools -->
    <h2 class="tools-heading">Free Surf tools</h2>
    <div class="tool-grid">
      <a href="${FREESURF.URLS.invoices}" class="tool-item">
        <span class="ti">🧾</span>
        <span>Invoices <span class="tl">invoices.${FREESURF.ROOT_DOMAIN}</span></span>
        <span class="badge badge-live">Live</span>
      </a>
      <a href="${FREESURF.URLS.links}" class="tool-item">
        <span class="ti">🔗</span>
        <span>Links <span class="tl">links.${FREESURF.ROOT_DOMAIN}</span></span>
        <span class="badge badge-live">Live</span>
      </a>
      <a href="${FREESURF.URLS.post}" class="tool-item">
        <span class="ti">📢</span>
        <span>Post <span class="tl">post.${FREESURF.ROOT_DOMAIN}</span></span>
        <span class="badge badge-wip">Beta</span>
      </a>
      <a href="${FREESURF.URLS.hire}" class="tool-item">
        <span class="ti">🤝</span>
        <span>Hire <span class="tl">hire.${FREESURF.ROOT_DOMAIN}</span></span>
        <span class="badge badge-wip">Coming soon</span>
      </a>
      <div class="tool-item" style="opacity:0.5;">
        <span class="ti">📄</span>
        <span>PDF <span class="tl">pdf.${FREESURF.ROOT_DOMAIN}</span></span>
        <span class="badge" style="background:rgba(107,114,128,0.15);color:#9ca3af;">Planned</span>
      </div>
    </div>

    <footer class="freesurf-footer">
      <div class="freesurf-footer-inner">
        <div class="freesurf-footer-brand">
          <a href="https://freesurf.tools" class="freesurf-footer-logo">Free Surf</a>
          <p class="freesurf-footer-tagline">Free tools for freelancers &amp; small businesses. No commissions, no lock-in, open source.</p>
        </div>
        <div class="freesurf-footer-links">
          <div class="freesurf-footer-col"><span class="freesurf-footer-heading">Newsletter</span><a href="https://feedfree.tech" target="_blank" rel="noopener">Feedfree Digest</a></div>
          <div class="freesurf-footer-col">
            <span class="freesurf-footer-heading">Free tools</span>
            <a href="https://invoices.freesurf.tools">Invoices</a>
            <a href="https://links.freesurf.tools">Links</a>
            <a href="https://post.freesurf.tools">Post</a>
            <a href="https://transcribe.freesurf.tools">Meeting Transcriber</a>
            <a href="https://calories.freesurf.tools">Calorie Tracker</a>
          </div>
          <div class="freesurf-footer-col">
            <span class="freesurf-footer-heading">Platform</span>
            <a href="https://freesurf.tools">Home</a>
            <a href="https://github.com/freesurf-ecosystem">GitHub</a>
          </div>
          <div class="freesurf-footer-col">
            <span class="freesurf-footer-heading">Legal</span>
            <a href="https://freesurf.tools/privacy">Privacy</a>
            <a href="https://freesurf.tools/terms">Terms</a>
            <a href="mailto:hello@freesurf.tools">Contact</a>
          </div>
        </div>
      </div>
      <div class="freesurf-footer-bottom"><span>&copy; <span class="freesurf-footer-year"></span> Free Surf. Built for independent workers.</span><span>Part of the Free Surf ecosystem of free tools.</span></div>
    </footer>
    <style>
      .freesurf-footer { border-top: 1px solid #e2e6ed; background: #111937; padding: 40px 24px 24px; margin-top: 48px; font-family: Inter, Segoe UI, Roboto, Arial, sans-serif; color: #e8ecff; }
      .freesurf-footer-inner { max-width: 960px; margin: 0 auto; display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
      .freesurf-footer-brand { max-width: 300px; }
      .freesurf-footer-logo { font-size: 1.1rem; font-weight: 700; color: #5b8cff; text-decoration: none; letter-spacing: -0.02em; }
      .freesurf-footer-tagline { margin: 8px 0 0; font-size: 0.8125rem; color: #b3bddf; line-height: 1.5; }
      .freesurf-footer-links { display: flex; gap: 48px; flex-wrap: wrap; }
      .freesurf-footer-col { display: flex; flex-direction: column; gap: 8px; }
      .freesurf-footer-heading { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #b3bddf; margin-bottom: 4px; }
      .freesurf-footer-col a { font-size: 0.875rem; color: #8fa3d8; text-decoration: none; }
      .freesurf-footer-col a:hover { color: #5b8cff; }
      .freesurf-footer-bottom { max-width: 960px; margin: 28px auto 0; padding-top: 16px; border-top: 1px solid #2a3568; display: flex; justify-content: space-between; gap: 16px; font-size: 0.75rem; color: #8fa3d8; flex-wrap: wrap; }
      @media (max-width: 640px) { .freesurf-footer-inner { flex-direction: column; gap: 24px; } .freesurf-footer-bottom { flex-direction: column; text-align: center; } }
    </style>
  </div>

  <script>
    document.querySelector('.freesurf-footer-year').textContent = new Date().getFullYear();
    const btn = document.getElementById('app-launcher-btn');
    const dropdown = document.getElementById('app-dropdown');
    btn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('open'); });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  </script>
</body>
</html>

`;

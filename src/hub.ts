import { FREESURF } from "./freesurf.config";

export const HUB_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Free Surf | Free Tools</title>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <script src="https://unpkg.com/lucide@latest"></script>
  <meta name="description" content="Free Surf — a free, open-source ecosystem of tools for invoices, link-in-bio pages, cross-posting, transcription, and more. No subscriptions." />
  <style>
    :root {
      --bg: #0a0a0a;
      --surface: #151515;
      --text: #f5f5f5;
      --muted: #9ca3af;
      --border: #2a2a2a;
      --accent: #ffffff;
      --on-accent: #0a0a0a;
    }
    [data-theme="light"] {
      --bg: #ffffff;
      --surface: #fafafa;
      --text: #111111;
      --muted: #6b7280;
      --border: #e5e7eb;
      --accent: #111111;
      --on-accent: #ffffff;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Inter, Segoe UI, Roboto, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
      transition: background 0.2s, color 0.2s;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .wrap { max-width: 960px; margin: 0 auto; padding: 24px; }

    .nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 44px; gap: 12px; }
    .brand { font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px; color: var(--text); }
    .brand-logo { height: 40px; width: auto; display: block; filter: var(--logo-filter, none); }
    [data-theme="light"] { --logo-filter: brightness(0); }
    .nav-right { display: flex; align-items: center; gap: 14px; }

    .btn {
      appearance: none; border: 0; padding: 12px 16px; border-radius: 10px;
      font-weight: 600; cursor: pointer; text-decoration: none;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .btn-primary { background: var(--accent); color: var(--on-accent); }
    .btn-secondary { background: transparent; border: 1px solid var(--border); color: var(--text); }

    /* App launcher */
    .app-launcher { position: relative; }
    .app-launcher-btn {
      background: none; border: 1px solid var(--border); color: var(--text);
      width: 36px; height: 36px; border-radius: 8px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: border-color 0.15s;
    }
    .app-launcher-btn:hover { border-color: var(--accent); }
    .app-dropdown {
      display: none; position: absolute; right: 0; top: 44px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 14px; padding: 12px; width: 280px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.35); z-index: 50;
      grid-template-columns: repeat(3, 1fr); gap: 8px;
    }
    .app-dropdown.open { display: grid; }
    .app-dropdown a {
      display: flex; flex-direction: column; align-items: center; gap: 5px;
      padding: 10px 6px; border-radius: 10px; font-size: 0.75rem;
      color: var(--muted); text-align: center; transition: background 0.15s;
    }
    .app-dropdown a:hover { background: rgba(127,127,127,0.12); color: var(--text); text-decoration: none; }
    .app-dropdown .app-icon { color: var(--text); display: flex; }
    .app-dropdown .app-icon svg { width: 22px; height: 22px; }

    .hero { padding: 40px 0 24px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: start; }
    h1 { margin: 0 0 12px; font-size: clamp(2rem, 4vw, 3rem); line-height: 1.12; }
    .lead { margin: 0; color: var(--muted); font-size: 1.05rem; max-width: 60ch; }
    .cta-row { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }

    .card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 20px; }
    .card h2 { margin-top: 0; margin-bottom: 10px; font-size: 1.1rem; }
    .card p { margin-top: 0; margin-bottom: 16px; color: var(--muted); font-size: 0.95rem; }
    .field { display: grid; gap: 8px; margin-bottom: 12px; }
    label { font-size: 0.92rem; color: var(--muted); }
    input[type="email"] { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--bg); color: var(--text); outline: none; font-size: 1rem; }
    input[type="email"]:focus { border-color: var(--accent); }
    .notice { margin-top: 10px; color: var(--muted); font-size: 0.85rem; }

    .section { margin-top: 42px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
    .mini { border: 1px solid var(--border); border-radius: 12px; padding: 16px; background: var(--surface); }
    .mini h3 { margin-top: 0; margin-bottom: 8px; font-size: 1rem; }
    .mini p { margin: 0; color: var(--muted); font-size: 0.92rem; }

    footer { margin: 48px 0 20px; color: var(--muted); font-size: 0.9rem; text-align: center; }

    @media (max-width: 860px) {
      .hero { grid-template-columns: 1fr; }
      .section { grid-template-columns: 1fr; }
    }
  </style>
  <style>
    .freesurf-footer { border-top: 1px solid var(--border); background: var(--surface); padding: 40px 24px 24px; margin-top: 48px; color: var(--text); }
    .freesurf-footer-inner { max-width: 960px; margin: 0 auto; display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
    .freesurf-footer-brand { max-width: 300px; }
    .freesurf-footer-logo { font-size: 1.1rem; font-weight: 700; color: var(--accent); text-decoration: none; letter-spacing: -0.02em; }
    .freesurf-footer-tagline { margin: 8px 0 0; font-size: 0.8125rem; color: var(--muted); line-height: 1.5; }
    .freesurf-footer-links { display: flex; gap: 48px; flex-wrap: wrap; }
    .freesurf-footer-col { display: flex; flex-direction: column; gap: 8px; }
    .freesurf-footer-heading { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); margin-bottom: 4px; }
    .freesurf-footer-col a { font-size: 0.875rem; color: var(--muted); text-decoration: none; }
    .freesurf-footer-col a:hover { color: var(--accent); }
    .freesurf-footer-bottom { max-width: 960px; margin: 28px auto 0; padding-top: 16px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; gap: 16px; font-size: 0.75rem; color: var(--muted); flex-wrap: wrap; }
    .footer-theme-toggle { background: none; border: 1px solid var(--border); color: var(--text); width: 34px; height: 34px; border-radius: 8px; cursor: pointer; font-size: 1rem; }
    .footer-theme-toggle:hover { border-color: var(--accent); }
    @media (max-width: 640px) { .freesurf-footer-inner { flex-direction: column; gap: 24px; } .freesurf-footer-bottom { flex-direction: column; text-align: center; } }
  </style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <div class="brand"><img class="brand-logo" src="/logo-white.png" alt="Free Surf logo" />Free Surf</div>
      <div class="nav-right">
        <a href="https://auth.${FREESURF.ROOT_DOMAIN}" class="btn btn-secondary" style="padding:8px 14px;font-size:0.85rem;">Sign in</a>
        <div class="app-launcher">
          <button class="app-launcher-btn" id="app-launcher-btn" aria-label="Free Surf tools" title="Free Surf tools">◫</button>
          <div class="app-dropdown" id="app-dropdown">
            <a href="${FREESURF.URLS.invoices}"><span class="app-icon"><i data-lucide="receipt"></i></span>Invoices</a>
            <a href="${FREESURF.URLS.links}"><span class="app-icon"><i data-lucide="link"></i></span>Links</a>
            <a href="${FREESURF.URLS.post}"><span class="app-icon"><i data-lucide="send"></i></span>Post</a>
            <a href="${FREESURF.URLS.hire}"><span class="app-icon"><i data-lucide="users"></i></span>Hire</a>
            <a href="https://github.com/freesurf-ecosystem" target="_blank" rel="noopener noreferrer"><span class="app-icon"><i data-lucide="github"></i></span>GitHub</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="hero">
      <section>
        <h1>Free tools, no subscriptions.</h1>
        <p class="lead">
          Free Surf is a free, open-source ecosystem of tools for freelancers and small businesses —
          invoices, link-in-bio pages, cross-posting, transcription, and more. No middleman fees, no lock-in.
        </p>
        <div class="cta-row">
          <a class="btn btn-primary" href="https://auth.${FREESURF.ROOT_DOMAIN}/?mode=signup">Get started — it's free</a>
          <a class="btn btn-secondary" href="https://github.com/freesurf-ecosystem" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
      <article class="mini"><h3>Free &amp; open source</h3><p>Every tool is free to use and its code is open.</p></article>
      <article class="mini"><h3>No lock-in</h3><p>Your data stays yours. Move tools whenever you like.</p></article>
      <article class="mini"><h3>Built for small business</h3><p>Invoices, links, cross-posting — made simple.</p></article>
    </section>

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
            <a href="https://github.com/freesurf-ecosystem" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div class="freesurf-footer-col">
            <span class="freesurf-footer-heading">Legal</span>
            <a href="https://freesurf.tools/privacy">Privacy</a>
            <a href="https://freesurf.tools/terms">Terms</a>
            <a href="mailto:hello@freesurf.tools">Contact</a>
          </div>
        </div>
      </div>
      <div class="freesurf-footer-bottom">
        <span>&copy; <span class="freesurf-footer-year"></span> Free Surf. Built for independent workers.</span>
        <button class="footer-theme-toggle" id="btn-theme-toggle" title="Toggle dark mode">◐</button>
      </div>
    </footer>
  </div>

  <script>
    document.querySelector('.freesurf-footer-year').textContent = new Date().getFullYear();
    if (window.lucide) { window.lucide.createIcons(); }
    (function(){
      const t = localStorage.getItem('Free Surf-theme');
      if (t === 'light') document.documentElement.dataset.theme = 'light';
    })();
    document.getElementById('btn-theme-toggle').addEventListener('click', () => {
      const light = document.documentElement.dataset.theme === 'light';
      document.documentElement.dataset.theme = light ? '' : 'light';
      localStorage.setItem('Free Surf-theme', light ? '' : 'light');
    });
    const btn = document.getElementById('app-launcher-btn');
    const dropdown = document.getElementById('app-dropdown');
    btn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('open'); });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  </script>
</body>
</html>
`;

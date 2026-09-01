export const DASHBOARD: Record<string, { content: string; type: string }> = {
  "css/style.css": {
    content: `/* --- Reset & Base --- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0f0f0f;
  --surface: #1a1a1a;
  --surface-hover: #222222;
  --border: #2a2a2a;
  --text: #f5f5f5;
  --text-muted: #999999;
  --accent: #6366f1;
  --accent-hover: #818cf8;
  --danger: #ef4444;
  --success: #22c55e;
  --radius: 8px;
  --max-width: 560px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.5;
}

a { color: var(--accent); text-decoration: none; }
a:hover { color: var(--accent-hover); }

/* --- Layout --- */
.container { max-width: var(--max-width); margin: 0 auto; padding: 2rem 1rem; }
.centered { text-align: center; }

/* --- Header --- */
.header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem; border-bottom: 1px solid var(--border);
}
.header-logo { font-weight: 700; font-size: 1.1rem; }
.header-nav { display: flex; gap: 1rem; align-items: center; }

/* --- Buttons --- */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.625rem 1.25rem; border-radius: var(--radius);
  font-size: 0.95rem; font-weight: 500; cursor: pointer;
  border: none; transition: all 0.15s; text-decoration: none;
}
.btn-primary { background: var(--accent); color: white; }
.btn-primary:hover { background: var(--accent-hover); color: white; }
.btn-secondary { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
.btn-secondary:hover { background: var(--surface-hover); }
.btn-danger { background: var(--danger); color: white; }
.btn-sm { padding: 0.375rem 0.75rem; font-size: 0.85rem; }
.btn-block { width: 100%; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* --- Forms --- */
.form-group { margin-bottom: 1.25rem; }
.form-label { display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.375rem; }
.form-input, .form-textarea, .form-select {
  width: 100%; padding: 0.625rem 0.75rem;
  background: var(--surface); color: var(--text);
  border: 1px solid var(--border); border-radius: var(--radius);
  font-size: 0.95rem; font-family: inherit;
  transition: border-color 0.15s;
}
.form-input:focus, .form-textarea:focus, .form-select:focus {
  outline: none; border-color: var(--accent);
}
.form-textarea { resize: vertical; min-height: 80px; }

/* --- Cards --- */
.card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.25rem;
}

/* --- Link List Items --- */
.link-item-wrapper {
  margin-bottom: 0.5rem;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); transition: border-color 0.15s;
}
.link-item-wrapper:hover { border-color: var(--accent); }
.link-item {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.75rem 1rem;
}
.link-item:hover { }
.link-reorder {
  display: flex; flex-direction: column; gap: 2px; flex-shrink: 0;
}
.reorder-btn {
  background: none; border: none; color: var(--text-muted); cursor: pointer;
  font-size: 0.6rem; padding: 0.1rem 0.3rem; line-height: 1;
  transition: color 0.15s;
}
.reorder-btn:hover:not(:disabled) { color: var(--accent); }
.reorder-btn:disabled { opacity: 0.25; cursor: not-allowed; }
.link-edit-btn {
  background: none; border: none; color: var(--text-muted); cursor: pointer;
  padding: 0.3rem; display: inline-flex; align-items: center; justify-content: center;
  border-radius: 4px; transition: color 0.15s, background 0.15s;
  flex-shrink: 0;
}
.link-edit-btn:hover { color: var(--accent); background: rgba(99,102,241,0.1); }
.link-edit-btn.expanded { color: var(--accent); }
.link-edit-panel {
  padding: 0 1rem 0.75rem 1rem;
  display: flex; flex-direction: column; gap: 0.5rem;
  border-top: 1px solid var(--border);
}
.link-item-content { flex: 1; min-width: 0; }
.link-item-title { font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.link-item-url { font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.link-item-actions { display: flex; gap: 0.375rem; flex-shrink: 0; }
.link-platform-badge {
  display: inline-block; font-size: 0.65rem; font-weight: 600;
  background: var(--accent); color: white; padding: 0.1rem 0.4rem;
  border-radius: 4px; margin-left: 0.4rem; vertical-align: middle;
  text-transform: uppercase; letter-spacing: 0.03em;
}

/* --- Toggle Switch --- */
.toggle { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
.toggle input { opacity: 0; width: 0; height: 0; }
.toggle-slider {
  position: absolute; inset: 0; background: var(--border);
  border-radius: 11px; cursor: pointer; transition: background 0.2s;
}
.toggle-slider::before {
  content: ""; position: absolute; width: 16px; height: 16px;
  left: 3px; top: 3px; background: white;
  border-radius: 50%; transition: transform 0.2s;
}
.toggle input:checked + .toggle-slider { background: var(--accent); }
.toggle input:checked + .toggle-slider::before { transform: translateX(18px); }

/* --- Landing Page --- */
.hero { padding: 4rem 0 2rem; }
.hero h1 { font-size: 2.5rem; font-weight: 800; line-height: 1.15; margin-bottom: 1rem; }
.hero h1 span { color: var(--accent); }
.hero p { font-size: 1.15rem; color: var(--text-muted); margin-bottom: 2rem; max-width: 440px; margin-left: auto; margin-right: auto; }
.claim-form { display: flex; gap: 0; max-width: 400px; margin: 0 auto; }
.claim-prefix {
  display: flex; align-items: center; padding: 0 0.75rem;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius) 0 0 var(--radius);
  font-size: 0.9rem; color: var(--text-muted); white-space: nowrap;
}
.claim-form .form-input {
  border-radius: 0; flex: 1;
}
.claim-form .btn {
  border-radius: 0 var(--radius) var(--radius) 0; white-space: nowrap;
}

.features { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 3rem 0; }
.feature { padding: 1.25rem; }
.feature-icon { margin-bottom: 0.75rem; line-height: 1; }
.feature-icon svg { width: 28px; height: 28px; }
.feature h3 { font-size: 1rem; margin-bottom: 0.25rem; }
.feature p { font-size: 0.85rem; color: var(--text-muted); }

@media (max-width: 500px) {
  .hero h1 { font-size: 1.75rem; }
  .features { grid-template-columns: 1fr; }
  .claim-form { flex-direction: column; }
  .claim-prefix { border-radius: var(--radius) var(--radius) 0 0; justify-content: center; }
  .claim-form .form-input { border-radius: 0; }
  .claim-form .btn { border-radius: 0 0 var(--radius) var(--radius); }
}

/* --- Alert / Toast --- */
.alert {
  padding: 0.75rem 1rem; border-radius: var(--radius);
  font-size: 0.9rem; margin-bottom: 1rem;
}
.alert-error { background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); }
.alert-success { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }

/* --- Public URL Bar --- */
.url-bar {
  display: flex; align-items: center; gap: 0.5rem;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 0.5rem 0.75rem;
  margin-bottom: 1.5rem;
}
.url-bar-link { flex: 1; font-size: 0.9rem; color: var(--accent); word-break: break-all; }
.url-bar .btn { flex-shrink: 0; }

/* --- Section Headings --- */
.section-title { font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; }

/* --- Theme Selector --- */
.theme-options { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.theme-option {
  width: 80px; height: 56px; border-radius: var(--radius);
  border: 2px solid var(--border); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 600; transition: border-color 0.15s;
}
.theme-option:hover { border-color: var(--text-muted); }
.theme-option.active { border-color: var(--accent); }
.theme-light { background: #ffffff; color: #111111; }
.theme-dark { background: #0f0f0f; color: #f5f5f5; }
.theme-bold { background: #1e1b4b; color: #f59e0b; }
.theme-forest { background: #0d1f0d; color: #d4e8d4; }
.theme-ocean { background: #0a1628; color: #d0e4f7; }
.theme-sunset { background: #1a0f0a; color: #fce8d5; }
.theme-mono { background: #000000; color: #e5e5e5; }
.theme-neon { background: #0a0a0f; color: #e2e2f0; }

/* --- Footer --- */
.footer { text-align: center; padding: 2rem 0; font-size: 0.8rem; color: var(--text-muted); }
.footer a { color: var(--text-muted); text-decoration: underline; }

/* ── Shared FreeSurf footer ── */
.freesurf-footer {
  border-top: 1px solid var(--border);
  background: var(--surface);
  padding: 40px 24px 24px;
  margin-top: 48px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: var(--text);
}

.freesurf-footer-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.freesurf-footer-brand { max-width: 300px; }

.freesurf-footer-logo {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--brand);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.freesurf-footer-tagline {
  margin: 8px 0 0;
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.freesurf-footer-links {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.freesurf-footer-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.freesurf-footer-heading {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.freesurf-footer-col a {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.15s;
}
.freesurf-footer-col a:hover { color: var(--brand); }

.freesurf-footer-bottom {
  max-width: 960px;
  margin: 28px auto 0;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.75rem;
  color: var(--text-muted);
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .freesurf-footer-inner { flex-direction: column; gap: 24px; }
  .freesurf-footer-bottom { flex-direction: column; text-align: center; }
}
`,
    type: "text/css",
  },
  "index.html": {
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Link-in-Bio Page — No Fees, No Lock-in | FreeSurf's Link-in-Bio</title>
  <meta name="description" content="Create your link-in-bio page for free. No monthly fees, no lock-in, open source. One link for all your content — ready in seconds.">
  <meta property="og:title" content="Free Link-in-Bio Page — No Fees, No Lock-in | FreeSurf's Link-in-Bio">
  <meta property="og:description" content="Create your link-in-bio page for free. No monthly fees, no lock-in, open source.">
  <meta property="og:url" content="https://links.freesurf.tools/">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Free Link-in-Bio Page — No Fees, No Lock-in | FreeSurf's Link-in-Bio">
  <meta name="twitter:description" content="Create your link-in-bio page for free. No monthly fees, no lock-in, open source.">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/js/app.js"></script>
</body>
</html>
`,
    type: "text/html;charset=utf-8",
  },
  "js/app.js": {
    content: `// --- Config ---
const API_BASE = location.hostname === "localhost" || location.hostname === "127.0.0.1"
  ? "http://127.0.0.1:8787"
  : location.origin;

const PUBLIC_BASE = API_BASE.replace("http://127.0.0.1:8787", "http://127.0.0.1:8787");

// --- Cross-domain auth: try to restore Supabase session from shared cookie ---
import { getSharedSession, signIn, signUp, clearSharedSession } from "./freesurf-auth.js";
const sharedSession = await getSharedSession();

// --- State ---
let currentUser = null;
let sessionToken = sharedSession?.accessToken || localStorage.getItem("freesurf_session") || null;
let sessionEmail = sharedSession?.user?.email || null;

// If we got a session from the shared cookie, persist it to localStorage
if (sharedSession?.accessToken) {
  localStorage.setItem("freesurf_session", sharedSession.accessToken);
}
let currentView = "landing";
let autoSaveTimer = null;
let isSaving = false;

// --- Router ---
function navigate(view, pushState = true) {
  currentView = view;
  if (pushState) {
    const paths = { landing: "/", editor: "/editor" };
    history.pushState(null, "", paths[view] || "/");
  }
  render();
}

window.addEventListener("popstate", () => {
  const path = location.pathname;
  if (path === "/editor") navigate("editor", false);
  else navigate("landing", false);
});

// --- API helpers ---
async function apiGet(path) {
  const headers = {};
  if (sessionToken) headers["Authorization"] = \`Bearer \${sessionToken}\`;
  const res = await fetch(\`\${API_BASE}\${path}\`, { headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || \`Request failed: \${res.status}\`);
  }
  return res.json();
}

async function apiPost(path, data) {
  const headers = { "Content-Type": "application/json" };
  if (sessionToken) headers["Authorization"] = \`Bearer \${sessionToken}\`;
  const res = await fetch(\`\${API_BASE}\${path}\`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.error || \`Request failed: \${res.status}\`);
  return body;
}

async function apiPut(path, data) {
  const headers = { "Content-Type": "application/json" };
  if (sessionToken) headers["Authorization"] = \`Bearer \${sessionToken}\`;
  const res = await fetch(\`\${API_BASE}\${path}\`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.error || \`Request failed: \${res.status}\`);
  return body;
}

// --- Render ---
function render() {
  const app = document.getElementById("app");
  switch (currentView) {
    case "landing":    app.innerHTML = renderLanding(); bindLanding(); break;
    case "editor":     app.innerHTML = renderEditor(); bindEditor(); break;
    default:           app.innerHTML = renderLanding(); bindLanding();
  }
  const yearEl = document.querySelector(".freesurf-footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}



// ========================
//  LANDING PAGE — email-first
// ========================
function renderLanding() {
  return \`
    <header class="header">
      <div class="header-logo"><span style="color:var(--accent)">FreeSurf's</span> Link-in-Bio</div>
    </header>
    <div class="container">
      <div class="hero centered">
        <h1>Your links.<br><span>One page. Free for most users.</span></h1>
        <p>Create your link-in-bio page in seconds. No fees, no lock-in, open source.</p>

        <div class="card" style="max-width:380px;margin:0 auto;">
          <div class="auth-tabs" style="display:flex;margin-bottom:1rem;">
            <button class="auth-tab-btn active" data-tab="sign-in" style="flex:1;padding:10px;background:none;border:none;border-bottom:2px solid var(--accent);color:var(--text);font-weight:600;cursor:pointer;font-family:inherit;font-size:0.9rem;">Sign in</button>
            <button class="auth-tab-btn" data-tab="sign-up" style="flex:1;padding:10px;background:none;border:none;border-bottom:2px solid var(--border);color:var(--text-muted);font-weight:600;cursor:pointer;font-family:inherit;font-size:0.9rem;">Create account</button>
          </div>
          <form id="auth-form">
            <div class="form-group">
              <input type="email" id="auth-email" class="form-input" placeholder="Email" autocomplete="email" required>
            </div>
            <div class="form-group" style="position:relative;">
              <input type="password" id="auth-password" class="form-input" placeholder="Password" autocomplete="current-password" required minlength="6" style="padding-right:40px;">
              <button type="button" id="toggle-password" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;padding:4px;">
                <svg id="eye-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
            <div id="auth-feedback" style="font-size:0.85rem;min-height:1.2em;margin-bottom:0.75rem;"></div>
            <button type="submit" id="auth-submit" class="btn btn-primary btn-block" style="padding:10px;">Sign in</button>
          </form>
        </div>
      </div>

      <div class="features">
        <div class="card feature">
          <div class="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
          <h3>Instant Pages</h3>
          <p>Your page loads in milliseconds from the edge. No spinners, no delays.</p>
        </div>
        <div class="card feature">
          <div class="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17.5 10.5a5 5 0 0 0-10 0"/><circle cx="8.5" cy="14" r="2.5"/><path d="M12.5 17.5a5 5 0 0 0-8 0"/><circle cx="17" cy="15.5" r="2"/><path d="M20 19a4 4 0 0 0-6 0"/></svg></div>
          <h3>Clean Themes</h3>
          <p>Minimal light, dark, and bold themes. Your content is the focus.</p>
        </div>
        <div class="card feature">
          <div class="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
          <h3>Simple Analytics</h3>
          <p>See who's clicking your links. No cookies, no creepy tracking.</p>
        </div>
        <div class="card feature">
          <div class="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></div>
          <h3>Open Source</h3>
          <p>GNU licensed. Self-host it. Fork it. Own your data completely.</p>
        </div>
      </div>

      <footer class="freesurf-footer">
        <div class="freesurf-footer-inner">
          <div class="freesurf-footer-brand">
            <a href="https://freesurf.tools" class="freesurf-footer-logo">FreeSurf</a>
            <p class="freesurf-footer-tagline">Free tools for freelancers & small businesses. No commissions, no lock-in, open source.</p>
          </div>
          <div class="freesurf-footer-links">
            <div class="freesurf-footer-col">
              <span class="freesurf-footer-heading">Newsletter</span>
              <a href="https://feedfree.tech" target="_blank" rel="noopener">Feedfree Digest</a>
            </div>
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
        <div class="freesurf-footer-bottom">
          <span>&copy; <span class="freesurf-footer-year"></span> FreeSurf. Built for independent workers.</span>
          <span>Part of the FreeSurf ecosystem of free tools.</span>
        </div>
      </footer>
    </div>
  \`;
}

let authMode = "sign-in";

function bindLanding() {
  // Reset auth mode on re-render
  authMode = "sign-in";
  const toggleBtn = document.getElementById("toggle-password");
  const pwdInput = document.getElementById("auth-password");
  const eyeIcon = document.getElementById("eye-icon");
  if (toggleBtn && pwdInput && eyeIcon) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = pwdInput.type === "password";
      pwdInput.type = isHidden ? "text" : "password";
      eyeIcon.innerHTML = isHidden
        ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
        : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
    });
  }

  document.querySelectorAll(".auth-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      authMode = btn.dataset.tab;
      document.querySelectorAll(".auth-tab-btn").forEach((b) => {
        b.classList.toggle("active", b === btn);
        b.style.borderBottomColor = b === btn ? "var(--accent)" : "var(--border)";
        b.style.color = b === btn ? "var(--text)" : "var(--text-muted)";
      });
      const submitBtn = document.getElementById("auth-submit");
      if (submitBtn) submitBtn.textContent = authMode === "sign-in" ? "Sign in" : "Create account";
      const feedback = document.getElementById("auth-feedback");
      if (feedback) { feedback.textContent = ""; feedback.style.color = ""; }
    });
  });

  document.getElementById("auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("auth-email").value.trim();
    const password = document.getElementById("auth-password").value;
    const submitBtn = document.getElementById("auth-submit");
    const feedback = document.getElementById("auth-feedback");

    if (!email || !password) {
      feedback.textContent = "Email and password are required.";
      feedback.style.color = "var(--danger)";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = authMode === "sign-in" ? "Signing in..." : "Creating account...";
    feedback.textContent = "";

    try {
      if (authMode === "sign-in") {
        const result = await signIn(email, password);
        if (result) {
          sessionToken = result.accessToken;
          if (result.user?.email) sessionEmail = result.user.email;
          localStorage.setItem("freesurf_session", result.accessToken);
          loadProfileOrEditor();
        }
      } else {
        const result = await signUp(email, password);
        if (result) {
          sessionToken = result.accessToken;
          if (result.user?.email) sessionEmail = result.user.email;
          localStorage.setItem("freesurf_session", result.accessToken);
          loadProfileOrEditor();
        } else {
          feedback.textContent = "Check your email to confirm your account.";
          feedback.style.color = "var(--success)";
          submitBtn.disabled = false;
          submitBtn.textContent = "Create account";
        }
      }
    } catch (err) {
      feedback.textContent = err.message || "Authentication failed.";
      feedback.style.color = "var(--danger)";
      submitBtn.disabled = false;
      submitBtn.textContent = authMode === "sign-in" ? "Sign in" : "Create account";
    }
  });
}

async function loadProfileOrEditor() {
  try {
    const result = await apiGet("/api/auth/me");
    if (result.needsSetup) {
      sessionEmail = result.email;
      currentUser = null;
    } else {
      currentUser = result;
    }
    navigate("editor");
  } catch {
    // Go to editor even if auth/me fails — let user create profile
    navigate("editor");
  }
}



// ========================
//  PROFILE EDITOR (handles both new + existing users)
// ========================
let usernameCheckTimer = null;
let lastCheckedUsername = "";
let usernameAvailable = false;

function renderEditor() {
  const isNewUser = !currentUser;
  const profile = currentUser || { displayName: "", bio: "", avatarUrl: "", theme: "minimal-dark", links: [] };
  const publicUrl = currentUser?.username ? \`https://freesurf.tools/\${currentUser.username}\` : null;
  const displayUrl = currentUser?.username ? \`freesurf.tools/\${currentUser.username}\` : null;

  const PLATFORM_LABELS = { twitter: "Twitter / X", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", github: "GitHub", linkedin: "LinkedIn" };

  const linksHtml = (profile.links || []).map((link, i) => {
    const isFirst = i === 0;
    const isLast = i === (profile.links.length - 1);
    const platformLabel = link.platform ? (PLATFORM_LABELS[link.platform] || link.platform) : "";
    return \`
    <div class="link-item-wrapper" data-index="\${i}">
      <div class="link-item">
        <div class="link-reorder">
          <button class="reorder-btn" data-move-up="\${i}" \${isFirst ? "disabled" : ""} title="Move up">&#9650;</button>
          <button class="reorder-btn" data-move-down="\${i}" \${isLast ? "disabled" : ""} title="Move down">&#9660;</button>
        </div>
        <div class="link-item-content">
          <div class="link-item-title">\${escapeHtml(link.title)}\${platformLabel ? \` <span class="link-platform-badge">\${escapeHtml(platformLabel)}</span>\` : ""}</div>
          <div class="link-item-url">\${escapeHtml(link.url)}</div>
        </div>
        <label class="toggle">
          <input type="checkbox" \${link.enabled !== false ? "checked" : ""} data-toggle="\${i}">
          <span class="toggle-slider"></span>
        </label>
        <button class="link-edit-btn" data-expand="\${i}" title="Edit link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 20 14"/><path d="M15 9h.01"/><path d="M17.8 6.2 20 4"/><path d="m3 21 9-9"/><path d="M12.2 6.2 10 4"/></svg></button>
        <button class="btn btn-danger btn-sm" data-delete="\${i}">✕</button>
      </div>
      <div class="link-edit-panel" id="link-edit-\${i}" style="display:none;">
        <input type="text" class="form-input" data-edit-title="\${i}" value="\${escapeAttr(link.title)}" placeholder="Link title" maxlength="100">
        <input type="url" class="form-input" data-edit-url="\${i}" value="\${escapeAttr(link.url)}" placeholder="https://...">
        <textarea class="form-input" data-edit-desc="\${i}" placeholder="Description (optional — shown as expandable on your page)" maxlength="500" rows="2" style="resize:vertical;min-height:50px;">\${escapeHtml(link.description || "")}</textarea>
        <select class="form-select" data-edit-platform="\${i}">
          <option value="">No platform (regular link)</option>
          <option value="twitter" \${link.platform === "twitter" ? "selected" : ""}>Twitter / X</option>
          <option value="instagram" \${link.platform === "instagram" ? "selected" : ""}>Instagram</option>
          <option value="youtube" \${link.platform === "youtube" ? "selected" : ""}>YouTube</option>
          <option value="tiktok" \${link.platform === "tiktok" ? "selected" : ""}>TikTok</option>
          <option value="github" \${link.platform === "github" ? "selected" : ""}>GitHub</option>
          <option value="linkedin" \${link.platform === "linkedin" ? "selected" : ""}>LinkedIn</option>
        </select>
      </div>
    </div>
  \`}).join("");

  return \`
    <header class="header">
      <a href="/" class="header-logo" id="nav-home"><span style="color:var(--accent)">FreeSurf's</span> Link-in-Bio</a>
      <nav class="header-nav">
        \${currentUser ? \`<a href="\${publicUrl.startsWith("http") ? publicUrl : "https://" + publicUrl}" target="_blank" class="btn btn-secondary btn-sm">View Page</a>\` : ""}
        <button class="btn btn-secondary btn-sm" id="logout-btn">Log out</button>
      </nav>
    </header>
    <div class="container">
      \${isNewUser ? \`
        <h2 style="margin-bottom: 0.25rem;">Set up your page</h2>
        <p style="color:var(--text-muted); margin-bottom: 1.5rem;">Choose a URL and fill in your details below.</p>
      \`       : \`
        <div class="url-bar">
          <span class="url-bar-link">\${escapeHtml(displayUrl)}</span>
          <button class="btn btn-sm btn-secondary" id="copy-url">Copy</button>
        </div>
        <div class="form-group" style="margin-top:1rem;">
          <label class="form-label">Your URL / handle</label>
          <div class="claim-form" style="margin-bottom:0;">
            <div class="claim-prefix">freesurf.tools/</div>
            <input type="text" class="form-input" id="edit-username" value="\${escapeAttr(profile.username)}" maxlength="30" style="border-radius:0 var(--radius) var(--radius) 0;">
          </div>
          <p id="username-status" style="font-size:0.8rem; margin-top:0.35rem; min-height:1.2em;">&nbsp;</p>
        </div>
      \`}

      <div id="save-status"></div>

      \${isNewUser ? \`
        <!-- Username claim (new users only) -->
        <div class="form-group">
          <label class="form-label">Choose your URL</label>
          <div class="claim-form" style="margin-bottom:0;">
            <div class="claim-prefix">freesurf.tools/</div>
            <input type="text" class="form-input" id="edit-username" placeholder="yourname" maxlength="30" style="border-radius:0 var(--radius) var(--radius) 0;">
          </div>
          <p id="username-status" style="font-size:0.8rem; margin-top:0.35rem; min-height:1.2em;">&nbsp;</p>
        </div>
      \` : ""}

      <!-- Profile Details -->
      <p class="section-title">Profile</p>
      <div class="form-group">
        <label class="form-label">Display Name</label>
        <input type="text" class="form-input" id="edit-name" value="\${escapeAttr(profile.displayName)}" maxlength="100" placeholder="Jane Doe">
      </div>
      <div class="form-group">
        <label class="form-label">Bio</label>
        <textarea class="form-textarea" id="edit-bio" maxlength="500" rows="2" placeholder="Designer & content creator">\${escapeHtml(profile.bio || "")}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Photo</label>
        <div class="avatar-upload" style="display:flex; align-items:center; gap:1rem;">
          \${profile.avatarUrl
            ? \`<img src="\${escapeAttr(API_BASE + profile.avatarUrl)}" class="avatar-preview" style="width:56px;height:56px;border-radius:50%;object-fit:cover;">\`
            : \`<div class="avatar-preview" style="width:56px;height:56px;border-radius:50%;background:var(--card);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:0.8rem;">No photo</div>\`}
          <label class="btn btn-secondary btn-sm" style="cursor:pointer;">
            Upload
            <input type="file" id="edit-avatar" accept="image/jpeg,image/png,image/webp,image/gif" style="display:none;">
          </label>
          <span id="avatar-status" style="font-size:0.8rem;color:var(--text-muted);"></span>
        </div>
      </div>

      <!-- Theme -->
      <p class="section-title">Theme</p>
      <div class="theme-options" style="margin-bottom:1.5rem;">
        <div class="theme-option theme-light \${profile.theme === "minimal-light" ? "active" : ""}" data-theme="minimal-light">Light</div>
        <div class="theme-option theme-dark \${profile.theme === "minimal-dark" ? "active" : ""}" data-theme="minimal-dark">Dark</div>
        <div class="theme-option theme-bold \${profile.theme === "bold" ? "active" : ""}" data-theme="bold">Bold</div>
        <div class="theme-option theme-forest \${profile.theme === "forest" ? "active" : ""}" data-theme="forest">Forest</div>
        <div class="theme-option theme-ocean \${profile.theme === "ocean" ? "active" : ""}" data-theme="ocean">Ocean</div>
        <div class="theme-option theme-sunset \${profile.theme === "sunset" ? "active" : ""}" data-theme="sunset">Sunset</div>
        <div class="theme-option theme-mono \${profile.theme === "mono" ? "active" : ""}" data-theme="mono">Mono</div>
        <div class="theme-option theme-neon \${profile.theme === "neon" ? "active" : ""}" data-theme="neon">Neon</div>
      </div>

      <!-- Links -->
      <p class="section-title">Links</p>
      <div id="links-list">
        \${linksHtml || '<p style="color:var(--text-muted); font-size:0.9rem;">No links yet. Add one below.</p>'}
      </div>

      <div class="card" style="margin-top:0.75rem; margin-bottom:1.5rem;">
        <div class="form-group" style="margin-bottom:0.5rem;">
          <input type="text" class="form-input" id="new-link-title" placeholder="Link title" maxlength="100">
        </div>
        <div class="form-group" style="margin-bottom:0.5rem;">
          <input type="url" class="form-input" id="new-link-url" placeholder="https://...">
        </div>
        <div class="form-group" style="margin-bottom:0.5rem;">
          <textarea class="form-input" id="new-link-desc" placeholder="Description (optional)" maxlength="500" rows="2" style="resize:vertical;min-height:50px;"></textarea>
        </div>
        <div class="form-group" style="margin-bottom:0.5rem;">
          <select class="form-select" id="new-link-platform">
            <option value="">Regular link</option>
            <option value="twitter">Twitter / X</option>
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
            <option value="tiktok">TikTok</option>
            <option value="github">GitHub</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>
        <button class="btn btn-secondary btn-sm" id="add-link-btn">+ Add Link</button>
      </div>

      <!-- Save -->
      <button class="btn btn-primary btn-block" id="save-btn" style="margin-bottom:2rem;">\${isNewUser ? "Create My Page" : "Save Changes"}</button>

      <footer class="freesurf-footer">
        <div class="freesurf-footer-inner">
          <div class="freesurf-footer-brand">
            <a href="https://freesurf.tools" class="freesurf-footer-logo">FreeSurf</a>
            <p class="freesurf-footer-tagline">Free tools for freelancers & small businesses. No commissions, no lock-in, open source.</p>
          </div>
          <div class="freesurf-footer-links">
            <div class="freesurf-footer-col">
              <span class="freesurf-footer-heading">Newsletter</span>
              <a href="https://feedfree.tech" target="_blank" rel="noopener">Feedfree Digest</a>
            </div>
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
        <div class="freesurf-footer-bottom">
          <span>&copy; <span class="freesurf-footer-year"></span> FreeSurf. Built for independent workers.</span>
          <span>Part of the FreeSurf ecosystem of free tools.</span>
        </div>
      </footer>
    </div>
  \`;
}

function bindEditor() {
  const isNewUser = !currentUser;

  document.getElementById("nav-home").addEventListener("click", (e) => {
    e.preventDefault();
    navigate("landing");
  });

  // Copy URL (existing users only)
  const copyBtn = document.getElementById("copy-url");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const url = \`https://freesurf.tools/\${currentUser.username}\`;
      navigator.clipboard.writeText(url).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => { copyBtn.textContent = "Copy"; }, 2000);
      });
    });
  }

  // Avatar file upload
  const avatarInput = document.getElementById("edit-avatar");
  if (avatarInput) {
    avatarInput.addEventListener("change", async () => {
      const file = avatarInput.files[0];
      if (!file) return;
      const statusEl = document.getElementById("avatar-status");
      if (file.size > 2 * 1024 * 1024) {
        statusEl.textContent = "Image must be under 2 MB";
        statusEl.style.color = "#ef4444";
        return;
      }
      statusEl.textContent = "Uploading...";
      statusEl.style.color = "var(--text-muted)";
      try {
        const res = await fetch(\`\${API_BASE}/api/avatar\`, {
          method: "POST",
          headers: { Authorization: \`Bearer \${sessionToken}\`, "Content-Type": file.type },
          body: file,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed");
        if (currentUser) currentUser.avatarUrl = data.avatarUrl;
        // Update the preview
        const preview = document.querySelector(".avatar-preview");
        if (preview) {
          const img = document.createElement("img");
          img.src = \`\${API_BASE}\${data.avatarUrl}?t=\${Date.now()}\`;
          img.className = "avatar-preview";
          img.style.cssText = "width:56px;height:56px;border-radius:50%;object-fit:cover;";
          preview.replaceWith(img);
        }
        statusEl.textContent = "Uploaded!";
        statusEl.style.color = "#22c55e";
      } catch (err) {
        statusEl.textContent = err.message;
        statusEl.style.color = "#ef4444";
      }
    });
  }

  // Username availability check (new users + handle changes for existing users)
  const usernameInput = document.getElementById("edit-username");
  if (usernameInput) {
    usernameAvailable = false;
    usernameInput.addEventListener("input", () => {
      usernameInput.value = usernameInput.value.toLowerCase().replace(/[^a-z0-9._-]/g, "");
      const val = usernameInput.value;
      const statusEl = document.getElementById("username-status");

      // Existing user keeping their current handle is fine.
      if (currentUser && val === currentUser.username) {
        usernameAvailable = true;
        statusEl.textContent = "\\u2713 current handle";
        statusEl.style.color = "var(--success)";
        return;
      }

      if (val.length < 3) {
        statusEl.textContent = val.length > 0 ? "Must be at least 3 characters" : " ";
        statusEl.style.color = "var(--text-muted)";
        usernameAvailable = false;
        return;
      }

      statusEl.textContent = "Checking...";
      statusEl.style.color = "var(--text-muted)";
      usernameAvailable = false;

      clearTimeout(usernameCheckTimer);
      usernameCheckTimer = setTimeout(() => checkUsername(val, statusEl), 350);
    });
  }

  // Theme selection
  document.querySelectorAll("[data-theme]").forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelectorAll("[data-theme]").forEach((e) => e.classList.remove("active"));
      el.classList.add("active");
      if (currentUser) { currentUser.theme = el.dataset.theme; scheduleAutoSave(); }
    });
  });

  // Auto-save on name/bio change (debounced)
  const nameInput = document.getElementById("edit-name");
  if (nameInput && !isNewUser) nameInput.addEventListener("input", () => scheduleAutoSave());
  const bioInput = document.getElementById("edit-bio");
  if (bioInput && !isNewUser) bioInput.addEventListener("input", () => scheduleAutoSave());

  // Expand/collapse link edit panels
  document.querySelectorAll("[data-expand]").forEach((el) => {
    el.addEventListener("click", () => {
      const i = el.dataset.expand;
      const panel = document.getElementById(\`link-edit-\${i}\`);
      const isOpen = panel.style.display !== "none";
      panel.style.display = isOpen ? "none" : "flex";
      el.classList.toggle("expanded", !isOpen);
    });
  });

  // Inline edit link title/url
  document.querySelectorAll("[data-edit-title]").forEach((el) => {
    el.addEventListener("input", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.editTitle);
      currentUser.links[i].title = el.value;
      // Update the displayed title
      const wrapper = el.closest(".link-item-wrapper");
      const titleEl = wrapper.querySelector(".link-item-title");
      if (titleEl) {
        const badge = currentUser.links[i].platform ? \` <span class="link-platform-badge">\${escapeHtml({"twitter":"Twitter / X","instagram":"Instagram","youtube":"YouTube","tiktok":"TikTok","github":"GitHub","linkedin":"LinkedIn"}[currentUser.links[i].platform] || currentUser.links[i].platform)}</span>\` : "";
        titleEl.innerHTML = escapeHtml(el.value) + badge;
      }
      scheduleAutoSave();
    });
  });
  document.querySelectorAll("[data-edit-url]").forEach((el) => {
    el.addEventListener("input", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.editUrl);
      currentUser.links[i].url = el.value;
      // Update the displayed url
      const wrapper = el.closest(".link-item-wrapper");
      const urlEl = wrapper.querySelector(".link-item-url");
      if (urlEl) urlEl.textContent = el.value;
      scheduleAutoSave();
    });
  });

  // Inline edit description
  document.querySelectorAll("[data-edit-desc]").forEach((el) => {
    el.addEventListener("input", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.editDesc);
      currentUser.links[i].description = el.value || undefined;
      scheduleAutoSave();
    });
  });

  // Inline edit platform
  document.querySelectorAll("[data-edit-platform]").forEach((el) => {
    el.addEventListener("change", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.editPlatform);
      const val = el.value || undefined;
      currentUser.links[i].platform = val;
      // If platform selected and title was empty or was old platform name, auto-fill
      const labels = {"twitter":"Twitter / X","instagram":"Instagram","youtube":"YouTube","tiktok":"TikTok","github":"GitHub","linkedin":"LinkedIn"};
      const titleInput = document.querySelector(\`[data-edit-title="\${i}"]\`);
      const oldTitle = currentUser.links[i].title;
      const oldLabels = Object.values(labels);
      if (val && (!oldTitle || oldLabels.includes(oldTitle))) {
        const newTitle = labels[val] || val;
        currentUser.links[i].title = newTitle;
        if (titleInput) titleInput.value = newTitle;
      }
      autoSaveNow(); // save immediately + re-render
      render();
    });
  });

  // Reorder links
  document.querySelectorAll("[data-move-up]").forEach((el) => {
    el.addEventListener("click", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.moveUp);
      if (i < 1) return;
      const links = currentUser.links;
      [links[i - 1], links[i]] = [links[i], links[i - 1]];
      autoSaveNow();
      render();
    });
  });
  document.querySelectorAll("[data-move-down]").forEach((el) => {
    el.addEventListener("click", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.moveDown);
      if (i >= currentUser.links.length - 1) return;
      const links = currentUser.links;
      [links[i], links[i + 1]] = [links[i + 1], links[i]];
      autoSaveNow();
      render();
    });
  });

  // Toggle link enabled
  document.querySelectorAll("[data-toggle]").forEach((el) => {
    el.addEventListener("change", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.toggle);
      currentUser.links[i].enabled = el.checked;
      autoSaveNow();
    });
  });

  // Delete link
  document.querySelectorAll("[data-delete]").forEach((el) => {
    el.addEventListener("click", () => {
      if (!currentUser) return;
      const i = parseInt(el.dataset.delete);
      currentUser.links.splice(i, 1);
      autoSaveNow();
      render();
    });
  });

  // Add link (works for both new and existing users)
  document.getElementById("add-link-btn").addEventListener("click", () => {
    const title = document.getElementById("new-link-title").value.trim();
    const url = document.getElementById("new-link-url").value.trim();
    const desc = document.getElementById("new-link-desc").value.trim();
    const platform = document.getElementById("new-link-platform").value || undefined;
    if (!url) return;
    const labels = {"twitter":"Twitter / X","instagram":"Instagram","youtube":"YouTube","tiktok":"TikTok","github":"GitHub","linkedin":"LinkedIn"};
    const finalTitle = title || (platform ? (labels[platform] || platform) : "");
    if (!finalTitle) return;
    if (!currentUser) {
      currentUser = { displayName: "", bio: "", avatarUrl: "", theme: "minimal-dark", links: [] };
    }
    currentUser.links = currentUser.links || [];
    const newLink = { title: finalTitle, url, enabled: true };
    if (platform) newLink.platform = platform;
    if (desc) newLink.description = desc;
    currentUser.links.push(newLink);
    autoSaveNow();
    render();
  });

  // Save / Create
  document.getElementById("save-btn").addEventListener("click", isNewUser ? handleCreate : handleSave);

  // Logout
  document.getElementById("logout-btn").addEventListener("click", async () => {
    const { clearSharedSession } = await import("./freesurf-auth.js");
    await clearSharedSession();
    sessionToken = null;
    currentUser = null;
    sessionEmail = null;
    localStorage.removeItem("freesurf_session");
    navigate("landing");
  });
}

async function checkUsername(username, statusEl) {
  if (username === lastCheckedUsername) return;
  lastCheckedUsername = username;

  try {
    const res = await apiGet(\`/api/username/check/\${username}\`);
    const input = document.getElementById("edit-username");
    if (!input || input.value !== username) return;

    if (res.available) {
      statusEl.textContent = "\\u2713 freesurf.tools/" + username + " is available!";
      statusEl.style.color = "var(--success)";
      usernameAvailable = true;
    } else {
      statusEl.textContent = res.reason === "reserved" ? "This name is reserved" : "Already taken";
      statusEl.style.color = "var(--danger)";
      usernameAvailable = false;
    }
  } catch {
    statusEl.textContent = "Could not check availability";
    statusEl.style.color = "var(--danger)";
    usernameAvailable = false;
  }
}

async function handleCreate() {
  const btn = document.getElementById("save-btn");
  const statusEl = document.getElementById("save-status");
  statusEl.innerHTML = "";

  const username = document.getElementById("edit-username")?.value.trim();
  const displayName = document.getElementById("edit-name").value.trim();
  const bio = document.getElementById("edit-bio").value.trim();
  const activeTheme = document.querySelector("[data-theme].active");
  const theme = activeTheme ? activeTheme.dataset.theme : "minimal-dark";

  if (!username || username.length < 3) {
    statusEl.innerHTML = '<div class="alert alert-error">Please choose a username (at least 3 characters)</div>';
    return;
  }

  if (!usernameAvailable) {
    statusEl.innerHTML = '<div class="alert alert-error">Please choose an available username</div>';
    return;
  }

  if (!displayName) {
    statusEl.innerHTML = '<div class="alert alert-error">Display name is required</div>';
    return;
  }

  btn.disabled = true;
  btn.textContent = "Creating...";

  // Gather links that may have been added before creating
  const links = currentUser?.links || [];

  try {
    const now = new Date().toISOString();
    const result = await apiPost("/api/profile", {
      username,
      displayName,
      bio,
      avatarUrl: currentUser?.avatarUrl || undefined,
      theme,
      links,
      createdAt: now,
      updatedAt: now,
    });

    currentUser = result;
    sessionEmail = null;
    statusEl.innerHTML = '<div class="alert alert-success">Your page is live! \\ud83c\\udf89</div>';
    // Re-render to switch to the existing-user editor view
    render();
  } catch (err) {
    statusEl.innerHTML = \`<div class="alert alert-error">\${escapeHtml(err.message)}</div>\`;
    btn.disabled = false;
    btn.textContent = "Create My Page";
  }
}

function scheduleAutoSave() {
  if (!currentUser || !currentUser.username) return; // only for existing users
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => doAutoSave(), 1000);
}

function autoSaveNow() {
  if (!currentUser || !currentUser.username) return;
  clearTimeout(autoSaveTimer);
  doAutoSave();
}

async function doAutoSave() {
  if (!currentUser || !currentUser.username || isSaving) return;
  isSaving = true;
  const statusEl = document.getElementById("save-status");
  const btn = document.getElementById("save-btn");
  if (btn) { btn.disabled = true; btn.textContent = "Saving..."; }
  if (statusEl) statusEl.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;">Saving...</span>';

  // Sync name/bio from inputs if they exist
  const nameEl = document.getElementById("edit-name");
  const bioEl = document.getElementById("edit-bio");
  if (nameEl) currentUser.displayName = nameEl.value.trim();
  if (bioEl) currentUser.bio = bioEl.value.trim();

  try {
    const updated = await apiPut(\`/api/profile/\${currentUser.username}\`, currentUser);
    currentUser = updated;
    if (statusEl) statusEl.innerHTML = '<span style="color:var(--success);font-size:0.85rem;">\\u2713 Saved</span>';
    if (btn) { btn.disabled = false; btn.textContent = "Save Changes"; }
  } catch (err) {
    if (statusEl) statusEl.innerHTML = \`<div class="alert alert-error">\${escapeHtml(err.message)}</div>\`;
    if (btn) { btn.disabled = false; btn.textContent = "Save Changes"; }
  }
  isSaving = false;
}

async function handleSave() {
  const btn = document.getElementById("save-btn");
  const statusEl = document.getElementById("save-status");
  btn.disabled = true;
  btn.textContent = "Saving...";
  statusEl.innerHTML = "";

  currentUser.displayName = document.getElementById("edit-name").value.trim();
  currentUser.bio = document.getElementById("edit-bio").value.trim();

  // Handle change (the landing page slug). PUT to the OLD username so the backend
  // renames (deletes old row + inserts new), and keep availability validated.
  const oldUsername = currentUser.username;
  const newUsername = (document.getElementById("edit-username")?.value.trim() || oldUsername);
  const renamed = newUsername !== oldUsername;
  if (renamed) {
    if (newUsername.length < 3 || !/^[a-z0-9._-]+\$/.test(newUsername)) {
      statusEl.innerHTML = '<div class="alert alert-error">Handle must be 3-30 chars: lowercase letters, numbers, . _ -</div>';
      btn.disabled = false;
      btn.textContent = "Save Changes";
      return;
    }
    if (!usernameAvailable) {
      statusEl.innerHTML = '<div class="alert alert-error">Please choose an available handle</div>';
      btn.disabled = false;
      btn.textContent = "Save Changes";
      return;
    }
    currentUser.username = newUsername;
  }

  try {
    const updated = await apiPut(\`/api/profile/\${oldUsername}\`, currentUser);
    currentUser = updated;
    if (renamed) {
      render();
      return;
    }
    statusEl.innerHTML = '<div class="alert alert-success">Saved!</div>';
    btn.disabled = false;
    btn.textContent = "Save Changes";
  } catch (err) {
    statusEl.innerHTML = \`<div class="alert alert-error">\${escapeHtml(err.message)}</div>\`;
    btn.disabled = false;
    btn.textContent = "Save Changes";
  }
}

// --- Load existing profile ---
async function loadProfile(username) {
  try {
    const profile = await apiGet(\`/api/profile/\${username}\`);
    // Migrate legacy socialLinks into unified links array
    if (profile.socialLinks && profile.socialLinks.length) {
      profile.links = profile.links || [];
      for (const s of profile.socialLinks) {
        profile.links.push({ title: s.platform, url: s.url, platform: s.platform, enabled: true });
      }
      delete profile.socialLinks;
    }
    currentUser = profile;
    navigate("editor");
  } catch (err) {
    alert(\`Could not load profile: \${err.message}\`);
  }
}

// --- Helpers ---
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// --- Init ---
(async () => {
  const path = location.pathname;

  // Try to restore session from stored token
  if (sessionToken && !currentUser) {
    try {
      const result = await apiGet("/api/auth/me");
      if (result.needsSetup) {
        sessionEmail = result.email;
        currentUser = null;
        navigate("editor", false);
        return;
      }
      currentUser = result;
      navigate("editor", false);
      return;
    } catch {
      sessionToken = null;
      localStorage.removeItem("freesurf_session");
    }
  }

  if (path === "/editor" && !currentUser && !sessionToken) navigate("landing", false);
  else if (path === "/editor") navigate("editor", false);
  else navigate("landing", false);
})();
`,
    type: "application/javascript",
  },
  "js/freesurf-auth.js": {
    content: `/**
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
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
        })
    );
  }
  return _supabasePromise;
}

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = \`\${name}=\${encodeURIComponent(value)};expires=\${expires.toUTCString()};domain=\${COOKIE_DOMAIN};path=/;SameSite=Lax\`;
}

function getCookie(name) {
  const prefix = \`\${name}=\`;
  for (const cookie of document.cookie.split(";")) {
    const c = cookie.trim();
    if (c.startsWith(prefix)) return decodeURIComponent(c.slice(prefix.length));
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = \`\${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=\${COOKIE_DOMAIN};path=/;SameSite=Lax\`;
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
`,
    type: "application/javascript",
  },
  "js/freesurf.config.js": {
    content: `/**
 * FreeSurf — Shared Brand & Domain Configuration
 * Single source of truth. Change ROOT_DOMAIN to migrate domains.
 */

const ROOT_DOMAIN = "freesurf.tools";

const config = {
  ROOT_DOMAIN,
  COOKIE_DOMAIN: \`.\${ROOT_DOMAIN}\`,
  BRAND_NAME: "FreeSurf",
  BRAND_TAGLINE: "Free tools for freelancers & small businesses",
  URLS: {
    home: \`https://\${ROOT_DOMAIN}\`,
    auth: \`https://auth.\${ROOT_DOMAIN}\`,
    invoices: \`https://invoices.\${ROOT_DOMAIN}\`,
    links: \`https://links.\${ROOT_DOMAIN}\`,
    post: \`https://post.\${ROOT_DOMAIN}\`,
    hire: \`https://hire.\${ROOT_DOMAIN}\`,
    pdf: \`https://pdf.\${ROOT_DOMAIN}\`,
    scanner: \`https://scanner.\${ROOT_DOMAIN}\`,
    contact: \`mailto:hello@\${ROOT_DOMAIN}\`,
  },
  AUTH: {
    COOKIE_NAME: "freesurf_session",
    COOKIE_MAX_AGE: 60 * 60 * 24 * 30,
    SUPABASE_URL: "https://jstojewashwoswsskwjk.supabase.co",
    SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzdG9qZXdhc2h3b3N3c3Nrd2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNTg2OTAsImV4cCI6MjA5MzkzNDY5MH0.o3hYxYr1ZbmEShPfZebx1vchjmIrN7uYZMX1C5fhoac",
  },
  TOOLS: [
    { name: "Invoices", url_subdomain: "invoices", status: "live", description: "Free invoice generator — no account required" },
    { name: "Links", url_subdomain: "links", status: "live", description: "Free link-in-bio pages" },
    { name: "Post", url_subdomain: "post", status: "beta", description: "Cross-post to social platforms" },
    { name: "Hire", url_subdomain: "hire", status: "coming-soon", description: "Contractor hiring hub" },
    { name: "PDF", url_subdomain: "pdf", status: "planned", description: "PDF reader, viewer, editor & e-sign" },
    { name: "Scanner", url_subdomain: "scanner", status: "planned", description: "PDF, QR & OCR scanner" },
  ],
};

Object.freeze(config);
Object.freeze(config.URLS);
Object.freeze(config.AUTH);
Object.freeze(config.TOOLS);

export default config;
`,
    type: "application/javascript",
  },
  "pages/privacy.html": {
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Privacy Policy — FreeSurf</title>
  <meta name="description" content="Privacy policy for FreeSurf — free tools for freelancers and small businesses." />
  <style>
    :root { --bg: #0b1020; --card: #111937; --text: #e8ecff; --muted: #b3bddf; --accent: #5b8cff; --border: #2a3568; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Inter, Segoe UI, Roboto, Arial, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
    a { color: var(--accent); }
    .wrap { max-width: 760px; margin: 0 auto; padding: 40px 24px 80px; }
    h1 { font-size: 2rem; margin-bottom: 8px; }
    h2 { font-size: 1.25rem; margin-top: 32px; color: var(--accent); }
    p, li { color: var(--muted); font-size: 0.95rem; margin: 8px 0; }
    ul { padding-left: 20px; }
    .updated { font-size: 0.85rem; color: #5f6b7a; margin-bottom: 32px; }
    .entity { font-size: 0.9rem; color: #5f6b7a; margin-bottom: 24px; padding: 16px; background: var(--card); border-radius: 8px; border: 1px solid var(--border); }
    hr { border: 0; border-top: 1px solid var(--border); margin: 32px 0; }
    footer { margin-top: 48px; font-size: 0.8rem; color: #5f6b7a; }
    footer a { color: var(--muted); }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Privacy Policy</h1>
    <p class="updated">Last updated: August 7, 2026</p>

    <div class="entity">
      FreeSurf is a product of <strong>Planting Moon LLC</strong>, located at 5830 E 2nd St, Ste 7000 #35119, Casper, Wyoming 82609.<br />
      Contact: <a href="mailto:support@freesurf.tools">support@freesurf.tools</a>
    </div>

    <p>This Privacy Policy explains how FreeSurf collects, uses, stores, and shares information when you use our apps, websites, and services. FreeSurf provides free utility tools including invoice generation, link-in-bio pages, social media cross-posting, text-to-speech reading, and related services.</p>

    <h2>1. Information We Collect</h2>

    <p><strong>Without an account:</strong> Most FreeSurf tools work without creating an account. When you use tools without signing in, your data (invoice drafts, generated audio, saved recordings, transcriptions) is stored locally on your device. We do not collect or have access to this locally stored data.</p>

    <p><strong>With an account (optional):</strong> If you choose to create an account, we collect:</p>
    <ul>
      <li>Email address and authentication credentials (via Supabase)</li>
      <li>Invoice drafts, business profiles, client information, and saved invoices you choose to sync to your account</li>
      <li>Link-in-bio profile content including display name, bio, links, and avatar images</li>
      <li>Social media account connections and OAuth tokens for cross-posting (Post tool)</li>
      <li>Support requests and correspondence</li>
    </ul>

    <p><strong>AI Processing:</strong> Some FreeSurf tools use AI models to generate results. These models run on our own GPU infrastructure (RunPod). <strong>We do not share your content with third-party AI companies such as OpenAI, Google, or Anthropic.</strong> Your text, audio, and photos are processed in memory and immediately discarded after the result is returned:</p>
    <ul>
      <li><strong>Natural Reader:</strong> Text is sent to our self-hosted Kokoro TTS server to generate speech audio.</li>
      <li><strong>Transcriber:</strong> Audio is sent to our self-hosted Whisper transcription server.</li>
      <li><strong>Calorie Tracker:</strong> Food photos are sent to our self-hosted vision AI server.</li>
    </ul>

    <h2>2. How We Use Information</h2>
    <ul>
      <li>Provide, maintain, and improve our tools and services</li>
      <li>Authenticate users who choose to create accounts</li>
      <li>Sync your data across devices when signed in</li>
      <li>Respond to support requests</li>
      <li>Send optional product updates or newsletters (only if you opt in)</li>
      <li>Maintain security and prevent abuse</li>
    </ul>
    <p>We do not sell personal information. We do not use your invoice data, link profiles, posts, or AI-generated content for advertising purposes.</p>

    <h2>3. Advertising &amp; Third-Party Ad Networks</h2>
    <p>FreeSurf apps display advertisements through third-party ad networks such as Google AdMob, AppLovin MAX, and similar providers. To serve and measure ads, these networks may collect:</p>
    <ul>
      <li><strong>Identifiers:</strong> Device advertising ID (IDFA on iOS, AAID on Android)</li>
      <li><strong>Location:</strong> Coarse location derived from IP address (not precise GPS)</li>
      <li><strong>Usage Data:</strong> Product interaction data (e.g., ad views, clicks)</li>
      <li><strong>Diagnostics:</strong> Crash logs and performance data</li>
    </ul>
    <p>This data is shared with our ad mediation partners solely for ad delivery and measurement. No personal information from your FreeSurf account or tool usage (invoices, transcripts, meal logs, recordings) is shared with advertisers. Ad-supported functionality is disclosed in each app's store listing.</p>
    <p><strong>Android Advertising ID (AD_ID):</strong> On Android devices, the Google Mobile Ads SDK accesses the Android Advertising ID for ad targeting, frequency capping, conversion tracking, and fraud prevention. The <code>com.google.android.gms.permission.AD_ID</code> permission is automatically included in our apps through the AdMob SDK library manifest. This permission is used solely to access the advertising identifier — no other Android permissions are requested for advertising purposes.</p>
    <p>Before personalized ads are served, the app will request permission via Apple's App Tracking Transparency (ATT) prompt or Android's equivalent. You may opt out at any time through your device's privacy settings:</p>
    <ul>
      <li><strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking → toggle off for the app. Or Settings → Privacy &amp; Security → Apple Advertising → turn off Personalized Ads.</li>
      <li><strong>Android:</strong> Settings → Privacy → Ads → Delete advertising ID, or Settings → Google → Ads → Opt out of Ads Personalization.</li>
    </ul>
    <p>Non-personalized ads do not require tracking permission.</p>

    <h2>4. Third-Party Services</h2>
    <p>FreeSurf uses the following infrastructure and service providers:</p>
    <ul>
      <li><strong>Supabase</strong> — authentication and account data storage</li>
      <li><strong>Cloudflare</strong> — web hosting, Workers, R2 storage, and KV</li>
      <li><strong>RunPod</strong> — GPU infrastructure for self-hosted AI models (Kokoro TTS, Whisper, vision models)</li>
      <li><strong>Google AdMob / AppLovin MAX</strong> — in-app advertising</li>
    </ul>
    <p>These providers process data on our behalf to deliver specific parts of the service.</p>

    <h2>5. Data Retention &amp; Your Choices</h2>
    <ul>
      <li><strong>Local data:</strong> Data stored on your device remains until you delete it or uninstall the app.</li>
      <li><strong>Account data:</strong> Retained while your account is active. You can delete your account by contacting us.</li>
      <li><strong>AI processing:</strong> Submitted text, audio, and photos are processed in memory on our servers and returned as output. No user content is retained on AI servers after the result is returned. AI-generated content is saved locally on your device. If you choose to sign in, content may also sync to your account for cross-device access.</li>
      <li><strong>No model training:</strong> User content processed by our AI models is never used to train, fine-tune, or improve the models. Transcripts, audio, and images are used strictly for immediate real-time output.</li>
      <li><strong>Support requests:</strong> May be retained to resolve issues and document outcomes.</li>
    </ul>

    <h2>6. GDPR &amp; CCPA Rights</h2>
    <p>If you are located in the European Economic Area (EEA) or California, you have the following rights regarding your personal data:</p>
    <ul>
      <li><strong>Right to access:</strong> Request a copy of personal data we hold about you.</li>
      <li><strong>Right to deletion:</strong> Request deletion of your account and associated data.</li>
      <li><strong>Right to opt out:</strong> Opt out of personalized advertising via your device's privacy settings or by limiting ad tracking.</li>
      <li><strong>Right to data portability:</strong> Request your data in a structured, machine-readable format.</li>
    </ul>
    <p>To exercise these rights, contact us at <a href="mailto:support@freesurf.tools">support@freesurf.tools</a>. We will respond within 30 days. For EEA users, you also have the right to lodge a complaint with your local data protection authority.</p>

    <h2>7. Children's Privacy</h2>
    <p>FreeSurf is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>

    <h2>8. Changes</h2>
    <p>We may update this Privacy Policy. Material changes will be noted with an updated effective date.</p>

    <hr />

    <h2>Contact</h2>
    <p>For privacy questions, data requests, or account deletion:<br />
    <a href="mailto:support@freesurf.tools">support@freesurf.tools</a></p>
    <p>Planting Moon LLC<br />5830 E 2nd St, Ste 7000 #35119, Casper, WY 82609</p>

    <footer>
      <a href="/">FreeSurf</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
    </footer>
  </div>
</body>
</html>`,
    type: "text/html;charset=utf-8",
  },
  "pages/support.html": {
    content: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Support — FreeSurf</title>
  <meta name="description" content="Get help with FreeSurf — free, open-source tools and a direct contractor network with no middleman fees." />
  <style>
    :root {
      --bg: #0a0a0c;
      --bg-alt: #111115;
      --surface: #16161a;
      --panel: rgba(22, 22, 26, 0.85);
      --border: #252530;
      --border-light: #1e1e28;
      --text: #e4e4ed;
      --text-secondary: #9898a8;
      --text-muted: #686878;
      --brand: #6b8cff;
      --brand-dark: #5a78e8;
      --brand-light: #8aa4ff;
      --brand-soft: rgba(107, 140, 255, 0.12);
      --brand-ring: rgba(107, 140, 255, 0.15);
      --success: #34d399;
      --success-soft: rgba(52, 211, 153, 0.12);
      --radius: 14px;
      --radius-lg: 20px;
      --shadow: 0 4px 24px rgba(0,0,0,0.4);
      --shadow-lg: 0 12px 48px rgba(0,0,0,0.5);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
      background-size: 44px 44px;
      z-index: 0;
    }

    a { color: var(--brand); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .wrap { max-width: 960px; margin: 0 auto; padding: 24px; position: relative; z-index: 1; }

    .nav {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 44px; gap: 12px;
    }
    .brand { font-size: 1.05rem; font-weight: 700; }

    .btn {
      appearance: none; border: 0; padding: 12px 16px; border-radius: 10px;
      font-weight: 600; cursor: pointer; text-decoration: none;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .btn-secondary { background: transparent; border: 1px solid var(--border); color: var(--text); }
    .btn-secondary:hover { border-color: var(--brand); text-decoration: none; }

    .app-launcher { position: relative; }
    .app-launcher-btn {
      background: none; border: 1px solid var(--border); color: var(--text-muted);
      width: 36px; height: 36px; border-radius: 8px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; transition: border-color 0.15s;
    }
    .app-launcher-btn:hover { border-color: var(--brand); color: var(--text); }

    .app-dropdown {
      display: none; position: absolute; right: 0; top: 44px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 12px; width: 280px;
      box-shadow: var(--shadow-lg); z-index: 50;
      grid-template-columns: repeat(3, 1fr); gap: 8px;
    }
    .app-dropdown.open { display: grid; }

    .app-dropdown a {
      display: flex; flex-direction: column; align-items: center; gap: 5px;
      padding: 10px 6px; border-radius: 10px; font-size: 0.75rem;
      color: var(--text-muted); text-align: center; transition: background 0.15s;
    }
    .app-dropdown a:hover { background: rgba(255,255,255,0.05); color: var(--text); text-decoration: none; }
    .app-dropdown .app-icon { font-size: 1.4rem; }

    .card {
      background: var(--surface);
      border: 1px solid var(--border); border-radius: var(--radius-lg);
      padding: 36px 32px; box-shadow: var(--shadow-lg); max-width: 640px; margin: 0 auto;
    }
    h1 { font-size: 1.6rem; margin: 0 0 6px; font-weight: 600; letter-spacing: -0.02em; }
    .sub { color: var(--text-muted); font-size: 0.92rem; margin: 0 0 28px; }
    h2 { font-size: 1.05rem; margin: 28px 0 10px; color: var(--brand); font-weight: 600; }
    p { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.65; margin: 0 0 14px; }

    .email {
      display: inline-block; background: var(--brand-soft); border: 1px solid var(--brand-ring);
      border-radius: 10px; padding: 12px 18px; font-size: 0.95rem; font-weight: 600;
      color: var(--brand-light);
    }
    .email:hover { text-decoration: none; background: rgba(107, 140, 255, 0.18); }

    footer {
      margin: 48px 0 20px; color: var(--text-muted);
      font-size: 0.9rem; text-align: center;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a class="brand" href="/" style="color:inherit;text-decoration:none;">FreeSurf</a>
      <div class="app-launcher">
        <button class="app-launcher-btn" id="app-launcher-btn" aria-label="FreeSurf tools" title="FreeSurf tools">⋮⋮⋮</button>
        <div class="app-dropdown" id="app-dropdown">
          <a href="https://invoices.freesurf.tools"><span class="app-icon">🧾</span>Invoices</a>
          <a href="https://links.freesurf.tools"><span class="app-icon">🔗</span>Links</a>
          <a href="https://post.freesurf.tools"><span class="app-icon">📢</span>Post</a>
          <a href="https://auth.freesurf.tools"><span class="app-icon">🔐</span>Auth</a>
          <a href="https://github.com/freesurf-ecosystem"><span class="app-icon">💻</span>GitHub</a>
        </div>
      </div>
    </nav>

    <div class="card">
      <h1>Support</h1>
      <p class="sub">Free, open-source tools and a direct contractor network — no middleman fees, no subscriptions.</p>

      <h2>Contact</h2>
      <p>Email us anytime. We respond within 24 hours.</p>
      <a href="mailto:support@freesurf.tools" class="email">support@freesurf.tools</a>

      <h2>Common questions</h2>
      <p><strong>Are FreeSurf tools really free?</strong> Yes. All our tools — invoices, link-in-bio pages, cross-posting, text-to-speech, transcription, calorie tracking, and more — are free with no mandatory fees or subscriptions. Sign in is optional for cloud sync.</p>
      <p><strong>Where is my data stored?</strong> Data is saved locally on your device by default. If you sign in, it syncs to your account so you can access it across devices.</p>
      <p><strong>How does the contractor network work?</strong> Clients and contractors connect directly with transparent, upfront rates. FreeSurf takes zero platform percentage — you keep everything you earn.</p>
      <p><strong>Can I delete my account?</strong> Yes — email us at the address above with "Account deletion request" and we'll remove all your data within 48 hours.</p>
    </div>

    <footer>
      &copy; <span id="year"></span> FreeSurf &middot;
      <a href="/">Home</a> &middot;
      <a href="/privacy">Privacy</a> &middot;
      <a href="/terms">Terms</a>
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
    const btn = document.getElementById('app-launcher-btn');
    const dropdown = document.getElementById('app-dropdown');
    btn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('open'); });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  </script>
</body>
</html>
`,
    type: "text/html;charset=utf-8",
  },
  "pages/terms.html": {
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Terms of Use — FreeSurf</title>
  <meta name="description" content="Terms of use for FreeSurf — free tools for freelancers and small businesses." />
  <style>
    :root { --bg: #0b1020; --card: #111937; --text: #e8ecff; --muted: #b3bddf; --accent: #5b8cff; --border: #2a3568; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Inter, Segoe UI, Roboto, Arial, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
    a { color: var(--accent); }
    .wrap { max-width: 760px; margin: 0 auto; padding: 40px 24px 80px; }
    h1 { font-size: 2rem; margin-bottom: 8px; }
    h2 { font-size: 1.25rem; margin-top: 32px; color: var(--accent); }
    p, li { color: var(--muted); font-size: 0.95rem; margin: 8px 0; }
    ul { padding-left: 20px; }
    .updated { font-size: 0.85rem; color: #5f6b7a; margin-bottom: 24px; }
    .entity { font-size: 0.9rem; color: #5f6b7a; margin-bottom: 24px; padding: 16px; background: var(--card); border-radius: 8px; border: 1px solid var(--border); }
    hr { border: 0; border-top: 1px solid var(--border); margin: 32px 0; }
    footer { margin-top: 48px; font-size: 0.8rem; color: #5f6b7a; }
    footer a { color: var(--muted); }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Terms of Use</h1>
    <p class="updated">Last updated: August 2, 2026</p>

    <div class="entity">
      FreeSurf is a product of <strong>Planting Moon LLC</strong>, located at 5830 E 2nd St, Ste 7000 #35119, Casper, Wyoming 82609.<br />
      Contact: <a href="mailto:support@freesurf.tools">support@freesurf.tools</a>
    </div>

    <p>These Terms of Use govern your access to and use of the FreeSurf apps, websites, and services ("FreeSurf," "we," "our," or "us"). By using FreeSurf, you agree to these Terms of Use and our <a href="/privacy">Privacy Policy</a>.</p>

    <h2>1. Service Description</h2>
    <p>FreeSurf provides free utility tools for freelancers and small businesses, including:</p>
    <ul>
      <li><strong>Invoices:</strong> Invoice creation, PDF export, and draft management</li>
      <li><strong>Links:</strong> Link-in-bio profile pages</li>
      <li><strong>Post:</strong> Social media cross-posting</li>
      <li><strong>Natural Reader:</strong> AI text-to-speech reading</li>
      <li><strong>Transcriber:</strong> Speech-to-text transcription</li>
      <li><strong>Calorie Tracker:</strong> Photo-based food nutrition analysis</li>
    </ul>
    <p>Some features use AI systems to generate outputs. AI-generated content may be incomplete, inaccurate, or unsuitable for high-stakes decisions. You are responsible for reviewing and using AI outputs appropriately. FreeSurf does not provide legal, tax, accounting, medical, or nutritional advice.</p>

    <h2>2. Eligibility and Accounts</h2>
    <p>Most FreeSurf tools work without an account. You may optionally create an account to sync data across devices. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You may not use FreeSurf in violation of law, to infringe the rights of others, or to submit harmful, fraudulent, or abusive content.</p>

    <h2>3. Acceptable Use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use FreeSurf for unlawful harassment, fraud, or abuse</li>
      <li>Attempt to access another user's data or account</li>
      <li>Upload content you do not have permission to use</li>
      <li>Interfere with or disrupt the service or its infrastructure</li>
      <li>Reverse engineer restricted components or attempt unauthorized access</li>
      <li>Use AI features to generate harmful, deceptive, or illegal content</li>
    </ul>

    <h2>4. Your Content & AI Processing</h2>
    <p>You retain ownership of the content you create using FreeSurf (invoices, link profiles, posts, generated audio, transcriptions, etc.). AI-powered features in FreeSurf apps (Natural Reader, Transcriber, Calorie Tracker) run on our own GPU infrastructure. Your text, audio, and photos are processed in memory on our servers and returned as output. <strong>We do not share your content with third-party AI companies such as OpenAI, Google, or Anthropic.</strong> No AI provider outside of FreeSurf's infrastructure receives, stores, or trains on your data. User content is never used to train, fine-tune, or improve AI models.</p>

    <h2>5. Local Storage & Account Sync</h2>
    <p>When used without an account, your data is stored locally on your device. We do not have access to locally stored data. If you choose to create an account, selected data may sync to our servers for cross-device access. You may delete synced data by contacting us or through in-app account management.</p>

    <h2>6. Subscriptions and Billing</h2>
    <p>FreeSurf tools are free to use with advertising. In the future, optional subscriptions may be offered to remove advertisements across the FreeSurf ecosystem. Subscriptions will be purchased through the Apple App Store or Google Play Store and will be governed by those platforms' billing terms. FreeSurf's core tools will remain available at no cost.</p>

    <h2>7. Intellectual Property</h2>
    <p>FreeSurf and its service materials (excluding user-generated content) are owned by Planting Moon LLC or our licensors. The FreeSurf name, logo, and brand are trademarks of Planting Moon LLC. Portions of the FreeSurf platform are open source and subject to their respective licenses.</p>

    <h2>8. Third-Party Services</h2>
    <p>FreeSurf integrates with third-party platforms and services. Your use of those services may be subject to their respective terms and policies. FreeSurf is not responsible for the content, functionality, or practices of third-party services.</p>

    <h2>9. Disclaimers and Limitation of Liability</h2>
    <p>FreeSurf is provided on an "as is" and "as available" basis. To the maximum extent permitted by law:</p>
    <ul>
      <li>We disclaim all warranties not expressly stated in these terms.</li>
      <li>We are not liable for indirect, incidental, special, consequential, or punitive damages.</li>
      <li>We are not liable for decisions made based on AI-generated outputs.</li>
      <li>We are not liable for data loss from locally stored content — you should maintain your own backups of important records.</li>
    </ul>

    <h2>10. Changes</h2>
    <p>We may update these Terms of Use from time to time. Material changes will be noted with an updated effective date. Continued use of FreeSurf after changes constitutes acceptance of the updated terms.</p>

    <hr />

    <h2>Contact</h2>
    <p>For terms, billing, support, or account questions:<br />
    <a href="mailto:support@freesurf.tools">support@freesurf.tools</a></p>
    <p>Planting Moon LLC<br />5830 E 2nd St, Ste 7000 #35119, Casper, WY 82609</p>

    <footer>
      <a href="/">FreeSurf</a> · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
    </footer>
  </div>
</body>
</html>
`,
    type: "text/html;charset=utf-8",
  },
  "sitemap.xml": {
    content: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Public profile pages are dynamic (/:username) — not listed individually here.
       Submit this sitemap for the dashboard and any static landing pages. -->

  <!-- Dashboard (user-facing app at links.freesurf.tools) -->
  <url>
    <loc>https://links.freesurf.tools/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Worker root (freesurf.tools) -->
  <url>
    <loc>https://freesurf.tools/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Public profile pages (dynamic — pattern: freesurf.tools/:username) -->
  <!-- Individual profile URLs are user-generated and not enumerable here.
       Consider a dynamically generated sitemap index if Google indexing of
       profiles becomes a priority. -->

</urlset>
`,
    type: "application/xml",
  }
};

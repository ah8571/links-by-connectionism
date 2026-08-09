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
  <title>Free Link-in-Bio Page — No Fees, No Lock-in | FreeSurf Links</title>
  <meta name="description" content="Create your link-in-bio page for free. No monthly fees, no lock-in, open source. One link for all your content — ready in seconds.">
  <meta property="og:title" content="Free Link-in-Bio Page — No Fees, No Lock-in | FreeSurf Links">
  <meta property="og:description" content="Create your link-in-bio page for free. No monthly fees, no lock-in, open source.">
  <meta property="og:url" content="https://links.freesurf.tools/">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Free Link-in-Bio Page — No Fees, No Lock-in | FreeSurf Links">
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
import { getSharedSession } from "./freesurf-auth.js";
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
  const authUrl = "https://auth.freesurf.tools/?redirect=" + encodeURIComponent("https://links.freesurf.tools/");
  return \`
    <header class="header">
      <div class="header-logo"><span style="color:var(--accent)">FreeSurf</span> links</div>
    </header>
    <div class="container">
      <div class="hero centered">
        <h1>Your links.<br><span>One page. Free for most users.</span></h1>
        <p>Create your link-in-bio page in seconds. No fees, no lock-in, open source.</p>
        <div class="claim-form">
          <a href="\${authUrl}" class="btn btn-primary" style="display:inline-block;text-decoration:none;padding:12px 32px;font-size:1rem;">Sign in to get started</a>
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
              <span class="freesurf-footer-heading">Tools</span>
              <a href="https://invoices.freesurf.tools">Invoices</a>
              <a href="https://links.freesurf.tools">Links</a>
              <a href="https://post.freesurf.tools">Post</a>
            </div>
            <div class="freesurf-footer-col">
              <span class="freesurf-footer-heading">Platform</span>
              <a href="https://freesurf.tools">Home</a>
              <a href="https://auth.freesurf.tools">Sign in</a>
              <a href="https://github.com/freesurf-ecosystem">GitHub</a>
            </div>
            <div class="freesurf-footer-col">
              <span class="freesurf-footer-heading">Legal</span>
              <a href="https://freesurf.tools/privacy.html">Privacy</a>
              <a href="https://freesurf.tools/terms.html">Terms</a>
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

function bindLanding() {
  // "Sign in to get started" links directly to auth.freesurf.tools
  // No extra binding needed — the anchor tag handles it.
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
  const publicUrl = currentUser ? \`\${PUBLIC_BASE.replace("http://127.0.0.1:8787", "freesurf.tools")}/\${profile.username}\` : null;
  const displayUrl = currentUser ? \`freesurf.tools/\${profile.username}\` : null;

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
      <a href="/" class="header-logo" id="nav-home"><span style="color:var(--accent)">FreeSurf</span> links</a>
      <nav class="header-nav">
        \${currentUser ? \`<a href="\${publicUrl.startsWith("http") ? publicUrl : "https://" + publicUrl}" target="_blank" class="btn btn-secondary btn-sm">View Page</a>\` : ""}
        <button class="btn btn-secondary btn-sm" id="logout-btn">Log out</button>
      </nav>
    </header>
    <div class="container">
      \${isNewUser ? \`
        <h2 style="margin-bottom: 0.25rem;">Set up your page</h2>
        <p style="color:var(--text-muted); margin-bottom: 1.5rem;">Choose a URL and fill in your details below.</p>
      \` : \`
        <div class="url-bar">
          <span class="url-bar-link">\${escapeHtml(displayUrl)}</span>
          <button class="btn btn-sm btn-secondary" id="copy-url">Copy</button>
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
              <span class="freesurf-footer-heading">Tools</span>
              <a href="https://invoices.freesurf.tools">Invoices</a>
              <a href="https://links.freesurf.tools">Links</a>
              <a href="https://post.freesurf.tools">Post</a>
            </div>
            <div class="freesurf-footer-col">
              <span class="freesurf-footer-heading">Platform</span>
              <a href="https://freesurf.tools">Home</a>
              <a href="https://auth.freesurf.tools">Sign in</a>
              <a href="https://github.com/freesurf-ecosystem">GitHub</a>
            </div>
            <div class="freesurf-footer-col">
              <span class="freesurf-footer-heading">Legal</span>
              <a href="https://freesurf.tools/privacy.html">Privacy</a>
              <a href="https://freesurf.tools/terms.html">Terms</a>
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

  // Username availability check (new users only)
  const usernameInput = document.getElementById("edit-username");
  if (usernameInput) {
    usernameAvailable = false;
    usernameInput.addEventListener("input", () => {
      usernameInput.value = usernameInput.value.toLowerCase().replace(/[^a-z0-9._-]/g, "");
      const val = usernameInput.value;
      const statusEl = document.getElementById("username-status");

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

  try {
    const updated = await apiPut(\`/api/profile/\${currentUser.username}\`, currentUser);
    currentUser = updated;
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
          auth: { persistSession: true, autoRefreshToken: true },
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

export async function getSharedSession() {
  try {
    const supabase = await getSupabase();
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      persistToCookie(data.session.access_token);
      return { user: data.session.user, accessToken: data.session.access_token };
    }
    const cookieToken = getCookie(COOKIE_NAME);
    if (cookieToken) {
      const { data: restored } = await supabase.auth.setSession({ access_token: cookieToken, refresh_token: "" });
      if (restored.session?.user) {
        persistToCookie(restored.session.access_token);
        return { user: restored.session.user, accessToken: restored.session.access_token };
      }
      deleteCookie(COOKIE_NAME);
    }
    return null;
  } catch {
    return null;
  }
}

export async function setSharedSession() {
  try {
    const supabase = await getSupabase();
    const { data } = await supabase.auth.getSession();
    if (data.session?.access_token) persistToCookie(data.session.access_token);
  } catch { /* localStorage still works */ }
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

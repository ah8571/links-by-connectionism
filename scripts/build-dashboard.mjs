import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative, extname } from "path";

const DASHBOARD_DIR = join(import.meta.dirname, "..", "dashboard");
const OUTPUT_FILE = join(import.meta.dirname, "..", "src", "dashboard.ts");
const SKIP_FILES = new Set(["_redirects"]);

const MIME = {
  ".html": "text/html;charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".xml": "application/xml",
};

function walkDir(dir, base) {
  const entries = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      entries.push(...walkDir(full, base));
    } else if (!SKIP_FILES.has(entry)) {
      entries.push(relative(base, full).replace(/\\/g, "/"));
    }
  }
  return entries;
}

const files = walkDir(DASHBOARD_DIR, DASHBOARD_DIR);
const entries = [];

for (const file of files.sort()) {
  const fullPath = join(DASHBOARD_DIR, file);
  const content = readFileSync(fullPath, "utf8");
  const ext = extname(file);
  const mime = MIME[ext] || "application/octet-stream";

  const escaped = content
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");

  entries.push(`  "${file}": {\n    content: \`${escaped}\`,\n    type: "${mime}",\n  }`);
}

const output = `export const DASHBOARD: Record<string, { content: string; type: string }> = {\n${entries.join(",\n")}\n};\n`;

writeFileSync(OUTPUT_FILE, output, "utf8");
console.log(`Generated src/dashboard.ts with ${files.length} files`);

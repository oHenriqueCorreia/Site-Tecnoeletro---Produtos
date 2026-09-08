// Baixa as imagens do projeto e gera o build estático em dist-static/.
// Uso: node scripts/build-static.mjs
import { execSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync, writeFileSync, readFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "dist-static");
const ASSET_BASE =
  process.env.ASSET_BASE ?? "https://tecnoeletro-products-shine.lovable.app";

function findAssets(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) found.push(...findAssets(full));
    else if (entry.endsWith(".asset.json")) found.push(full);
  }
  return found;
}

console.log("→ vite build (SPA)");
execSync("npx vite build --config vite.static.config.ts", { cwd: root, stdio: "inherit" });

console.log("→ baixando imagens de", ASSET_BASE);
const imgDir = join(OUT, "assets-img");
mkdirSync(imgDir, { recursive: true });

for (const file of findAssets(join(root, "src", "assets"))) {
  const asset = JSON.parse(readFileSync(file, "utf8"));
  const ext = asset.url.split(".").pop() ?? "png";
  const target = join(imgDir, `${asset.asset_id}.${ext}`);
  const res = await fetch(new URL(asset.url, ASSET_BASE));
  if (!res.ok) throw new Error(`Falha ao baixar ${asset.url}: ${res.status}`);
  writeFileSync(target, Buffer.from(await res.arrayBuffer()));
  console.log("  ✓", asset.original_filename ?? asset.asset_id);
}

// Fallback de SPA para Apache (útil se novas rotas forem adicionadas).
writeFileSync(
  join(OUT, ".htaccess"),
  `Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^ index.html [L]
`,
);

console.log("\n✔ Pronto: dist-static/ (envie o conteúdo desta pasta para o Apache)");

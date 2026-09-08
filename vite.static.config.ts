// Build estático (SPA) para hospedagem em Apache/qualquer servidor de arquivos.
// Uso: bun run build:static  (ou npm run build:static)
// Saída: dist-static/ com index.html físico, assets/ e assets-img/.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  root: "static",
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths({ root: __dirname })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  define: {
    "import.meta.env.VITE_STATIC_BUILD": JSON.stringify("1"),
  },
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
  },
});

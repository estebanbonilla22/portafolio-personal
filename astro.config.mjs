import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Actualiza esta URL antes de publicar: se usa para el sitemap y las etiquetas Open Graph.
const SITE_URL = "https://tu-dominio.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

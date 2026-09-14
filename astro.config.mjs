// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://magi-o.fr',
  // Les redirections des anciennes URLs WordPress sont dans vercel.json :
  // Astro sans adaptateur ne produit que des pages-relais meta-refresh en
  // HTTP 200, la ou Vercel emet de vraies redirections permanentes.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

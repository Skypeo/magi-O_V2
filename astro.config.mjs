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
  // lastmod : date du build, c'est-a-dire de la derniere mise en ligne du
  // contenu. Sans elle, le plan du site ne dit rien de la fraicheur des pages.
  integrations: [sitemap({ lastmod: new Date() })],
  vite: {
    plugins: [tailwindcss()],
  },
});

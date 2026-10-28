// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { MISE_A_JOUR } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://magi-o.fr',
  // Les redirections des anciennes URLs WordPress sont dans vercel.json :
  // Astro sans adaptateur ne produit que des pages-relais meta-refresh en
  // HTTP 200, la ou Vercel emet de vraies redirections permanentes.
  // lastmod : la date de derniere modification REELLE du contenu (la meme
  // que le dateModified du JSON-LD et le pied de page), pas la date du build.
  // Une lastmod qui change a chaque build sans que le contenu change apprend
  // a Google a l'ignorer.
  integrations: [sitemap({ lastmod: new Date(MISE_A_JOUR + 'T00:00:00Z') })],
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://magi-o.fr',
  // Redirections SEO depuis les anciennes URLs WordPress
  redirects: {
    '/case-studies': '/realisations',
    '/nos-realisations': '/realisations',
    '/services-plomberie-colmar': '/services',
    // Pages services individuelles
    '/service/plombier-colmar-travaux-plomberie': '/services/plomberie',
    '/service-category/plomberie': '/services/plomberie',
    '/service/chauffagiste-colmar': '/services/chauffage',
    '/service-category/chauffage': '/services/chauffage',
    '/service/detection-de-fuite': '/services/detection-de-fuite',
    '/service-category/detection-de-fuite': '/services/detection-de-fuite',
    '/service/electricien-colmar': '/services/electricite',
    '/service-category/electricite': '/services/electricite',
    '/pompe-a-chaleur-colmar': '/services/pompe-a-chaleur',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

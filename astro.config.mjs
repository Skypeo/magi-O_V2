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
    // Électricité supprimée → renvoi vers la liste des services
    '/service/electricien-colmar': '/services',
    '/service-category/electricite': '/services',
    '/services/electricite': '/services',
    // Pompe à chaleur fusionnée dans la page Chauffage
    '/pompe-a-chaleur-colmar': '/services/chauffage',
    '/services/pompe-a-chaleur': '/services/chauffage',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

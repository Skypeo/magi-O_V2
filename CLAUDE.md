# CLAUDE.md — Projet MAGI Ø

## Description
Refonte du site vitrine **MAGI Ø** (plombier / chauffagiste / électricien / détection de fuite à Colmar, 68).
Reprise à l'identique du contenu, des images, de l'arborescence et de la charte couleur de l'ancien
site WordPress (magi-o.fr), mais réécrit en site statique ultra-performant et géré par la cliente.

## Stack
- **Astro 5** (site statique) + **Tailwind CSS 4** (`@tailwindcss/vite`)
- **Sanity** (CMS des réalisations — dossier `studio/`)
- **Web3Forms** (formulaire de contact, sans backend)
- `@astrojs/sitemap` (sitemap), hébergement cible : Cloudflare Pages / Netlify

## Fichiers principaux
- `src/consts.ts` — **source du contenu** (coordonnées, services, FAQ, nav, réseaux)
- `src/lib/sanity.ts` — client Sanity + `getRealisations()` (dégrade proprement si non configuré)
- `src/layouts/Layout.astro` — SEO, Open Graph, **Schema.org `Plumber`**, script reveal
- `src/components/Header.astro` — **nav en pill** (reprise de l'ancien site) + menu mobile
- `src/components/Footer.astro`, `PageHeader.astro`, `Icon.astro` (SVG inline)
- `src/pages/` — `index`, `services`, `realisations` (+ `realisations/[slug]` page détail), `contact`
- `src/lib/realisations.ts` — normalisation des réalisations (Sanity + fallback) partagée liste/détail
- `src/styles/global.css` — design tokens + animations CSS
- `studio/` — config + schéma Sanity (`schemaTypes/realisation.ts`)

## Décisions importantes
- **Charte conservée** : vert sapin `#44655e` / `#354743`, menthe `#84c7b9`, accent corail
  `#e63a27`, texte `#131022`, police **DM Sans**. Tokens dans `global.css` (`--color-pine-*`, `--color-coral-*`).
- **Nav en pill** verte conservée (demande cliente) + top-bar (logo, email, horaires).
- **Animations légères** : CSS pur + `IntersectionObserver` natif (`data-reveal`), entrée hero en
  `.fade-up` (immédiate, bonne LCP). `prefers-reduced-motion` respecté. Aucune grosse librairie.
- **Réalisations gérées par la cliente** via Sanity Studio hébergé (`magi-o.sanity.studio`).
  Fallback statique (2 réalisations de l'ancien site) tant que le CMS est vide → page jamais vide.
- **Perf** : statique, images lazy-load, polices préchargées, JS minimal.
- **SEO** : redirections anciennes URLs (`/case-studies`, `/nos-realisations` → `/realisations`),
  Schema.org LocalBusiness, sitemap, OG.

## SEO / Perf / RGPD (audit 23/06)
- **Police auto-hébergée** : `public/fonts/dm-sans-latin*.woff2` + `@font-face` dans `global.css` (plus de Google Fonts → perf + RGPD).
- **Pages légales** : `mentions-legales.astro` + `politique-de-confidentialite.astro` (liées dans le Footer). Société : SARL MAGI O, SIRET 93393453100015.
- **Carte = Google Maps** (page contact) chargée APRÈS consentement → **bandeau cookies** `CookieBanner.astro` (API `window.magioConsent`, conforme CNIL, lien « Gérer les cookies » dans le footer).
- **`public/robots.txt`** + Schema.org enrichi (geo, hasMap, logo, sameAs conditionnel) dans `Layout.astro`.
- Kits de design déplacés de `public/` → `design-kits/` (hors déploiement).

## Commandes
```bash
npm run dev      # dev (localhost:4321)
npm run build    # build statique -> dist/
cd studio && npm run deploy   # déploie le CMS pour la cliente
```

## Sanity (créé ✅ — déployé en ligne)
- Project ID **`mdwcpy78`** · Organization ID **`oXWck7SWH`** (compte **skypeo**) · dataset `production`.
  `.env` racine + `studio/.env` remplis. (Ancien projet `c8h4b9xf` sur compte perso = abandonné.)
- Studio **déployé** : https://magi-o.sanity.studio/ (`cd studio && npm run deploy`). Local : `npm run dev` → :3333.
- ⚠️ rester en **v3** (3.99) au déploiement : répondre « Continue anyway » à l'invite v4. Jamais `npm audit fix --force`.
- ⚠️ Le `npx sanity login` ne marche QUE si le port 4321 est libre (Astro le squatte → callback 404). Couper `npm run dev` avant de se logger.

## ⏭️ Reprise (point d'arrêt 11/06 soir)
1. Tester studio localhost:3333 (ajouter une réalisation test)
2. `cd studio && npm run deploy` (hostname `magi-o` → magi-o.sanity.studio)
3. Inviter la cliente (Members, son Gmail) + CORS (API → CORS origins)
4. Clé **Web3Forms** → `PUBLIC_WEB3FORMS_KEY` dans `.env`
5. Déployer site sur Cloudflare Pages/Netlify + webhook Sanity (auto-rebuild)
6. Remplacer URLs Facebook/Instagram (placeholders) dans `src/consts.ts`

Détails complets dans `README.md`.
```

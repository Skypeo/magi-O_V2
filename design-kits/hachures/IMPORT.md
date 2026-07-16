# Import dans le repo Astro — MAGI Ø

Deux fichiers + deux images + quelques lignes dans `Layout.astro` et `global.css`.

## 1. Images
Copier dans **`public/images/`** :
- `emblem-white.png`  (silhouette blanche de l'emblème — sert au loader + filigranes sombres)
- `emblem-pine.png`   (emblème teinté vert sapin — filigrane sur fonds clairs)

(fournies dans `claude-code/public-images/`)

## 2. CSS
Ouvrir **`src/styles/global.css`** et y fusionner le contenu de **`global-additions.css`** :
- ajouter `--color-cream`, `--color-sand`, `--font-serif` **dans le bloc `@theme` existant** ;
- coller les utilitaires `.font-serif`, `.arch`, `.arch-sm`, `.grain` à la suite.

## 3. Police Cormorant Garamond
Dans **`src/layouts/Layout.astro`**, `<head>`, à côté du `<link>` DM Sans, ajouter la famille
(ou remplacer l'URL DM Sans par celle-ci qui charge les deux) :

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
/>
```

## 4. Loader
- Déposer **`src/components/Loader.astro`** dans le projet.
- Dans **`src/layouts/Layout.astro`** :

```astro
---
import Loader from '../components/Loader.astro';   // ← ajouter cet import
// ...le reste inchangé
---
<body class="overflow-x-hidden">
  <Loader />                                        <!-- ← juste après <body> -->
  <a href="#contenu" ...>Aller au contenu</a>
  <Header />
  ...
```

Le loader est autonome (styles + script inclus, `prefers-reduced-motion` géré). Il se cache
~2,9 s après `load`, ou au clic.

## 5. Page d'accueil
Remplacer **`src/pages/index.astro`** par celui fourni.
Il réutilise `Layout`, `Icon.astro`, et les données de `consts.ts` (SERVICES, VALUES, FAQ, CONTACT, SITE).
Toutes les animations s'appuient sur les classes déjà présentes dans ton `global.css`
(`data-reveal`, `.marquee`, `.fade-up`, `.card-lift`, `[data-count]`…) + les ajouts de l'étape 2.

## Vérif
```bash
npm run dev   # http://localhost:4321
```
- Le loader (eau qui remplit l'emblème) apparaît au chargement.
- Le hero crème + titre serif s'affiche, le reste du contenu vient de `consts.ts`.

> Note : le reste des pages (services, réalisations, contact) garde ton code actuel.
> Pour les passer au même style, réutilise les mêmes briques : `font-serif` sur les titres,
> `.arch`/`.arch-sm` sur les images, filigrane `emblem-*`, fond `bg-cream`.

# MAGI Ø — Site vitrine (Astro + Tailwind + Sanity)

Refonte du site [magi-o.fr](https://magi-o.fr) : plombier / chauffagiste / électricien à Colmar.
Objectif : **ultra-rapide**, moderne, et **gérable par la cliente** (ajout de réalisations en autonomie).

## Stack

| Brique | Rôle |
|---|---|
| **Astro 5** | Génère un site 100 % statique (HTML), quasi zéro JS → très rapide |
| **Tailwind CSS 4** | Styles utilitaires, charte reprise de l'ancien site (vert sapin + corail) |
| **Sanity** | CMS où la cliente ajoute ses réalisations (photo + texte) |
| **Web3Forms** | Envoi du formulaire de contact (gratuit, sans serveur) |

Hébergement recommandé : **Cloudflare Pages** ou **Netlify** (gratuit).

## Démarrage rapide

```bash
npm install
cp .env.example .env   # puis remplir les clés (voir plus bas)
npm run dev            # http://localhost:4321
npm run build          # génère /dist
```

## Structure

```
src/
├── consts.ts            # ⭐ Tout le contenu texte (coordonnées, services, FAQ…) — à éditer ici
├── lib/sanity.ts        # Connexion au CMS + récupération des réalisations
├── layouts/Layout.astro # <head>, SEO, Schema.org, animations
├── components/          # Header (nav pill), Footer, PageHeader, Icon
├── pages/               # index, services, realisations, contact
└── styles/global.css    # Charte couleur + animations
public/images/           # Images reprises de l'ancien site
studio/                  # CMS Sanity (interface cliente) — projet séparé
```

## 1) Formulaire de contact (Web3Forms)

1. Aller sur [web3forms.com](https://web3forms.com), entrer l'email de réception (`magi.o.services@gmail.com`).
2. Copier la **Access Key** reçue.
3. La coller dans `.env` :
   ```
   PUBLIC_WEB3FORMS_KEY=la-cle-recue
   ```

## 2) CMS des réalisations (Sanity)

> ℹ️ Les avertissements `npm audit` (prismjs, uuid) sont **normaux et sans danger** :
> ce sont des dépendances internes de l'interface d'admin, pas du site public.
> **Ne lancez PAS `npm audit fix --force`** (ça casse Sanity).

### Étape 1 — Créer le projet dans le navigateur (le plus simple)

1. Aller sur [sanity.io/manage](https://sanity.io/manage) et se connecter (Google / GitHub / email).
2. Cliquer sur **« Create new project »**, nom : `MAGI O`.
   → un dataset **`production`** est créé automatiquement.
3. Sur la page du projet, **copier le « Project ID »** (ex. `a1b2c3d4`).

### Étape 2 — Renseigner le Project ID (2 fichiers)

- Dans **`studio/`**, copier `.env.example` en `.env` et coller l'ID :
  ```
  SANITY_STUDIO_PROJECT_ID=votre-project-id
  ```
- À la **racine**, dans `.env` :
  ```
  PUBLIC_SANITY_PROJECT_ID=votre-project-id
  PUBLIC_SANITY_DATASET=production
  ```

### Étape 3 — Tester puis publier l'interface cliente

```bash
cd studio
npx sanity login      # ouvre le navigateur pour se connecter
npm run dev           # test local sur http://localhost:3333
npm run deploy        # publie sur https://magi-o.sanity.studio
```

➡️ La cliente se connecte sur **https://magi-o.sanity.studio**, clique
**Réalisations → +**, glisse une photo, saisit un titre + une catégorie, puis **Publish**.

### Étape 4 — Autoriser le site à lire les données

Dans [sanity.io/manage](https://sanity.io/manage) → projet → **API → CORS origins** →
**Add CORS origin** : ajouter l'URL du site (ex. `https://magi-o.fr`) et, pour les tests,
`http://localhost:4321`.

## 3) Mise en ligne du site

1. Pousser le repo sur GitHub.
2. Sur **Cloudflare Pages** / **Netlify** : connecter le repo, build `npm run build`, dossier `dist`.
3. Renseigner les variables d'environnement (`PUBLIC_*`) dans l'interface d'hébergement.
4. **Auto-publication des réalisations** : créer un *Deploy Hook* côté hébergeur, puis
   l'ajouter dans Sanity (**API → Webhooks**) pour que chaque publication d'une réalisation
   relance le build automatiquement (~1 min, la cliente n'a rien d'autre à faire).

## Modifier le contenu (textes, services, FAQ)

Tout est centralisé dans **`src/consts.ts`**. Les réalisations sont gérées via Sanity.

## Performance & SEO

- Site statique, images en lazy-load, polices préchargées, JS minimal.
- Balisage **Schema.org `Plumber`** (SEO local), sitemap auto, Open Graph.
- Redirections des anciennes URLs WordPress (`/case-studies`, `/nos-realisations`) → `/realisations`.

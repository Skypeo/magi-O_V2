# Hachures gravées — mode d'emploi

Le motif des lignes à l'intérieur du **Ø**, en texture de fond de section (diagonale « / », tuilable).

## 1. Images → `public/images/`
- `engrave-diag-light.png` → pour les sections à **fond sombre** (vert sapin / pine)
- `engrave-diag-dark.png`  → pour les sections à **fond clair** (crème / blanc)

## 2. CSS
Colle le contenu de `engrave.css` dans `src/styles/global.css`.

## 3. Usage dans une section
La section doit être `relative` + `overflow-hidden`. On pose la couche de texture
juste avant le contenu, et on garde le contenu au-dessus (`relative`).

```astro
<section class="relative overflow-hidden bg-pine-900 py-20 text-white">
  <div class="engrave engrave-light" aria-hidden="true"></div>

  <div class="relative mx-auto max-w-7xl px-6">
    ...le contenu de la section...
  </div>
</section>
```

Sur fond clair :

```astro
<section class="relative overflow-hidden bg-cream py-24">
  <div class="engrave engrave-dark" aria-hidden="true"></div>
  <div class="relative ...">...</div>
</section>
```

## Réglages
- **Densité** : `background-size` (ex. `180px` = plus serré, `300px` = plus aéré).
- **Intensité** : ajoute une opacité sur la couche, ex. `class="engrave engrave-light opacity-70"`.
- **Plein cadre** (sans fondu sur les bords) : supprime les deux lignes `mask-image` du `.engrave`.
```

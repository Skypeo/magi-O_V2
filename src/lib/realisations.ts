import { getRealisations, urlForImage } from './sanity';

// Forme normalisée d'une réalisation prête à l'affichage (liste + page détail).
export interface RealisationItem {
  id: string;
  slug: string;
  titre: string;
  categorie: string;
  description?: string;
  imgUrl: string | null; // photo de couverture
  gallery: string[]; // photos supplémentaires du chantier
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // retire les accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Contenu de secours (les 2 réalisations de l'ancien site) tant que le CMS
// n'est pas rempli — la page n'est jamais vide.
const FALLBACK: RealisationItem[] = [
  {
    id: 'fb-detection-fuite',
    slug: 'detection-de-fuite',
    titre: 'Réparation de fuite',
    categorie: 'Détection de fuite',
    description:
      "Les fuites n'attendent pas le retour des beaux jours. Retour en image sur une détection de fuite par gaz traceur et réparation sur une canalisation enterrée dans une cour. Un travail fastidieux et de précision.",
    imgUrl: '/images/realisation-detection-fuite.jpg',
    gallery: ['/images/realisation-detection-fuite.jpg'],
  },
  {
    id: 'fb-salle-de-bain',
    slug: 'renovation-salle-de-bain',
    titre: 'Rénovation de salle de bain',
    categorie: 'Salle de bain',
    description:
      'Installation et rénovation de salle de bain : des chantiers propres, soignés et durables, réalisés dans les règles de l’art.',
    imgUrl: '/images/realisation-plomberie.jpg',
    gallery: ['/images/realisation-plomberie.jpg'],
  },
];

// Renvoie les réalisations normalisées : Sanity si disponible, sinon le fallback.
export async function getRealisationItems(): Promise<RealisationItem[]> {
  const realisations = await getRealisations();
  if (realisations.length === 0) return FALLBACK;

  return realisations.map((r) => ({
    id: r._id,
    slug: r.slug && r.slug.length > 0 ? r.slug : slugify(r.titre),
    titre: r.titre,
    categorie: r.categorie,
    description: r.description,
    imgUrl: urlForImage(r.image)?.width(900).height(675).fit('crop').url() ?? null,
    gallery: (r.galerie ?? [])
      .map((img) => urlForImage(img)?.width(1200).fit('max').url() ?? null)
      .filter((u): u is string => Boolean(u)),
  }));
}

// Catégories officielles affichées comme onglets de filtre (toujours les 4,
// même sans chantier associé). Doit rester aligné avec la liste du schéma
// Sanity (studio/schemaTypes/realisation.ts).
export const REALISATION_CATEGORIES = [
  'Salle de bain',
  'Réparation de fuite',
  'Détection de fuite',
  'Installation chauffage',
];

// Liste ordonnée des catégories présentes parmi les chantiers (fallback / usage interne).
export function getCategories(items: RealisationItem[]): string[] {
  return [...new Set(items.map((i) => i.categorie))];
}

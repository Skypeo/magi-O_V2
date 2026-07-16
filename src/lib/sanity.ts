import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Le client n'est créé que si Sanity est configuré (.env rempli).
// Ainsi le site build même avant la mise en place du CMS.
export const sanityConfigured = Boolean(projectId);

export const sanityClient = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true, // CDN = lecture rapide et gratuite
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source: any) {
  if (!builder || !source) return null;
  return builder.image(source);
}

export interface Realisation {
  _id: string;
  titre: string;
  slug?: string;
  categorie: string;
  description?: string;
  image: any;
  galerie?: any[];
  date?: string;
}

// Récupère les réalisations publiées par la cliente, les plus récentes d'abord.
export async function getRealisations(): Promise<Realisation[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch(
      `*[_type == "realisation"] | order(coalesce(date, _createdAt) desc){
        _id, titre, "slug": slug.current, categorie, description, image, galerie, date
      }`
    );
  } catch {
    return [];
  }
}

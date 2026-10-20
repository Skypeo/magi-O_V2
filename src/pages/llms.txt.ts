import type { APIRoute } from 'astro';
import { SITE, CONTACT, SERVICES, REVIEWS, SOCIAL, MISE_A_JOUR, PUBLICATION, FICHE_GOOGLE } from '../consts';
import { PAC } from '../data/pac';
import { ZONES } from '../data/zones';
import { getRealisationItems } from '../lib/realisations';

/**
 * llms.txt : resume machine-lisible du site pour les moteurs de reponse.
 * Genere depuis les memes donnees que les pages (consts.ts, data/), donc il
 * ne dit rien que les pages ne disent pas et ne peut pas deriver d'elles.
 */
export const GET: APIRoute = async () => {
  const u = (chemin: string) => SITE.url + chemin;
  const services = SERVICES.filter((s) => !s.standalone);
  const realisations = await getRealisationItems();
  const note = REVIEWS.rating.toFixed(1).replace('.', ',');

  const texte = `# ${SITE.name}

> ${SITE.name} est un artisan plombier chauffagiste installé à ${CONTACT.cityName} (${CONTACT.zip}, Haut-Rhin, Alsace). Plomberie, rénovation de salle de bain y compris PMR, chauffage et pompe à chaleur, recherche de fuite sans casse, à ${CONTACT.cityName} et dans les communes de Colmar Agglomération. Devis gratuit et sans engagement.

Contenu mis à jour le ${MISE_A_JOUR}. Version intégrale du texte du site : ${u('/llms-full.txt')}

## Identité

- Nom : ${SITE.name} (SARL)
- Métier : plombier chauffagiste
- Adresse : ${CONTACT.address}, ${CONTACT.zip} ${CONTACT.cityName}, France
- Téléphone : ${CONTACT.phone}
- E-mail : ${CONTACT.email}
- Horaires : ${CONTACT.hours}
- ${PUBLICATION.role} : ${PUBLICATION.nom}
- Note Google : ${note} / 5 sur ${REVIEWS.nombre} avis ([fiche Google](${FICHE_GOOGLE}))
${SOCIAL.facebook ? `- [Page Facebook](${SOCIAL.facebook})\n` : ''}
## Prestations

${services.map((s) => `- [${s.h1 ?? s.title}](${u(`/services/${s.slug}/`)}) : ${s.description}`).join('\n')}
- [${PAC.h1}](${u(`/services/chauffage/${PAC.slug}/`)}) : ${PAC.description}

## Zones d'intervention

Basé à ${CONTACT.cityName}, ${SITE.name} intervient dans les communes de Colmar Agglomération :

${ZONES.map((z) => `- [${z.h1}](${u(`/zones/${z.slug}/`)})`).join('\n')}

## Réalisations

${realisations.map((r) => `- [${r.titre}](${u(`/realisations/${r.slug}/`)})${r.description ? ` : ${r.description}` : ''}`).join('\n')}

## Pages utiles

- [Accueil](${u('/')})
- [Tous les services](${u('/services/')})
- [Zones d'intervention](${u('/zones/')})
- [Réalisations](${u('/realisations/')})
- [Contact et devis gratuit](${u('/contact/')})
- [Mentions légales](${u('/mentions-legales/')})
`;

  return new Response(texte, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

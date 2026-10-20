import type { APIRoute } from 'astro';
import { SITE, CONTACT, SERVICES, FAQ, VALUES, MISE_A_JOUR } from '../consts';
import type { FaqItem } from '../consts';
import { PAC } from '../data/pac';
import { ZONES } from '../data/zones';
import { getRealisationItems } from '../lib/realisations';

/**
 * Pendant complet de llms.txt : le texte des prestations, des communes, des
 * realisations et de la FAQ, pour qu'un moteur de reponse lise tout le site
 * en une requete. Genere depuis les memes donnees que les pages.
 */
export const GET: APIRoute = async () => {
  const u = (chemin: string) => SITE.url + chemin;
  const qr = (liste: FaqItem[] = []) => liste.map((x) => `### ${x.q}\n\n${x.a}`).join('\n\n');
  const realisations = await getRealisationItems();

  const services = SERVICES.filter((s) => !s.standalone)
    .map((s) => {
      const parties = [
        `## ${s.h1 ?? s.title}`,
        `Page : ${u(`/services/${s.slug}/`)}`,
        ...(s.lead ?? [s.intro]),
        ...s.sections.map((b) =>
          [
            `### ${b.heading}`,
            ...(b.text ? [b.text] : []),
            ...(b.paragraphs ?? []),
            ...(b.items ?? []).map((i) => `- ${i}`),
          ].join('\n\n')
        ),
      ];
      if (s.callout) parties.push([`### ${s.callout.title}`, ...s.callout.paragraphs].join('\n\n'));
      if (s.benefits.length) parties.push(s.benefits.map((b) => `- ${b}`).join('\n'));
      if (s.faq?.length) parties.push(qr(s.faq));
      return parties.join('\n\n');
    })
    .join('\n\n---\n\n');

  const pac = [
    `## ${PAC.h1}`,
    `Page : ${u(`/services/chauffage/${PAC.slug}/`)}`,
    ...PAC.lead,
    `### ${PAC.pourquoi.titre}`,
    ...PAC.pourquoi.paragraphes,
    '### Déroulement',
    PAC.etapes.map((e, i) => `${i + 1}. ${e.titre} : ${e.texte}`).join('\n'),
    qr(PAC.faq),
  ].join('\n\n');

  const communes = ZONES.map((z) =>
    [
      `## ${z.h1}`,
      `Page : ${u(`/zones/${z.slug}/`)}`,
      z.intro,
      z.contexte,
      `### ${z.titreBati}`,
      z.habitat,
      z.angle,
      z.precision,
      `### ${z.titrePrestations}`,
      z.prestations,
      qr(z.faq),
    ].join('\n\n')
  ).join('\n\n---\n\n');

  const chantiers = realisations
    .map((r) => [`## ${r.titre}`, `Page : ${u(`/realisations/${r.slug}/`)}`, `Catégorie : ${r.categorie}`, r.description ?? ''].filter(Boolean).join('\n\n'))
    .join('\n\n');

  const texte = `# ${SITE.name}

> Plombier chauffagiste à ${CONTACT.cityName} (${CONTACT.zip}, Haut-Rhin). ${CONTACT.address}, ${CONTACT.zip} ${CONTACT.cityName}. Téléphone ${CONTACT.phone}, ${CONTACT.email}. Résumé structuré : ${u('/llms.txt')}

Contenu mis à jour le ${MISE_A_JOUR}.

# Nos points forts

${VALUES.map((v) => `- ${v.title} : ${v.text}`).join('\n')}

# Prestations

${services}

---

${pac}

# Zones d'intervention

${communes}

# Réalisations

${chantiers}

# Questions fréquentes

${qr(FAQ)}
`;

  return new Response(texte, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

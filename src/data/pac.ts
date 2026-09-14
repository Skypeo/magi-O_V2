// ============================================================
// Page « Remplacement chaudière vers pompe à chaleur »
// ============================================================
//
// Contenu SORTI de SERVICES.chauffage (consts.ts) : le bloc `callout` et
// trois des quatre questions de sa FAQ, qui portaient toutes sur la pompe
// à chaleur. Elles ont été retirées de la page mère pour qu'aucun
// paragraphe n'existe en double : la page chauffage garde un résumé et
// un lien vers ici.
//
// Texte repris verbatim de l'ancien site. Aucun prix, aucun délai,
// aucune qualification RGE n'y figure : ces éléments demandent une
// confirmation de la cliente avant de pouvoir être écrits.

import type { FaqItem } from '../consts';

export const PAC = {
  slug: 'remplacement-chaudiere-pompe-a-chaleur',
  seoTitle: 'Remplacer sa chaudière par une pompe à chaleur à Colmar',
  h1: 'Remplacer sa chaudière par une pompe à chaleur à Colmar',
  description:
    "Remplacement de chaudière gaz ou fioul par une pompe à chaleur à Colmar : étude de l'installation existante, dimensionnement, pose et mise en service par MAGI O.",
  /** Repris du `lead` de la page Chauffage, recentré sur le remplacement. */
  lead: [
    "Que votre chaudière tombe en panne, arrive en fin de vie, ou que vous souhaitiez simplement réduire votre facture d'énergie, MAGI O vous accompagne dans le choix de la solution la plus adaptée à votre logement, sans jamais vous pousser vers un équipement surdimensionné ou inutilement coûteux.",
  ],
  /** Ancien bloc `callout` de la page Chauffage, repris mot pour mot. */
  pourquoi: {
    titre: 'Pourquoi passer à la pompe à chaleur ?',
    paragraphes: [
      "Une pompe à chaleur consomme moins d'énergie qu'une chaudière classique et réduit durablement votre facture de chauffage. MAGI O étudie votre installation actuelle, vous conseille sur le modèle adapté à votre logement, puis assure une installation complète et un réglage optimal pour votre confort.",
      "En remplaçant votre ancienne chaudière gaz ou fioul, vous pouvez également bénéficier de plusieurs aides de l'État, rendant votre projet encore plus avantageux.",
    ],
  },
  /** Les quatre temps du remplacement, développés depuis l'intitulé de
   *  prestation « étude de l'installation existante, dimensionnement, pose
   *  et mise en service » déjà présent sur la page Chauffage. */
  etapes: [
    {
      titre: "Étude de l'installation existante",
      texte:
        "Nous examinons votre réseau actuel, radiateurs ou plancher chauffant, pour déterminer s'il est compatible avec une pompe à chaleur ou si des adaptations sont nécessaires.",
    },
    {
      titre: 'Dimensionnement',
      texte:
        'Nous vous conseillons sur le modèle adapté à votre logement, sans vous orienter vers un équipement surdimensionné ou inutilement coûteux.',
    },
    {
      titre: 'Pose',
      texte:
        "Nous assurons l'installation complète, du raccordement au retrait de l'ancienne chaudière gaz ou fioul.",
    },
    {
      titre: 'Mise en service et réglage',
      texte:
        "Nous mettons l'installation en service et procédons au réglage, pour votre confort comme pour votre consommation.",
    },
  ],
  benefits: [
    "Étude de l'installation existante",
    'Dimensionnement adapté au logement',
    'Pose, mise en service et réglage',
    "Accompagnement sur les aides de l'État",
  ],
  /** Trois questions retirées de la FAQ de la page Chauffage. */
  faq: [
    {
      q: 'Pouvez-vous remplacer une chaudière par une pompe à chaleur ?',
      a: "Oui. Nous étudions votre installation existante, dimensionnons la pompe à chaleur adaptée, puis réalisons l'installation complète, sa mise en service et son réglage.",
    },
    {
      q: "Quelle est la différence de coût entre une chaudière et une pompe à chaleur à l'usage ?",
      a: "Une pompe à chaleur représente un investissement de départ plus élevé, mais sa consommation électrique est nettement inférieure à celle d'une chaudière classique, ce qui réduit votre facture d'énergie sur le long terme. Nous vous conseillons sur le modèle le plus adapté et le plus rentable pour votre logement.",
    },
    {
      q: "Faut-il changer toute l'installation pour passer à la pompe à chaleur ?",
      a: "Pas nécessairement. Nous étudions votre réseau existant (radiateurs, plancher chauffant) pour déterminer s'il est compatible avec une pompe à chaleur ou si des adaptations sont nécessaires.",
    },
  ] as FaqItem[],
  image: '/images/service-pac-freon.jpg',
};

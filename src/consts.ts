// ============================================================
// MAGI O — Données du site (contenu repris de l'ancien site)
// ============================================================

export const SITE = {
  name: 'MAGI O',
  legalName: 'MAGI O',
  tagline: 'Plomberie · Chauffage · Rénovation · Détection de fuite',
  city: 'Colmar',
  url: 'https://magi-o.fr',
  description:
    "Artisan plombier chauffagiste à Colmar et dans le Haut-Rhin. Détection de fuite sans casse, rénovation de salle de bain, chauffage. Devis gratuit.",
};

export const CONTACT = {
  phone: '06 35 82 42 37',
  phoneRaw: '+33635824237',
  email: 'magi.o.services@gmail.com',
  address: '12 Rue du Peuplier',
  zip: '68000',
  cityName: 'Colmar',
  hours: 'Lundi – Vendredi : 8h00 – 19h00',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=12+Rue+du+Peuplier+68000+Colmar',
};

// Réseaux sociaux. Laisser une chaîne vide masque l'icône correspondante
// (l'Instagram n'est pas encore fourni par la cliente).
export const SOCIAL = {
  facebook: 'https://www.facebook.com/p/MAGI-O-61555832830809/',
  instagram: '',
};

// Date de la derniere mise a jour du contenu (AAAA-MM-JJ). Une seule source
// pour le dateModified du JSON-LD et la date affichee en pied de page : les
// deux disent toujours la meme chose. A changer a chaque modification reelle.
export const MISE_A_JOUR = '2026-10-28';

// Responsable de la publication, tel que nomme dans les mentions legales.
// Signe les pages dans le JSON-LD ; sa page d'identite sur le site est celle
// des mentions legales, ou il figure en clair.
export const PUBLICATION = {
  nom: 'Hamza HAMADA-OUSSENI',
  role: 'Responsable de la publication',
  page: '/mentions-legales/',
};

// Fiche Google de l'entreprise. Le cid est le `rldimm` du lien d'avis
// ci-dessous (REVIEWS.googleUrl) : c'est la meme fiche, sous son adresse stable.
export const FICHE_GOOGLE = 'https://www.google.com/maps?cid=15999692750307481672';

// Avis clients (Google). `googleUrl` = lien « voir tous les avis ».
export const REVIEWS = {
  // Note et total repris de la fiche Google, pas des seuls avis affiches
  // ci-dessous : un visiteur qui clique sur le lien doit retrouver les
  // memes chiffres.
  rating: 4.6,
  nombre: 17,
  googleUrl:
    'https://www.google.com/search?sa=X&sca_esv=7c3c44d1206346ec&rlz=1C1VDKB_frFR949FR949&hl=fr-FR&biw=1536&bih=695&sxsrf=APpeQnsgQdUTk_qO3C8jUInfuuARyqEAOA:1782139710042&q=MAGI%20O%20-%20Plombier%20Chauffagiste%20Electricien%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLW0tDSzNDI3NTA2MDexMDQzN9rAyPiKUd_X0d1TwV9BVyEgJz83KTO1SME5I7E0LS0xPbO4JFXBNSc1uaQoMzkzNU_BsSyzeBErqToA3iqlEX8AAAA&rldimm=15999692750307481672&tbm=lcl&ved=0CAwQ5foLahcKEwiA16nji5uVAxUAAAAAHQAAAAAQCQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2tZMmFFODFWVWN0VlRCVVgxSmlXVTh5VVdwNVdIYxAB',
  items: [
    {
      name: 'Maria Vivanco',
      meta: '6 avis',
      when: 'il y a 2 mois',
      rating: 5,
      text: "Super plombier sur Colmar ! Une équipe très professionnelle, réactive et à l'écoute, qui a su répondre rapidement à mes besoins. Travail impeccable. Encore merci !",
    },
    {
      name: 'Gökay Genç',
      meta: 'Local Guide · 25 avis',
      when: 'il y a 2 mois',
      rating: 5,
      text: "Très satisfait des travaux réalisés pour la création de ma douche. Installation du receveur et de la colonne de douche impeccable, finitions soignées et chantier laissé propre. Le plombier chauffagiste est très professionnel, ponctuel et de bon conseil. Le résultat est à la hauteur de mes attentes. Je recommande vivement !",
    },
    {
      name: 'nadia',
      meta: 'Local Guide · 19 avis',
      when: 'il y a 3 mois',
      rating: 5,
      text: "Entreprise réactive, compétente et très professionnelle. Tous mes interlocuteurs ont été agréables et à l'écoute. Je recommande +++",
    },
    {
      name: 'Sylvie Ritter',
      meta: '14 avis',
      when: 'il y a un an',
      rating: 5,
      text: "J'ai fait appel à cette entreprise MAGI O plombier pour remplacer le mitigeur de ma cuisine, et je suis vraiment ravie du service. La secrétaire très réactive et très sympathique ainsi que le technicien : ponctuel, professionnel et très efficace. Le travail a été fait rapidement, proprement, et le résultat est impeccable. Un service de qualité et prix plus que correct, à recommander à 100% sans hésitation. Merci encore pour cette intervention au top !",
    },
    {
      name: 'catherine guichardiere',
      meta: '5 avis',
      when: 'il y a un an',
      rating: 5,
      text: "Nous avons fait appel 2 fois à cette entreprise : une 1re fois pour la réfection totale d'une salle de bain et la 2e fois pour un branchement sous-évier d'un lave-vaisselle. Nous avons été très satisfaits du travail effectué : rapidité d'intervention, délais tenus, propreté du travail, bons conseils… Nous recommandons vivement cette entreprise.",
    },
  ],
};

export const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Nos réalisations', href: '/realisations/' },
  { label: 'Contact', href: '/contact/' },
];

// 3 blocs de réassurance de la page d'accueil (remplacent Rapidité / Fiabilité / Expertise).
export const VALUES = [
  {
    title: 'Détection technique',
    text: "Matériel de pointe et plusieurs années d'expérience pour localiser les fuites les plus difficiles, sans casse.",
    icon: 'droplet',
  },
  {
    title: 'Intervention en zone difficile',
    text: 'Vide sanitaire, colonne commune, zone encastrée : nous sommes prêts pour tous les défis.',
    icon: 'shield',
  },
  {
    title: 'Rénovation & installation sanitaire',
    text: "Rénovation de salle de bain, y compris PMR, et installation sanitaire neuve : un accompagnement complet pour un résultat qualitatif et durable.",
    icon: 'bath',
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceCallout {
  title: string;
  paragraphs: string[];
}

export interface ServiceSection {
  heading: string;
  text?: string;
  /** Plusieurs paragraphes (reprise fidèle du texte de l'ancien site) */
  paragraphs?: string[];
  items?: string[];
  /** Photo illustrant la section (mise en page alternée) */
  image?: string;
  /** Vidéo illustrant la section (affichée à la place de l'image) */
  video?: string;
  /** Image d'aperçu (poster) affichée avant lecture de la vidéo */
  poster?: string;
}

export interface Service {
  slug: string;
  title: string;
  navLabel: string;
  /** Title complet repris verbatim dans <title> (50 a 60 caracteres, avec la ville) */
  seoTitle?: string;
  /** H1 de la page service : la prestation et le lieu */
  h1?: string;
  subtitle: string;
  /** Bloc de reponse directe sous le H1 (data-reponse) : 40 a 120 mots,
   *  autonome, uniquement des faits deja affirmes par le site. */
  reponse?: string;
  /** Matiere editoriale propre a la page (savoir-metier et contexte local,
   *  jamais un fait sur le client qui ne figure pas deja ailleurs). */
  contexte?: { titre: string; paragraphes: string[] }[];
  short: string;
  description: string;
  intro: string;
  /** Paragraphes d'introduction affichés en tête du contenu (texte exact ancien site) */
  lead?: string[];
  sections: ServiceSection[];
  /** Bloc mis en avant (ex. « Pourquoi passer à la pompe à chaleur ? ») */
  callout?: ServiceCallout;
  /** FAQ dédiée à la page service */
  faq?: FaqItem[];
  benefits: string[];
  image: string;
  icon: string;
  /** Page fille a mettre en avant depuis cette page service */
  approfondir?: { href: string; titre: string; texte: string };
  /** Anciennes URLs WordPress à rediriger vers cette page */
  legacyPaths: string[];
  /** Page autonome (layout dédié) — exclue du template générique et de la sidebar « autres services » */
  standalone?: boolean;
}

// Arborescence Services : Plomberie · Rénovation · Chauffage · Détection de fuite.
export const SERVICES: Service[] = [
  {
    slug: 'plomberie',
    seoTitle: "Plombier à Colmar : dépannage, fuite, débouchage · MAGI O",
    h1: "Plombier à Colmar : dépannage, réparation de fuite, débouchage",
    title: 'Travaux de plomberie',
    navLabel: 'Travaux de plomberie',
    subtitle: '',
    reponse:
      "MAGI O est une entreprise de plomberie installée à Colmar qui assure le dépannage d'urgence du lundi au vendredi, de 8h à 19h, à Colmar et dans les communes voisines. L'équipe répare les fuites sur tuyaux, robinets, raccords et appareils sanitaires, débouche les canalisations au furet ou au jet haute pression, et installe douches, baignoires, lavabos, WC, éviers et chauffe-eau, en construction neuve comme en rénovation. Le devis est gratuit et sans engagement.",
    contexte: [
      {
        titre: "Fuite d'eau : les bons gestes en attendant le plombier",
        paragraphes: [
          "Le premier réflexe est de couper l'eau. Le robinet d'arrêt général se trouve juste avant ou juste après le compteur : au sous-sol, dans un regard au bord du terrain ou dans un placard technique en maison individuelle, souvent dans la gaine palière ou en cave dans un immeuble. Sous un évier, un lavabo ou derrière un WC, un petit robinet d'arrêt permet aussi d'isoler un seul appareil sans priver tout le logement d'eau.",
          "Si l'eau approche d'une prise, d'un tableau électrique ou d'un plafonnier, coupez le disjoncteur de la pièce concernée avant d'éponger. Prenez ensuite quelques photos de la fuite et des dégâts : elles serviront à la déclaration auprès de votre assurance, et nous aident à préparer l'intervention avant de nous déplacer.",
          "Une fuite qui ne se voit pas, une tache qui s'étend sur un mur ou un compteur qui tourne alors que tout est fermé relève d'une autre démarche : la recherche de fuite, que nous menons sans casse dans la grande majorité des cas.",
        ],
      },
      {
        titre: 'Plomberie et bâti colmarien',
        paragraphes: [
          "Colmar mêle des maisons anciennes du centre historique, des immeubles collectifs construits des années 1950 aux années 1970 et des quartiers pavillonnaires plus récents. Chaque époque a sa plomberie : réseaux en plomb ou en acier galvanisé dans l'ancien, colonnes communes en copropriété, cuivre puis multicouche dans les constructions récentes.",
          "Cette diversité explique pourquoi une même panne ne se traite pas de la même façon d'une rue à l'autre. Une colonne commune engage tout un immeuble, une canalisation encastrée dans un mur ancien demande de localiser précisément la fuite avant d'ouvrir, et un raccord sur un réseau récent se remplace sans difficulté.",
        ],
      },
    ],
    faq: [
      {
        q: 'Quels sont vos horaires de dépannage en plomberie à Colmar ?',
        a: "Nous intervenons en dépannage du lundi au vendredi, de 8h à 19h, à Colmar et dans les communes voisines. Appelez directement le 06 35 82 42 37 en décrivant la panne : fuite, canalisation bouchée, chauffe-eau ou WC hors service.",
      },
      {
        q: 'Comment débouchez-vous une canalisation ?',
        a: "Selon l'ampleur du bouchon, nous utilisons un furet pour un débouchage ciblé, ou un jet à haute pression pour éliminer les obstructions les plus tenaces. Toilettes, éviers, lavabos, douches, gouttières et tuyaux d'évacuation sont concernés.",
      },
    ],
    short: 'Installation de sanitaires, rénovation et réparation de fuites.',
    description:
      "Plombier à Colmar : dépannage d'urgence du lundi au vendredi de 8h à 19h, réparation de fuite, débouchage au furet ou haute pression, installation sanitaire.",
    intro:
      "Nous assurons l'installation de sanitaires neufs, la rénovation de vos équipements et la réparation de fuites pour tous vos projets de plomberie, en construction comme en rénovation.",
    lead: [
      "Nous assurons l'installation de sanitaires neufs, la rénovation de vos équipements et la réparation de fuites pour tous vos projets de plomberie, en construction comme en rénovation.",
      "Notre équipe intervient avec soin et précision sur l'ensemble de vos installations sanitaires et de chauffage, en garantissant des travaux fiables, durables et conformes aux normes en vigueur.",
      "Des travaux de plomberie fiables, durables et conformes aux normes, pour votre confort au quotidien.",
    ],
    sections: [
      {
        heading: 'Installation sanitaire',
        image: '/images/plomberie_img/image-1-600x400.webp',
        paragraphs: [
          "Nous proposons des services d'installation de sanitaires pour tous vos projets, qu'il s'agisse de constructions neuves ou de rénovations.",
          "Baignoires, douches cabine ou receveur et paroi, lavabos, toilettes, éviers et chauffe-eaux : chaque équipement est installé avec précision afin d'assurer un confort optimal et une parfaite conformité aux normes.",
          "Nous sélectionnons des matériaux adaptés à vos besoins pour garantir la durabilité et la sécurité de vos installations.",
        ],
      },
      {
        heading: 'Réparation',
        image: '/images/plomberie_img/reparation-avant-apres.webp',
        paragraphs: [
          "Nous intervenons rapidement pour la réparation de toutes vos fuites d'eau, qu'elles concernent des tuyaux, des robinets, des raccords ou des appareils sanitaires.",
          "Grâce à notre expertise et à des outils de détection de pointe, nous localisons les fuites avec précision, y compris dans les zones difficiles d'accès.",
          "Nos réparations sont durables et visent à éviter tout dégât supplémentaire tout en assurant la sécurité de vos installations.",
        ],
      },
      {
        heading: 'Débouchage',
        image: '/images/plomberie_img/image-600x400.webp',
        paragraphs: [
          "Nous proposons des services de débouchage efficaces pour toutes vos canalisations.",
          "Toilettes, éviers, lavabos, douches, gouttières ou tuyaux d'évacuation : nous utilisons des techniques adaptées à chaque situation.",
          "Selon l'ampleur du bouchon, nous intervenons avec un furet pour un débouchage ciblé ou un jet à haute pression pour éliminer les obstructions les plus tenaces.",
        ],
      },
      {
        heading: "Dépannage d'urgence",
        image: '/images/plomberie_img/depannage-cuivre.webp',
        paragraphs: [
          "Nous offrons un service de dépannage d'urgence à Colmar et dans les environs, du lundi au vendredi de 8h à 19h, pour répondre rapidement à tout problème de plomberie imprévu.",
          "Fuite importante, bouchon ou dysfonctionnement urgent : notre équipe se déplace rapidement afin de résoudre le problème et limiter les dégâts.",
          "Nous garantissons une intervention rapide et professionnelle pour restaurer votre confort dans les plus brefs délais.",
        ],
      },
    ],
    benefits: [
      'Installation neuve et rénovation',
      'Réparation de fuites sans dégâts',
      'Débouchage haute pression',
      "Dépannage d'urgence du lundi au vendredi",
    ],
    image: '/images/realisation-plomberie.jpg',
    icon: 'pipe',
    legacyPaths: ['/service/plombier-colmar-travaux-plomberie', '/service-category/plomberie'],
  },
  {
    // NOUVELLE PAGE — Rénovation (salle de bain + adaptation PMR / MaPrimeAdapt').
    slug: 'renovation',
    seoTitle: "Rénovation de salle de bain à Colmar · Douche PMR · MAGI O",
    h1: "Rénovation de salle de bain à Colmar",
    title: 'Rénovation',
    navLabel: 'Rénovation salle de bain',
    subtitle: 'Salle de bain & accessibilité PMR',
    reponse:
      "MAGI O rénove les salles de bain à Colmar et dans le Haut-Rhin : remplacement de baignoire par douche, rénovation complète et mise aux normes de la plomberie. L'entreprise réalise aussi des salles de bain adaptées aux personnes à mobilité réduite et aux seniors, avec douche extra-plate, receveur antidérapant, barres d'appui et hauteurs normées, et accompagne le dossier MaPrimeAdapt'. Une rénovation complète dure généralement une semaine.",
    short: "Rénovation complète de salle de bain et adaptation PMR / MaPrimeAdapt'.",
    description:
      "Rénovation de salle de bain, du remplacement de baignoire par douche à la remise à neuf complète, et adaptation PMR/seniors dans le cadre de MaPrimeAdapt'.",
    intro:
      "MAGI O vous accompagne dans vos projets de rénovation de salle de bain, qu'il s'agisse d'une remise à neuf classique ou d'une adaptation PMR/seniors dans le cadre de MaPrimeAdapt'.",
    lead: [
      "MAGI O vous accompagne dans vos projets de rénovation de salle de bain à Colmar et dans le Haut-Rhin, qu'il s'agisse d'une remise à neuf classique ou d'une adaptation PMR/seniors dans le cadre de MaPrimeAdapt'.",
    ],
    sections: [
      {
        heading: 'Une salle de bain à votre image',
        image: '/images/renovation/salle-de-bain-2.webp',
        paragraphs: [
          "Remplacement de baignoire par douche, rénovation complète, mise aux normes de la plomberie : nous rénovons votre salle de bain de A à Z, avec des matériaux durables et un chantier propre, dans le respect des délais annoncés.",
          "Nous suivons les tendances et innovations du secteur (coloris, matériaux, équipements design) et vous conseillons pour une salle de bain à la fois esthétique, fonctionnelle et actuelle.",
        ],
      },
      {
        heading: "Adapter votre salle de bain pour plus d'autonomie",
        image: '/images/renovation/salle-de-bain-3.webp',
        text:
          "Douche à l'italienne, receveur extra-plat, barres d'appui, hauteurs normées : nous réalisons des salles de bain adaptées aux personnes à mobilité réduite ou aux seniors souhaitant vieillir chez eux en toute sécurité.",
        items: [
          'Douches extra-plates et receveurs antidérapants (classe B)',
          "Barres d'appui et hauteurs aux normes PMR",
          "Accompagnement dans le dossier MaPrimeAdapt'",
          'Contacts de confiance avec des ergothérapeutes',
        ],
      },
      {
        heading: 'Autres rénovations',
        image: '/images/renovation/salle-de-bain-5.webp',
        paragraphs: [
          "Nous intervenons également sur d'autres projets de rénovation liés à la plomberie et au chauffage : rénovation de cuisine (arrivées d'eau, évacuation), remplacement de colonnes d'eau en habitat collectif, ou tout autre projet nécessitant une intervention sur vos réseaux sanitaires.",
        ],
      },
    ],
    faq: [
      {
        q: "Qu'est-ce que MaPrimeAdapt' et qui peut en bénéficier ?",
        a: "MaPrimeAdapt' est une aide financière de l'État destinée aux seniors et aux personnes en situation de handicap pour adapter leur salle de bain et leur logement, sans audit énergétique requis. Elle est soumise à des conditions de ressources et d'éligibilité.",
      },
      {
        q: 'Faut-il un diagnostic avant une rénovation PMR ?',
        a: "Oui, un diagnostic est nécessaire pour définir les adaptations utiles à votre situation. Il est généralement réalisé par un ergothérapeute ou un AMO, dont nous pouvons vous mettre en relation.",
      },
      {
        q: 'Combien de temps dure une rénovation de salle de bain ?',
        a: "Cela dépend de l'ampleur des travaux, mais une rénovation complète dure généralement une semaine.",
      },
    ],
    benefits: [
      'Rénovation complète de salle de bain',
      "Adaptation PMR / MaPrimeAdapt'",
      'Matériaux durables et chantier propre',
      'Respect des délais annoncés',
    ],
    image: '/images/renovation/salle-de-bain-1.webp',
    icon: 'bath',
    legacyPaths: [],
  },
  {
    slug: 'chauffage',
    seoTitle: "Chauffagiste à Colmar : chaudière, PAC, panne · MAGI O",
    h1: "Chauffagiste à Colmar : chaudière, pompe à chaleur, panne de chauffage",
    title: 'Chauffage & pompe à chaleur',
    navLabel: 'Chauffage',
    subtitle: '',
    reponse:
      "MAGI O est un chauffagiste installé à Colmar, 12 rue du Peuplier. L'entreprise installe et remplace les chaudières gaz, électriques et fioul, remplace une chaudière par une pompe à chaleur, pose radiateurs et planchers chauffants, et intervient en cas de panne de chauffage du lundi au vendredi, de 8h à 19h, à Colmar et dans les communes voisines. Chaque projet commence par une étude de l'installation existante et un devis gratuit, sans engagement.",
    contexte: [
      {
        titre: 'Se chauffer à Colmar : un hiver qui pèse sur le choix',
        paragraphes: [
          "Abritée par les Vosges, Colmar compte parmi les villes les plus sèches de France, mais son climat reste semi-continental : hivers froids, gelées fréquentes et périodes de grand froid qui sollicitent le chauffage d'octobre à avril. Un équipement se choisit donc sur les jours les plus froids de l'hiver alsacien, pas sur une température moyenne.",
          "C'est particulièrement vrai pour une pompe à chaleur air/eau, dont le rendement baisse quand la température extérieure chute. Bien dimensionnée, elle chauffe un logement colmarien tout l'hiver ; sous-dimensionnée, elle laisse la résistance d'appoint faire le travail et la facture d'électricité grimper.",
        ],
      },
      {
        titre: 'Ancien, collectif, récent : trois installations différentes',
        paragraphes: [
          "Dans les maisons anciennes et les immeubles du centre, on trouve souvent des radiateurs en fonte prévus pour une eau très chaude. Ils fonctionnent avec une chaudière, mais demandent une pompe à chaleur haute température ou une adaptation du réseau. Dans les copropriétés des années 1960 et 1970, la chaudière gaz individuelle murale domine, et son remplacement par un modèle à condensation impose de vérifier le conduit d'évacuation et l'écoulement des condensats.",
          "Les maisons récentes équipées d'un plancher chauffant, à l'inverse, fonctionnent à basse température : c'est la configuration la plus favorable à une pompe à chaleur.",
        ],
      },
      {
        titre: 'Panne de chauffage : ce que vous pouvez vérifier avant d’appeler',
        paragraphes: [
          "Sur une chaudière murale, regardez le manomètre : une pression nettement inférieure à 1 bar, installation froide, suffit souvent à provoquer une mise en sécurité. Vérifiez aussi que le thermostat d'ambiance a des piles chargées et demande bien du chauffage, que le disjoncteur de la chaudière n'a pas sauté et, pour une chaudière gaz, que le robinet d'arrivée est ouvert.",
          "Si la chaudière affiche un code défaut, notez-le avant de nous appeler : il oriente le diagnostic. Au-delà de ces vérifications, ne démontez rien et ne réarmez pas une chaudière qui se remet en sécurité à répétition.",
        ],
      },
    ],
    short: 'Chaudières, pompes à chaleur, radiateurs et planchers chauffants.',
    description:
      "Chauffagiste à Colmar : installation et remplacement de chaudière gaz, fioul ou électrique, pompe à chaleur, radiateurs, panne de chauffage. Devis gratuit.",
    intro:
      "Que votre chaudière tombe en panne, arrive en fin de vie, ou que vous souhaitiez simplement réduire votre facture d'énergie, MAGI O vous accompagne dans le choix de la solution la plus adaptée à votre logement.",
    lead: [
      "Que votre chaudière tombe en panne, arrive en fin de vie, ou que vous souhaitiez simplement réduire votre facture d'énergie, MAGI O vous accompagne dans le choix de la solution la plus adaptée à votre logement, sans jamais vous pousser vers un équipement surdimensionné ou inutilement coûteux.",
    ],
    sections: [
      {
        heading: 'Nos prestations chauffage',
        image: '/images/chauffage/2149334232-1.webp',
        text: "Nous intervenons sur l'ensemble de votre installation de chauffage :",
        items: [
          'Installation et remplacement de chaudières (gaz, électrique, fioul)',
          "Remplacement chaudière → pompe à chaleur : étude de l'installation existante, dimensionnement, pose et mise en service",
          'Radiateurs (installation, remplacement)',
          'Planchers chauffants',
        ],
      },
    ],
    faq: [
      {
        q: 'Intervenez-vous en cas de panne de chauffage ?',
        a: "Oui, du lundi au vendredi de 8h à 19h, à Colmar et dans les communes voisines. Nous diagnostiquons la panne, puis procédons si nécessaire au remplacement de l'équipement défectueux : chaudière, pompe à chaleur ou radiateur.",
      },
      {
        q: 'Quels types de chaudières installez-vous ?',
        a: "Nous installons et remplaçons des chaudières gaz, électriques et fioul. Le choix dépend de votre logement, de l'énergie disponible et de votre réseau de radiateurs ou de plancher chauffant : nous étudions l'installation existante avant de proposer un équipement.",
      },
      {
        q: 'Pouvez-vous ajouter ou remplacer des radiateurs ?',
        a: "Oui. Nous installons et remplaçons des radiateurs, et posons des planchers chauffants. Le nouvel émetteur est choisi en fonction du générateur qui l'alimente, chaudière ou pompe à chaleur, pour que l'ensemble chauffe correctement sans surconsommer.",
      },
    ],
    approfondir: {
      href: '/services/chauffage/remplacement-chaudiere-pompe-a-chaleur/',
      titre: 'Remplacer sa chaudière par une pompe à chaleur',
      texte:
        "Étude de l'installation existante, dimensionnement, pose et mise en service : le détail du remplacement, et les réponses aux questions qui reviennent le plus.",
    },
    benefits: [
      'Étude personnalisée de votre installation',
      'Solutions performantes et économes en énergie',
      'Expertise remplacement chaudière → pompe à chaleur',
      "Accompagnement sur les aides de l'État",
    ],
    image: '/images/service-pac-freon.jpg',
    icon: 'flame',
    legacyPaths: ['/service/chauffagiste-colmar', '/service-category/chauffage', '/pompe-a-chaleur-colmar'],
  },
  {
    slug: 'detection-de-fuite',
    seoTitle: "Recherche de fuite d'eau à Colmar, sans casse · MAGI O",
    h1: "Recherche de fuite d'eau à Colmar, sans casse",
    title: 'Détection de fuite',
    navLabel: 'Détection de fuite',
    subtitle: '',
    reponse:
      "La recherche de fuite sans casse consiste à localiser l'origine d'une fuite d'eau sans ouvrir murs ni sols. À Colmar, MAGI O utilise caméras thermiques et endoscopiques, relevés hygrométriques, traçage par gaz, fumigène ou colorant et recherche acoustique, sur canalisations apparentes, encastrées ou enterrées comme sur les infiltrations et taches d'humidité. La localisation sans casse aboutit dans la grande majorité des cas ; une ouverture ciblée n'intervient qu'en dernier recours.",
    short: 'Localisation sans casse grâce à des technologies de pointe.',
    description:
      "Recherche de fuites sans casse grâce à des technologies avancées : caméras thermiques, recherche acoustique, gaz traceur et relevés d'humidité.",
    intro:
      "Recherche de fuites sans casse grâce à des équipements de haute technologie : caméras thermiques et endoscopiques, relevés hygrométriques, traçage par gaz, fumigène ou colorant, et recherche acoustique pour identifier les fuites invisibles.",
    lead: [
      "Recherche de fuites sans casse grâce à des équipements de haute technologie et des techniques de pointe : nous localisons précisément l'origine d'une fuite tout en préservant vos installations, avec des résultats rapides, fiables et sans dégradation.",
    ],
    sections: [
      {
        heading: 'Recherche de fuite technique',
        image: '/images/fuite/recherche-fuite-technique.webp',
        paragraphs: [
          "Grâce à des caméras thermiques et endoscopiques, nous inspectons en profondeur vos canalisations, murs et réseaux, y compris dans les zones difficiles d'accès ou encastrées.",
          "Nous complétons ces investigations par des relevés hygrométriques, ainsi que par des méthodes de traçage par gaz, fumigène ou colorant, afin de détecter avec précision les fuites situées dans des réseaux enterrés ou dissimulés.",
          "Lorsque nécessaire, nous utilisons également la recherche acoustique, qui permet d'identifier les fuites invisibles en analysant les sons générés par l'écoulement de l'eau.",
        ],
      },
      {
        heading: 'Diagnostic et expertise',
        video: '/images/fuite/diagnostic-camera-thermique.mp4',
        poster: '/images/fuite/diagnostic-camera-thermique-poster.webp',
        paragraphs: [
          "Nous réalisons également des diagnostics complets pour identifier l'origine de divers problèmes liés à vos installations.",
          "À l'aide de relevés de taux d'humidité, nous détectons les zones sujettes aux infiltrations et aux problèmes d'humidité. Nous analysons également les surconsommations d'eau, afin d'identifier d'éventuelles fuites ou dysfonctionnements invisibles.",
          "En cas de doute sur la performance de vos installations, nous effectuons un diagnostic d'isolation thermique, permettant de repérer les pertes d'énergie liées à une mauvaise isolation ou à un défaut d'installation.",
        ],
      },
      {
        heading: 'Recherche de fuite destructive',
        image: '/images/fuite/recherche-fuite-destructive.webp',
        paragraphs: [
          "En dernier recours, lorsque les méthodes de détection non destructives ne suffisent pas à localiser l'origine d'une fuite, nous pouvons être amenés à réaliser une recherche destructive ciblée.",
          "Cette intervention consiste à effectuer des ouvertures limitées et maîtrisées, uniquement lorsque cela est indispensable, afin d'accéder directement à la source du problème. Nous intervenons avec soin et rigueur, dans le but de réduire au maximum les dommages et de procéder à une réparation rapide et efficace.",
          "Bien que plus intrusive, cette méthode garantit une résolution fiable et définitive lorsque les autres techniques atteignent leurs limites.",
        ],
      },
      {
        heading: 'Types de sinistres pris en charge',
        image: '/images/fuite/MagiOPic-_1__11zon.webp',
        text:
          "Nos équipements et nos méthodes d'intervention nous permettent de traiter tous types de sinistres liés à l'eau, notamment :",
        items: [
          "Taches d'humidité",
          'Apparition de moisissures',
          'Infiltration depuis la toiture',
          'Fuite d’eau sur tuyauterie apparente, encastrée ou enterrée',
          "Infiltration d'eau pluviale",
          "Infiltration d'eau dans les murs ou les sols",
        ],
      },
    ],
    benefits: [
      'Recherche de fuite sans casse lorsque possible',
      'Technologies de pointe et méthodes précises',
      'Interventions ciblées et maîtrisées',
      'Diagnostics fiables et rapports exploitables',
    ],
    image: '/images/fuite/recherche-fuite-technique.webp',
    icon: 'droplet',
    legacyPaths: ['/service/detection-de-fuite', '/service-category/detection-de-fuite'],
  },
];

// Foire aux questions — reprise du contenu de l'ancien site.
export const FAQ = [
  {
    q: 'Proposez-vous un devis gratuit pour vos interventions ?',
    a: "Oui, totalement. Nous établissons un devis gratuit et sans engagement après analyse de votre situation. Chaque intervention est expliquée clairement, avec une transparence totale sur les tarifs.",
  },
  {
    q: 'Que faire en cas de fuite d’eau soudaine à domicile ?',
    a: "Repérez et coupez l'arrivée d'eau, puis contactez-nous rapidement. Nous intervenons en urgence pour sécuriser l'installation et limiter les dégâts.",
  },
  {
    q: 'Intervenez-vous pour les fuites sur ballon d’eau chaude ou chauffe-eau ?',
    a: "Oui. Nous prenons en charge les fuites sur ballons d'eau chaude, chauffe-eau et installations de chauffage. Un diagnostic précis est réalisé afin de proposer la solution la plus adaptée.",
  },
  {
    q: 'Réalisez-vous des rénovations de salle de bain adaptées PMR ?',
    a: "Oui. Nous rénovons votre salle de bain de A à Z et réalisons des adaptations PMR (douche à l'italienne, receveur extra-plat, barres d'appui, hauteurs normées), avec un accompagnement possible dans le cadre de MaPrimeAdapt'.",
  },
  {
    q: 'Que faire si ma facture d’eau augmente soudainement ?',
    a: "Vérifiez d'abord votre consommation. Si le compteur tourne alors que tout est fermé, il y a probablement une fuite. Nous la localisons rapidement, sans casse.",
  },
  {
    q: 'Est-ce que vous devez casser des murs ou des sols pour trouver une fuite ?',
    a: "Non, dans la grande majorité des cas. Nous localisons les fuites sans casse grâce à du matériel spécialisé (caméra thermique, gaz traceur, recherche acoustique), dans environ 90 % des situations.",
  },
];

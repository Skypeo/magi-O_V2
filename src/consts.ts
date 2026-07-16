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
    "MAGI O, votre artisan plombier-chauffagiste à Colmar (68) et dans le Haut-Rhin. Plus de 10 ans d'expérience. Rénovation de salle de bain, détection de fuite sans casse, chauffage et pompe à chaleur. Devis gratuit.",
};

export const CONTACT = {
  phone: '06 35 82 42 37',
  phoneRaw: '+33635824237',
  email: 'magi.o.services@gmail.com',
  address: '12 Rue du Peuplier',
  zip: '68000',
  cityName: 'Colmar',
  hours: 'Lundi – Vendredi : 8h00 – 17h00',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=12+Rue+du+Peuplier+68000+Colmar',
};

export const SOCIAL = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
};

// Avis clients (Google). `googleUrl` = lien « voir tous les avis ».
export const REVIEWS = {
  rating: 5,
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
  { label: 'Services', href: '/services' },
  { label: 'Nos réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' },
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
}

export interface Service {
  slug: string;
  title: string;
  navLabel: string;
  subtitle: string;
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
  /** Anciennes URLs WordPress à rediriger vers cette page */
  legacyPaths: string[];
  /** Page autonome (layout dédié) — exclue du template générique et de la sidebar « autres services » */
  standalone?: boolean;
}

// Arborescence Services : Plomberie · Rénovation · Chauffage · Détection de fuite.
export const SERVICES: Service[] = [
  {
    slug: 'plomberie',
    title: 'Travaux de plomberie',
    navLabel: 'Travaux de plomberie',
    subtitle: '',
    short: 'Installation de sanitaires, rénovation et réparation de fuites.',
    description:
      "Installation de sanitaires, rénovation d'équipements et réparation de fuites : douches, baignoires, lavabos, éviers et WC, en construction comme en rénovation.",
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
        image: '/images/plomberie_img/55822-1.webp',
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
        image: '/images/plomberie_img/image-2-600x400.webp',
        paragraphs: [
          "Nous offrons un service de dépannage d'urgence à Colmar et dans les environs, disponible 24h/24 et 7j/7, pour répondre rapidement à tout problème de plomberie imprévu.",
          "Fuite importante, bouchon ou dysfonctionnement urgent : notre équipe se déplace rapidement afin de résoudre le problème et limiter les dégâts.",
          "Nous garantissons une intervention rapide et professionnelle pour restaurer votre confort dans les plus brefs délais.",
        ],
      },
    ],
    benefits: [
      'Installation neuve et rénovation',
      'Réparation de fuites sans dégâts',
      'Débouchage haute pression',
      "Dépannage d'urgence 24h/24",
    ],
    image: '/images/realisation-plomberie.jpg',
    icon: 'pipe',
    legacyPaths: ['/service/plombier-colmar-travaux-plomberie', '/service-category/plomberie'],
  },
  {
    // NOUVELLE PAGE — Rénovation (salle de bain + adaptation PMR / MaPrimeAdapt').
    // Photos de chantier fournies ultérieurement par la cliente (visuels de plomberie en attendant).
    slug: 'renovation',
    title: 'Rénovation',
    navLabel: 'Rénovation salle de bain',
    subtitle: 'Salle de bain & accessibilité PMR',
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
        image: '/images/plomberie_img/image-1-600x400.webp',
        paragraphs: [
          "Remplacement de baignoire par douche, rénovation complète, mise aux normes de la plomberie : nous rénovons votre salle de bain de A à Z, avec des matériaux durables et un chantier propre, dans le respect des délais annoncés.",
          "Nous suivons les tendances et innovations du secteur (coloris, matériaux, équipements design) et vous conseillons pour une salle de bain à la fois esthétique, fonctionnelle et actuelle.",
        ],
      },
      {
        heading: "Adapter votre salle de bain pour plus d'autonomie",
        image: '/images/plomberie_img/image-2-600x400.webp',
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
    image: '/images/plomberie_img/55822-1.webp',
    icon: 'bath',
    legacyPaths: [],
  },
  {
    slug: 'chauffage',
    title: 'Chauffage & pompe à chaleur',
    navLabel: 'Chauffage',
    subtitle: '',
    short: 'Chaudières, pompes à chaleur, radiateurs et planchers chauffants.',
    description:
      "Chaudières, pompes à chaleur, radiateurs, planchers chauffants : MAGI O installe, remplace et entretient votre système de chauffage à Colmar et dans le Haut-Rhin, avec une expertise particulière sur le remplacement de chaudière par une pompe à chaleur.",
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
    callout: {
      title: 'Pourquoi passer à la pompe à chaleur ?',
      paragraphs: [
        "Une pompe à chaleur consomme moins d'énergie qu'une chaudière classique et réduit durablement votre facture de chauffage. MAGI O étudie votre installation actuelle, vous conseille sur le modèle adapté à votre logement, puis assure une installation complète et un réglage optimal pour votre confort.",
        "En remplaçant votre ancienne chaudière gaz ou fioul, vous pouvez également bénéficier de plusieurs aides de l'État, rendant votre projet encore plus avantageux.",
      ],
    },
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
        q: 'Intervenez-vous en cas de panne de chauffage ?',
        a: "Oui, nous intervenons pour diagnostiquer la panne et procéder, si nécessaire, au remplacement de l'équipement défectueux (chaudière, pompe à chaleur, radiateur).",
      },
      {
        q: "Faut-il changer toute l'installation pour passer à la pompe à chaleur ?",
        a: "Pas nécessairement. Nous étudions votre réseau existant (radiateurs, plancher chauffant) pour déterminer s'il est compatible avec une pompe à chaleur ou si des adaptations sont nécessaires.",
      },
    ],
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
    title: 'Détection de fuite',
    navLabel: 'Détection de fuite',
    subtitle: '',
    short: 'Localisation sans casse grâce à des technologies de pointe.',
    description:
      "Recherche de fuites sans casse grâce à des technologies avancées : caméras thermiques, recherche acoustique, gaz traceur et relevés d'humidité.",
    intro:
      "Recherche de fuites sans casse grâce à des équipements de haute technologie : caméras thermiques et endoscopiques, relevés hygrométriques, traçage par gaz, fumigène ou colorant, et recherche acoustique pour identifier les fuites invisibles.",
    lead: [
      "Nous proposons des services de recherche de fuites sans casse, en utilisant des équipements de haute technologie et des techniques de pointe permettant de localiser précisément l'origine d'une fuite tout en préservant vos installations.",
      "Grâce à l'utilisation de caméras thermiques et endoscopiques, nous inspectons en profondeur vos canalisations, murs et réseaux, y compris dans les zones difficiles d'accès ou encastrées.",
      "Nous complétons ces investigations par des relevés hygrométriques, ainsi que par des méthodes de traçage par gaz, fumigène ou colorant, afin de détecter avec précision les fuites situées dans des réseaux enterrés ou dissimulés.",
      "Lorsque nécessaire, nous utilisons également la recherche acoustique, qui permet d'identifier les fuites invisibles en analysant les sons générés par l'écoulement de l'eau.",
      "Ces techniques modernes nous permettent d'obtenir des résultats rapides, fiables et sans dégradation.",
    ],
    sections: [
      {
        heading: 'Recherche de fuite destructive',
        image: '/images/fuite/image-384x512-1-1-384x400.webp',
        paragraphs: [
          "Lorsque les méthodes de détection non destructives ne suffisent pas à localiser l'origine d'une fuite, nous pouvons être amenés à réaliser une recherche destructive ciblée.",
          "Cette intervention consiste à effectuer des ouvertures limitées et maîtrisées, uniquement lorsque cela est indispensable, afin d'accéder directement à la source du problème. Nous intervenons avec soin et rigueur, dans le but de réduire au maximum les dommages et de procéder à une réparation rapide et efficace.",
          "Bien que plus intrusive, cette méthode garantit une résolution fiable et définitive lorsque les autres techniques atteignent leurs limites.",
        ],
      },
      {
        heading: 'Diagnostic et expertise',
        image: '/images/fuite/image-384x512-1-384x400.webp',
        paragraphs: [
          "Nous réalisons également des diagnostics complets pour identifier l'origine de divers problèmes liés à vos installations.",
          "À l'aide de relevés de taux d'humidité, nous détectons les zones sujettes aux infiltrations et aux problèmes d'humidité. Nous analysons également les surconsommations d'eau, afin d'identifier d'éventuelles fuites ou dysfonctionnements invisibles.",
          "En cas de doute sur la performance de vos installations, nous effectuons un diagnostic d'isolation thermique, permettant de repérer les pertes d'énergie liées à une mauvaise isolation ou à un défaut d'installation.",
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
    image: '/images/fuite/MagiOPic-_1__11zon.webp',
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
    q: 'Pouvez-vous remplacer une chaudière par une pompe à chaleur ?',
    a: "Oui. Nous étudions votre installation existante, puis réalisons l'installation complète de la pompe à chaleur, sa mise en service et son réglage pour optimiser votre confort et votre consommation.",
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

// ============================================================
// MAGI Ø — Données du site (contenu repris de l'ancien site)
// ============================================================

export const SITE = {
  name: 'MAGI Ø',
  legalName: 'MAGI Ø',
  tagline: 'Plomberie · Chauffage · Électricité · Détection de fuite',
  city: 'Colmar',
  url: 'https://magi-o.fr',
  description:
    "MAGI Ø, votre artisan plombier, chauffagiste et électricien à Colmar (68). Plus de 10 ans d'expérience. Installation, dépannage, détection de fuite sans casse. Devis gratuit.",
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
      text: "J'ai fait appel à cette entreprise MAGI Ø plombier pour remplacer le mitigeur de ma cuisine, et je suis vraiment ravie du service. La secrétaire très réactive et très sympathique ainsi que le technicien : ponctuel, professionnel et très efficace. Le travail a été fait rapidement, proprement, et le résultat est impeccable. Un service de qualité et prix plus que correct, à recommander à 100% sans hésitation. Merci encore pour cette intervention au top !",
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

export const VALUES = [
  {
    title: 'Rapidité',
    text: "Intervention réactive sur Colmar et ses environs, avec un suivi clair de votre demande.",
    icon: 'bolt',
  },
  {
    title: 'Fiabilité',
    text: 'Des chantiers propres, des installations durables et le respect des normes en vigueur.',
    icon: 'shield',
  },
  {
    title: 'Expertise',
    text: "Plus de 10 ans d'expérience en plomberie, chauffage, électricité et détection de fuite.",
    icon: 'award',
  },
];

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
  benefits: string[];
  image: string;
  icon: string;
  /** Anciennes URLs WordPress à rediriger vers cette page */
  legacyPaths: string[];
  /** Page autonome (layout dédié) — exclue du template générique et de la sidebar « autres services » */
  standalone?: boolean;
}

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
    slug: 'chauffage',
    title: 'Chauffage',
    navLabel: 'Chauffage',
    subtitle: '',
    short: 'Chaudières, pompes à chaleur, radiateurs et planchers chauffants.',
    description:
      "Installation de systèmes de chauffage adaptés à votre logement : chauffage central, chaudières, pompes à chaleur, radiateurs ou planchers chauffants.",
    intro:
      "Nous proposons des services complets d'installation de chauffage, adaptés à tous types de logements : chauffage central, chaudières à gaz, pompes à chaleur, radiateurs et planchers chauffants.",
    lead: [
      "Nous proposons des services complets d'installation de chauffage, adaptés à tous types de logements. Nous intervenons pour la mise en place de chauffage central, de chaudières à gaz, de pompes à chaleur, de radiateurs ainsi que de planchers chauffants.",
      "Nos experts réalisent une étude personnalisée de vos besoins afin de vous orienter vers la solution la plus performante, économique et adaptée à votre habitation.",
      "Nous nous engageons à installer vos équipements avec rigueur et précision, dans le respect des normes en vigueur, afin de garantir leur fiabilité, leur longévité et un confort thermique optimal au quotidien.",
    ],
    sections: [],
    benefits: [
      'Étude personnalisée de votre installation',
      'Solutions performantes et économes en énergie',
      'Installation soignée et conforme aux normes',
      'Accompagnement et conseils sur le choix des équipements',
    ],
    image: '/images/service-pac-freon.jpg',
    icon: 'flame',
    legacyPaths: ['/service/chauffagiste-colmar', '/service-category/chauffage'],
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
  {
    slug: 'electricite',
    title: 'Électricité',
    navLabel: 'Électricité',
    subtitle: '',
    short: 'Installation, rénovation et dépannage dans le respect des normes.',
    description:
      "Installations électriques neuves et rénovation dans le respect de la norme NFC 15-100 : mise en conformité, dépannage d'urgence et éclairage.",
    intro:
      "Installations électriques neuves et rénovation de vos installations existantes, dans le respect de la norme NFC 15-100. Dépannage rapide et sécurisé, éclairage et mise en conformité de votre logement.",
    lead: [
      "Nous réalisons des installations électriques neuves et assurons la rénovation de vos installations existantes, dans le strict respect des normes de sécurité en vigueur (NFC 15-100).",
    ],
    sections: [
      {
        heading: 'Installations électriques',
        image: '/images/electricite/homme-technicien-electricien-travaillant-dans-un-tableau-avec-fusibles-installation-et-connexion-d-equipements-electriques-fermer-1-1.webp',
        text: 'Nos prestations comprennent notamment :',
        items: [
          "L'installation de tableaux électriques, circuits de distribution, prises et interrupteurs",
          "Le câblage électrique pour l'alimentation des équipements (éclairage, électroménager, chauffage, etc.)",
          'La mise à jour et le remplacement des tableaux, disjoncteurs et équipements de protection afin de prévenir les risques',
          "La réfection du câblage vétuste ainsi que l'ajout de prises ou de points lumineux pour adapter votre installation à vos besoins actuels",
        ],
      },
      {
        heading: 'Dépannage et réparation électrique',
        image: '/images/electricite/2149176757-1-600x400.webp',
        text:
          "En cas de panne ou de dysfonctionnement, notre équipe intervient rapidement et en toute sécurité pour rétablir le bon fonctionnement de votre installation électrique. Nos services incluent :",
        items: [
          "L'identification et la réparation des pannes électriques (coupures de courant, courts-circuits, prises défectueuses, etc.)",
          'Le remplacement des éléments défectueux (prises, interrupteurs, câblage, équipements électriques)',
          "L'intervention en urgence afin de sécuriser et rétablir votre installation dans les meilleurs délais",
        ],
      },
      {
        heading: 'Éclairage',
        text:
          "Nous proposons des solutions d'éclairage sur mesure, adaptées à votre logement et à vos usages. Nos prestations comprennent :",
        items: [
          "L'installation d'éclairage intérieur (plafonniers, appliques, lampes, éclairage décoratif)",
          "L'éclairage extérieur pour jardins, terrasses, allées et entrées",
          'La mise en place de solutions économes en énergie, notamment les systèmes LED, pour réduire votre consommation tout en garantissant un éclairage performant et durable',
        ],
      },
      {
        heading: 'Diagnostic et contrôle de sécurité électrique',
        text:
          "La sécurité de vos installations électriques est essentielle pour prévenir tout risque d'incendie ou d'accident. Nous proposons des services complets de diagnostic et de contrôle électrique, incluant :",
        items: [
          "La vérification de l'état de vos installations, grâce à un audit complet visant à détecter les anomalies (fils défectueux, prises surchargées, équipements obsolètes)",
          'La mise en conformité de vos installations avec les normes électriques en vigueur',
          "La prévention des risques d'incendie, par le contrôle des disjoncteurs, prises de terre et dispositifs de protection",
          "L'installation de dispositifs de sécurité (détecteurs de fumée, disjoncteurs différentiels et autres équipements de protection)",
        ],
      },
    ],
    benefits: [
      'Interventions conformes aux normes de sécurité',
      'Travaux soignés et installations durables',
      'Dépannage rapide et sécurisé',
      'Conseils adaptés à vos besoins et à votre installation',
    ],
    image: '/images/electricite/homme-technicien-electricien-travaillant-dans-un-tableau-avec-fusibles-installation-et-connexion-d-equipements-electriques-fermer-1-1.webp',
    icon: 'plug',
    legacyPaths: ['/service/electricien-colmar', '/service-category/electricite'],
  },
  {
    slug: 'pompe-a-chaleur',
    title: 'Pompe à chaleur',
    navLabel: 'Pompe à chaleur',
    subtitle: 'Économisez jusqu’à 70 % sur votre chauffage',
    short: 'Une solution économe et écologique pour remplacer votre chaudière.',
    description:
      "Remplacez votre ancienne chaudière par une pompe à chaleur performante : jusqu'à 70 % d'économies, énergie renouvelable et confort toute l'année.",
    intro: '',
    sections: [],
    benefits: [],
    image: '/images/pompe_chaleur/Pompe-chaleur-1-1-1-1.webp',
    icon: 'flame',
    legacyPaths: ['/pompe-a-chaleur-colmar'],
    standalone: true,
  },
];

// ============================================================
// Page POMPE À CHALEUR — landing dédiée (layout à part)
// ============================================================
export const PAC = {
  slug: 'pompe-a-chaleur',
  eyebrow: 'Pompe à chaleur',
  title: 'Économisez jusqu’à 70 % sur votre chauffage',
  description:
    "Remplacez votre ancienne chaudière par une pompe à chaleur performante : jusqu'à 70 % d'économies, énergie renouvelable et confort toute l'année. Jusqu'à 11 000 € d'aides cumulables.",
  intro: [
    "Dès le 1er janvier 2026, l'installation de chaudières à gaz sera interdite dans les logements neufs en France.",
    "Anticipez cette transition en optant pour une pompe à chaleur, une solution à la fois écologique et économique.",
    "En remplaçant votre ancienne chaudière gaz ou fioul, vous pouvez également bénéficier de plusieurs aides de l'État, rendant votre projet encore plus avantageux.",
  ],
  heroImage: '/images/pompe_chaleur/Pompe-chaleur-1-1-1-1.webp',
  priceImage: '/images/pompe_chaleur/2149250262-1-1.webp',
  // 3 piliers (cartes)
  pillars: [
    {
      title: 'Économies massives',
      icon: 'euro',
      items: [
        "Jusqu'à 70 % d'économies sur vos factures",
        'Rendement de 300 % à 400 %',
        'Retour sur investissement en 5 à 7 ans',
        "Protection contre la hausse des prix de l'énergie",
      ],
    },
    {
      title: 'Écologique',
      icon: 'leaf',
      items: [
        'Énergie 100 % renouvelable',
        'Réduction de 75 % des émissions de CO₂',
        'Aucune combustion, aucune fumée',
        'Contribue à la transition énergétique',
      ],
    },
    {
      title: 'Confort optimal',
      icon: 'sun',
      featured: true,
      items: [
        'Chaleur homogène dans toute la maison',
        'Climatisation l’été (modèles réversibles)',
        'Silencieux et discret',
        'Programmation intelligente',
      ],
    },
  ],
  // Aides de l'État
  aidesTitle: 'Profitez des aides de l’État',
  aidesSubtitle: 'Jusqu’à 11 000 € d’aides cumulables pour votre pompe à chaleur',
  aides: [
    {
      name: "MaPrimeRénov'",
      text:
        "C'est quoi ? Une aide de l'État versée par l'ANAH (Agence Nationale de l'Habitat) pour l'installation d'une pompe à chaleur.",
    },
    {
      name: 'Prime CEE',
      text:
        "C'est quoi ? Une aide des fournisseurs d'énergie (EDF, Engie, Leclerc, Total…) appelée aussi « Prime Coup de Pouce Chauffage ».",
    },
    {
      name: 'Éco-PTZ',
      text:
        "C'est quoi ? Un prêt bancaire SANS INTÉRÊTS (0 %) pour financer le reste à charge après les aides MaPrimeRénov' et CEE.",
    },
  ],
  // Tableau de prix
  priceTitle: 'Combien coûte une pompe à chaleur ?',
  priceSubtitle: 'Possibilité d’Éco-PTZ à taux 0 % pour financer le reste à charge',
  priceRows: [
    { label: 'Pompe à chaleur Air/Eau (100 m²)', value: '12 000 € – 16 000 €' },
    { label: "Aides MaPrimeRénov' (en moyenne)", value: '– 5 000 €', discount: true },
    { label: 'Prime CEE (Certificats économie énergie)', value: '– 4 000 €', discount: true },
    { label: 'TVA réduite 5,5 %', value: '– 500 €', discount: true },
  ],
  priceTotal: { label: 'Votre reste à charge', value: '2 500 € – 6 500 €' },
  legacyPaths: ['/pompe-a-chaleur-colmar'],
};

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
    q: 'Pouvez-vous remplacer ou installer un tableau électrique ?',
    a: "Oui. Nous réalisons le diagnostic de votre installation, choisissons le matériel conforme, puis procédons à l'installation dans le respect des normes en vigueur (NFC 15-100).",
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

// ============================================================
// Zone d'intervention — les 9 plus grandes communes autour de Colmar
// ============================================================
//
// Périmètre : Colmar Agglomération, Colmar exclue (elle a ses propres
// pages). Les 9 communes les plus peuplées de l'agglomération.
//
// A FAIRE VALIDER PAR LA CLIENTE, commune par commune. Retirer une
// commune revient à supprimer sa ligne ici : la page, son entrée de
// sitemap et ses liens disparaissent ensemble.
//
// REGLE DE CONTENU. Chaque commune porte son propre H1, ses propres
// intertitres et cinq blocs de texte qui n'existent nulle part ailleurs
// sur le site. C'est ce qui empêche ces pages de se ressembler.
// `contexte` et `habitat` ne disent que du fait vérifiable. `angle`,
// `precision` et `prestations` sont des généralités de métier, vraies
// pour ce type de bâti : jamais le récit d'un chantier. Les réponses de
// `faq` ne disent que ce que le site affirme déjà ailleurs. Aucun prix,
// aucun délai chiffré, aucune certification.

import type { FaqItem } from '../consts';

export type Secteur = 'couronne' | 'vignoble' | 'ried' | 'vallee';

export interface Zone {
  slug: string;
  nom: string;
  secteur: Secteur;
  /** Population municipale arrondie (INSEE / Colmar Agglomération). */
  population: number;
  /** H1 de la page, formulé différemment d'une commune à l'autre. */
  h1: string;
  /** Sous-titre affiché sous le H1. */
  accroche: string;
  /** Intertitre de la section descriptive. */
  titreBati: string;
  /** Intertitre de la section prestations. */
  titrePrestations: string;
  /** Intertitre de la FAQ. */
  titreFaq: string;
  /** Situation géographique, factuelle. */
  contexte: string;
  /** Premier paragraphe de la page, propre à la commune. */
  intro: string;
  /** Caractère du bâti et de la commune, factuel. */
  habitat: string;
  /** Ce que ce type de bâti implique pour le métier. */
  angle: string;
  /** Second temps du même raisonnement, plus concret. */
  precision: string;
  /** Ce qui est le plus demandé dans cette commune, et pourquoi. */
  prestations: string;
  /** Questions fréquentes propres à la commune. */
  faq: FaqItem[];
}

export const SECTEURS: Record<Secteur, string> = {
  couronne: 'Première couronne de Colmar',
  vignoble: 'Route des vins et piémont',
  ried: 'Plaine du Ried',
  vallee: 'Entrée de la vallée de Munster',
};

export const ZONES: Zone[] = [
  {
    slug: 'wintzenheim',
    nom: 'Wintzenheim',
    secteur: 'vignoble',
    population: 8060,
    h1: 'Plombier chauffagiste à Wintzenheim et Logelbach',
    accroche:
      "Trois âges de bâti sur une même commune, et autant de façons d'aborder une installation.",
    titreBati: 'Un village, un faubourg industriel et des lotissements',
    titrePrestations: 'Ce que nous faisons le plus à Wintzenheim',
    titreFaq: 'Trois questions que se posent les habitants de Wintzenheim',
    contexte:
      "Wintzenheim s'étend immédiatement à l'ouest de Colmar, au pied du vignoble, et constitue la commune la plus peuplée de l'agglomération après Colmar elle-même.",
    intro:
      "Avec plus de huit mille habitants, Wintzenheim est la plus grande commune de Colmar Agglomération après Colmar. Elle a la particularité de réunir sur un même territoire trois types d'habitat que tout sépare, ce qui change complètement la manière d'aborder une intervention selon la rue où l'on se trouve.",
    habitat:
      "La commune associe un village viticole ancien, le faubourg de Logelbach hérité de l'industrie textile du XIXe siècle, et des lotissements pavillonnaires plus récents. On y trouve donc, à quelques rues d'écart, des maisons de maître, d'anciens logements ouvriers et des pavillons des années 1970 à 2000.",
    angle:
      "Cette diversité se traduit par des installations d'âges très différents. Sur une maison ancienne, la question porte souvent sur des colonnes vétustes et des réseaux encastrés ; sur un pavillon, elle porte plutôt sur le remplacement d'un chauffe-eau ou d'une chaudière en fin de vie.",
    precision:
      "Dans les anciens logements de Logelbach, les réseaux ont souvent été repris par morceaux au fil des décennies, et une réparation ponctuelle peut en révéler une autre en amont. Dans les lotissements, c'est l'inverse : tout est accessible, mais les équipements posés à la construction arrivent en fin de vie à peu près en même temps.",
    prestations:
      "Concrètement, les demandes se répartissent entre le remplacement d'équipements vieillissants dans le pavillonnaire et la reprise de réseaux anciens dans le bourg et à Logelbach. Nous établissons le diagnostic avant de chiffrer, dans un cas comme dans l'autre.",
    faq: [
      {
        q: 'Intervenez-vous à Wintzenheim et à Logelbach ?',
        a: "Oui. Wintzenheim et son faubourg de Logelbach font partie de notre zone d'intervention courante, à quelques minutes de notre atelier de Colmar.",
      },
      {
        q: 'Peut-on localiser une fuite sans casser dans une maison ancienne de Wintzenheim ?',
        a: "Dans la grande majorité des cas, oui. Nous localisons les fuites à la caméra thermique, au gaz traceur ou par recherche acoustique, ce qui évite d'ouvrir un mur tant que l'origine n'est pas identifiée avec certitude.",
      },
      {
        q: 'Le déplacement à Wintzenheim est-il facturé pour un devis ?',
        a: "Non. Le devis est gratuit et sans engagement. Nous établissons le chiffrage après avoir vu l'installation.",
      },
    ],
  },
  {
    slug: 'horbourg-wihr',
    nom: 'Horbourg-Wihr',
    secteur: 'couronne',
    population: 6200,
    h1: 'Votre plombier chauffagiste à Horbourg-Wihr',
    accroche: 'Une commune pavillonnaire où les chantiers se préparent plus qu\'ils ne s\'improvisent.',
    titreBati: 'Un bourg ancien devenu commune résidentielle',
    titrePrestations: 'Rénover une salle de bain à Horbourg-Wihr',
    titreFaq: 'Ce qu\'on nous demande le plus souvent à Horbourg-Wihr',
    contexte:
      "Horbourg-Wihr jouxte Colmar à l'est, de l'autre côté de l'Ill, et compte parmi les communes les plus peuplées de Colmar Agglomération.",
    intro:
      "Séparée de Colmar par l'Ill seulement, Horbourg-Wihr est l'une des communes où nous nous rendons le plus souvent. Son parc de logements, très majoritairement composé de maisons individuelles, oriente naturellement les demandes vers des chantiers programmés plutôt que vers l'urgence.",
    habitat:
      "Ancien site romain devenu commune résidentielle, Horbourg-Wihr s'est fortement développée en maisons individuelles au cours des dernières décennies, autour d'un noyau villageois plus ancien.",
    angle:
      "Dans un parc de ce type, les demandes tournent autour de la rénovation de salle de bain et du remplacement d'équipements arrivés en bout de course : chauffe-eau, chaudière ou sanitaires d'origine.",
    precision:
      "Ce sont des chantiers qui se planifient, contrairement à une fuite. Cela change la manière de travailler : on prend le temps de comparer les équipements, de caler les délais sur vos disponibilités et, quand la salle de bain est la seule du logement, d'organiser le chantier pour limiter la durée d'indisponibilité.",
    prestations:
      "Nous rénovons de A à Z, du remplacement d'une baignoire par une douche jusqu'à la remise à neuf complète avec mise aux normes de la plomberie, y compris en adaptation PMR lorsque le logement doit accompagner l'avancée en âge de ses occupants.",
    faq: [
      {
        q: 'Intervenez-vous à Horbourg-Wihr ?',
        a: "Oui. Horbourg-Wihr est limitrophe de Colmar, c'est l'une des communes où nous nous déplaçons le plus souvent.",
      },
      {
        q: 'Combien de temps dure une rénovation de salle de bain à Horbourg-Wihr ?',
        a: "Cela dépend de l'ampleur des travaux, mais une rénovation complète dure généralement une semaine. La durée est indiquée dans le devis.",
      },
      {
        q: 'Pouvez-vous adapter une salle de bain pour une personne âgée ?',
        a: "Oui. Nous réalisons des douches de plain-pied, des receveurs extra-plats antidérapants, des barres d'appui et des hauteurs aux normes PMR, avec un accompagnement possible dans le cadre de MaPrimeAdapt'.",
      },
    ],
  },
  {
    slug: 'ingersheim',
    nom: 'Ingersheim',
    secteur: 'vignoble',
    population: 4770,
    h1: 'Plomberie, chauffage et recherche de fuite à Ingersheim',
    accroche: 'Là où la maison, la cave et les annexes partagent le même réseau.',
    titreBati: 'Un bourg viticole étendu sur les coteaux',
    titrePrestations: 'Isoler un circuit avant de chercher la fuite',
    titreFaq: 'Vos questions sur nos interventions à Ingersheim',
    contexte:
      "Ingersheim se situe au nord-ouest de Colmar, sur la Fecht, à l'entrée de la route des vins.",
    intro:
      "Ingersheim ouvre la route des vins au nord-ouest de Colmar. La commune compte de nombreuses propriétés où l'habitation, la cave et parfois un logement locatif se partagent le même branchement d'eau, une configuration qui demande une méthode particulière dès qu'un problème apparaît.",
    habitat:
      "La commune mêle un centre viticole ancien, avec ses corps de ferme et ses caves, et des extensions résidentielles plus récentes sur les coteaux.",
    angle:
      "Les bâtiments viticoles posent une question particulière : des réseaux d'eau qui desservent à la fois l'habitation et l'espace de travail, souvent repris par étapes au fil des générations.",
    precision:
      "Un compteur qui tourne alors que tout semble fermé, dans une propriété où cohabitent la maison, la cave et parfois un logement locatif, demande d'isoler les circuits un par un avant de conclure quoi que ce soit.",
    prestations:
      "C'est exactement ce que permettent le traçage au gaz et la recherche acoustique, sans ouvrir un seul mur. Nous intervenons ensuite sur la partie défectueuse, qu'elle se trouve dans l'habitation ou dans les locaux attenants.",
    faq: [
      {
        q: 'Intervenez-vous à Ingersheim ?',
        a: "Oui. Ingersheim se trouve à quelques minutes de notre atelier de Colmar et fait partie de notre zone d'intervention courante.",
      },
      {
        q: "Ma facture d'eau a augmenté sans raison, que faire ?",
        a: "Vérifiez d'abord votre compteur, tout étant fermé. S'il continue de tourner, il y a probablement une fuite. Nous la localisons sans casse, y compris sur des réseaux enterrés ou desservant plusieurs bâtiments.",
      },
      {
        q: "Intervenez-vous sur les réseaux d'une exploitation viticole ?",
        a: 'Nous intervenons sur les installations sanitaires et de chauffage, en habitation comme dans les locaux attenants. Le devis précise le périmètre après visite.',
      },
    ],
  },
  {
    slug: 'turckheim',
    nom: 'Turckheim',
    secteur: 'vignoble',
    population: 4030,
    h1: 'Plombier à Turckheim, du centre médiéval aux quartiers récents',
    accroche: 'Des murs épais, des accès étroits, et une raison de plus de ne rien casser.',
    titreBati: 'Une cité close, aux maisons mitoyennes',
    titrePrestations: 'Savoir d\'où vient l\'eau avant d\'ouvrir quoi que ce soit',
    titreFaq: 'Fuites et humidité à Turckheim : vos questions',
    contexte:
      "Turckheim se tient au débouché de la vallée de Munster, à l'ouest de Colmar, sur la route des vins.",
    intro:
      "Turckheim a conservé ses remparts et ses trois portes, et avec eux un centre dont la configuration ne ressemble à aucune autre commune de l'agglomération. Y intervenir demande des méthodes adaptées, à commencer par celles qui évitent d'abîmer un bâti qu'on ne répare pas facilement.",
    habitat:
      'Cité médiévale encore ceinte de ses remparts et de ses trois portes, Turckheim possède un centre ancien dense, aux maisons mitoyennes et aux murs épais, complété par des quartiers plus récents en périphérie.',
    angle:
      "Dans un centre ancien de ce type, les canalisations sont encastrées dans des maçonneries épaisses et les accès sont étroits. C'est le cas de figure où la recherche de fuite sans casse évite d'ouvrir un mur qu'il faudra ensuite refaire.",
    precision:
      "La mitoyenneté ajoute une difficulté : une tache d'humidité sur un mur ne vient pas nécessairement de chez vous, et une colonne commune peut desservir plusieurs logements.",
    prestations:
      "Le relevé du taux d'humidité, la caméra thermique et l'inspection endoscopique permettent de dire d'où vient réellement l'eau avant que la question ne se règle entre voisins ou entre assurances. L'ouverture ciblée n'intervient qu'ensuite, et à l'endroit exact.",
    faq: [
      {
        q: 'Intervenez-vous à Turckheim ?',
        a: "Oui. Turckheim est à quelques minutes de Colmar et fait partie de notre zone d'intervention courante.",
      },
      {
        q: 'Faut-il casser un mur pour trouver une fuite dans une maison ancienne ?',
        a: "Non, dans la grande majorité des cas. Caméra thermique, gaz traceur et recherche acoustique permettent de localiser l'origine sans dégradation. L'ouverture ciblée n'intervient qu'en dernier recours.",
      },
      {
        q: "Une tache d'humidité vient-elle forcément de mon logement ?",
        a: "Pas nécessairement, surtout en centre ancien mitoyen. Nous réalisons un relevé du taux d'humidité et un diagnostic pour déterminer l'origine réelle avant d'engager des travaux.",
      },
    ],
  },
  {
    slug: 'sainte-croix-en-plaine',
    nom: 'Sainte-Croix-en-Plaine',
    secteur: 'couronne',
    population: 3080,
    h1: 'Plombier chauffagiste à Sainte-Croix-en-Plaine',
    accroche: 'Maisons avec terrain : la fuite est souvent dehors, pas dedans.',
    titreBati: 'Un village de plaine aux parcelles généreuses',
    titrePrestations: 'Creuser au bon endroit, ou ne pas creuser du tout',
    titreFaq: 'Fuite enterrée : les questions qui reviennent',
    contexte:
      "Sainte-Croix-en-Plaine s'étend au sud-est de Colmar, dans la plaine, à proximité de l'axe autoroutier.",
    intro:
      "Au sud-est de Colmar, Sainte-Croix-en-Plaine s'est développée en maisons individuelles disposant pour la plupart d'un terrain. Cette caractéristique déplace une bonne part des problèmes de plomberie hors des murs : entre le compteur et l'habitation, ou vers les annexes du jardin.",
    habitat:
      'Commune de plaine restée à taille humaine, elle s\'est développée en maisons individuelles avec jardin autour d\'un centre villageois.',
    angle:
      "Les maisons avec terrain posent la question des réseaux enterrés, entre le compteur et l'habitation ou vers les annexes. Une surconsommation d'eau sans fuite visible s'explique souvent là.",
    precision:
      "Une fuite enterrée ne se voit pas et ne s'entend pas depuis la maison : elle se lit d'abord sur le compteur, parfois sur une zone de pelouse qui reste verte en plein été.",
    prestations:
      "Nous la localisons au gaz traceur ou par corrélation acoustique, ce qui permet de creuser au bon endroit plutôt que d'ouvrir une tranchée sur toute la longueur du terrain. La réparation suit dans la foulée.",
    faq: [
      {
        q: 'Intervenez-vous à Sainte-Croix-en-Plaine ?',
        a: "Oui. Sainte-Croix-en-Plaine fait partie de Colmar Agglomération et de notre zone d'intervention courante.",
      },
      {
        q: 'Comment savoir si une fuite est enterrée dans mon terrain ?',
        a: "Le premier indice est le compteur : s'il tourne alors que tous les robinets sont fermés, il y a une fuite en amont de l'habitation. Nous la localisons ensuite avec précision, sans creuser à l'aveugle.",
      },
      {
        q: 'Le devis est-il gratuit ?',
        a: 'Oui, le devis est gratuit et sans engagement. Nous établissons le chiffrage après analyse de votre situation.',
      },
    ],
  },
  {
    slug: 'houssen',
    nom: 'Houssen',
    secteur: 'couronne',
    population: 2360,
    h1: 'Plomberie et chauffage à Houssen, habitat et locaux professionnels',
    accroche: "Dans un commerce, l'enjeu n'est pas seulement de réparer : c'est de rouvrir.",
    titreBati: 'Un village doublé d\'une zone d\'activité',
    titrePrestations: 'Deux rythmes d\'intervention selon le lieu',
    titreFaq: 'Particuliers et professionnels : vos questions',
    contexte:
      "Houssen borde Colmar au nord, le long de la route de Strasbourg, et accueille l'aérodrome de Colmar-Houssen.",
    intro:
      "Houssen occupe une position singulière à l'entrée nord de Colmar : un village résidentiel d'un côté, une zone d'activité et commerciale importante de l'autre. Nous y intervenons sur les deux, avec des contraintes qui n'ont rien à voir.",
    habitat:
      "La commune associe un village résidentiel et une zone d'activité et commerciale importante à l'entrée nord de Colmar, ainsi que l'aérodrome.",
    angle:
      "Entre logements et locaux professionnels, les installations n'ont ni les mêmes contraintes ni les mêmes urgences. Une fuite dans un commerce se traite dans la journée ; une rénovation de salle de bain se prépare.",
    precision:
      "Dans un local recevant du public, une installation hors service, c'est une activité à l'arrêt. Nous privilégions alors les méthodes qui ne démontent rien tant que l'origine n'est pas certaine, puis une intervention ciblée.",
    prestations:
      "En habitation, le rythme est différent et l'on peut prendre le temps de comparer les équipements avant de décider. Dans les deux cas, le devis est établi après visite et le périmètre y est écrit noir sur blanc.",
    faq: [
      {
        q: 'Intervenez-vous à Houssen ?',
        a: "Oui. Houssen est limitrophe de Colmar, au nord, et fait partie de notre zone d'intervention courante.",
      },
      {
        q: 'Intervenez-vous dans les locaux professionnels de la zone commerciale ?',
        a: 'Oui, nous intervenons en habitation comme dans les locaux professionnels, sur les installations sanitaires, le chauffage et la recherche de fuite.',
      },
      {
        q: 'Quels sont vos horaires ?',
        a: 'Nous intervenons du lundi au vendredi, de 8h00 à 19h00. Le plus simple est de nous appeler pour faire le point sur votre situation.',
      },
    ],
  },
  {
    slug: 'andolsheim',
    nom: 'Andolsheim',
    secteur: 'couronne',
    population: 2270,
    h1: 'Plombier chauffagiste à Andolsheim',
    accroche: 'Remplacer une baignoire par une douche, sans perdre de vue le reste.',
    titreBati: 'Un ancien chef-lieu de canton sur la route du Rhin',
    titrePrestations: 'Adapter une salle de bain, pas seulement la refaire',
    titreFaq: 'Salle de bain et accessibilité : vos questions',
    contexte:
      "Andolsheim se situe à l'est de Colmar, sur l'axe qui mène à Neuf-Brisach et au Rhin.",
    intro:
      "Ancien chef-lieu de canton à l'est de Colmar, Andolsheim conserve un centre constitué et s'est étendue dans la plaine environnante. Le remplacement d'une baignoire par une douche de plain-pied y est la demande la plus fréquente, et elle recouvre presque toujours un sujet plus large.",
    habitat:
      "La commune conserve un centre ancien hérité de son statut administratif et s'est étendue en habitat individuel dans la plaine environnante.",
    angle:
      "Dans un bâti de plaine mêlant ancien et récent, la rénovation de salle de bain domine les demandes, en particulier le passage de la baignoire à la douche de plain-pied.",
    precision:
      "C'est souvent le moment où le logement doit s'adapter à l'âge de ses occupants, et la question dépasse alors le simple remplacement d'un équipement : hauteur du receveur, classement antidérapant, emplacement des barres d'appui, largeur de passage.",
    prestations:
      "Nous traitons ces chantiers dans le cadre de MaPrimeAdapt' lorsque les conditions sont réunies, et nous pouvons vous orienter vers un ergothérapeute pour le diagnostic préalable, qui conditionne souvent l'aide.",
    faq: [
      {
        q: 'Intervenez-vous à Andolsheim ?',
        a: "Oui. Andolsheim fait partie de Colmar Agglomération et de notre zone d'intervention courante.",
      },
      {
        q: 'Pouvez-vous remplacer une baignoire par une douche ?',
        a: "Oui, c'est l'une de nos interventions les plus fréquentes. Nous déposons la baignoire, reprenons la plomberie et posons une douche de plain-pied avec receveur extra-plat.",
      },
      {
        q: "Qu'est-ce que MaPrimeAdapt' et qui peut en bénéficier ?",
        a: "C'est une aide de l'État destinée aux seniors et aux personnes en situation de handicap pour adapter leur logement, sans audit énergétique requis. Elle est soumise à des conditions de ressources et d'éligibilité.",
      },
    ],
  },
  {
    slug: 'porte-du-ried',
    nom: 'Porte du Ried',
    secteur: 'ried',
    population: 2040,
    h1: 'Plombier chauffagiste à Porte du Ried, Holtzwihr et Riedwihr',
    accroche: 'Un bâti d\'après-guerre qui arrive à l\'âge de la reprise.',
    titreBati: 'Deux villages reconstruits après 1945',
    titrePrestations: 'Passer à la pompe à chaleur, quand c\'est possible',
    titreFaq: 'Chauffage à Porte du Ried : vos questions',
    contexte:
      'Porte du Ried réunit depuis 2016 les anciennes communes de Holtzwihr et de Riedwihr, au nord-est de Colmar, dans la plaine du Ried.',
    intro:
      "Née en 2016 du rapprochement de Holtzwihr et de Riedwihr, Porte du Ried présente une histoire de bâti bien particulière : les deux villages ont été largement reconstruits après les combats de l'hiver 1944-1945. Ce parc homogène arrive aujourd'hui à l'âge où les installations d'origine demandent à être reprises.",
    habitat:
      "Deux villages de plaine, aujourd'hui à dominante résidentielle et agricole, dont l'essentiel du bâti date de la reconstruction d'après-guerre.",
    angle:
      "Un bâti reconstruit dans l'après-guerre arrive à l'âge où les réseaux d'origine et les systèmes de chauffage demandent à être repris, souvent tous en même temps.",
    precision:
      "Le remplacement d'une chaudière ancienne par une pompe à chaleur y trouve souvent sa place, mais il ne se décide pas sur catalogue : tout dépend de ce que valent les émetteurs existants, radiateurs ou plancher chauffant.",
    prestations:
      "Nous étudions le réseau en place avant de dimensionner quoi que ce soit, et nous le disons quand une adaptation préalable est nécessaire plutôt que de vous vendre un équipement qui ne donnera pas ce qu'on en attend.",
    faq: [
      {
        q: 'Intervenez-vous à Porte du Ried, Holtzwihr et Riedwihr ?',
        a: "Oui. Porte du Ried, qui réunit Holtzwihr et Riedwihr, fait partie de notre zone d'intervention courante.",
      },
      {
        q: "Faut-il changer toute l'installation pour passer à la pompe à chaleur ?",
        a: "Pas nécessairement. Nous étudions votre réseau existant, radiateurs ou plancher chauffant, pour déterminer s'il est compatible ou si des adaptations sont nécessaires.",
      },
      {
        q: 'Intervenez-vous en cas de panne de chauffage ?',
        a: "Oui, nous intervenons pour diagnostiquer la panne et procéder, si nécessaire, au remplacement de l'équipement défectueux.",
      },
    ],
  },
  {
    slug: 'sundhoffen',
    nom: 'Sundhoffen',
    secteur: 'ried',
    population: 2035,
    h1: 'Plomberie, chauffage et diagnostic humidité à Sundhoffen',
    accroche: 'Entre l\'Ill et le canal, tout ce qui est humide n\'est pas une fuite.',
    titreBati: 'Un village entre deux cours d\'eau',
    titrePrestations: 'Poser le bon diagnostic avant de réparer',
    titreFaq: 'Humidité et sous-sols : vos questions',
    contexte:
      "Sundhoffen se trouve au sud-est de Colmar, dans la plaine, entre l'Ill et le canal du Rhône au Rhin.",
    intro:
      "La position de Sundhoffen, prise entre l'Ill et le canal du Rhône au Rhin, n'est pas sans conséquence sur les sous-sols de la commune. C'est l'une des rares communes de l'agglomération où la première question à trancher n'est pas « où est la fuite » mais « s'agit-il bien d'une fuite ».",
    habitat:
      'Village de plaine à dominante résidentielle et agricole, avec un noyau ancien et des extensions pavillonnaires.',
    angle:
      "La proximité de la nappe et des cours d'eau rend les sous-sols sensibles à l'humidité. Distinguer une infiltration d'une fuite sur canalisation demande un relevé de taux d'humidité avant toute intervention.",
    precision:
      "C'est une distinction qui change tout : une canalisation percée se répare, une remontée d'humidité ne se règle pas en plomberie. Poser le bon diagnostic évite de payer une réparation qui ne traitera pas la cause.",
    prestations:
      "Nous réalisons ce relevé, complété si besoin par une caméra thermique, et nous vous disons franchement quand le sujet n'est pas de notre ressort. Quand c'en est un, nous enchaînons sur la localisation précise puis la réparation.",
    faq: [
      {
        q: 'Intervenez-vous à Sundhoffen ?',
        a: "Oui. Sundhoffen fait partie de Colmar Agglomération et de notre zone d'intervention courante.",
      },
      {
        q: 'Mon sous-sol est humide, est-ce une fuite ?',
        a: "Pas toujours. Un relevé du taux d'humidité permet de distinguer une infiltration ou une remontée de nappe d'une fuite sur canalisation. Nous établissons ce diagnostic avant d'engager la moindre réparation.",
      },
      {
        q: 'Réalisez-vous un diagnostic avant travaux ?',
        a: "Oui. Relevé du taux d'humidité, analyse des surconsommations d'eau, caméra thermique : nous identifions l'origine du problème avant de proposer une solution.",
      },
    ],
  },
];

/** Les communes regroupées par secteur, pour la page d'index des zones. */
export function zonesParSecteur(): { secteur: Secteur; libelle: string; communes: Zone[] }[] {
  const ordre: Secteur[] = ['couronne', 'vignoble', 'ried', 'vallee'];
  return ordre
    .map((secteur) => ({
      secteur,
      libelle: SECTEURS[secteur],
      communes: ZONES.filter((z) => z.secteur === secteur),
    }))
    .filter((groupe) => groupe.communes.length > 0);
}

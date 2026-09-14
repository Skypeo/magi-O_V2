// ============================================================
// Zone d'intervention — les 9 plus grandes communes autour de Colmar
// ============================================================
//
// Périmètre : Colmar Agglomération, Colmar exclue (elle a ses propres
// pages). Les 9 communes les plus peuplées de l'agglomération. Le site
// annonce « à Colmar et dans le Haut-Rhin » : ces pages détaillent cette
// zone, elles n'en inventent pas une nouvelle.
//
// A FAIRE VALIDER PAR LA CLIENTE, commune par commune. Retirer une
// commune où elle ne se déplace pas revient à supprimer sa ligne ici :
// la page, son entrée de sitemap et ses liens disparaissent ensemble.
//
// TROIS REGLES SUR LE CONTENU DE CE FICHIER
// 1. `contexte` et `habitat` ne disent que du fait vérifiable : géographie,
//    histoire, caractère du bâti. Population arrondie, sources INSEE et
//    Colmar Agglomération.
// 2. `angle` est une généralité de métier, vraie pour ce type de bâti.
//    Ce n'est jamais le récit d'un chantier. On n'invente pas de référence.
// 3. Aucun prix, aucun délai, aucune certification tant que la cliente
//    ne les a pas confirmés.

export type Secteur = 'couronne' | 'vignoble' | 'ried' | 'vallee';

export interface Zone {
  slug: string;
  nom: string;
  secteur: Secteur;
  /** Population municipale arrondie (INSEE / Colmar Agglomération). */
  population: number;
  /** Situation géographique, factuelle. */
  contexte: string;
  /** Caractère du bâti et de la commune, factuel. */
  habitat: string;
  /** Ce que ce type de bâti implique pour le métier. Généralité, pas une référence. */
  angle: string;
}

/** Libellé lisible d'un secteur, utilisé dans les intertitres. */
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
    contexte:
      "Wintzenheim s'étend immédiatement à l'ouest de Colmar, au pied du vignoble, et constitue la commune la plus peuplée de l'agglomération après Colmar elle-même.",
    habitat:
      "La commune associe un village viticole ancien, le faubourg de Logelbach hérité de l'industrie textile du XIXe siècle, et des lotissements pavillonnaires plus récents. On y trouve donc, à quelques rues d'écart, des maisons de maître, d'anciens logements ouvriers et des pavillons des années 1970 à 2000.",
    angle:
      "Cette diversité de bâti se traduit par des installations d'âges très différents. Sur une maison ancienne, la question porte souvent sur des colonnes vétustes et des réseaux encastrés ; sur un pavillon, elle porte plutôt sur le remplacement d'un chauffe-eau ou d'une chaudière en fin de vie. Nous intervenons sur les deux.",
  },
  {
    slug: 'horbourg-wihr',
    nom: 'Horbourg-Wihr',
    secteur: 'couronne',
    population: 6200,
    contexte:
      "Horbourg-Wihr jouxte Colmar à l'est, de l'autre côté de l'Ill, et compte parmi les communes les plus peuplées de Colmar Agglomération.",
    habitat:
      "Ancien site romain devenu commune résidentielle, Horbourg-Wihr s'est fortement développée en maisons individuelles au cours des dernières décennies, autour d'un noyau villageois plus ancien.",
    angle:
      "Dans un parc majoritairement pavillonnaire, les demandes tournent souvent autour de la rénovation de salle de bain et du remplacement d'équipements arrivés en bout de course, chauffe-eau, chaudière ou sanitaires d'origine. Ce sont des chantiers qui se planifient, contrairement à une fuite.",
  },
  {
    slug: 'ingersheim',
    nom: 'Ingersheim',
    secteur: 'vignoble',
    population: 4770,
    contexte:
      "Ingersheim se situe au nord-ouest de Colmar, sur la Fecht, à l'entrée de la route des vins.",
    habitat:
      "La commune mêle un centre viticole ancien, avec ses corps de ferme et ses caves, et des extensions résidentielles plus récentes sur les coteaux.",
    angle:
      "Les bâtiments viticoles posent une question particulière : des réseaux d'eau qui desservent à la fois l'habitation et l'espace de travail, souvent repris par étapes au fil des générations. Y voir clair avant de toucher quoi que ce soit fait partie du travail.",
  },
  {
    slug: 'turckheim',
    nom: 'Turckheim',
    secteur: 'vignoble',
    population: 4030,
    contexte:
      "Turckheim se tient au débouché de la vallée de Munster, à l'ouest de Colmar, sur la route des vins.",
    habitat:
      "Cité médiévale encore ceinte de ses remparts et de ses trois portes, Turckheim possède un centre ancien dense, aux maisons mitoyennes et aux murs épais, complété par des quartiers plus récents en périphérie.",
    angle:
      "Dans un centre ancien de ce type, les canalisations sont encastrées dans des maçonneries épaisses et les accès sont étroits. C'est exactement le cas de figure où la recherche de fuite sans casse, par caméra thermique ou gaz traceur, évite d'ouvrir un mur qu'il faudra ensuite refaire.",
  },
  {
    slug: 'sainte-croix-en-plaine',
    nom: 'Sainte-Croix-en-Plaine',
    secteur: 'couronne',
    population: 3080,
    contexte:
      "Sainte-Croix-en-Plaine s'étend au sud-est de Colmar, dans la plaine, à proximité de l'axe autoroutier.",
    habitat:
      "Commune de plaine restée à taille humaine, elle s'est développée en maisons individuelles avec jardin autour d'un centre villageois.",
    angle:
      "Les maisons avec terrain posent la question des réseaux enterrés, entre le compteur et l'habitation ou vers les annexes. Une surconsommation d'eau sans fuite visible s'explique souvent là, et se localise par recherche acoustique ou gaz traceur plutôt qu'à la pelle.",
  },
  {
    slug: 'houssen',
    nom: 'Houssen',
    secteur: 'couronne',
    population: 2360,
    contexte:
      "Houssen borde Colmar au nord, le long de la route de Strasbourg, et accueille l'aérodrome de Colmar-Houssen.",
    habitat:
      "La commune associe un village résidentiel et une zone d'activité et commerciale importante à l'entrée nord de Colmar.",
    angle:
      "Entre logements et locaux professionnels, les installations n'ont ni les mêmes contraintes ni les mêmes urgences. Une fuite dans un commerce se traite dans la journée ; une rénovation de salle de bain se prépare. Nous traitons les deux registres.",
  },
  {
    slug: 'andolsheim',
    nom: 'Andolsheim',
    secteur: 'couronne',
    population: 2270,
    contexte:
      "Andolsheim se situe à l'est de Colmar, sur l'axe qui mène à Neuf-Brisach et au Rhin.",
    habitat:
      "Ancien chef-lieu de canton, la commune conserve un centre ancien et s'est étendue en habitat individuel dans la plaine environnante.",
    angle:
      "Dans un bâti de plaine mêlant ancien et récent, la rénovation de salle de bain est la demande la plus fréquente, en particulier le remplacement d'une baignoire par une douche de plain-pied lorsque le logement doit s'adapter à l'âge de ses occupants.",
  },
  {
    slug: 'porte-du-ried',
    nom: 'Porte du Ried',
    secteur: 'ried',
    population: 2040,
    contexte:
      "Porte du Ried réunit depuis 2016 les anciennes communes de Holtzwihr et de Riedwihr, au nord-est de Colmar, dans la plaine du Ried.",
    habitat:
      "Deux villages de plaine, largement reconstruits après les combats de l'hiver 1944-1945, aujourd'hui à dominante résidentielle et agricole.",
    angle:
      "Un bâti reconstruit dans l'après-guerre arrive aujourd'hui à l'âge où les réseaux d'origine et les systèmes de chauffage demandent à être repris. Le remplacement d'une chaudière ancienne par une pompe à chaleur y trouve souvent sa place.",
  },
  {
    slug: 'sundhoffen',
    nom: 'Sundhoffen',
    secteur: 'ried',
    population: 2035,
    contexte:
      "Sundhoffen se trouve au sud-est de Colmar, dans la plaine, entre l'Ill et le canal du Rhône au Rhin.",
    habitat:
      "Village de plaine à dominante résidentielle et agricole, avec un noyau ancien et des extensions pavillonnaires.",
    angle:
      "La proximité de la nappe et des cours d'eau rend les sous-sols sensibles à l'humidité. Distinguer une infiltration d'une fuite sur canalisation demande un relevé de taux d'humidité avant toute intervention, faute de quoi on répare la mauvaise chose.",
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

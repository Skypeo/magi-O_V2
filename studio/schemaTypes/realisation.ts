import { defineField, defineType } from 'sanity';

// Schéma "Réalisation" : ce que la cliente remplit pour ajouter un chantier.
// Volontairement simple : une photo + un titre + une catégorie + un texte.
export default defineType({
  name: 'realisation',
  title: 'Réalisation',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      description: 'Ex. : « Rénovation salle de bain à Colmar »',
      validation: (rule) => rule.required().error('Le titre est obligatoire'),
    }),
    defineField({
      name: 'slug',
      title: 'Adresse de la page (slug)',
      type: 'slug',
      description: 'Généré automatiquement depuis le titre. Sert à l’URL de la page dédiée.',
      options: { source: 'titre', maxLength: 96 },
      validation: (rule) => rule.required().error('Cliquez sur « Generate » pour créer l’adresse'),
    }),
    defineField({
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Salle de bain', value: 'Salle de bain' },
          { title: 'Réparation de fuite', value: 'Réparation de fuite' },
          { title: 'Détection de fuite', value: 'Détection de fuite' },
          { title: 'Installation chauffage', value: 'Installation chauffage' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required().error('Choisissez une catégorie'),
    }),
    defineField({
      name: 'image',
      title: 'Photo principale',
      type: 'image',
      options: { hotspot: true },
      description: 'Photo de couverture affichée dans la liste (format paysage de préférence).',
      validation: (rule) => rule.required().error('Une photo est obligatoire'),
    }),
    defineField({
      name: 'description',
      title: 'Description du chantier',
      type: 'text',
      rows: 6,
      description: 'Racontez l’intervention : ce qui a été fait, le contexte, les difficultés… (s’affiche sur la page dédiée).',
    }),
    defineField({
      name: 'galerie',
      title: 'Galerie de photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
      description: 'Ajoutez d’autres photos du chantier. Elles s’affichent sur la page dédiée.',
    }),
    defineField({
      name: 'date',
      title: 'Date du chantier (facultatif)',
      type: 'date',
      description: 'Sert à classer les réalisations (les plus récentes en premier).',
    }),
  ],
  orderings: [
    {
      title: 'Plus récentes d’abord',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'titre', subtitle: 'categorie', media: 'image' },
  },
});

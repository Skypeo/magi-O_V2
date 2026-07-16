import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

// ⚠️ Remplacez la valeur ci-dessous par votre Project ID Sanity
// (visible sur https://sanity.io/manage après la création du projet),
// ou définissez la variable d'environnement SANITY_STUDIO_PROJECT_ID.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'REMPLACER_PAR_VOTRE_PROJECT_ID';

export default defineConfig({
  name: 'default',
  title: 'MAGI O — Réalisations',
  projectId,
  dataset: 'production',
  plugins: [
    structureTool({
      // Menu latéral simplifié pour la cliente
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Réalisations')
              .child(S.documentTypeList('realisation').title('Réalisations')),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});

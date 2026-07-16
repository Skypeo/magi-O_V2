import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'REMPLACER_PAR_VOTRE_PROJECT_ID';

export default defineCliConfig({
  api: {
    projectId,
    dataset: 'production',
  },
  // Nom du studio hébergé gratuitement : https://magi-o.sanity.studio
  studioHost: 'magi-o',
  autoUpdates: true,
});

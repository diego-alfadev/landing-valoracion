// @ts-check
import { defineConfig } from 'astro/config';
import config from './src/config/config.json';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: config.site.host,
  base: config.site.base
});
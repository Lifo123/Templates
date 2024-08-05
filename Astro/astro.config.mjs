import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://lifo123.github.io/',
  base: 'PromedyCalculator',
  outDir: 'Build',
  integrations: [react()],
  build: {
    assets: 'assets'
  }
});
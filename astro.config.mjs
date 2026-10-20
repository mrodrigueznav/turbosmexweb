import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://turbosmexico.com.mx',
  integrations: [sitemap({ filter: process.env.PUBLIC_INDEXABLE === 'false' ? () => false : undefined })],
  output: 'static',
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://turbosmexico.com.mx',
  integrations: [sitemap()],
  output: 'static',
});

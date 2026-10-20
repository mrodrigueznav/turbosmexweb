import type { APIRoute } from 'astro';

const isIndexable = import.meta.env.PUBLIC_INDEXABLE !== 'false';

export const GET: APIRoute = () => {
  const body = isIndexable
    ? 'User-agent: *\nAllow: /\n\nSitemap: https://turbosmexico.com.mx/sitemap-index.xml\n'
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

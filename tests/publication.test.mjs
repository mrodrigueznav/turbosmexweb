import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const pages = [
  'index.html',
  'catalogo/index.html',
  'catalogo/marca/garrett/index.html',
  'catalogo/aplicaciones/ford-transit-2-4-tdci/index.html',
  'catalogo/garrett-gt1548/index.html',
  'contacto/index.html',
  'ubicaciones/index.html',
  'servicios/venta/index.html',
  'servicios/reparacion/index.html',
  'servicios/refacciones/index.html',
];

const expectedRoutes = new Set(['/', '/catalogo/', '/catalogo/marca/garrett/', '/catalogo/aplicaciones/ford-transit-2-4-tdci/', '/catalogo/garrett-gt1548/', '/contacto/', '/ubicaciones/', '/servicios/venta/', '/servicios/reparacion/', '/servicios/refacciones/']);
const routeFromHref = (href) => {
  const path = href.split(/[?#]/)[0];
  return path.endsWith('/') ? path : `${path}/`;
};

test('todas las páginas públicas tienen estructura y metadatos básicos', async () => {
  for (const page of pages) {
    const html = await readFile(`dist/${page}`, 'utf8');
    assert.match(html, /<html lang="es-MX">/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<link rel="canonical" href="https:\/\/turbosmexico\.com\.mx\//);
    assert.match(html, /<meta property="og:title" content="[^"]+"/);
    assert.match(html, /<meta property="og:description" content="[^"]+"/);
    assert.match(html, /<meta property="og:url" content="https:\/\/turbosmexico\.com\.mx\//);
    assert.match(html, /<meta property="og:image" content="https?:\/\/[^" ]+"/);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /<main id="main-content">/);
    assert.match(html, /<h1[\s>]/);
  }
});

test('cada página publica una canonical única y el sitemap solo contiene rutas públicas', async () => {
  const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
  const sitemapRoutes = [...sitemap.matchAll(/<loc>https:\/\/turbosmexico\.com\.mx([^<]+)<\/loc>/g)].map(([, path]) => path);
  assert.deepEqual(new Set(sitemapRoutes), expectedRoutes);

  for (const page of pages) {
    const html = await readFile(`dist/${page}`, 'utf8');
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${page} debe tener una sola canonical`);
  }
});

test('robots permite el rastreo y declara el sitemap canónico', async () => {
  const robots = await readFile('dist/robots.txt', 'utf8');
  assert.match(robots, /^User-agent: \*\nAllow: \/\n/m);
  assert.match(robots, /Sitemap: https:\/\/turbosmexico\.com\.mx\/sitemap-index\.xml/);
});

test('las páginas indexables tienen señales sociales y de indexación coherentes', async () => {
  const product = await readFile('dist/catalogo/garrett-gt1548/index.html', 'utf8');
  assert.match(product, /<meta name="robots" content="index, follow"/);
  assert.match(product, /<meta property="og:type" content="product"/);
  assert.match(product, /<meta property="og:image:alt" content="Turbocompresor Garrett GT1548"/);
});

test('los enlaces internos publicados apuntan a rutas existentes', async () => {
  for (const page of pages) {
    const html = await readFile(`dist/${page}`, 'utf8');
    for (const [, href] of html.matchAll(/<a[^>]+href="(\/[^"#]+\/?)(?:#[^"]*)?"/g)) {
      assert.ok(expectedRoutes.has(routeFromHref(href)), `${page} contiene una ruta no publicada: ${href}`);
    }
  }
});

test('el menú y el formulario conservan nombres accesibles', async () => {
  const home = await readFile('dist/index.html', 'utf8');
  const contact = await readFile('dist/contacto/index.html', 'utf8');
  assert.match(home, /aria-label="Abrir menú"/);
  assert.match(home, /aria-controls="site-navigation"/);
  assert.match(home, /id="site-navigation"[^>]+aria-label="Navegación principal"/);
  for (const field of ['nombre', 'correo', 'telefono', 'mensaje']) {
    assert.match(contact, new RegExp(`<label[^>]+for="${field}"`));
    assert.match(contact, new RegExp(`id="${field}"`));
  }
  assert.match(contact, /aria-live="polite"/);
  assert.match(contact, /href="https:\/\/wa\.me\//);
});

test('las conversiones mantienen identificadores diferenciados', async () => {
  const layout = await readFile('dist/index.html', 'utf8');
  const contact = await readFile('dist/contacto/index.html', 'utf8');
  assert.match(layout, /data-track="whatsapp_click"/);
  assert.match(layout, /data-track="phone_click"/);
  assert.match(layout, /442 476 0911/);
  assert.match(contact, /form_submit/);
});

test('las páginas de servicio explican el proceso y solicitan datos verificables', async () => {
  const expectations = {
    'servicios/venta/index.html': ['Qué necesitamos para cotizar', 'marca, modelo', 'número de parte'],
    'servicios/reparacion/index.html': ['Cómo atendemos una reparación', 'síntomas', 'fotografías'],
    'servicios/refacciones/index.html': ['Cómo identificamos una refacción', 'aplicación', 'número de parte'],
  };

  for (const [page, phrases] of Object.entries(expectations)) {
    const html = await readFile(`dist/${page}`, 'utf8');
    for (const phrase of phrases) assert.match(html, new RegExp(phrase));
    assert.match(html, /Solicitar|Hablar por WhatsApp/);
  }
});

test('el primer producto publicado tiene información técnica y una ruta de cotización', async () => {
  const catalog = await readFile('dist/catalogo/index.html', 'utf8');
  const product = await readFile('dist/catalogo/garrett-gt1548/index.html', 'utf8');

  assert.match(catalog, /Catálogo de turbos/);
  assert.match(catalog, /href="\/catalogo\/garrett-gt1548\/"/);
  assert.match(product, /Garrett GT1548/);
  assert.match(product, /724930-5006S/);
  assert.match(product, /Ford Transit 2\.4 TDCi/);
  assert.match(product, /Sujeto a confirmación/);
  assert.match(product, /href="https:\/\/wa\.me\/524424760911\?text=/);
  assert.match(product, /data-track="whatsapp_click" data-product="Garrett GT1548" data-part-number="724930-5006S"/);
  assert.match(product, /href="\/contacto\/\?producto=Garrett%20GT1548&amp;numero_parte=724930-5006S/);
  assert.match(product, /Product/);
  assert.match(product, /BreadcrumbList/);
  assert.match(product, /href="\/servicios\/venta\/"/);
  assert.match(product, /href="\/servicios\/refacciones\/"/);
  assert.equal((product.match(/rel="canonical"/g) || []).length, 1);
});

test('las categorías publicadas tienen contenido propio y enlazan al producto', async () => {
  const brand = await readFile('dist/catalogo/marca/garrett/index.html', 'utf8');
  const application = await readFile('dist/catalogo/aplicaciones/ford-transit-2-4-tdci/index.html', 'utf8');

  assert.match(brand, /Modelos por marca/);
  assert.match(brand, /Turbos Garrett/);
  assert.match(brand, /href="\/catalogo\/garrett-gt1548\/"/);
  assert.match(application, /Modelos por aplicación/);
  assert.match(application, /Turbos para Ford Transit 2\.4 TDCi/);
  assert.match(application, /href="\/catalogo\/garrett-gt1548\/"/);
});

test('los productos no publicados no aparecen en páginas públicas', async () => {
  const catalog = await readFile('dist/catalogo/index.html', 'utf8');

  assert.doesNotMatch(catalog, /turbo-ejemplo/);
  const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
  assert.doesNotMatch(sitemap, /turbo-ejemplo/);
});

test('la cotización conserva contexto de producto y atribución', async () => {
  const product = await readFile('dist/catalogo/garrett-gt1548/index.html', 'utf8');
  const contact = await readFile('dist/contacto/index.html', 'utf8');

  assert.match(product, /Hola%20Turbos%20M%C3%A9xico%2C%20quiero%20cotizar%20Garrett%20GT1548/);
  for (const field of ['producto', 'numero_parte', 'landing_page', 'request_url', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid']) {
    assert.match(contact, new RegExp(`name="${field}"`));
  }
  assert.match(contact, /form_submit/);
});

test('ubicaciones distingue cobertura por envío y no publica sucursales sin datos confirmados', async () => {
  const html = await readFile('dist/ubicaciones/index.html', 'utf8');
  assert.match(html, /Cobertura por envío/);
  assert.match(html, /Escríbenos para conocer la opción/i);
  assert.match(html, /Si el mapa no carga, usa la dirección/);
  assert.match(html, /href="\/contacto\/"/);
});

test('el inventario SEO asigna una decisión y destino a cada URL observada', async () => {
  const inventory = await readFile('docs/seo/url-inventory.md', 'utf8');
  const rows = [...inventory.matchAll(/^\| `([^`]+)` \| ([^|]+) \| ([^|]+) \|/gm)];

  assert.ok(rows.length >= 10, 'el inventario debe incluir URLs actuales y legacy');
  for (const [, source, decision, destination] of rows) {
    assert.notEqual(decision.trim(), '', `${source} no tiene decisión`);
    assert.match(destination.replaceAll('`', '').trim(), /^(\/|N\/A)/, `${source} no tiene destino documentado`);
  }

  const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
  for (const source of rows.slice(0, 6).map(([, path]) => path)) {
    assert.match(sitemap, new RegExp(`<loc>https://turbosmexico\\.com\\.mx${source.replaceAll('/', '\\/')}</loc>`));
  }
});

test('las reglas de redirección son 301 directas y no apuntan a otra URL legacy', async () => {
  const [redirects, inventory] = await Promise.all([
    readFile('public/.htaccess', 'utf8'),
    readFile('docs/seo/url-inventory.md', 'utf8'),
  ]);
  const legacySection = inventory.split('## URLs legacy observadas y decisión')[1].split('## Reglas de servidor')[0];
  const legacyPaths = [...legacySection.matchAll(/^\| `([^`]+)` \|/gm)].map(([, path]) => path);
  const redirectPaths = [...legacySection.matchAll(/^\| `([^`]+)` \| redirigir/gm)].map(([, path]) => path);
  const rules = [...redirects.matchAll(/^Redirect 301\s+(\S+)\s+(\S+)$/gm)];

  assert.equal(rules.length, redirectPaths.length);
  for (const [, source, destination] of rules) {
    assert.ok(redirectPaths.includes(source), `${source} no está en el inventario`);
    assert.ok(!legacyPaths.includes(destination), `${source} crea una cadena hacia ${destination}`);
    assert.notEqual(source, destination, `${source} crea un bucle`);
  }
});

test('la fase posterior al lanzamiento tiene un protocolo de contenido y medición', async () => {
  const [contentReview, measurementPlan] = await Promise.all([
    readFile('docs/seo/informational-content-review.md', 'utf8'),
    readFile('docs/measurement/post-launch-checklist.md', 'utf8'),
  ]);

  for (const article of ['identificación de placas', 'reparación', 'turbo lag']) {
    assert.match(contentReview, new RegExp(article, 'i'));
  }
  for (const event of ['whatsapp_click', 'phone_click', 'form_submit']) {
    assert.match(measurementPlan, new RegExp(event));
  }
  for (const requirement of ['Search Console', '404', 'indexación', 'móvil']) {
    assert.match(measurementPlan, new RegExp(requirement, 'i'));
  }
});

test('ubicaciones publica sucursales físicas y redes sociales oficiales', async () => {
  const html = await readFile('dist/ubicaciones/index.html', 'utf8');
  for (const phrase of [
    'Sucursal Querétaro',
    'Querétaro 11',
    'San Isidro Miranda',
    'bajio@turbosmexico.com.mx',
    'Sucursal Tlalnepantla',
    'Av. Santa Monica 40 Local C',
    'El Mirador',
    'ventas@turbosmexico.com.mx',
  ]) assert.match(html, new RegExp(phrase));

  assert.match(html, /<iframe[^>]+title="Mapa de Sucursal Querétaro"/);
  assert.match(html, /<iframe[^>]+title="Mapa de Sucursal Tlalnepantla"/);
  assert.match(html, /data-track="branch_directions" data-branch="queretaro"/);
  assert.match(html, /data-track="branch_directions" data-branch="tlalnepantla"/);
  assert.match(html, /maps\/search\/\?api=1&amp;query=Quer%C3%A9taro%2011%2C%20Col.%20San%20Isidro%20Miranda/);
  assert.match(html, /maps\/search\/\?api=1&amp;query=Av.%20Santa%20Monica%2040%20Local%20C/);
  assert.match(html, /data-track="branch_phone_click" data-branch="queretaro"/);
  assert.match(html, /data-track="branch_phone_click" data-branch="tlalnepantla"/);
  assert.match(html, /branch_location: element\.dataset\.branch/);
  assert.match(html, /data-track="social_facebook"/);
  assert.match(html, /data-track="social_instagram"/);
  assert.match(html, /data-track="social_youtube"/);
  assert.match(html, /href="https:\/\/www\.facebook\.com\/turbosmexico\//);
  assert.match(html, /href="https:\/\/www\.instagram\.com\/turbos\.mexico\//);
  assert.match(html, /href="https:\/\/www\.youtube\.com\/channel\/UCtFUgAvBEVE8-OyeI-24qng\/videos"/);
  assert.match(html, /target="_blank" rel="noopener noreferrer" data-track="social_facebook"/);
  for (const social of ['social_facebook', 'social_instagram', 'social_youtube']) {
    assert.match(html, new RegExp(`data-track="${social}"[^>]*aria-label="[^"]+"[^>]*><svg`));
  }
  assert.match(html, /Cobertura por envío/);
  assert.doesNotMatch(html, /LocalBusiness/);
});

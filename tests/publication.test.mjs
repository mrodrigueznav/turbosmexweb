import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const pages = [
  'index.html',
  'contacto/index.html',
  'ubicaciones/index.html',
  'servicios/venta/index.html',
  'servicios/reparacion/index.html',
  'servicios/refacciones/index.html',
];

const expectedRoutes = new Set(['/', '/contacto/', '/ubicaciones/', '/servicios/venta/', '/servicios/reparacion/', '/servicios/refacciones/']);
const routeFromHref = (href) => {
  const path = href.split('#')[0];
  return path.endsWith('/') ? path : `${path}/`;
};

test('todas las páginas públicas tienen estructura y metadatos básicos', async () => {
  for (const page of pages) {
    const html = await readFile(`dist/${page}`, 'utf8');
    assert.match(html, /<html lang="es-MX">/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<main id="main-content">/);
    assert.match(html, /<h1[\s>]/);
  }
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

test('ubicaciones distingue cobertura por envío y no publica sucursales sin datos confirmados', async () => {
  const html = await readFile('dist/ubicaciones/index.html', 'utf8');
  assert.match(html, /Cobertura por envío/);
  assert.match(html, /no publicamos sucursales/i);
  assert.match(html, /dirección, teléfono y horario/);
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

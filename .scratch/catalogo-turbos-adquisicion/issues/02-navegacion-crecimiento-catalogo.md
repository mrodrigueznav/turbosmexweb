# 02: Navegación y crecimiento del catálogo

**What to build:** Una persona puede descubrir los turbos publicados desde una entrada de catálogo, categorías y enlaces relacionados, y el negocio puede ampliar el catálogo con productos seleccionados por demanda, historial comercial o inventario recurrente sin crear páginas duplicadas.

**Blocked by:** 01 — Colección Markdown y primer producto publicado

**Status:** ready-for-human

- [x] Existe una entrada pública de catálogo que enlaza únicamente a productos publicados.
- [x] Las categorías de marca o aplicación contienen contenido propio y no se publican cuando están vacías o no tienen una intención útil.
- [x] Los productos publicados son alcanzables mediante navegación, enlaces contextuales o categorías relevantes.
- [ ] Se incorporan los primeros productos adicionales usando el formato Markdown validado, con información comercial y técnica confirmada.
- [x] Las páginas de producto incluyen breadcrumbs y enlaces relacionados hacia venta, reparación, refacciones o contacto cuando sean pertinentes.
- [x] El sitemap contiene todas las páginas públicas canónicas del catálogo y ninguna ruta alternativa o producto retirado.
- [x] Las pruebas detectan enlaces internos rotos, categorías vacías y productos publicados sin contenido mínimo.

## Comments

### Implementación

El catálogo ahora enlaza únicamente productos publicados, genera categorías estáticas por marca y aplicación solo cuando tienen productos, añade breadcrumbs y enlaces contextuales desde cada producto, y verifica el sitemap y los enlaces internos. Se generan las categorías de Garrett y Ford Transit 2.4 TDCi a partir del contenido publicado.

Queda pendiente incorporar productos adicionales con información comercial y técnica confirmada por el negocio. No se añadió una pieza inventada para satisfacer ese criterio.

La implementación se verificó con `npm test`: 15 pruebas pasan y el build genera 10 páginas estáticas.

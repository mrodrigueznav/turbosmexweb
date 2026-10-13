# 04: Migración SEO de URLs relacionadas con el catálogo

**What to build:** Una persona que llega desde una URL antigua relacionada con turbos encuentra el producto o categoría equivalente, y las URLs sin equivalente reciben una retirada explícita sin perderse en cadenas de redirección.

**Blocked by:** 01 — Colección Markdown y primer producto publicado; 02 — Navegación y crecimiento del catálogo

**Status:** ready-for-agent

- [ ] Las URLs anteriores relacionadas con turbos se comparan con el inventario y los datos disponibles del dominio anterior.
- [ ] Cada URL recibe una decisión explícita de conservar, migrar, actualizar, redirigir o retirar.
- [ ] Las URLs con equivalencia reciben una redirección HTTP 301 directa a la página de producto o categoría correspondiente.
- [ ] Las URLs retiradas no se redirigen a inicio ni a una página genérica sin equivalencia.
- [ ] Las reglas no generan cadenas, bucles ni destinos que también sean URLs legacy.
- [ ] Las páginas nuevas conservan canonical, metadatos y contenido coherentes con la intención de la URL de origen.
- [ ] Existen pruebas del código HTTP, destino esperado y ausencia de cadenas o bucles para cada redirección publicada.

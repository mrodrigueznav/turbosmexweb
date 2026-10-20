# 01: Colección Markdown y primer producto publicado

**What to build:** Un responsable editorial puede añadir un producto mediante un archivo Markdown validado, y una persona visitante puede consultar el primer turbo publicado en una página completa, con información técnica confirmada y una ruta clara para solicitar cotización.

**Blocked by:** None (can start immediately)

**Status:** completed

- [x] Existe una colección de productos Markdown con campos obligatorios y validación para evitar productos incompletos o datos inválidos.
- [x] Un primer turbo real se publica mediante una plantilla reutilizable con nombre, marca, número de parte, aplicaciones confirmadas, condición, disponibilidad comunicable e imagen cuando existan esos datos.
- [x] La página distingue consulta y cotización de compra en línea, y no afirma precio, compatibilidad o inventario no confirmados.
- [x] La página tiene título, descripción, H1, canonical, metadatos sociales, CTA de contacto y datos estructurados únicamente para información visible y confirmada.
- [x] El producto publicado aparece en el sitemap y los productos no publicados no aparecen en páginas públicas ni en el sitemap.
- [x] La construcción y la suite de publicación comprueban rutas, metadatos, accesibilidad básica y enlaces internos del primer producto.

## Comments

### Implementación

La colección validada de productos Markdown y el primer producto publicado están implementados. La página de producto comunica consulta y cotización, conserva únicamente datos técnicos confirmados, genera metadatos y datos estructurados coherentes, y aparece en el sitemap. Los productos de ejemplo o con aplicaciones explícitamente no confirmadas no se pueden publicar. La suite de publicación verifica las rutas, enlaces, metadatos, accesibilidad básica y exclusión de productos no publicados.

La implementación se verificó con `npm test`: 14 pruebas pasan; `npm run build` genera 8 páginas estáticas sin errores.

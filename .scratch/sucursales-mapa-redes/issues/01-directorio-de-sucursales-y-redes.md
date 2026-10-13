# 01: Directorio de sucursales, mapas y redes sociales

**What to build:** Publicar sucursales físicas confirmadas con dirección, mapa,
fotografía opcional y enlaces a redes sociales oficiales.

**Blocked by:** None (can start immediately; publication of maps is blocked by
confirmation of the two address discrepancies).

**Status:** ready-for-human

- [x] Se usan las direcciones textuales de las páginas fuente para Querétaro y Tlalnepantla.
- [x] Se publica una tarjeta accesible por sucursal con dirección, teléfono,
  correo, mapa y enlace de indicaciones.
- [x] Se publica un fallback sin fotografía porque no se identificaron fotos de
  sucursal autorizadas en las páginas fuente.
- [x] Se agregan enlaces accesibles a Facebook, Instagram y YouTube.
- [x] Se distinguen sucursales físicas de cobertura por envío.
- [x] Se actualizan canonical, sitemap, inventario SEO y redirecciones legacy.
- [x] Se agregan pruebas de publicación para datos, enlaces, accesibilidad y
  eventos de seguimiento.

## Comments

### Implementación

La página de ubicaciones ahora publica Querétaro y Tlalnepantla con los datos
textuales solicitados, mapas embebidos con fallback, enlaces de indicaciones,
contacto por teléfono/correo y redes sociales oficiales. Las fotografías no se
copiaron porque no se identificaron archivos específicos de sucursal con
autorización verificable. Las URLs legacy redirigen al ancla equivalente del
directorio.

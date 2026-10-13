# Inventario de URLs y mapa de redirecciones

Estado: **borrador verificable previo a migración**
Última revisión: 2026-10-13

## Alcance y fuentes

Este inventario separa lo que puede verificarse en el repositorio de lo que
requiere acceso al sitio anterior. La fuente observable disponible es el sitemap
generado por el sitio nuevo (`/sitemap-index.xml`, que referencia
`/sitemap-0.xml`) y las cuatro URLs legacy indicadas en la especificación de la
fase 2. No se tiene acceso a Search Console, Analytics ni al sitemap del dominio
anterior; por eso no se afirma que la lista sea un crawl completo.

URLs canónicas publicadas actualmente:

| URL actual | Decisión | Destino publicado |
| --- | --- | --- |
| `/` | conservar | `/` |
| `/contacto/` | conservar | `/contacto/` |
| `/ubicaciones/` | conservar | `/ubicaciones/` |
| `/servicios/venta/` | conservar | `/servicios/venta/` |
| `/servicios/reparacion/` | conservar | `/servicios/reparacion/` |
| `/servicios/refacciones/` | conservar | `/servicios/refacciones/` |

## URLs legacy observadas y decisión

Cada URL tiene una decisión explícita. Las rutas sin equivalente de contenido
propio no se envían automáticamente al inicio: se elige la sección más cercana
o se deja pendiente de revisión editorial.

| URL anterior | Decisión | Destino publicado |
| --- | --- | --- |
| `/contactanos/` | redirigir a página equivalente | `/contacto/` |
| `/sucursal-queretaro/` | redirigir a la sucursal equivalente | `/ubicaciones/#sucursal-queretaro` |
| `/sucursal-tlalnepantla/` | redirigir a la sucursal equivalente | `/ubicaciones/#sucursal-tlalnepantla` |
| `/sucursal-guanajuato/` | retirar; confirmar primero si existe atención diferenciada | `N/A (sin redirección)` |
| `/tipos-de-turbos/` | redirigir a catálogo/servicio equivalente | `/servicios/venta/` |
| `/turbos-garrett/` | redirigir a catálogo/servicio equivalente; no implica inventario de marca | `/servicios/venta/` |

La entrada de Guanajuato requiere confirmación del responsable antes de
publicarse. Mientras no exista, debe responder como retirada (404/410 según la
política de la migración), no redirigirse a una página genérica.

## Valor observable por URL

El valor de tráfico, enlaces e impresiones no está disponible sin Search
Console, Analytics ni una exportación del dominio anterior. Se registra esa
ausencia explícitamente para evitar inventar métricas:

- `/`, `/contacto/`, `/ubicaciones/`, `/servicios/venta/`,
  `/servicios/reparacion/` y `/servicios/refacciones/`: URL pública presente en
  el sitemap generado; valor de tráfico y enlaces **no disponible**.
- `/contactanos/`, `/sucursal-guanajuato/`, `/tipos-de-turbos/` y
  `/turbos-garrett/`: URL legacy solicitada por la especificación; presencia,
  tráfico, enlaces e impresiones **pendientes de confirmar** contra el dominio
  anterior.

## Reglas de servidor

Las reglas se mantienen en `public/.htaccess` para que el servidor Apache del
dominio anterior responda directamente con HTTP 301. El destino es final: no es
otra URL legacy y no depende de JavaScript, enlaces ni una cadena de
redirecciones. Deben instalarse en el virtual host que atiende el dominio
anterior antes de cambiar DNS.

## Validación pendiente

Antes del cambio de dominio, el responsable debe proporcionar:

1. exportación de URLs con impresiones, clics y enlaces desde Search Console;
2. URLs y sitemaps realmente publicados en el dominio anterior;
3. páginas vistas y conversiones de Analytics;
4. confirmación de cada destino y de la cobertura de Guanajuato.

Con esos datos se agregan URLs no descubiertas, se revisan las decisiones y se
ejecuta una prueba HTTP de cada regla (301, `Location` esperado, sin cadenas ni
bucles). Hasta entonces este documento es el inventario técnico mínimo, no una
declaración de completitud del sitio anterior.

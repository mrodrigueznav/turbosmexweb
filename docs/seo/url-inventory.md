# Inventario de URLs y mapa de redirecciones

Estado: **mapa de migración basado en rastreo público del sitio anterior**
Última revisión: 2026-10-13

## Alcance y fuentes

Este inventario separa lo que puede verificarse en el repositorio de lo que
requiere datos de Search Console. Se realizó un rastreo público del sitio
anterior y se identificaron sus páginas enlazadas, pero no se tiene acceso a
Search Console, Analytics ni a un sitemap histórico; por eso no se afirma que
incluya URLs aisladas o no enlazadas.

URLs canónicas publicadas actualmente:

| URL actual | Decisión | Destino publicado |
| --- | --- | --- |
| `/` | conservar | `/` |
| `/contacto/` | conservar | `/contacto/` |
| `/ubicaciones/` | conservar | `/ubicaciones/` |
| `/servicios/venta/` | conservar | `/servicios/venta/` |
| `/servicios/reparacion/` | conservar | `/servicios/reparacion/` |
| `/servicios/refacciones/` | conservar | `/servicios/refacciones/` |
| `/quienes-somos/` | crear y conservar | `/quienes-somos/` |
| `/aplicaciones/` | crear y conservar | `/aplicaciones/` |
| `/blog/` | crear y conservar | `/blog/` |
| `/blog/identificacion-placa-turbo/` | crear y conservar | `/blog/identificacion-placa-turbo/` |
| `/blog/turbo-lag/` | crear y conservar | `/blog/turbo-lag/` |
| `/blog/reparacion-turbo/` | crear y conservar | `/blog/reparacion-turbo/` |

## URLs legacy observadas y decisión

Cada URL tiene una decisión explícita. Las rutas sin equivalente de contenido
propio no se envían automáticamente al inicio: se elige la sección más cercana
o se deja pendiente de revisión editorial.

| URL anterior | Decisión | Destino publicado |
| --- | --- | --- |
| `/contactanos/` | redirigir a página equivalente | `/contacto/` |
| `/sucursal-queretaro/` | redirigir a la sucursal equivalente | `/ubicaciones/#sucursal-queretaro` |
| `/sucursal-tlalnepantla/` | retirar; ya no existe esa sucursal | `N/A (410 Gone)` |
| `/sucursal-monterrey/` | retirar; ya no existe esa sucursal | `N/A (410 Gone)` |
| `/sucursal-cancun/` | retirar; ya no existe esa sucursal | `N/A (410 Gone)` |
| `/sucursal-guanajuato/` | retirar; ya no existe esa sucursal | `N/A (410 Gone)` |
| `/tipos-de-turbos/` | redirigir a catálogo/servicio equivalente | `/servicios/venta/` |
| `/turbos-garrett/` | redirigir al catálogo equivalente; no implica inventario de marca | `/catalogo/marca/garrett/` |
| `/portfolio/venta-de-turbos-nuevos/` | redirigir al servicio equivalente | `/servicios/venta/` |
| `/portfolio/reparacion-de-turbos/` | redirigir al servicio equivalente | `/servicios/reparacion/` |
| `/portfolio/cartuchos-para-turbos/` | redirigir a refacciones, sin afirmar inventario | `/servicios/refacciones/` |
| `/portfolio/refacciones-para-turbos/` | redirigir al servicio equivalente | `/servicios/refacciones/` |
| `/portfolio/turbos-disel-y-gasolina/` | redirigir a venta, sin afirmar inventario | `/servicios/venta/` |
| `/blog-turbos-mexico/` | redirigir al índice informativo equivalente | `/blog/` |
| `/identificacion-de-la-placa-de-un-turbo-2/` | redirigir al artículo migrado | `/blog/identificacion-placa-turbo/` |
| `/turbo-lag-que-es-y-como-evitarlo-2/` | redirigir al artículo migrado | `/blog/turbo-lag/` |
| `/como-reparar-un-turbo-paso-a-paso/` | redirigir al artículo migrado | `/blog/reparacion-turbo/` |
| `/conversion-a-turbo-todo-lo-que-tienes-que-saber/` | retirar; no hay servicio equivalente confirmado | `N/A (410 Gone)` |
| `/estructura-de-un-turbo/` | retirar; no se migra contenido editorial sin prioridad confirmada | `N/A (410 Gone)` |
| `/portfolio/` | retirar; archivo sin intención propia | `N/A (410 Gone)` |
| `/datoturbo/` | retirar; categoría de WordPress | `N/A (410 Gone)` |
| `/turbos/` | retirar; categoría de WordPress | `N/A (410 Gone)` |
| `/author/*` | retirar; archivo de autor | `N/A (410 Gone)` |
| `/tag/*` | retirar; archivos de etiquetas | `N/A (410 Gone)` |
| `/2020/*`, `/2021/*` | retirar; archivos mensuales | `N/A (410 Gone)` |

Guanajuato, Tlalnepantla, Monterrey y Cancún ya no son sucursales. Sus URLs antiguas deben
responder como retiradas, no redirigirse a una página genérica ni publicarse
como ubicaciones actuales.

## Valor observable por URL

El valor de tráfico, enlaces e impresiones no está disponible sin Search
Console, Analytics ni una exportación del dominio anterior. Se registra esa
ausencia explícitamente para evitar inventar métricas:

- `/`, `/contacto/`, `/ubicaciones/`, `/servicios/venta/`,
  `/servicios/reparacion/` y `/servicios/refacciones/`: URL pública presente en
  el sitemap generado; valor de tráfico y enlaces **no disponible**.
- Las URLs adicionales de servicios, artículos y archivos fueron observadas en
  el rastreo público; su tráfico, enlaces e impresiones siguen **pendientes de
  confirmar** con Search Console y Analytics.

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
4. confirmación de cada destino de migración; la cobertura de sucursales ya fue
   confirmada: únicamente Querétaro permanece vigente.

Con esos datos se agregan URLs no descubiertas, se revisan las decisiones y se
ejecuta una prueba HTTP de cada regla (301, `Location` esperado, sin cadenas ni
bucles). Hasta entonces este documento es el inventario técnico mínimo, no una
declaración de completitud del sitio anterior.

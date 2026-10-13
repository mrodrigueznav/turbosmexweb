Status: ready-for-agent

# Especificación: sucursales físicas, mapas y redes sociales

## Problem Statement

La página actual de ubicaciones solo comunica cobertura por envío y no permite
que una persona encuentre visualmente las sucursales físicas confirmadas. Las
páginas públicas existentes de Querétaro y Tlalnepantla contienen direcciones,
teléfonos, correos y mapas embebidos, pero hay diferencias entre el texto
visible y la dirección utilizada por cada mapa. La migración necesita presentar
esa información de forma clara, accesible y verificable, además de ofrecer los
canales sociales oficiales de Turbos México.

## Solution

Convertir la página de ubicaciones en un directorio de sucursales confirmadas,
con una tarjeta por sucursal que muestre nombre, dirección física, teléfono,
correo, mapa, enlace para abrir indicaciones y fotografía cuando exista un
archivo identificado y autorizado. Incorporar enlaces visibles a Facebook,
Instagram y YouTube en el pie de página y en la sección de contacto social.

Antes de publicar, resolver con el responsable las discrepancias entre las
direcciones textuales y las consultas de Google Maps de las fuentes legacy. La
página debe distinguir una sucursal física de la cobertura por envío y no debe
publicar horarios, servicios o datos estructurados que no estén confirmados.

## User Stories

1. Como visitante de Querétaro, quiero ver la dirección física de la sucursal,
   para saber dónde puedo acudir.
2. Como visitante de Tlalnepantla, quiero ver la dirección física de la
   sucursal, para llegar al punto correcto.
3. Como visitante, quiero ver cada sucursal separada de las demás, para no
   confundir teléfonos, correos o mapas.
4. Como visitante, quiero consultar un mapa dentro de la página, para ubicar la
   sucursal sin tener que interpretar solo una dirección escrita.
5. Como visitante en un teléfono, quiero abrir las indicaciones en mi
   aplicación de mapas, para iniciar la navegación desde mi ubicación.
6. Como visitante, quiero llamar desde el teléfono mostrado en una sucursal,
   para confirmar disponibilidad o atención antes de trasladarme.
7. Como visitante, quiero escribir al correo asociado a una sucursal, para
   solicitar información por un canal alternativo.
8. Como visitante, quiero ver una fotografía real de la sucursal cuando esté
   disponible, para reconocer el lugar al llegar.
9. Como visitante, quiero que las fotografías tengan texto alternativo, para
   entender su contenido si no puedo verlas.
10. Como visitante, quiero que la página indique si una ubicación es física o
    solo cobertura por envío, para no crear expectativas equivocadas.
11. Como visitante, quiero que la información de dirección sea consistente
    entre el texto, el mapa y el enlace de indicaciones, para confiar en la
    ubicación publicada.
12. Como visitante, quiero encontrar Facebook de Turbos México, para consultar
    sus publicaciones y novedades.
13. Como visitante, quiero encontrar Instagram de Turbos México, para ver sus
    contenidos visuales.
14. Como visitante, quiero encontrar YouTube de Turbos México, para consultar
    sus videos.
15. Como usuario de lector de pantalla, quiero que los enlaces sociales tengan
    nombres accesibles y destino claro, para saber qué canal abrir.
16. Como usuario móvil, quiero que mapas, tarjetas y enlaces sociales sean
    utilizables sin desbordamiento horizontal, para completar mi consulta.
17. Como responsable del negocio, quiero que cada dato publicado tenga una
    fuente o confirmación, para evitar enviar clientes a una dirección errónea.
18. Como responsable del negocio, quiero que las sucursales se incorporen sin
    CMS ni base de datos remota, para conservar la arquitectura estática actual.
19. Como responsable del negocio, quiero conservar las URLs legacy de
    sucursales mediante destinos equivalentes, para no perder visitas de esas
    páginas durante la migración.
20. Como responsable de marketing, quiero que los clics de teléfono, correo,
    indicaciones y redes puedan distinguirse, para conocer las intenciones de
    contacto sin afirmar ventas o conversaciones confirmadas.
21. Como responsable SEO, quiero que la página de sucursales tenga canonical,
    descripción y metadatos sociales coherentes, para compartir e indexar el
    contenido correcto.
22. Como responsable SEO, quiero que el marcado de negocio local use solo
    direcciones y teléfonos confirmados, para no publicar datos estructurados
    falsos.

## Implementation Decisions

- La página existente de ubicaciones evolucionará de una sola sección de
  cobertura por envío a un directorio con sucursales físicas confirmadas y una
  sección separada de cobertura nacional.
- La primera versión incluirá Querétaro y Tlalnepantla porque son las dos
  fuentes solicitadas. No se agregan Monterrey, Cancún ni Guanajuato hasta
  contar con datos confirmados equivalentes.
- Cada sucursal tendrá una fuente de datos coherente para nombre, dirección,
  teléfonos, correo, coordenadas o consulta de mapa, fotografía y servicios.
  La dirección textual y la consulta del mapa deben coincidir antes de marcar
  la sucursal como publicada.
- Las fuentes actuales informan para Querétaro: “Querétaro 11, Col. San Isidro
  Miranda, Querétaro, CP 76240”, teléfonos 442-476-09-11 y 442-744-77-20, y
  `bajio@turbosmexico.com.mx`; su mapa público consulta “Av. Querétaro & Calle
  Sonora, 76240 San Isidro Miranda”. El responsable debe confirmar cuál es la
  dirección oficial.
- Las fuentes actuales informan para Tlalnepantla: “Av. Santa Monica 40 Local
  C, El Mirador, 54080 Tlalnepantla, Méx.” y 442-476-09-11; su mapa público
  consulta “Av Sta Monica 1-L-4, El Mirador, 54080 Tlalnepantla, Méx.” El
  responsable debe confirmar cuál es la dirección oficial.
- El mapa se mostrará mediante un embed o enlace externo con fallback textual y
  botón de indicaciones. No se añadirá una API de mapas ni una dependencia de
  servidor si el embed público es suficiente; cualquier clave o restricción
  deberá configurarse fuera del código público.
- Las fotografías se reutilizarán solo después de identificar los archivos de
  las páginas fuente y confirmar autorización para copiarlos al sitio nuevo.
  Se servirán localmente, con dimensiones, formato, peso y texto alternativo
  revisados; no se dependerá de URLs internas de WordPress ni se hotlinkearán
  imágenes sin autorización.
- Si las páginas fuente no contienen fotografías de sucursal identificables,
  la tarjeta se publicará sin fotografía hasta recibir un archivo autorizado.
  No se usará el logo como si fuera una fotografía de la ubicación.
- Los enlaces sociales oficiales serán Facebook, Instagram y YouTube con
  `target="_blank"`, `rel="noopener noreferrer"`, etiquetas accesibles y
  eventos de seguimiento diferenciados. Sus destinos son los proporcionados
  por el responsable, sin incrustar feeds externos.
- Los clics de teléfono, correo, indicaciones y redes serán conversiones
  verificables del sitio cuando el adaptador de Analytics esté configurado; no
  se interpretarán como ventas ni como conversaciones confirmadas.
- La página conservará el sistema de canonical, Open Graph, Twitter y sitemap
  del sitio estático. El marcado `LocalBusiness` se añadirá únicamente cuando
  los datos de cada sucursal estén confirmados; mientras tanto puede mantenerse
  el marcado de organización existente.
- Las URLs legacy `/sucursal-queretaro/` y `/sucursal-tlalnepantla/` recibirán
  una decisión explícita en el inventario SEO y, si la nueva arquitectura no
  las conserva, una redirección 301 directa hacia el directorio o ancla de la
  sucursal equivalente. No se redirigirán a inicio por defecto.

## Testing Decisions

- El contrato principal será la página pública generada de ubicaciones, no
  componentes internos ni datos privados. Una prueba debe comprobar el
  comportamiento observable que tendría una persona al abrir la página.
- Se ampliarán las pruebas de publicación existentes para comprobar que cada
  sucursal visible tenga nombre, dirección, teléfono, correo, mapa, enlace de
  indicaciones y texto alternativo cuando tenga fotografía.
- Se comprobará que las direcciones textuales, las URLs de mapas y los enlaces
  de indicaciones correspondan a la fuente confirmada, y que no se publique una
  discrepancia sin resolver.
- Se comprobará que Facebook, Instagram y YouTube aparezcan con destinos
  exactos, nombres accesibles y relación segura para nuevas pestañas.
- Se comprobarán los eventos de teléfono, correo, indicaciones y redes en el
  HTML generado, siguiendo el patrón existente para WhatsApp, sin afirmar que
  un clic equivale a un lead o una venta.
- Se comprobará responsive y accesibilidad mediante estructura semántica,
  encabezados, enlaces descriptivos, foco navegable y ausencia de contenido
  esencial dependiente únicamente del mapa externo.
- Se verificará que canonical, Open Graph, Twitter, sitemap y datos
  estructurados no publiquen una dirección no confirmada ni dupliquen la URL
  preferida.
- Las pruebas no intentarán validar el servicio de Google Maps, Facebook,
  Instagram o YouTube; validarán que el sitio genere correctamente sus enlaces,
  fallbacks y metadatos.

## Out of Scope

- Crear o modificar fichas de Google Business Profile.
- Confirmar por cuenta propia horarios, servicios, disponibilidad, personal o
  teléfonos que no estén publicados o validados por el responsable.
- Crear sucursales adicionales de Monterrey, Cancún o Guanajuato.
- Incorporar un CMS, panel de administración, base de datos remota o catálogo
  dinámico.
- Incrustar feeds, publicaciones o reproductores sociales que aumenten la
  dependencia de terceros.
- Comprar, producir o editar fotografías nuevas.
- Resolver legalmente la licencia de fotografías sin confirmación del
  responsable; la implementación debe bloquear el uso si no existe autorización.
- Prometer posicionamiento local, tráfico, visitas físicas o conversiones.

## Further Notes

- La información de las fuentes legacy fue consultada públicamente el 13 de
  octubre de 2026. Las páginas muestran fechas y contenido que pueden cambiar;
  la confirmación del responsable prevalece sobre el crawl.
- La discrepancia de Querétaro y Tlalnepantla debe resolverse antes de publicar
  mapas o datos estructurados. Es el principal bloqueo funcional de esta
  característica.
- La implementación debería actualizar el inventario SEO de la fase 2 y
  revisar las reglas de redirección existentes antes de retirar las URLs
  legacy.

Status: ready-for-agent

# Especificación: migración SEO y contenido útil

## Problem Statement

El nuevo sitio tiene una base técnica sólida, pero cambia la arquitectura de
URLs y todavía ofrece poco contenido diferenciado en servicios y ubicaciones.
La migración puede perder tráfico, enlaces entrantes y contexto de búsqueda si
las URLs actuales no se inventarían y redirigen antes del cambio de dominio.

La información disponible públicamente no incluye Search Console, analítica
privada, volumen de búsquedas ni pruebas de rendimiento. Por eso, las decisiones
de conservar, retirar o ampliar páginas deben validarse con esos datos antes de
convertirse en compromisos de contenido.

## Solution

Preparar una segunda fase del sitio que:

- inventaríe las URLs actuales, sus sitemaps y su valor observable;
- defina un mapa URL por URL y redirecciones permanentes 301 hacia la página
  más equivalente, evitando enviar todo a la página de inicio;
- conserve o actualice páginas informativas que demuestren valor;
- amplíe servicios y ubicaciones con información real, diferenciada y verificable;
- añada canonical, metadatos sociales y datos estructurados solo cuando los
  datos sean exactos;
- mantenga medición de contactos y prepare la verificación de indexación y
  rendimiento después del lanzamiento.

## User Stories

1. Como responsable del sitio, quiero conocer todas las URLs actuales antes de
   cambiar la arquitectura, para no perder tráfico ni enlaces entrantes.
2. Como visitante de una URL antigua, quiero llegar a la página nueva más
   relevante, para no encontrar un error ni contenido genérico.
3. Como cliente, quiero encontrar información concreta sobre venta, reparación
   y refacciones, para saber si Turbos México puede atender mi caso.
4. Como cliente de una ubicación, quiero distinguir una sucursal real de una
   cobertura por envío, para no recibir una expectativa incorrecta.
5. Como visitante que comparte una página, quiero que la vista previa y la URL
   preferida representen correctamente su contenido.
6. Como responsable de marketing, quiero medir contactos e indexación después
   del lanzamiento, para comparar el rendimiento del sitio nuevo con el actual.

## Implementation Decisions

- El inventario incluirá las URLs del sitio actual y sus sitemaps, incluyendo
  como mínimo `/contactanos/`, `/sucursal-guanajuato/`, `/tipos-de-turbos/` y
  `/turbos-garrett/` si siguen presentes al momento de la migración.
- Cada URL recibirá una decisión explícita: conservar, migrar con contenido
  equivalente, redirigir a una página equivalente, actualizar o retirar.
- Las redirecciones serán 301 y se configurarán en la capa del servidor que
  atiende el dominio anterior; no se simularán mediante enlaces o JavaScript.
- No se creará una página local para una ciudad sin atención real y diferenciada.
  La cobertura por envío se describirá como cobertura por envío.
- Las páginas de servicio podrán incluir equipos y marcas atendidos, proceso,
  datos para identificar un turbo, síntomas, recepción desde otras ciudades y
  garantías únicamente cuando el negocio los confirme.
- Los títulos y descripciones se mantendrán específicos para la intención de
  búsqueda real, sin crear páginas de baja diferenciación solo por palabras clave.
- Cada página pública tendrá URL canonical y metadatos Open Graph/Twitter
  apropiados a su contenido.
- Los datos estructurados de organización o negocio local solo se publicarán
  con información exacta y verificable; no se inventarán horarios, direcciones,
  teléfonos ni servicios.
- Search Console, Analytics y pruebas de rendimiento se configurarán o
  consultarán como parte de la validación posterior al lanzamiento.

## Testing Decisions

- El inventario se probará contra los sitemaps disponibles y una lista de URLs
  observadas; cada URL deberá tener una decisión y destino documentados.
- Las redirecciones se probarán como contrato HTTP: respuesta 301, destino
  esperado y ausencia de cadenas o bucles de redirección.
- Cada página migrada se comprobará con título, descripción, canonical, metadatos
  sociales, un encabezado principal y contenido coherente con su intención.
- Las páginas locales se revisarán contra una fuente confirmada de direcciones,
  horarios, teléfonos y servicios antes de publicar datos estructurados.
- El sitemap generado se comprobará después de la construcción y en el dominio
  definitivo, incluyendo solo URLs públicas canónicas.
- La medición existente se conservará para WhatsApp como intención de contacto,
  teléfono y formulario; no se inferirán ventas ni conversaciones.
- El rendimiento de imágenes, fuentes y carga móvil se medirá después de contar
  con un entorno publicado o una prueba reproducible; no se declarará optimizado
  sin esa evidencia.

## Out of Scope

- Acceso o análisis inventado de Search Console, Analytics o datos de tráfico
  privados.
- Promesas de posicionamiento, volumen de búsquedas o recuperación garantizada
  de tráfico.
- Creación de sucursales, horarios, mapas, garantías o cobertura no confirmados.
- Migración automática de todos los artículos sin revisión editorial.
- Rediseño general de marca o incorporación de un CMS.
- Campañas publicitarias o compra de medios.

## Further Notes

- Prioridad recomendada: inventario y redirecciones; contenido de servicios y
  ubicaciones; señales técnicas e indexación; medición y rendimiento posterior.
- Las páginas actuales de artículos sobre identificación de placas, reparación y
  turbo lag deben evaluarse por impresiones, clics y enlaces antes de conservarse.
- La migración deberá ejecutarse junto con una ventana de verificación de errores
  404, cobertura de indexación y conversiones.

Status: ready-for-agent

# Especificación: catálogo de turbos y adquisición medible

## Problem Statement

El sitio tiene una base técnica sólida para descubribilidad y captación, pero
actualmente funciona principalmente como un sitio corporativo de servicios con
seis páginas públicas. No ofrece páginas específicas para los modelos,
aplicaciones y números de parte que una persona podría buscar antes de
solicitar una cotización.

La ausencia de un catálogo consultable limita las entradas desde búsqueda
orgánica y obliga a que cada visitante empiece desde una página genérica. Al
mismo tiempo, crear páginas masivas sin inventario, compatibilidad,
especificaciones o disponibilidad confirmadas produciría contenido duplicado,
expectativas incorrectas y señales SEO débiles.

La medición actual registra conversiones verificables en Analytics, pero los
leads guardados por formulario no conservan toda la fuente de adquisición ni la
página o producto que originó la solicitud. Los clics hacia WhatsApp representan
intención de contacto, no una conversación confirmada, y deben seguir
interpretándose de esa manera.

La ampliación también debe convivir con la migración SEO existente: las URLs
legacy, sus enlaces entrantes y su valor observable deben revisarse antes de
retirar o sustituir páginas.

## Solution

Crear un catálogo editorial estático de turbos y productos relacionados,
orientado a consulta y cotización, no a compra en línea. El catálogo estará
basado en un conjunto estructurado de registros de producto que genere páginas
individuales únicamente para modelos y aplicaciones con información comercial y
técnica confirmada.

Cada página de catálogo tendrá contenido propio, metadatos, enlaces internos,
datos estructurados apropiados y llamadas a la acción hacia WhatsApp y el
formulario. Las llamadas a la acción identificarán el modelo o número de parte
consultado para dar contexto al asesor.

La adquisición se enriquecerá conservando la fuente de adquisición, campaña,
página de entrada y producto consultado cuando una persona envíe el formulario.
Los eventos de WhatsApp, teléfono, formulario, indicaciones y solicitudes de
catálogo permanecerán diferenciados como conversiones verificables.

El catálogo, el sitemap, los breadcrumbs, los metadatos sociales, el marcado
estructurado y el seguimiento se generarán desde la misma fuente de contenido
para reducir inconsistencias. La migración conservará redirecciones 301
directas y no enviará URLs retiradas a la página de inicio sin equivalencia.

## User Stories

1. Como persona que busca un turbocompresor por número de parte, quiero
   encontrar una página específica del modelo, para confirmar si Turbos México
   puede ayudarme.
2. Como persona que busca un turbo por marca, vehículo, motor o equipo, quiero
   encontrar aplicaciones compatibles verificadas, para reducir el riesgo de
   solicitar una pieza incorrecta.
3. Como cliente que no conoce el número de parte, quiero ver qué datos y
   fotografías debo enviar, para recibir una identificación más precisa.
4. Como visitante, quiero distinguir un producto nuevo, reconstruido,
   remanufacturado o usado, para entender qué estoy solicitando.
5. Como visitante, quiero saber si el producto se vende en línea o requiere
   cotización, para no interpretar una página informativa como una compra
   confirmada.
6. Como visitante, quiero ver un estado de disponibilidad honesto, para no
   asumir que existe inventario cuando debe confirmarse con un asesor.
7. Como visitante móvil, quiero iniciar WhatsApp desde la página del producto,
   para solicitar información sin copiar el número de parte manualmente.
8. Como visitante, quiero que el mensaje de WhatsApp incluya el producto que
   estaba consultando, para evitar explicar nuevamente el contexto.
9. Como visitante, quiero enviar una solicitud mediante un formulario, para
   contactar aunque no use WhatsApp.
10. Como visitante, quiero llegar desde una página de producto a reparación,
    refacciones o contacto, para elegir la solución que corresponde a mi caso.
11. Como visitante, quiero ver productos o servicios relacionados, para
    comparar alternativas sin regresar a una página genérica.
12. Como visitante, quiero ver breadcrumbs y una jerarquía clara, para entender
    dónde estoy dentro del catálogo.
13. Como visitante, quiero compartir una página con un título, descripción e
    imagen coherentes, para que otras personas entiendan el producto antes de
    abrir el enlace.
14. Como persona que llega desde Google, quiero que la página responda a mi
    intención específica, para no tener que navegar por varias páginas antes de
    saber cómo cotizar.
15. Como persona que busca una marca o aplicación, quiero una página de
    categoría útil, para descubrir los modelos disponibles sin recibir una lista
    de páginas duplicadas.
16. Como persona que busca desde otra ciudad, quiero conocer la cobertura por
    envío y las sucursales reales, para saber cómo entregar o recibir el turbo.
17. Como responsable editorial, quiero publicar solo productos con datos
    confirmados, para evitar promesas de compatibilidad, precio o disponibilidad.
18. Como responsable editorial, quiero actualizar un registro de producto y que
    sus metadatos, sitemap y enlaces se actualicen juntos, para evitar
    inconsistencias.
19. Como responsable editorial, quiero despublicar un producto retirado con
    una decisión SEO explícita, para conservar una página equivalente o devolver
    el estado correcto sin crear una redirección engañosa.
20. Como responsable SEO, quiero que cada página indexable tenga una canonical
    única, para indicar la URL preferida a los motores de búsqueda.
21. Como responsable SEO, quiero que el sitemap contenga solo páginas públicas
    canónicas, para facilitar el rastreo del catálogo.
22. Como responsable SEO, quiero que los productos tengan enlaces internos
    desde categorías, servicios y páginas relacionadas, para mejorar su
    descubribilidad.
23. Como responsable SEO, quiero evitar páginas creadas solo por combinar
    palabras clave, para no llenar el sitio de contenido de baja utilidad.
24. Como responsable SEO, quiero publicar datos estructurados solo cuando sus
    valores sean reales, para que el marcado no contradiga la página visible.
25. Como responsable de marketing, quiero distinguir las solicitudes iniciadas
    desde un producto de las solicitudes genéricas, para evaluar qué catálogo
    genera intención de contacto.
26. Como responsable de marketing, quiero conservar la fuente de adquisición y
    campaña en un lead de formulario, para comparar búsqueda orgánica, redes,
    referencias y campañas.
27. Como responsable de marketing, quiero conocer la página de entrada y el
    producto consultado, para priorizar contenido y seguimiento comercial.
28. Como responsable de marketing, quiero distinguir un clic en WhatsApp de un
    envío de formulario, para no presentar una intención como un lead
    confirmado.
29. Como responsable de marketing, quiero medir llamadas e indicaciones por
    sucursal, para comparar canales de contacto locales.
30. Como responsable de marketing, quiero que el seguimiento no rompa la
    navegación cuando Analytics no está configurado, para poder probar y
    publicar el sitio de forma segura.
31. Como responsable de privacidad, quiero que la recopilación de atribución y
    leads tenga una política de retención y aviso adecuados, para tratar los
    datos de contacto de forma responsable.
32. Como responsable de migración, quiero mapear cada URL anterior a una nueva
    página equivalente o a una retirada explícita, para evitar pérdida de
    contexto, cadenas o bucles de redirección.
33. Como visitante de una URL antigua de catálogo, quiero llegar al producto o
    categoría equivalente, para no perder una página que ya conocía.
34. Como responsable del negocio, quiero revisar el catálogo antes de
    publicarlo, para confirmar marcas, aplicaciones, precios, garantías,
    disponibilidad y promesas comerciales.
35. Como responsable del negocio, quiero empezar con los modelos de mayor
    demanda o valor comercial, para validar el catálogo antes de ampliarlo.

## Implementation Decisions

- La costura principal será un modelo estructurado de catálogo editorial. Cada
  registro tendrá, como mínimo, nombre público, slug, marca, número o números de
  parte, tipo de producto, descripción, imágenes, aplicaciones confirmadas,
  estado comercial, disponibilidad comunicable, instrucciones de cotización y
  enlaces relacionados.
- El modelo permitirá campos opcionales para motor, vehículo, años, equipo,
  dimensiones, referencias equivalentes, condición, garantía y envío. Un campo
  no confirmado no se mostrará ni se incluirá en datos estructurados.
- El catálogo será estático y se generará durante la compilación. No se añadirá
  un CMS, carrito, checkout, pagos, inventario en tiempo real ni compra en línea
  en esta fase.
- Las páginas de producto serán páginas de consulta y cotización. Mostrarán
  claramente que el precio, compatibilidad y disponibilidad deben confirmarse,
  salvo que el negocio proporcione valores vigentes y verificables.
- Se publicarán primero entre 10 y 20 productos seleccionados con base en
  historial de ventas, consultas de Search Console, solicitudes de WhatsApp,
  inventario recurrente y valor comercial; no se elegirá la lista únicamente
  por suposiciones de volumen de búsqueda.
- Las categorías de marca, aplicación o equipo se publicarán solo si aportan
  contenido editorial propio y enlazan a productos reales. No se generarán
  combinaciones automáticas de marca, modelo, ciudad y palabra clave sin
  contenido diferenciado.
- La navegación incorporará una entrada de catálogo, categorías relevantes,
  breadcrumbs y enlaces contextuales desde venta, reparación, refacciones,
  ubicaciones y contacto.
- Cada página indexable tendrá título, descripción, H1, canonical, Open Graph,
  Twitter Card e imagen representativos de su contenido.
- Las páginas de producto usarán `Product` y `Brand` únicamente cuando la
  información visible sea exacta. `Offer`, precio, disponibilidad y condición
  solo se publicarán si el negocio puede mantenerlos actualizados. Se usará
  `BreadcrumbList` cuando la jerarquía visible exista.
- Las preguntas frecuentes solo se marcarán como `FAQPage` cuando estén visibles
  en la página y representen preguntas y respuestas reales; el marcado no se
  usará para ocultar contenido.
- Las páginas de sucursal usarán datos de negocio local únicamente con dirección,
  teléfono, horarios, servicios y cobertura confirmados. La cobertura por envío
  seguirá diferenciándose de una sucursal física.
- Las llamadas a WhatsApp de producto usarán un mensaje precargado con el
  producto y número de parte. El evento seguirá llamándose `whatsapp_click` y
  llevará la página, producto, campaña y dispositivo disponibles.
- Se añadirán eventos diferenciados para `catalog_request`, `directions_click`
  y cualquier acción de producto que se quiera evaluar, sin contar un clic como
  conversación, lead calificado o venta.
- El formulario conservará junto al lead la página de entrada, URL de la
  solicitud, producto o número de parte, fuente de adquisición, medio, campaña,
  término, contenido y GCLID cuando estén disponibles. La información se
  validará y se guardará con el mismo control de acceso y retención definidos
  para los leads actuales.
- La API de contacto mantendrá su contrato de respuesta JSON, validación,
  protección contra el campo honeypot y almacenamiento local; la ampliación de
  atribución será compatible con formularios existentes y no dependerá de que
  Analytics esté configurado.
- La medición de WhatsApp permanecerá como intención de contacto. Sin una
  integración de WhatsApp Business o un proceso comercial que confirme el
  contacto, no se llamará conversación, lead confirmado ni venta.
- El sitemap se generará desde las páginas realmente publicadas y no incluirá
  registros no publicados, categorías vacías ni URLs alternativas.
- Antes de publicar el catálogo se revisará el inventario del dominio anterior,
  Search Console, Analytics y las URLs legacy. Cada URL recibirá una decisión de
  conservar, migrar, redirigir, actualizar o retirar.
- Las redirecciones de migración serán 301 directas en la capa del servidor,
  evitando cadenas, bucles y redirecciones genéricas a la página de inicio.
- La publicación estará condicionada a la confirmación editorial de marcas,
  compatibilidades, imágenes, disponibilidad, garantías, sucursales y textos
  comerciales.

## Testing Decisions

- Los tests comprobarán comportamiento público y contratos observables, no la
  estructura interna del modelo ni detalles de implementación que no afecten al
  visitante.
- Se ampliarán los tests de publicación existentes para comprobar que cada
  producto publicado tenga una ruta, título, descripción, canonical, H1,
  contenido mínimo, CTA de cotización y presencia correcta en el sitemap.
- Se comprobará que los productos no publicados no aparezcan en sitemap,
  navegación ni enlaces internos públicos.
- Se comprobará que las categorías no estén vacías y que cada producto sea
  alcanzable desde una página de categoría o desde una página editorial
  relacionada.
- Se validará que los campos de producto confirmados aparezcan en la página y
  que los campos ausentes no se filtren accidentalmente en el marcado JSON-LD.
- Se probará que `Product`, `Brand`, `Offer` y `BreadcrumbList` solo se emitan
  bajo las condiciones editoriales definidas y que no existan dos canonicals en
  una misma página.
- Se comprobará que los enlaces de WhatsApp de producto incluyan el contexto
  esperado y conserven `target` y relación segura cuando abran una pestaña nueva.
- Se probará que los eventos `whatsapp_click`, `phone_click`, `form_submit`,
  `catalog_request` y `directions_click` mantengan nombres diferenciados y
  parámetros de página, producto y sucursal cuando correspondan.
- Se probará el envío de formulario con y sin parámetros de campaña para
  verificar que el lead conserve la atribución disponible sin hacer obligatorio
  ningún parámetro.
- Se probará el formulario sin identificador de Analytics para comprobar que la
  solicitud y la navegación sigan funcionando sin errores visibles.
- Se probarán entradas de campaña malformadas, campos de atribución demasiado
  largos y valores ausentes para comprobar límites, sanitización y respuesta
  estable de la API.
- Se verificará como contrato HTTP que cada redirección legacy esperada devuelva
  301, apunte al destino final y no forme cadenas ni bucles.
- Se revisará el sitemap generado para que contenga solo URLs canónicas públicas
  y se probarán los enlaces internos contra el conjunto de rutas publicadas.
- Se revisará manualmente una muestra en móvil y escritorio: identificación del
  producto, claridad de disponibilidad, CTA, formulario, WhatsApp, accesibilidad
  y comprensión de que la página no implica compra confirmada.
- Se ejecutará la suite de publicación existente después de incorporar el
  catálogo y se conservará la práctica actual de validar construcción, SEO
  básico, accesibilidad, rutas y conversiones.

## Out of Scope

- Ecommerce, carrito, checkout, pagos, cuentas de usuario o compra en línea.
- Inventario sincronizado en tiempo real con ERP, proveedor o almacén.
- Precios dinámicos o disponibilidad automática sin una fuente operativa
  confirmada.
- Publicación masiva de páginas por combinación de keywords.
- Promesas de posicionamiento, volumen de búsquedas, tráfico o recuperación de
  visitas.
- Creación de marcas, aplicaciones, compatibilidades, garantías, sucursales,
  horarios o reseñas no confirmados por el negocio.
- Integración con WhatsApp Business API, lectura de conversaciones o
  confirmación automática de mensajes atendidos.
- CRM completo, scoring de leads, automatización comercial o atribución de
  ventas cerradas.
- CMS administrable, blog editorial completo o migración de plataforma.
- Campañas publicitarias, compra de medios o implementación de píxeles de
  plataformas publicitarias no definidos.
- Reemplazo del diseño general de marca o rediseño visual no necesario para el
  catálogo y la conversión.

## Further Notes

- La decisión recomendada es publicar primero un catálogo pequeño y verificable,
  observar impresiones, clics, solicitudes y calidad comercial durante una
  ventana inicial, y ampliar únicamente las familias que demuestren utilidad.
- El catálogo debe complementar las páginas de venta, reparación y refacciones,
  no sustituirlas. Una persona que busca un modelo puede necesitar comprar,
  reparar o conseguir una refacción.
- Antes del lanzamiento definitivo se deben obtener exportaciones del dominio
  anterior y definir el mapa de redirecciones. La especificación existente de
  migración SEO sigue siendo la referencia para inventario y URLs legacy.
- Deben definirse aviso de privacidad, responsable de los datos, periodo de
  retención, procedimiento de eliminación y protección del almacenamiento local
  antes de tratar la atribución como un sistema operativo de leads.
- El éxito inicial se evaluará con páginas indexadas correctamente, consultas y
  clics orgánicos, conversiones verificables, solicitudes con producto
  identificado y calidad comercial reportada por el negocio; no con clics de
  WhatsApp presentados como ventas.

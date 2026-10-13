Status: ready-for-agent

# Especificación: sitio de adquisición digital de Turbos México

## Problem Statement

Turbos México necesita una presencia digital clara y confiable para que personas y empresas que buscan soluciones para turbocompresores puedan descubrir sus servicios, identificar la opción adecuada y comenzar una solicitud de contacto.

La experiencia debe servir a visitantes con necesidades distintas: comprar un turbocompresor, reparar uno existente o conseguir refacciones. También debe explicar las aplicaciones atendidas, comunicar la cobertura nacional y ofrecer rutas directas de contacto por WhatsApp, teléfono, correo electrónico y formulario.

El sitio debe medir las conversiones verificables que sí puede observar: clics en WhatsApp, clics telefónicos y envíos exitosos del formulario. Un clic a WhatsApp representa intención de contacto, no una conversación confirmada, porque el sitio no controla lo que ocurre dentro de WhatsApp.

La Fase 1 debe mantenerse como un sitio estático orientado a descubribilidad y captación. No debe introducir un CMS, un catálogo dinámico, un CRM ni una base de datos remota. Los formularios deben poder enviar leads a través de los endpoints PHP existentes y conservarlos en almacenamiento local protegido fuera del directorio público.

## Solution

Construir y mantener un sitio público en español de México que:

- Presente a Turbos México como una empresa especializada en venta, reparación y refacciones para turbocompresores.
- Organice la información en una página de inicio, páginas de servicio, una página de ubicaciones y una página de contacto.
- Permita navegar desde cualquier página hacia servicios, aplicaciones, ubicaciones y contacto.
- Ofrezca acciones de contacto visibles y coherentes: WhatsApp, teléfono, correo y formulario.
- Capture formularios de contacto con validación del navegador, protección básica contra spam y respuesta visible de éxito o error.
- Registre los eventos de conversión verificable con Google Analytics cuando exista una configuración de medición.
- Enriquezca la intención de contacto de WhatsApp con la página, campaña, dispositivo y sesión cuando esos datos estén disponibles.
- Sea usable en dispositivos móviles y de escritorio, con contenido semántico, controles accesibles y estados de interacción comprensibles.
- Genere páginas estáticas publicables en el servidor PHP existente, manteniendo los datos de leads fuera del directorio público.

## User Stories

1. Como visitante que busca un turbocompresor, quiero entender en segundos qué ofrece Turbos México, para saber si puede atender mi necesidad.
2. Como visitante, quiero leer una propuesta de valor clara sobre venta, reparación y refacciones, para elegir la ruta de información correcta.
3. Como visitante, quiero ver una llamada a la acción para cotizar por WhatsApp, para iniciar rápidamente una conversación comercial.
4. Como visitante que prefiere un canal tradicional, quiero llamar directamente desde el sitio, para contactar a un asesor sin copiar un número.
5. Como visitante que necesita una reparación, quiero acceder a una página específica del servicio, para conocer el tipo de atención que puedo solicitar.
6. Como visitante que busca comprar un turbo, quiero consultar información específica de venta, para evaluar si existe una alternativa para mi aplicación.
7. Como visitante que necesita una pieza, quiero consultar la oferta de refacciones, para saber si puedo solicitar cartuchos o componentes.
8. Como visitante con una aplicación automotriz, quiero reconocer que el sitio atiende vehículos y turbocompresores automotrices, para decidir si debo contactarlo.
9. Como visitante con equipo diésel, quiero identificar que se atienden aplicaciones diésel y de equipo pesado, para no descartar el servicio por falta de contexto.
10. Como visitante del sector agrícola, quiero encontrar referencias a aplicaciones agrícolas, para solicitar orientación sobre mi maquinaria.
11. Como visitante del sector marítimo, quiero confirmar que se contemplan aplicaciones marítimas, para evaluar la cobertura técnica.
12. Como visitante ubicado fuera de la zona centro, quiero saber que existe cobertura nacional, para entender que puedo solicitar atención desde cualquier estado.
13. Como visitante, quiero consultar las ubicaciones o zonas de atención, para identificar la presencia prioritaria más cercana.
14. Como visitante que no encuentra una sucursal cercana, quiero saber que puedo enviar una solicitud desde cualquier estado, para no abandonar el contacto.
15. Como visitante que necesita orientación técnica, quiero enviar mi nombre, correo, teléfono y descripción de la necesidad, para que un asesor pueda evaluar mi caso.
16. Como visitante, quiero que el formulario indique qué campos son obligatorios, para corregir la solicitud antes de enviarla.
17. Como visitante, quiero que el correo electrónico se valide como correo, para evitar errores de contacto.
18. Como visitante, quiero recibir un mensaje visible cuando mi solicitud fue enviada, para saber que no necesito repetirla.
19. Como visitante, quiero recibir un mensaje claro cuando el envío falla, para poder intentar de nuevo o usar WhatsApp como alternativa.
20. Como visitante que usa teclado o tecnología asistiva, quiero recorrer la navegación, el formulario y las acciones sin depender del mouse, para completar mi solicitud.
21. Como visitante móvil, quiero abrir el menú de navegación y cerrarlo de forma predecible, para moverme por el sitio en una pantalla pequeña.
22. Como visitante móvil, quiero que los teléfonos y enlaces de WhatsApp sean accionables, para contactar sin escribir manualmente los datos.
23. Como visitante, quiero que los enlaces que abren una aplicación externa indiquen o respeten un comportamiento seguro, para conservar una navegación confiable.
24. Como visitante, quiero encontrar el nombre y la identidad visual de Turbos México en todas las páginas, para saber qué empresa está proporcionando la información.
25. Como visitante, quiero que cada página tenga un título y una descripción coherentes con su contenido, para identificarla en el navegador y en resultados de búsqueda.
26. Como visitante que llega desde un buscador, quiero aterrizar en una página comprensible aunque no haya visitado la página de inicio, para encontrar una acción de contacto desde ese punto.
27. Como visitante, quiero que el contenido esté redactado en español de México, para entender la propuesta y los términos comerciales.
28. Como responsable de marketing, quiero distinguir los clics de WhatsApp, teléfono y envíos de formulario, para evaluar qué canales generan intención de contacto.
29. Como responsable de marketing, quiero asociar una conversión con la página donde ocurrió, para identificar qué contenido impulsa la acción.
30. Como responsable de marketing, quiero conservar parámetros de campaña, dispositivo y sesión cuando sea posible, para analizar las fuentes de adquisición.
31. Como responsable de marketing, quiero que un clic a WhatsApp se nombre y reporte como intención de contacto, para no presentarlo como una conversación confirmada.
32. Como responsable de marketing, quiero que la medición no rompa la navegación cuando Google Analytics no está configurado, para poder publicar el sitio sin una dependencia obligatoria.
33. Como responsable de ventas, quiero recibir leads con los datos proporcionados por el visitante, para continuar la atención fuera del sitio.
34. Como responsable de operaciones, quiero que los leads se almacenen fuera del directorio público, para reducir la exposición de información de contacto.
35. Como responsable del sitio, quiero publicar páginas estáticas junto con endpoints PHP, para utilizar el servidor existente sin introducir una plataforma de administración.
36. Como responsable del sitio, quiero que el diseño sea consistente entre páginas, para reducir confusión y facilitar futuras modificaciones.
37. Como responsable del sitio, quiero que la fase inicial no dependa de un CMS, catálogo dinámico, CRM o base de datos remota, para mantener bajo el costo de operación.
38. Como responsable del sitio, quiero que las decisiones de contenido y arquitectura respeten el alcance de la Fase 1, para dejar las necesidades editoriales futuras para una decisión basada en datos reales.
39. Como responsable del sitio, quiero que las rutas de navegación funcionen tanto desde páginas internas como desde la página de inicio, para evitar callejones sin salida.
40. Como responsable del sitio, quiero que los cambios de contenido puedan hacerse sin alterar la semántica de las conversiones, para preservar la continuidad de la medición.

## Implementation Decisions

- La solución será un sitio estático generado con Astro y desplegable junto con endpoints PHP en el servidor existente.
- La experiencia se organizará en inicio, venta de turbos, reparación, refacciones, ubicaciones y contacto, con una navegación global compartida.
- La navegación global incluirá rutas a servicios, aplicaciones, ubicaciones y contacto, además de un teléfono visible y una acción de menú móvil.
- Las páginas de servicio explicarán el propósito de cada servicio y terminarán en una acción clara de contacto o solicitud.
- La página de inicio funcionará como punto de entrada de adquisición: propuesta de valor, servicios, aplicaciones, cobertura y llamadas a la acción.
- La información de ubicaciones comunicará presencia prioritaria en Estado de México, Querétaro, Monterrey y Cancún, además de atención de solicitudes desde otros estados.
- La página de contacto ofrecerá WhatsApp, teléfono, correo y formulario, sin obligar al visitante a usar un único canal.
- El formulario pedirá nombre, correo electrónico, teléfono y descripción de la necesidad. Todos serán necesarios para enviar una solicitud útil.
- El formulario incluirá un campo trampa no visible para rechazar envíos automatizados básicos sin afectar a usuarios reales.
- El envío se realizará de forma asíncrona hacia un endpoint PHP y devolverá una respuesta que permita mostrar un estado de éxito o error al visitante.
- Los mensajes de estado se expondrán en una región viva para que los usuarios de tecnología asistiva conozcan el resultado del envío.
- Un envío exitoso se considerará una conversión verificable y se reportará como `form_submit`.
- Los clics en el teléfono se reportarán como `phone_click`.
- Los clics en WhatsApp se reportarán como `whatsapp_click` y se interpretarán como intención de contacto, nunca como contacto confirmado.
- Cuando exista un identificador de Google Analytics, la medición se inicializará; sin él, la experiencia debe seguir funcionando sin errores visibles.
- Los eventos de conversión podrán incluir la URL del enlace y datos de contexto de la página, campaña, dispositivo y sesión disponibles en el momento del evento.
- Los leads se conservarán en SQLite local fuera del directorio público, de acuerdo con el ADR de Astro, endpoints PHP y almacenamiento local.
- No se agregará un panel de administración, CMS, blog administrable, catálogo dinámico, CRM ni base de datos remota en esta fase.
- El lenguaje visible usará la terminología de `GLOSSARY.md`: conversión verificable, intención de contacto, lead, fuente de adquisición, Fase 1 y sitio estático.
- La interfaz usará una estructura semántica con encabezado, navegación, contenido principal, secciones identificables, pie de página, enlaces y formularios correctamente asociados a sus etiquetas.
- El diseño tendrá un comportamiento responsive para permitir lectura, navegación y contacto en móviles, tabletas y escritorio.
- Las acciones que abren WhatsApp en otra pestaña conservarán una relación segura con el contexto de origen.
- Los metadatos de cada página se derivarán de su contenido y mantendrán títulos y descripciones específicos.
- La información de privacidad, respaldo y retención de leads deberá revisarse antes de considerar la operación como definitiva, conforme a las consecuencias del ADR correspondiente.

## Testing Decisions

- El seam principal será el flujo público completo de página y conversión: renderizar una página, interactuar con la navegación o el contacto y observar URL, contenido, accesibilidad, solicitud emitida y evento de medición.
- Se preferirán pruebas de nivel página o integración sobre pruebas de implementación interna de componentes Astro o scripts inline.
- Una buena prueba verificará comportamiento observable: contenido que el visitante puede encontrar, controles que puede usar, estados que puede percibir y solicitudes/eventos que realmente se producen.
- La navegación se probará desde la página de inicio y desde al menos una página interna, incluyendo navegación de escritorio y menú móvil.
- Cada servicio debe ser alcanzable desde la navegación o desde la página de inicio y debe ofrecer una ruta de contacto funcional.
- Se comprobará que cada página tenga un `lang` correcto, un título descriptivo, una descripción y un encabezado principal coherente.
- Se comprobará que los enlaces telefónicos y de WhatsApp tengan destinos válidos, etiquetas comprensibles y eventos de medición diferenciados.
- El formulario se probará con datos válidos, campos obligatorios vacíos, correo inválido, campo trampa poblado y respuesta de error del endpoint.
- El flujo exitoso debe limpiar el formulario y mostrar un mensaje de confirmación perceptible; el flujo fallido debe conservar una alternativa de contacto.
- Las pruebas de medición deben funcionar con identificador configurado y sin identificador configurado, sin impedir el uso del sitio.
- Se debe comprobar que un clic de WhatsApp se reporte como intención de contacto y no se describa como una conversación o lead confirmado.
- Se debe comprobar que los eventos incluyan la página de origen y, cuando estén disponibles, los datos de campaña, dispositivo y sesión.
- Las pruebas de accesibilidad deben cubrir orden de foco, nombre accesible de enlaces y botones, relación entre etiquetas y campos, estado del menú y anuncio de estados del formulario.
- Las pruebas responsive deben cubrir al menos un viewport móvil y uno de escritorio, verificando que las acciones principales sigan visibles y utilizables.
- Las pruebas de generación deben construir el sitio sin errores y producir las páginas estáticas esperadas junto con los recursos necesarios.
- El endpoint de contacto debe probarse como contrato: método aceptado, validación de entrada, rechazo del campo trampa, forma de respuesta y manejo seguro de errores.
- El almacenamiento de un lead debe comprobarse sin inspeccionar detalles internos de SQLite: el contrato debe demostrar que un envío válido se conserva en el destino protegido y no se expone públicamente.
- Se debe añadir cobertura de regresión para que cambios de contenido no eliminen los identificadores semánticos de conversión usados por marketing.
- No se deben usar snapshots como única evidencia de calidad, ya que pueden pasar por alto enlaces rotos, estados de formulario, accesibilidad y eventos.
- Si el repositorio incorpora posteriormente pruebas existentes para Astro o PHP, las nuevas pruebas deben seguir sus fixtures, helpers y convenciones antes de crear una abstracción nueva.

## Out of Scope

- Panel administrativo para gestionar páginas, publicaciones, catálogo o leads.
- CMS, blog administrable o flujo editorial para personal no técnico.
- Catálogo dinámico de turbocompresores, búsqueda por marca o inventario en tiempo real.
- CRM, automatización comercial, seguimiento de conversaciones o confirmación de ventas.
- Integración con WhatsApp Business API o lectura de conversaciones de WhatsApp.
- Base de datos remota o migración a una infraestructura de almacenamiento distinta del almacenamiento local definido.
- Confirmación de que una persona envió o atendió un mensaje de WhatsApp.
- Confirmación de venta, contacto atendido o lead calificado; el sitio solo puede registrar conversiones verificables y estimar intención de contacto.
- Portal privado para clientes, distribuidores o personal interno.
- Sistema de cuentas, autenticación o permisos.
- Rediseño de la identidad de marca más allá de la presentación coherente de la identidad existente.
- Internacionalización a idiomas distintos del español de México.
- Campañas publicitarias, compra de medios, posicionamiento fuera de los metadatos y estructura de contenido del sitio, o gestión continua de redes sociales.
- Políticas legales completas de privacidad, retención y respaldo; deben resolverse antes de producción, pero no forman parte de esta implementación de interfaz.
- Disponibilidad operativa garantizada del servidor, correo, PHP, SQLite, WhatsApp, teléfono o servicios de analítica de terceros.

## Further Notes

- La fuente normativa de términos de negocio es `GLOSSARY.md`; si una nueva pantalla requiere un concepto que no existe allí, debe registrarse como una decisión de dominio antes de introducirlo en la interfaz.
- Las decisiones sobre Astro, endpoints PHP, SQLite y ausencia de CMS están respaldadas por el ADR de arquitectura de la Fase 1.
- La interpretación de WhatsApp como intención estimada de contacto está respaldada por el ADR de medición correspondiente.
- La privacidad, el respaldo del almacenamiento local y el periodo de retención de leads requieren una revisión explícita antes del lanzamiento operativo.
- El contenido de ubicaciones y cobertura debe mantenerse verificable; no debe prometer atención presencial, inventario o tiempos de respuesta que el negocio no haya confirmado.
- El spec representa el alcance funcional de la Fase 1 y puede servir como base para dividir el trabajo en tickets independientes sin convertirlos en un catálogo dinámico.

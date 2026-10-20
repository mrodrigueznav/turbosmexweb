# 03: Cotización contextualizada y atribución

**What to build:** Una persona que consulta un turbo puede iniciar WhatsApp o enviar el formulario con el producto identificado, mientras el negocio recibe un lead con la fuente de adquisición y el contexto disponible para dar seguimiento comercial.

**Blocked by:** 01 — Colección Markdown y primer producto publicado

**Status:** completed

- [x] Cada página de producto puede generar un enlace de WhatsApp con el nombre o número de parte consultado en el mensaje precargado.
- [x] El clic de WhatsApp conserva el evento `whatsapp_click` y registra página, producto, dispositivo y campaña disponibles.
- [x] El formulario permite enviar el producto o número de parte consultado junto con los datos actuales del contacto.
- [x] El lead conserva página de entrada, URL de solicitud, producto, número de parte y parámetros de campaña disponibles, incluyendo GCLID cuando exista.
- [x] La API mantiene validación, honeypot, respuesta JSON y almacenamiento seguro, y sigue funcionando cuando no hay datos de campaña.
- [x] Analytics no es una dependencia para completar un formulario o abrir WhatsApp.
- [x] La medición documenta y prueba que un clic en WhatsApp es intención de contacto, no conversación confirmada, lead calificado ni venta.
- [x] Las pruebas cubren solicitudes con y sin campañas, valores ausentes y valores de atribución fuera de los límites permitidos.

## Comments

### Implementación

Las páginas de producto generan WhatsApp contextualizado y una URL de contacto con producto, número de parte y origen. El formulario conserva página de entrada, URL de solicitud y parámetros UTM/GCLID mediante campos ocultos; la API valida esos valores, migra el esquema SQLite existente y los almacena fuera del directorio público junto con el lead.

El seguimiento conserva `whatsapp_click`, añade producto, número de parte, dispositivo y campaña cuando están disponibles, y mantiene la descripción como intención de contacto, no como conversación o venta. La suite de publicación verifica el contrato público; `npm test` pasa con 16 pruebas. La validación de sintaxis PHP no pudo ejecutarse porque PHP no está instalado en el entorno local.

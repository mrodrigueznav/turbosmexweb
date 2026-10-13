# 03: Cotización contextualizada y atribución

**What to build:** Una persona que consulta un turbo puede iniciar WhatsApp o enviar el formulario con el producto identificado, mientras el negocio recibe un lead con la fuente de adquisición y el contexto disponible para dar seguimiento comercial.

**Blocked by:** 01 — Colección Markdown y primer producto publicado

**Status:** ready-for-agent

- [ ] Cada página de producto puede generar un enlace de WhatsApp con el nombre o número de parte consultado en el mensaje precargado.
- [ ] El clic de WhatsApp conserva el evento `whatsapp_click` y registra página, producto, dispositivo y campaña disponibles.
- [ ] El formulario permite enviar el producto o número de parte consultado junto con los datos actuales del contacto.
- [ ] El lead conserva página de entrada, URL de solicitud, producto, número de parte y parámetros de campaña disponibles, incluyendo GCLID cuando exista.
- [ ] La API mantiene validación, honeypot, respuesta JSON y almacenamiento seguro, y sigue funcionando cuando no hay datos de campaña.
- [ ] Analytics no es una dependencia para completar un formulario o abrir WhatsApp.
- [ ] La medición documenta y prueba que un clic en WhatsApp es intención de contacto, no conversación confirmada, lead calificado ni venta.
- [ ] Las pruebas cubren solicitudes con y sin campañas, valores ausentes y valores de atribución fuera de los límites permitidos.

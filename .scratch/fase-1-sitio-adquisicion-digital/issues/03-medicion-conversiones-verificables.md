# 03: Medición de conversiones verificables

**What to build:** Medición consistente de las acciones que el sitio puede observar, para que marketing distinga intención de contacto por WhatsApp, llamadas telefónicas y envíos de formulario.

**Blocked by:** 01: Base pública de descubrimiento y navegación.

**Status:** ready-for-human

- [x] Los clics de WhatsApp se registran como `whatsapp_click` y se describen como intención de contacto.
- [x] Los clics telefónicos se registran como `phone_click`.
- [x] Los envíos exitosos del formulario se registran como `form_submit`.
- [x] Los eventos incluyen la URL o página de origen cuando ese dato está disponible.
- [x] Los parámetros de campaña, dispositivo y sesión se conservan cuando están disponibles.
- [x] La experiencia funciona sin errores cuando no existe un identificador de Google Analytics.
- [x] La medición no describe un clic de WhatsApp como conversación confirmada, lead calificado o venta.
- [x] Las pruebas verifican eventos diferenciados y su comportamiento con y sin configuración de analítica.

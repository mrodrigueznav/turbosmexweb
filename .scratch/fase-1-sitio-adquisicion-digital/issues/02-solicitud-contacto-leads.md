# 02: Solicitud de contacto y persistencia segura de leads

**What to build:** Un flujo completo para que una persona envíe una solicitud de contacto y el equipo pueda recibirla sin exponer sus datos públicamente.

**Blocked by:** None (can start immediately).

**Status:** ready-for-human

- [x] El formulario solicita nombre, correo electrónico, teléfono y descripción de la necesidad.
- [x] Los campos obligatorios y el formato del correo se validan antes del envío.
- [x] Los envíos automatizados básicos se rechazan mediante el campo trampa sin afectar a usuarios reales.
- [x] Un envío válido llega al endpoint PHP y se conserva en SQLite local fuera del directorio público.
- [x] El visitante recibe un mensaje de éxito perceptible y el formulario se reinicia tras una respuesta exitosa.
- [x] Una respuesta de error muestra una explicación útil y ofrece WhatsApp como alternativa.
- [x] El endpoint rechaza métodos o datos inválidos sin revelar información sensible del servidor.
- [x] El contrato del endpoint y el flujo del formulario tienen pruebas de éxito, validación, anti-spam y error.

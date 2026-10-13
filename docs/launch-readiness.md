# Verificación para publicación

La publicación de Fase 1 se verifica con:

```sh
npm test
```

La suite comprueba la construcción, las rutas públicas, metadatos, estructura
semántica, nombres accesibles del menú y formulario, y los identificadores de
conversiones.

Antes del lanzamiento definitivo siguen pendientes decisiones operativas que
no resuelve el sitio estático:

- aviso de privacidad y consentimiento aplicable a formularios y analítica;
- responsable, frecuencia y destino de los respaldos del almacenamiento local;
- periodo de retención y procedimiento de eliminación de leads;
- revisión de permisos y protección del directorio donde vive la base SQLite.

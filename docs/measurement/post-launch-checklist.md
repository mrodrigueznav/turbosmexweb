# Medición y rendimiento posterior al lanzamiento

Estado: **runbook para el dominio definitivo**  
Ventana recomendada: día 0, días 1–7, día 14 y día 28

Este documento separa configuración verificable de resultados que requieren
acceso a herramientas privadas. No contiene métricas inventadas.

## Configuración antes o durante el cambio

- [ ] Confirmar que `https://turbosmexico.com.mx/` es la propiedad de dominio en
  Search Console y completar la verificación por DNS o el método aprobado por
  el responsable.
- [ ] Enviar `https://turbosmexico.com.mx/sitemap-index.xml` en Search Console y
  conservar una captura o exportación de la fecha de envío.
- [ ] Crear una propiedad web de Analytics para el dominio definitivo y definir
  `PUBLIC_GA_ID` en el entorno de construcción. Sin esa variable el sitio no
  carga el script de Analytics.
- [ ] Verificar en tiempo real los eventos `whatsapp_click`, `phone_click` y
  `form_submit`. Son eventos observables del sitio; el clic de WhatsApp se
  reporta como intención de contacto y no como una conversación confirmada,
  lead calificado o venta.
- [ ] Mantener el mismo periodo, zona horaria y filtros al comparar el dominio
  anterior con el nuevo.

## Registro de comparación

Completar con exportaciones de las herramientas, no con estimaciones:

| Corte | Páginas de entrada | Consultas / clics orgánicos | WhatsApp | Teléfono | Formulario | Observaciones |
| --- | --- | --- | ---: | ---: | ---: | --- |
| Dominio anterior, periodo base | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Fuente y fechas: ___ |
| Día 7 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | ___ |
| Día 28 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | ___ |

## Verificación operativa

- [ ] Revisar errores 404 y URLs redirigidas; documentar URL de origen, destino,
  código HTTP y si hubo cadena o bucle.
- [ ] Revisar en Search Console cobertura, páginas excluidas, canonical elegida
  por Google, estado del sitemap y señales de indexación.
- [ ] Comparar páginas de entrada, consultas, clics e indicadores de contacto
  contra el periodo base; no presentar una métrica como ventas.
- [ ] Probar la página principal en móvil con una conexión reproducible y
  registrar fecha, dispositivo, LCP, CLS, INP, peso transferido y resultado.
- [ ] Revisar la imagen principal (dimensiones, formato, peso y compresión) y
  las fuentes externas (cantidad, peso, bloqueo y disponibilidad). No declarar
  optimización sin medición.

## Evidencia y responsable

Guardar exportaciones o capturas junto al informe de lanzamiento, indicando
responsable, fecha, dominio, filtros y periodo. Las incidencias que no puedan
resolverse durante la ventana deben quedar con URL afectada, impacto observado,
acción siguiente y fecha de nueva revisión.

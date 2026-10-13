# 01: Inventario de URLs y redirecciones

**What to build:** Un inventario verificable de URLs actuales y un mapa de
redirecciones para proteger tráfico y enlaces durante la migración.

**Blocked by:** None (can start immediately).

**Status:** ready-for-human

- [x] Se recopilan las URLs observables del sitio actual y sus sitemaps, dejando explícita la ausencia de acceso al dominio anterior.
- [x] Cada URL observada tiene una decisión de conservar, migrar, redirigir, actualizar o retirar.
- [x] Las URLs sin equivalente claro tienen una decisión revisada, no una redirección automática a inicio.
- [x] Se documentan destinos 301 y se evitan cadenas o bucles.
- [ ] Se contrasta el inventario con Search Console y analítica cuando el responsable proporcione acceso.
- [x] Se automatiza la verificación del mapa 301 como contrato de configuración; queda pendiente la prueba HTTP en el dominio anterior.

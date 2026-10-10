# Veatec: sitio institucional (demo)

Demo navegable del sitio de **Veatec · Auditorías técnicas e inspecciones**: auditorías de seguridad, inspecciones técnicas, rehabilitación de equipos de GLP y ensayos no destructivos.
Ya incluye la identidad del logo, los contenidos del **Feedback 01**, las fotos de obra y los logos de clientes.

## Cómo verlo

- **En local:** abrí `index.html` en el navegador.
- **Online:** en GitHub, entrá a *Settings → Pages* y elegí la rama `main` y la carpeta raíz (`/`).

## Mapa del sitio

| Página | Archivo |
|---|---|
| Inicio | `index.html` |
| Empresa | `empresa.html` |
| Servicios | `servicios.html` |
| ↳ Inspecciones técnicas (Res. 277/25 · API 653) | `inspecciones-tecnicas.html` |
| ↳ Auditorías de seguridad (Res. 404/94 · Res. 1102/04) | `auditorias-de-seguridad.html` |
| ↳ **Rehabilitación de equipos de GLP** (servicio destacado) | `rehabilitacion-equipos-glp.html` |
| ↳ Ensayos no destructivos | `ensayos-no-destructivos.html` |
| Proyectos | `proyectos.html` |
| ↳ Caso de estudio (TK 525 · Pampa Energía) | `caso-estudio.html` |
| Contacto | `contacto.html` |

`rehabilitacion-esferas-glp.html` ahora solo redirige a la página nueva, porque el servicio se renombró por pedido del cliente.

```
/
├── *.html
├── css/estilos.css           estilos del sitio (variables de marca al inicio)
├── js/main.js                menú móvil, preselección de servicio, aviso de formularios
├── js/filtro-proyectos.js
├── img/marca/                logo vectorizado (SVG), isotipo, imagen para redes, íconos
├── img/fotos/                fotos de obra optimizadas (WebP en 480, 960 y 1600 px)
├── img/clientes/             logos de clientes recortados y normalizados
├── favicon.svg
├── sitemap.xml · robots.txt
└── .htaccess                 HTTPS, redirecciones, compresión y caché (hosting Apache)
```

## Identidad visual

**Colores (tomados del logo)**

| Uso | Color |
|---|---|
| Verde Veatec | `#5FC36F` |
| Verde claro | `#ACD678` |
| Verde solape | `#3DA14E` |
| Gris del isotipo | `#565656` |
| Negro | `#111311` |
| Verde para texto sobre blanco (contraste accesible) | `#2B7A3A` |

**Tipografías propuestas** (el cliente no tiene definidas):
- **League Spartan** para títulos: es geométrica y acompaña el logotipo.
- **Open Sans** para el texto: se parece a la bajada del logo.

Las dos son de Google Fonts y gratuitas.

**Logo**
- `img/marca/logo-veatec.svg`: versión completa sobre fondo claro.
- `img/marca/logo-veatec-negativo.svg`: versión para fondo oscuro (propuesta).
- `img/marca/logo-veatec-compacto.svg`: sin bajada, para el header.
- `img/marca/isotipo-veatec.svg`: solo los triángulos, para el favicon.

El logo se vectorizó a partir del PNG. Los triángulos y los colores son exactos. Las letras de VEATEC se redibujaron sobre el original. La bajada "Auditorías técnicas e inspecciones" se compuso con una tipografía similar (Inter), porque la imagen era muy chica para trazarla. **Si existe el archivo original (AI, EPS, PDF o SVG), conviene reemplazarlo.**

## Pendiente del cliente

- Presentación de la empresa: historia, objetivo, actualidad y enfoque.
- Descripciones de cada ensayo no destructivo (9 técnicas).
- Descripción de los tipos de equipos de GLP y del paso de relevamiento.
- Datos del caso TK 525 (fecha, ensayos, desafío, solución, resultados) y cifras: equipos rehabilitados, m³, días de parada.
- Respuestas pendientes de las preguntas frecuentes de GLP.
- Casillas de correo por servicio: hoy las consultas técnicas van a `tecnica@` y las generales a `info@`.

## Antes de publicar en www.veatec.com.ar

1. **Quitar** `<meta name="robots" content="noindex, nofollow">` de cada página. Está puesta para que la demo de GitHub no compita con el sitio real en Google.
2. **Formularios:** pasarlos a PHP con PHPMailer, usando el SMTP de la cuenta de correo de Veatec. Cada servicio envía al correo que corresponda y se suma un honeypot (ya incluido) o reCAPTCHA.
3. **Tipografías:** opcionalmente, alojarlas en el hosting en lugar de Google Fonts. Mejora la velocidad y evita depender de un tercero.
4. **Google:** registrar el sitio en Search Console y enviar `sitemap.xml`. Crear o verificar el perfil de Google Business con la misma dirección y los mismos teléfonos del sitio.

## Paso a PHP (hosting toservers)

1. Los bloques marcados `HEADER` y `FOOTER` pasan a `includes/header.php` y `includes/footer.php`. El título, la descripción y el JSON-LD de cada página se pasan como variables.
2. Renombrar las páginas a `.php` y mantener URLs limpias con `.htaccess`.

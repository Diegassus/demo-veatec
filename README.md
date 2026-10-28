# Veatec: sitio institucional (demo)

Demo navegable del sitio de **VEATEC SRL · Auditorías técnicas e inspecciones**: inspecciones técnicas, auditorías de seguridad, rehabilitación de equipos de GLP, ensayos no destructivos, cámara acústica y emisión acústica, en Argentina y países limítrofes.
Incluye la identidad del logo, los contenidos de los **Feedback 01, 02 y 03**, las fotos de obra y los logos de clientes.

Las páginas de servicio siguen la estructura de Rehabilitación de GLP: apartado general con bullets, proceso, tarjetas y preguntas frecuentes al final. Lo que falta definir figura como **[A completar]**.

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
| ↳ Rehabilitación de equipos de GLP | `rehabilitacion-equipos-glp.html` |
| ↳ Ensayos no destructivos | `ensayos-no-destructivos.html` |
| ↳ Cámara acústica | `camara-acustica.html` |
| ↳ Emisión acústica | `emision-acustica.html` |
| Proyectos | `proyectos.html` |
| ↳ Caso de estudio (TK 525 · Pampa Energía) | `caso-estudio.html` |
| Contacto y cotización | `contacto.html` |

`rehabilitacion-esferas-glp.html` ahora solo redirige a la página nueva, porque el servicio se renombró por pedido del cliente.

```
/
├── *.html
├── css/estilos.css           estilos del sitio (variables de marca al inicio)
├── js/main.js                menú móvil, preselección de servicio, aviso de formularios
├── js/proyectos.js           arma la galería de proyectos y sus filtros desde data/proyectos.json
├── data/proyectos.json       lista editable de proyectos
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

## Cargar o quitar proyectos

Los trabajos de **Proyectos** y los tres de **Inicio** salen de `data/proyectos.json`. Para sumar uno:

1. Subí la foto a `img/proyectos/` (JPG o WebP, unos 1200 px de ancho, horizontal 4:3 si se puede).
2. Agregá un bloque en la lista `proyectos`, en la posición en que querés que aparezca:

```json
{
  "titulo": "Inspección de tanque TK 101 · Refinería X",
  "servicios": ["inspecciones", "ea"],
  "imagen": "img/proyectos/tk101-refineria-x.jpg",
  "alt": "Inspector midiendo espesores en el techo del tanque TK 101",
  "destacado": false
}
```

- `servicios`: uno o más de `inspecciones`, `auditorias`, `glp`, `end`, `camara`, `ea`. El primero es la etiqueta que se ve; todos sirven para los filtros.
- `destacado: true`: aparece en Inicio (se muestran los tres primeros destacados).
- Opcionales: `enlace` (página a la que lleva la foto), `ancho` y `alto` (en px), `srcset` (las fotos actuales lo traen porque tienen versiones de varios tamaños).

Para quitar un proyecto, borrá su bloque (cuidando las comas entre bloques). Los filtros solo muestran los servicios que tienen al menos un proyecto.

**Importante:** el HTML trae también una copia de los proyectos para Google y para cuando se abre el sitio con doble clic, que no puede leer el JSON. Online (GitHub Pages o el hosting) siempre manda el JSON. Para probar cambios en la compu, abrí el sitio con un servidor local: `python -m http.server` en la carpeta y entrá a `http://localhost:8000`. En PHP, la página va a leer el mismo JSON del lado del servidor.

## Pendiente del cliente

Todo lo que falta se ve en el sitio como **[A completar]**:

- **Proceso** (etapas) de Auditorías, Ensayos no destructivos, Cámara acústica y Emisión acústica.
- **Preguntas frecuentes:** respuestas pendientes en todos los servicios.
- **Crawler magnético:** descripción de la técnica (y fotos si tienen; también de Líquidos Penetrantes y Campana de Vacío).
- **Cámara acústica:** fotos propias (las del flyer muestran un equipo de terceros) y confirmar "10 Hz – 120 Hz" (¿120 kHz?).
- **Datos del caso TK 525:** fecha, ensayos, desafío, solución y resultados.
- Casillas de correo por servicio. Hoy las consultas técnicas van a `tecnica@` y las generales a `info@`.
- Revisión del cliente pendiente para Ensayos no destructivos, Cámara acústica, Emisión acústica, Proyectos, Caso y Contacto.

## Antes de publicar en www.veatec.com.ar

1. **Quitar** `<meta name="robots" content="noindex, nofollow">` de cada página. Está puesta para que la demo de GitHub no compita con el sitio real en Google.
2. **Formularios:** pasarlos a PHP con PHPMailer, usando el SMTP de la cuenta de correo de Veatec. Cada servicio envía al correo que corresponda y se suma un honeypot (ya incluido) o reCAPTCHA.
3. **Tipografías:** opcionalmente, alojarlas en el hosting en lugar de Google Fonts. Mejora la velocidad y evita depender de un tercero.
4. **Google:** registrar el sitio en Search Console y enviar `sitemap.xml`. Crear o verificar el perfil de Google Business con la misma dirección y los mismos teléfonos del sitio.

## Paso a PHP (hosting toservers)

1. Los bloques marcados `HEADER` y `FOOTER` pasan a `includes/header.php` y `includes/footer.php`. El título, la descripción y el JSON-LD de cada página se pasan como variables.
2. Renombrar las páginas a `.php` y mantener URLs limpias con `.htaccess`.

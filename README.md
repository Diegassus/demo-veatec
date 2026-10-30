# Veatec: sitio institucional (demo)

Demo navegable del sitio de **VEATEC SRL**: auditorías de seguridad, inscripción y habilitación de nuevas instalaciones, y rehabilitación de equipos de GLP, en Argentina y países limítrofes.

Desde el 29/10/2026 el sitio tiene 3 servicios. Inspecciones técnicas, ensayos no destructivos, cámara acústica y emisión acústica pasan al sitio de otra empresa y no figuran acá.

Lo que falta definir aparece en el sitio como **[A completar]** o **[PENDIENTE]**.

**Este repo tiene solo el sitio generado.** Las páginas se arman con el generador de `D:\Proyectos\Veatec\generador\`: los cambios se hacen allá y se vuelve a generar.

## Cómo verlo

- **En local:** abrí `index.html` en el navegador.
- **Online:** en GitHub, entrá a *Settings → Pages* y elegí la rama `main` y la carpeta raíz (`/`).

## Mapa del sitio

| Página | Archivo |
|---|---|
| Inicio | `index.html` |
| Empresa | `empresa.html` |
| Servicios | `servicios.html` |
| ↳ Auditorías de seguridad (seguridad de superficies · hermeticidad SASH) | `auditorias-de-seguridad.html` |
| ↳ Inscripción y habilitación de nuevas instalaciones (Res. 1102/04 · Res. 419/98) | `habilitacion-nuevas-instalaciones.html` |
| ↳ Rehabilitación de equipos de GLP | `rehabilitacion-equipos-glp.html` |
| Proyectos | `proyectos.html` |
| ↳ Caso destacado (tanques cilíndricos de GLP · Pampa Energía) | `caso-estudio.html` |
| Contacto y cotización | `contacto.html` |

Estas páginas solo redirigen y se pueden borrar:
- `rehabilitacion-esferas-glp.html`, que redirige a la página nueva de GLP;
- `inspecciones-tecnicas.html`, `ensayos-no-destructivos.html`, `camara-acustica.html` y `emision-acustica.html`, que redirigen a Servicios.

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

**Tipografías propuestas:** League Spartan (títulos) y Open Sans (texto), de Google Fonts.

**Logo:** está vectorizado a partir del PNG. El cliente envía el logo actualizado con una nueva leyenda. Mientras tanto, el footer usa la versión sin bajada.

## Cargar o quitar proyectos

Los trabajos de **Proyectos** y los tres de **Inicio** salen de `data/proyectos.json`. Para sumar uno:

1. Subí la foto a `img/proyectos/` (JPG o WebP, unos 1200 px de ancho, horizontal 4:3 si se puede).
2. Agregá un bloque en la lista `proyectos`, en la posición en que querés que aparezca:

```json
{
  "titulo": "Auditoría de seguridad · Planta X",
  "servicios": ["auditorias"],
  "imagen": "img/proyectos/planta-x.jpg",
  "alt": "Tanques de almacenamiento de la planta X",
  "destacado": false
}
```

- `servicios`: uno o más de `auditorias` (auditorías de superficie), `sash` (hermeticidad de tanques subterráneos) y `glp`. El primero es la etiqueta que se ve; todos sirven para los filtros.
- `destacado: true`: aparece en Inicio (se muestran los tres primeros destacados).
- Opcionales: `enlace` (página a la que lleva la foto), `ancho` y `alto` (en px), y `srcset`.

Para quitar un proyecto, borrá su bloque (cuidando las comas). Los filtros solo muestran los servicios que tienen al menos un proyecto.

El HTML trae también una copia de los proyectos, para Google y para cuando se abre el sitio con doble clic. Online siempre manda el JSON. Para probar cambios en la compu, usá un servidor local: `python -m http.server` en la carpeta y entrá a `http://localhost:8000`.

**Si se edita el JSON en este repo, hay que copiarlo también a `generador\datos\veatec\proyectos.json`.** Si no, la próxima vez que se genere el sitio se pisa.

## Pendiente del cliente

- **Inicio:** título y presentación definitivos. Hoy hay un texto provisorio.
- **Certificaciones del personal de Veatec:** las envía el cliente en el Word.
- **Logo actualizado,** con la nueva leyenda.
- **Auditorías:** texto y normativa de la línea de hermeticidad de tanques subterráneos (SASH).
- **Nuevas instalaciones:** descripción del servicio, tipos de instalaciones y una foto propia (la actual es provisoria).
- **Etapas del proceso y preguntas frecuentes** de Auditorías, Nuevas instalaciones y GLP.
- **GLP:** confirmar cómo se presentan los ensayos dentro de la rehabilitación.

## Antes de publicar en www.veatec.com.ar

1. **Generar con `demo_noindex=False`** (en `generador\sitios\veatec.py`). Así se quita `<meta name="robots" content="noindex, nofollow">`, que está para que la demo de GitHub no compita con el sitio real en Google.
2. **Formularios:** pasarlos a PHP con PHPMailer, usando el SMTP de la cuenta de correo de Veatec. Las consultas van a info@veatec.com.ar. Se suma el honeypot (ya incluido) o reCAPTCHA.
3. **Redirecciones:** pasar las páginas que solo redirigen a 301 en `.htaccess`.
4. **Google:** registrar el sitio en Search Console y enviar `sitemap.xml`. Crear o verificar el perfil de Google Business con la misma dirección y los mismos teléfonos del sitio.

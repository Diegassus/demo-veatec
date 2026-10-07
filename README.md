# Veatec: sitio institucional (wireframe)

Wireframe de **media fidelidad** del sitio de Veatec: ensayos no destructivos (END), inspecciones técnicas y rehabilitación de esferas de GLP.
Define la estructura, la navegación, el comportamiento responsive y la base de SEO. **Todavía no tiene la identidad visual, las imágenes ni los textos finales.**

## Cómo verlo

- **En local:** abrí `index.html` en el navegador.
- **Online:** en GitHub, entrá a *Settings → Pages* y elegí la rama `main` y la carpeta raíz (`/`).

## Mapa del sitio

| Página | Archivo |
|---|---|
| Inicio | `index.html` |
| Empresa | `empresa.html` |
| Servicios | `servicios.html` |
| ↳ Ensayos no destructivos | `ensayos-no-destructivos.html` |
| ↳ Inspecciones técnicas | `inspecciones-tecnicas.html` |
| ↳ **Rehabilitación de esferas de GLP** (servicio prioritario) | `rehabilitacion-esferas-glp.html` |
| Proyectos | `proyectos.html` |
| ↳ Caso de estudio | `caso-estudio.html` |
| Contacto | `contacto.html` |

```
/
├── *.html              9 páginas
├── css/wireframe.css   estilos base y header responsive
├── js/main.js          menú hamburguesa
├── js/filtro-proyectos.js
├── favicon.svg         provisorio
├── sitemap.xml
├── robots.txt
└── .htaccess           HTTPS, compresión y caché para el hosting Apache
```

## Responsive

- **Menú:** en pantallas de hasta 1080 px se colapsa en un botón *Menú* (hamburguesa). El acceso a Esferas GLP queda primero. Sin JavaScript, el menú se muestra igual.
- **Contenido:** los títulos, los espaciados y las alturas de imagen se escalan de forma fluida con `clamp()`. Las grillas se reacomodan solas según el ancho.
- **Probado** en 320, 390, 768, 1024 y 1440 px, sin scroll horizontal.
- **Accesibilidad:** áreas táctiles de 44 px o más, enlace *Saltar al contenido* y foco visible al navegar con teclado.

## SEO incluido

- `<title>` y `meta description` únicos en cada página: títulos de hasta 60 caracteres y descripciones de hasta 155, con la palabra clave al principio.
- Un solo `<h1>` por página, jerarquía de títulos sin saltos y `<main>`, `<nav>`, `<header>` y `<footer>` semánticos.
- `canonical`, Open Graph y Twitter Card.
- Datos estructurados (JSON-LD de schema.org):
  - `ProfessionalService` y `WebSite` en Inicio.
  - `Service` en cada página de servicio.
  - `FAQPage` en Esferas GLP.
  - `BreadcrumbList` en todas las páginas internas.
  - `Article` en el caso de estudio.
- URLs descriptivas, `sitemap.xml` y `robots.txt`.
- Tipografías con `preconnect` y `display=swap` para no bloquear la carga. JavaScript con `defer`.
- `.htaccess` con redirección a HTTPS + www, compresión y caché, para mejorar Core Web Vitals.

## ⚠️ Antes de publicar en el dominio real

1. **Quitar** la línea `<meta name="robots" content="noindex, nofollow">` de cada página. Está puesta para que la demo de GitHub Pages no se indexe y no compita con el sitio real como contenido duplicado.
2. **Reemplazar** `https://www.dominio.com.ar` por el dominio real en todo el proyecto (buscar y reemplazar), incluidos `sitemap.xml` y `robots.txt`.
3. **Completar** los datos `[entre corchetes]` del JSON-LD: teléfono, dirección y redes. Tienen que coincidir exactamente con el perfil de Google Business.
4. **Agregar** `img/og-default.jpg` (1200 × 630) y `img/logo.png`.
5. **Imágenes reales:** usar `<img>` en formato WebP, con `alt` descriptivo (por ejemplo, "Rehabilitación de esfera de GLP de 1000 m³ en planta de…"), `width` y `height` declarados, y `loading="lazy"` en todas menos la primera de cada página.
6. **Registrar** el sitio en Google Search Console, enviar el `sitemap.xml` y crear o verificar el perfil de Google Business. Para búsquedas locales, esto pesa tanto como el sitio.

## Pendiente del cliente

- Logo, colores y tipografías.
- Técnicas END, tipos de inspección y normas con las que trabajan.
- Alcance real y proceso del servicio de esferas.
- Fotos de obra y casos reales con datos.
- Contacto, WhatsApp y zona de cobertura. Si trabajan en una región concreta, sumarla a los títulos y al H1: por ejemplo, "Ensayos no destructivos en Neuquén".

## Paso a PHP (hosting toservers)

1. Mover el bloque `HEADER` a `includes/header.php` y el `FOOTER` a `includes/footer.php`. El `<title>`, la `description`, el `canonical` y el JSON-LD se pasan como variables por página.
2. Renombrar las páginas a `.php`. Para mantener URLs limpias, sin la extensión, agregar las reglas correspondientes en `.htaccess`.
3. Pasar los estilos inline a clases en `css/`, una vez definida la identidad visual.
4. Hacer que los formularios envíen por PHPMailer, usando el SMTP de la cuenta de correo de la empresa. Agregar protección antispam con honeypot o reCAPTCHA.

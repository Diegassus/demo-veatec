// Proyectos: se cargan desde data/proyectos.json.
// Para sumar o quitar un trabajo alcanza con editar ese archivo (ver README).
// La página ya trae los proyectos escritos en el HTML (para Google y por si el JSON
// no se puede leer, por ejemplo al abrir el sitio con doble clic); este script los
// vuelve a armar con la versión publicada del JSON y maneja los filtros.
(function () {
  var galerias = document.querySelectorAll('[data-proyectos]');
  var filtros = document.querySelector('[data-filtros]');
  if (!galerias.length) return;

  function el(tag, attrs, texto) {
    var e = document.createElement(tag);
    for (var k in attrs) if (attrs[k] !== undefined && attrs[k] !== null && attrs[k] !== '') e.setAttribute(k, attrs[k]);
    if (texto) e.textContent = texto;
    return e;
  }

  function tarjeta(p, nombres) {
    var fig = el('figure', { 'data-cat': (p.servicios || []).join(' ') });
    var cont = el('div', { 'class': 'g-img' });
    cont.appendChild(el('img', {
      src: p.imagen, srcset: p.srcset,
      sizes: p.srcset ? '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px' : null,
      width: p.ancho, height: p.alto, alt: p.alt || p.titulo, loading: 'lazy', decoding: 'async'
    }));
    if (p.enlace) {
      var a = el('a', { 'class': 'g-link', href: p.enlace });
      a.appendChild(cont); fig.appendChild(a);
    } else {
      fig.appendChild(cont);
    }
    var cap = el('figcaption');
    cap.appendChild(el('span', {}, nombres[(p.servicios || [])[0]] || ''));
    cap.appendChild(document.createTextNode(p.titulo || ''));
    fig.appendChild(cap);
    return fig;
  }

  function aplicarFiltro(filtro) {
    if (filtros) filtros.querySelectorAll('[data-filter]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.filter === filtro ? 'true' : 'false');
    });
    document.querySelectorAll('[data-proyectos="todos"] [data-cat]').forEach(function (it) {
      it.hidden = !(filtro === 'todos' || it.dataset.cat.split(' ').indexOf(filtro) !== -1);
    });
  }

  if (filtros) filtros.addEventListener('click', function (e) {
    var b = e.target.closest('[data-filter]');
    if (b) aplicarFiltro(b.dataset.filter);
  });

  function render(data) {
    var lista = (data.proyectos || []).filter(function (p) { return p && p.imagen && p.titulo; });
    var nombres = {};
    (data.servicios || []).forEach(function (s) { nombres[s.id] = s.nombre; });

    galerias.forEach(function (g) {
      var items = g.dataset.proyectos === 'destacados'
        ? lista.filter(function (p) { return p.destacado; }).slice(0, 3)
        : lista;
      if (!items.length) return;
      g.textContent = '';
      items.forEach(function (p) { g.appendChild(tarjeta(p, nombres)); });
    });

    if (filtros) {   // solo los servicios que tienen al menos un proyecto
      filtros.textContent = '';
      var todos = el('button', { type: 'button', 'data-filter': 'todos', 'aria-pressed': 'true' }, 'Todos');
      filtros.appendChild(todos);
      (data.servicios || []).forEach(function (s) {
        var usado = lista.some(function (p) { return (p.servicios || []).indexOf(s.id) !== -1; });
        if (usado) filtros.appendChild(el('button', { type: 'button', 'data-filter': s.id, 'aria-pressed': 'false' }, s.nombre));
      });
    }
  }

  if (!window.fetch || location.protocol === 'file:') return;   // se queda con lo que trae el HTML
  fetch('data/proyectos.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(render)
    .catch(function (e) { console.warn('No se pudo leer data/proyectos.json; se muestran los proyectos del HTML.', e); });
})();

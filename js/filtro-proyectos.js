// Filtro de la galería de proyectos por servicio.
(function () {
  var botones = document.querySelectorAll('[data-filter]');
  var items = document.querySelectorAll('.gallery [data-cat]');
  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var filtro = boton.dataset.filter;
      botones.forEach(function (b) { b.setAttribute('aria-pressed', b === boton ? 'true' : 'false'); });
      items.forEach(function (it) {
        it.hidden = !(filtro === 'todos' || it.dataset.cat === filtro);
      });
    });
  });
})();

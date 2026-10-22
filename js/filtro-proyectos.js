// Filtro de la galería de proyectos por servicio.
// Cada foto puede pertenecer a más de un servicio: data-cat="glp ea".
(function () {
  var botones = document.querySelectorAll('[data-filter]');
  var items = document.querySelectorAll('.gallery [data-cat]');
  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var filtro = boton.dataset.filter;
      botones.forEach(function (b) { b.setAttribute('aria-pressed', b === boton ? 'true' : 'false'); });
      items.forEach(function (it) {
        var cats = it.dataset.cat.split(' ');
        it.hidden = !(filtro === 'todos' || cats.indexOf(filtro) !== -1);
      });
    });
  });
})();

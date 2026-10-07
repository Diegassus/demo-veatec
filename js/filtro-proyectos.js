// Filtro de proyectos por servicio (página proyectos.html).
// Los botones tienen data-filter y cada tarjeta de caso tiene data-cat.
(function () {
  var botones = document.querySelectorAll('[data-filter]');
  var casos = document.querySelectorAll('[data-cat]');

  function pintar(boton, activo) {
    var esGlp = boton.dataset.filter === 'glp';
    boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
    boton.style.background = activo ? (esGlp ? '#C2410C' : '#1F2328') : '#FFFFFF';
    boton.style.color = activo ? '#FFFFFF' : (esGlp ? '#9A3412' : '#1F2328');
  }

  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var filtro = boton.dataset.filter;
      botones.forEach(function (b) { pintar(b, b === boton); });
      casos.forEach(function (caso) {
        caso.style.display = (filtro === 'todos' || caso.dataset.cat === filtro) ? 'flex' : 'none';
      });
    });
  });
})();

// Menú hamburguesa (tablet y celular).
// Sin JavaScript el menú queda siempre visible: la clase "js" en <html> es la que lo oculta.
(function () {
  var header = document.querySelector('.site-header');
  var boton = document.querySelector('.nav-toggle');
  if (!header || !boton) return;

  function cerrar() {
    header.classList.remove('is-open');
    boton.setAttribute('aria-expanded', 'false');
  }

  boton.addEventListener('click', function () {
    var abierto = header.classList.toggle('is-open');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      cerrar();
      boton.focus();
    }
  });

  window.matchMedia('(min-width: 1081px)').addEventListener('change', function (e) {
    if (e.matches) cerrar();
  });
})();

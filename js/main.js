// Menú hamburguesa, servicio preseleccionado en contacto y aviso de formularios en la demo.
(function () {
  var header = document.querySelector('.site-header');
  var boton = document.querySelector('.nav-toggle');

  if (header && boton) {
    var cerrar = function () {
      header.classList.remove('is-open');
      boton.setAttribute('aria-expanded', 'false');
    };
    boton.addEventListener('click', function () {
      var abierto = header.classList.toggle('is-open');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) { cerrar(); boton.focus(); }
    });
    window.matchMedia('(min-width: 1101px)').addEventListener('change', function (e) { if (e.matches) cerrar(); });
  }

  // contacto.html?servicio=glp -> preselecciona el servicio en el formulario
  var select = document.getElementById('servicio');
  if (select) {
    var param = new URLSearchParams(window.location.search).get('servicio');
    if (param && select.querySelector('option[value="' + param + '"]')) select.value = param;
  }

  // Demo estática: los formularios se conectan al pasar a PHP (PHPMailer)
  document.querySelectorAll('form.form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var aviso = form.querySelector('.form-aviso');
      if (!aviso) {
        aviso = document.createElement('p');
        aviso.className = 'form-aviso full';
        aviso.setAttribute('role', 'status');
        form.appendChild(aviso);
      }
      aviso.textContent = 'Demo: el envío del formulario se activa en la versión PHP del sitio.';
    });
  });
})();

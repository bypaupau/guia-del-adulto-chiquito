/* ══════════════════════════════════════════════════════════════
   CARGADOR · trae los datos de una ciudad y arranca la app
   ──────────────────────────────────────────────────────────────
   Los archivos de datos se cargan aquí y no con etiquetas <script>
   en index.html, para que añadir una ciudad sea solo crear su
   carpeta y apuntarla en data/ciudades.js. Funciona igual
   abriendo el archivo con doble clic que publicado en la web.

   Cada ciudad se carga UNA vez y se queda en memoria: si vuelves
   a Oviedo después de mirar Madrid, no se piden otra vez sus
   diecisiete archivos.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var cargadas = {};   // id de ciudad → true

  function cargar(rutas, alTerminar) {
    var i = 0, fallo = false;
    (function siguiente() {
      if (i >= rutas.length) return alTerminar(!fallo);
      var s = document.createElement("script");
      s.src = rutas[i++];
      s.onload = siguiente;
      s.onerror = function () {
        fallo = true;
        console.error("No pude cargar " + s.src);
        G.avisar("Falta un archivo de datos: " + s.src);
        siguiente();
      };
      document.head.appendChild(s);
    })();
  }

  /* Carga los datos de una ciudad del índice de data/ciudades.js.
     Es lo que usa app.js al cambiar de ciudad, y también el arranque. */
  G.cargarCiudad = function (ciudad, alTerminar) {
    if (!ciudad) return alTerminar(false);
    if (cargadas[ciudad.id]) return alTerminar(true);
    cargar(
      ciudad.datos.map(function (n) { return ciudad.carpeta + "/" + n + ".js"; }),
      function (bien) {
        /* Se marca como cargada aunque falte algún archivo: los que
           sí entraron ya están registrados y volver a inyectarlos
           duplicaría los sitios. */
        cargadas[ciudad.id] = true;
        alTerminar(bien && !!G.datos.ciudad(ciudad.id));
      }
    );
  };

  G.ciudadCargada = function (id) { return !!cargadas[id]; };

  function arrancar() {
    var url = G.estado.leerURL();
    var ciudades = G.datos.ciudades();
    var ciudad = ciudades.filter(function (c) { return c.id === url.ciudad; })[0] ||
                 G.datos.ciudadPorDefecto();
    if (!ciudad) return G.avisar("No hay ninguna ciudad en data/ciudades.js.");

    G.cargarCiudad(ciudad, function () { G.iniciar(); });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", arrancar);
  else arrancar();
})(window.GUIA);

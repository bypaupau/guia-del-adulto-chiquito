/* ══════════════════════════════════════════════════════════════
   CARGADOR · trae los datos de la ciudad y arranca la app
   ──────────────────────────────────────────────────────────────
   Los archivos de datos se cargan aquí y no con etiquetas <script>
   en index.html, para que añadir una ciudad sea solo crear su
   carpeta y apuntarla en data/ciudades.js. Funciona igual
   abriendo el archivo con doble clic que publicado en la web.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  function cargar(rutas, alTerminar) {
    var i = 0;
    (function siguiente() {
      if (i >= rutas.length) return alTerminar();
      var s = document.createElement("script");
      s.src = rutas[i++];
      s.onload = siguiente;
      s.onerror = function () {
        console.error("No pude cargar " + s.src);
        G.avisar("Falta un archivo de datos: " + s.src);
        siguiente();
      };
      document.head.appendChild(s);
    })();
  }

  function arrancar() {
    var url = G.estado.leerURL();
    var ciudades = G.datos.ciudades();
    var ciudad = ciudades.filter(function (c) { return c.id === url.ciudad; })[0] ||
                 G.datos.ciudadPorDefecto();
    if (!ciudad) return G.avisar("No hay ninguna ciudad en data/ciudades.js.");

    cargar(ciudad.datos.map(function (n) { return ciudad.carpeta + "/" + n + ".js"; }), G.iniciar);
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", arrancar);
  else arrancar();
})(window.GUIA);

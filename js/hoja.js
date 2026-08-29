/* ══════════════════════════════════════════════════════════════
   HOJA · en móvil el panel sube y baja como una hoja de cristal
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var H = (G.hoja = {});
  var panel, y0 = null;

  H.esMovil = function () { return window.matchMedia("(max-width:820px)").matches; };

  H.preparar = function () {
    panel = document.getElementById("panel");
    var tirador = document.getElementById("tirador");

    tirador.addEventListener("click", function () {
      H.poner(panel.classList.contains("arriba") ? "asomada"
            : panel.classList.contains("media") ? "arriba" : "media");
    });

    /* Subir la hoja al tocar el buscador, como en Google Maps. */
    document.getElementById("busqueda").addEventListener("focus", function () {
      if (H.esMovil()) H.poner("arriba");
    });

    panel.addEventListener("touchstart", function (e) {
      var cuerpo = vistaActiva();
      if (cuerpo && cuerpo.contains(e.target) && cuerpo.scrollTop > 0) return;
      y0 = e.touches[0].clientY;
    }, { passive: true });

    panel.addEventListener("touchend", function (e) {
      if (y0 == null) return;
      var d = e.changedTouches[0].clientY - y0;
      y0 = null;
      if (Math.abs(d) < 42) return;
      var sube = d < 0;
      var ahora = panel.classList.contains("arriba") ? 2
                : panel.classList.contains("media") ? 1 : 0;
      H.poner(["asomada", "media", "arriba"][Math.max(0, Math.min(2, ahora + (sube ? 1 : -1)))]);
    }, { passive: true });
  };

  function vistaActiva() {
    return document.getElementById(
      panel.classList.contains("con-detalle") ? "vista-detalle" : "vista-lista");
  }

  H.poner = function (estado) {
    if (!panel || !H.esMovil()) return;
    panel.classList.remove("media", "arriba");
    if (estado !== "asomada") panel.classList.add(estado);
    /* La hoja asomada enseña buscador y filtros pero no la lista, o
       sea que es el equivalente móvil de tener la lista recogida.
       Se lo decimos al chevron para que no diga una cosa distinta. */
    if (G.panel && G.panel.sincronizarLista) G.panel.sincronizarLista(estado !== "asomada");
    setTimeout(function () { G.mapa.ajustarTamano(); G.panel.revisarPista(); },
               G.panel.msTransicion);
  };
})(window.GUIA);

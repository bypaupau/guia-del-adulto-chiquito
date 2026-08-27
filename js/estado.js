/* ══════════════════════════════════════════════════════════════
   ESTADO · qué ciudad, qué filtros, qué sitio abierto.
   Vive también en la dirección del navegador:
       #/oviedo              → el mapa de Oviedo
       #/oviedo/waterproof   → Oviedo con Waterproof abierto
   Así se puede enlazar un sitio concreto y el botón "atrás"
   cierra la ficha en vez de salirse de la página. Es la pieza que
   hará falta para la lista general de recomendaciones.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var E = (G.estado = {
    ciudad: null,
    origen: null,
    categorias: [],   // vacío = todas
    busqueda: "",
    sitio: null       // id del sitio abierto
  });

  var oyentes = [];
  E.alCambiar = function (fn) { oyentes.push(fn); };

  E.avisar = function (motivo) {
    oyentes.forEach(function (fn) { fn(E, motivo); });
  };

  E.cambiar = function (cambios, motivo) {
    Object.keys(cambios).forEach(function (k) { E[k] = cambios[k]; });
    E.escribirURL();
    E.avisar(motivo || "cambio");
  };

  E.alternarCategoria = function (id) {
    var i = E.categorias.indexOf(id);
    if (i === -1) E.categorias.push(id); else E.categorias.splice(i, 1);
    E.cambiar({}, "filtros");
  };

  E.todasLasCategorias = function () { E.cambiar({ categorias: [] }, "filtros"); };

  /* ---------- Dirección del navegador ---------- */
  var ignorar = false;

  E.escribirURL = function () {
    var h = "#/" + (E.ciudad || "");
    if (E.sitio) h += "/" + E.sitio;
    if (location.hash !== h) {
      ignorar = true;
      history.pushState(null, "", h);
      setTimeout(function () { ignorar = false; }, 0);
    }
  };

  E.leerURL = function () {
    var partes = (location.hash || "").replace(/^#\/?/, "").split("/").filter(Boolean);
    return { ciudad: partes[0] || null, sitio: partes[1] || null };
  };

  window.addEventListener("popstate", function () {
    if (ignorar) return;
    var u = E.leerURL();
    if (u.ciudad && u.ciudad !== E.ciudad) {
      E.ciudad = u.ciudad;
      E.sitio = u.sitio || null;
      E.avisar("ciudad");
    } else {
      E.sitio = u.sitio || null;
      E.avisar("navegacion");
    }
  });
})(window.GUIA);

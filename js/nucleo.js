/* ══════════════════════════════════════════════════════════════
   NÚCLEO · el objeto GUIA y los registros
   ──────────────────────────────────────────────────────────────
   Este archivo se carga el primero y crea el sitio donde todo lo
   demás se apunta: categorías, ciudades y sitios. Los archivos de
   data/ solo llaman a estas funciones; no saben nada de la app.
   ══════════════════════════════════════════════════════════════ */

window.GUIA = window.GUIA || {};

(function (G) {
  "use strict";

  /* ---------- Almacén ---------- */
  G._categorias = [];
  G._ciudades   = [];
  G._config     = {};   // config de cada ciudad, por id
  G._estilos    = [];   // estilos de mapa disponibles
  G._sitios     = {};   // sitios de cada ciudad, por id de ciudad

  /* ---------- Registros que usan los archivos de data/ ---------- */

  G.registrarCategorias = function (lista) {
    G._categorias = G._categorias.concat(lista);
  };

  G.registrarEstilosMapa = function (lista) {
    G._estilos = G._estilos.concat(lista);
  };

  G.registrarCiudades = function (lista) {
    G._ciudades = G._ciudades.concat(lista);
  };

  /* Config del mapa de una ciudad: centro, zoom, orígenes de ruta. */
  G.registrarCiudad = function (config) {
    G._config[config.id] = config;
  };

  /* Los archivos de sitios llaman aquí. Se puede llamar muchas
     veces por ciudad: cada categoría tiene su archivo. */
  G.registrarSitios = function (idCiudad, lista) {
    var destino = (G._sitios[idCiudad] = G._sitios[idCiudad] || []);
    for (var i = 0; i < lista.length; i++) destino.push(lista[i]);
  };

  /* ---------- Utilidades ---------- */

  /* Escapa el texto antes de meterlo en el HTML. Las notas llevan
     comillas y símbolos raros; sin esto una comilla rompe la ficha. */
  G.esc = function (t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };

  /* Quita tildes y mayúsculas: para buscar "farmacia" y que
     encuentre "Farmacía". */
  G.normalizar = function (t) {
    return String(t || "").toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  G.metros = function (m) {
    if (m < 1000) return Math.round(m / 10) * 10 + " m";
    return (m / 1000).toFixed(m < 10000 ? 1 : 0).replace(".", ",") + " km";
  };

  /* A pie, ~4,5 km/h. Solo para la estimación de reserva:
     cuando hay ruta real usamos la duración que da el servicio. */
  G.minutosAndando = function (metros) {
    return Math.max(1, Math.round(metros / 75));
  };

  G.avisar = function (texto, ms) {
    var a = document.getElementById("aviso");
    if (!a) return;
    a.textContent = texto;
    a.classList.add("visible");
    clearTimeout(a._t);
    a._t = setTimeout(function () { a.classList.remove("visible"); }, ms || 4500);
  };
})(window.GUIA);

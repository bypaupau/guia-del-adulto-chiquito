/* ══════════════════════════════════════════════════════════════
   MAPA · capas, pines y ruta dibujada
   ──────────────────────────────────────────────────────────────
   Este archivo NO sabe qué teselas se pintan: eso lo decide
   data/mapas.js (el estilo) y data/<ciudad>/ciudad.js (cuál usa
   esa ciudad). Aquí solo se montan las capas, se atenúa la base
   con lo que diga el estilo y, si el estilo trae una capa de solo
   etiquetas, se pone encima sin atenuar para que las calles se
   sigan leyendo.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var M = (G.mapa = {});
  var mapa, capaBase, capaEtiquetas, capaRuta, marcadorOrigen, marcadorPaso, reserva, clave;
  var marcadores = {};   // id de sitio → marcador
  var fallos = 0, yaCambie = false;

  /* ---------- Arranque ---------- */
  M.crear = function (config, estiloConfig) {
    mapa = L.map("mapa", { zoomControl: false, attributionControl: true })
            .setView(config.centro, config.zoom);

    /* Arriba a la derecha: a la izquierda lo taparía la ficha. */
    L.control.zoom({ position: "topright" }).addTo(mapa);

    mapa.createPane("baseAtenuada");
    mapa.getPane("baseAtenuada").style.zIndex = 200;
    mapa.createPane("etiquetas");
    mapa.getPane("etiquetas").style.zIndex = 250;
    mapa.getPane("etiquetas").style.pointerEvents = "none";
    mapa.createPane("ruta");
    mapa.getPane("ruta").style.zIndex = 400;

    reserva = estiloConfig.reserva;
    clave = estiloConfig.clave;
    ponerEstilo(estiloConfig.estilo);

    L.control.scale({ imperial: false, position: "bottomright" }).addTo(mapa);
    return mapa;
  };

  /* Monta las capas de un estilo de data/mapas.js. */
  function ponerEstilo(estilo) {
    if (!estilo) return;
    [capaBase, capaEtiquetas].forEach(function (c) { if (c) mapa.removeLayer(c); });
    capaEtiquetas = null;
    fallos = 0;

    var pane = mapa.getPane("baseAtenuada");
    pane.style.filter = estilo.atenuar || "none";
    pane.style.opacity = estilo.opacidad == null ? 1 : estilo.opacidad;

    capaBase = L.tileLayer(conClave(estilo, estilo.base), {
      maxZoom: estilo.maxZoom || 19,
      attribution: estilo.atribucion || "",
      pane: "baseAtenuada",
      crossOrigin: true
    }).addTo(mapa);

    /* Si el estilo trae capa de solo etiquetas, va encima sin
       atenuar: el mapa queda suave y las calles legibles. */
    if (estilo.etiquetas) {
      capaEtiquetas = L.tileLayer(conClave(estilo, estilo.etiquetas), {
        maxZoom: estilo.maxZoom || 19, pane: "etiquetas", crossOrigin: true
      }).addTo(mapa);
    }

    capaBase.on("tileerror", function () { if (++fallos > 4) irALaReserva(); });
  }

  function conClave(estilo, url) {
    if (!estilo.parametroClave || !clave) return url;
    return url + (url.indexOf("?") === -1 ? "?" : "&") + estilo.parametroClave + "=" + encodeURIComponent(clave);
  }

  /* Si el mapa elegido no responde, se pasa al de reserva. */
  function irALaReserva() {
    if (yaCambie || !reserva) return;
    yaCambie = true;
    ponerEstilo(reserva);
    G.avisar("El mapa elegido no responde; puse el de reserva.");
  }

  /* ---------- Pines ---------- */
  function svgPin(categoria, elegido) {
    var color = G.datos.color(categoria);
    var icono = G.iconosCategoria[categoria] || G.iconosUI.pin;
    var t = elegido ? ' elegido' : '';
    return '<svg class="chincheta' + t + '" width="34" height="44" viewBox="0 0 34 44">' +
             '<g class="gota">' +
               '<path class="cuerpo" style="fill:' + color + '" ' +
                 'd="M17 3C10.4 3 5 8.4 5 15c0 8.6 12 25 12 25s12-16.4 12-25c0-6.6-5.4-12-12-12z"/>' +
               '<g class="simbolo" transform="translate(10.4 8.6) scale(0.55)">' + icono + '</g>' +
             '</g>' +
           '</svg>';
  }

  function icono(categoria, elegido) {
    return L.divIcon({
      className: "envoltura-chincheta" + (elegido ? " arriba" : ""),
      html: svgPin(categoria, elegido),
      iconSize: [34, 44],
      iconAnchor: [17, 41],
      tooltipAnchor: [0, -36]
    });
  }

  M.pintarSitios = function (sitios, alPulsar) {
    Object.keys(marcadores).forEach(function (id) { mapa.removeLayer(marcadores[id]); });
    marcadores = {};
    sitios.forEach(function (s) {
      if (!s.coords) return;
      var m = L.marker(s.coords, { icon: icono(s.categoria, false), title: s.nombre, riseOnHover: true })
               .bindTooltip(s.nombre, { direction: "top", className: "etiqueta", offset: [0, -4] })
               .addTo(mapa);
      m.on("click", function () { alPulsar(s.id); });
      marcadores[s.id] = m;
    });
  };

  /* Enseña solo los sitios filtrados, sin recrear los marcadores. */
  M.mostrarSolo = function (idsVisibles, sitios) {
    sitios.forEach(function (s) {
      var m = marcadores[s.id];
      if (!m) return;
      var cabe = idsVisibles.indexOf(s.id) !== -1;
      if (cabe && !mapa.hasLayer(m)) m.addTo(mapa);
      if (!cabe && mapa.hasLayer(m)) mapa.removeLayer(m);
    });
  };

  M.marcarElegido = function (sitios, idElegido) {
    sitios.forEach(function (s) {
      var m = marcadores[s.id];
      if (m) m.setIcon(icono(s.categoria, s.id === idElegido));
    });
  };

  M.resaltar = function (id, si) {
    var m = marcadores[id];
    if (!m) return;
    var el = m.getElement && m.getElement();
    if (el) el.classList.toggle("rozado", !!si);
  };

  /* ---------- Encuadre ---------- */
  M.encuadrar = function (sitios, relleno) {
    var puntos = sitios.filter(function (s) { return s.coords; }).map(function (s) { return s.coords; });
    if (!puntos.length) return;
    mapa.fitBounds(L.latLngBounds(puntos), {
      paddingTopLeft: [(relleno && relleno[0]) || 60, 60],
      paddingBottomRight: [60, (relleno && relleno[1]) || 60],
      maxZoom: 16
    });
  };

  M.centrar = function (coords, relleno) {
    mapa.setView(coords, Math.max(mapa.getZoom(), 16), { animate: true });
    if (relleno) mapa.panBy(relleno, { animate: true });
  };

  M.ajustarTamano = function () { if (mapa) mapa.invalidateSize(); };

  /* ---------- Origen y ruta ---------- */
  /* El punto de partida no es un sitio de la guía: lleva su propia
     chincheta, más grande y en tinta, con un birrete. */
  M.ponerOrigen = function (origen) {
    if (marcadorOrigen) mapa.removeLayer(marcadorOrigen);
    if (!origen) return;
    marcadorOrigen = L.marker(origen.coords, {
      icon: L.divIcon({
        className: "envoltura-origen",
        html: '<svg class="origen" width="46" height="60" viewBox="0 0 46 60">' +
                '<circle class="aro" cx="23" cy="20" r="19"/>' +
                '<path class="cuerpo" d="M23 3C13.6 3 6 10.6 6 20c0 12 17 34 17 34s17-22 17-34C40 10.6 32.4 3 23 3z"/>' +
                '<g class="simbolo" transform="translate(14.5 11.5) scale(0.71)">' + G.iconosUI.universidad + '</g>' +
              '</svg>',
        iconSize: [46, 60],
        iconAnchor: [23, 56],
        tooltipAnchor: [0, -50]
      }),
      zIndexOffset: -50,
      interactive: true
    }).bindTooltip(origen.nombre, { direction: "top", className: "etiqueta" }).addTo(mapa);
  };

  M.dibujarRuta = function (ruta, color) {
    M.borrarRuta();
    if (!ruta || !ruta.coords || ruta.coords.length < 2) return;
    capaRuta = L.layerGroup([
      L.polyline(ruta.coords, { color: "#fff", weight: 11, opacity: .95, lineCap: "round", lineJoin: "round", pane: "ruta" }),
      L.polyline(ruta.coords, {
        color: color || "#2f2b26", weight: 5, opacity: 1, lineCap: "round", lineJoin: "round",
        dashArray: ruta.aproximada ? "1 10" : null, pane: "ruta"
      })
    ]).addTo(mapa);
  };

  /* Al pulsar una indicación, se marca ese punto en el mapa. */
  M.marcarPaso = function (coords) {
    M.borrarPaso();
    if (!coords) return;
    marcadorPaso = L.marker(coords, {
      icon: L.divIcon({ className: "envoltura-paso", html: '<span class="marca-paso"></span>', iconSize: [16, 16], iconAnchor: [8, 8] }),
      zIndexOffset: 500
    }).addTo(mapa);
    mapa.setView(coords, Math.max(mapa.getZoom(), 17), { animate: true });
  };

  M.borrarPaso = function () {
    if (marcadorPaso) { mapa.removeLayer(marcadorPaso); marcadorPaso = null; }
  };

  M.borrarRuta = function () {
    M.borrarPaso();
    if (capaRuta) { mapa.removeLayer(capaRuta); capaRuta = null; }
  };

  M.encuadrarRuta = function (ruta, relleno) {
    if (!ruta || !ruta.coords.length) return;
    mapa.fitBounds(L.latLngBounds(ruta.coords), {
      paddingTopLeft: [(relleno && relleno[0]) || 70, 70],
      paddingBottomRight: [70, (relleno && relleno[1]) || 70]
    });
  };

  /* ---------- Modo edición: ?editar en el enlace ---------- */
  M.modoEdicion = function () {
    G.avisar("Modo edición: haz clic en el mapa y te copio las coordenadas.", 9000);
    mapa.on("click", function (e) {
      var txt = "coords: [" + e.latlng.lat.toFixed(6) + ", " + e.latlng.lng.toFixed(6) + "],";
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(
        function () { G.avisar("Copiado · " + txt); },
        function () { G.avisar(txt); });
      else G.avisar(txt);
    });
  };

  M.instancia = function () { return mapa; };
})(window.GUIA);

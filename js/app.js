/* ══════════════════════════════════════════════════════════════
   APP · junta las piezas
   ──────────────────────────────────────────────────────────────
   Aquí no hay datos ni estilos: solo quién llama a quién.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var E = G.estado, D = G.datos, M = G.mapa, P = G.panel, F = G.detalle, H = G.hoja;
  var peticionRuta = 0, fijada = false;

  G.iniciar = function () {
    var url = E.leerURL();
    var ciudad = (url.ciudad && D.ciudad(url.ciudad)) ? url.ciudad
               : (D.ciudadPorDefecto() || {}).id;
    if (!ciudad) return G.avisar("No hay ninguna ciudad configurada en data/ciudades.js.");

    E.ciudad = ciudad;
    E.origen = D.origenPorDefecto(ciudad);
    E.sitio = url.sitio && D.sitio(ciudad, url.sitio) ? url.sitio : null;

    D.revisar(ciudad);

    M.crear(D.ciudad(ciudad), D.estiloMapa(ciudad));
    M.ponerOrigen(E.origen);

    P.prepararCabecera();
    P.pintarCiudades();
    P.pintarOrigenes();
    P.pintarFiltros();
    P.prepararBuscador();
    H.preparar();

    P.alElegir = elegir;
    P.alVolver = volver;
    P.alFijar  = alternarFijada;
    F.alPulsarFijada = function () { if (E.sitio) elegir(E.sitio); };
    F.alCerrarFijada = function () { fijada = false; F.quitarFijada(); P.marcarFijada(false); };

    M.pintarSitios(D.sitios(ciudad), elegir);
    refrescar();

    if (E.sitio) elegir(E.sitio);

    E.alCambiar(function (estado, motivo) {
      if (motivo === "ciudad") return location.reload();
      if (motivo === "origen") {
        M.ponerOrigen(estado.origen);
        M.borrarRuta();
        refrescar();
        if (estado.sitio) elegir(estado.sitio);
        return;
      }
      if (motivo === "navegacion") {
        if (estado.sitio) elegir(estado.sitio, true); else volver(true);
        return;
      }
      refrescar(motivo);
    });

    window.addEventListener("resize", function () { M.ajustarTamano(); });
    ubicarme();
    if (location.search.indexOf("editar") !== -1) M.modoEdicion();
  };

  /* ---------- Pintar lo que depende de los filtros ---------- */
  function refrescar(motivo) {
    P.marcarFiltros();
    P.pintarLista();
    var visibles = P.visibles();
    M.mostrarSolo(visibles.map(function (s) { return s.id; }), D.sitios(E.ciudad));

    /* Al cambiar de categoría, el mapa se acerca a lo que queda. */
    if (motivo === "filtros" && E.categorias.length && visibles.some(function (s) { return s.coords; }))
      M.encuadrar(visibles, hueco());
  }

  /* Cuánto sitio ocupa el panel, para que el mapa no centre debajo:
     [margen por la izquierda, margen por abajo]. */
  function hueco() {
    return H.esMovil() ? [30, 300] : [420, 40];
  }

  /* ---------- Elegir un sitio ---------- */
  function elegir(id, sinTocarURL) {
    var s = D.sitio(E.ciudad, id);
    if (!s) return;
    E.sitio = id;
    if (!sinTocarURL) E.escribirURL();

    F.abrir(s);
    P.mostrarDetalle(true);
    P.marcarElegido();
    P.irA(id);
    M.marcarElegido(D.sitios(E.ciudad), id);
    if (fijada) { fijada = false; F.quitarFijada(); P.marcarFijada(false); }

    if (H.esMovil()) H.poner("media");

    if (s.coords) {
      M.centrar(s.coords, H.esMovil() ? [0, 150] : [-180, 0]);
      pedirRuta(s);
    } else {
      M.borrarRuta();
      F.sinChincheta();
    }
  }

  function pedirRuta(sitio) {
    if (!E.origen) return;
    var mio = ++peticionRuta;
    F.cargandoRuta();
    G.rutas.calcular(E.origen.coords, sitio.coords, function (ruta) {
      if (mio !== peticionRuta) return;   // se eligió otro sitio mientras tanto
      M.dibujarRuta(ruta, D.color(sitio.categoria));
      F.ponerRuta(ruta, E.origen);
      M.encuadrarRuta(ruta, hueco());
    });
  }

  /* ---------- Volver a la lista ---------- */
  function volver(sinTocarURL) {
    P.mostrarDetalle(false);
    if (fijada) return;                  // la tarjeta sigue enseñando el sitio
    E.sitio = null;
    if (!sinTocarURL) E.escribirURL();
    M.borrarRuta();
    M.marcarElegido(D.sitios(E.ciudad), null);
    P.marcarElegido();
  }

  /* ---------- Despegar la ficha a la tarjeta de la esquina ---------- */
  function alternarFijada() {
    var s = D.sitio(E.ciudad, E.sitio);
    if (!s) return;
    fijada = !fijada;
    P.marcarFijada(fijada);
    if (fijada) {
      F.fijar(s);
      P.mostrarDetalle(false);
    } else {
      F.quitarFijada();
    }
  }

  /* ---------- Dónde estoy ---------- */
  function ubicarme() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(function (p) {
      var mia = [p.coords.latitude, p.coords.longitude];
      if (G.rutas.distanciaEntre(mia, D.ciudad(E.ciudad).centro) > 60000) return;
      L.circleMarker(mia, {
        radius: 7, color: "#fff", weight: 3, fillColor: "#2f2b26", fillOpacity: 1
      }).addTo(M.instancia()).bindTooltip("Estás aquí", { direction: "top", className: "etiqueta" });
    }, function () {}, { timeout: 8000 });
  }
})(window.GUIA);

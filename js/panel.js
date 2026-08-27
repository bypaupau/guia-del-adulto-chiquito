/* ══════════════════════════════════════════════════════════════
   PANEL · cabecera, buscador, filtros y lista
   ──────────────────────────────────────────────────────────────
   El panel tiene dos vistas que comparten la misma caja de
   cristal: la lista y la ficha del sitio. No se abre nada encima
   del mapa: se cambia de vista y se vuelve con la flecha.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var P = (G.panel = {});
  var E = G.estado, D = G.datos;
  var $ = function (id) { return document.getElementById(id); };
  var visibles = [];

  /* Los rellena app.js */
  P.alElegir = function () {};
  P.alVolver = function () {};
  P.alFijar  = function () {};

  /* ---------- Cabecera: volver, fijar, minimizar ---------- */
  P.prepararCabecera = function () {
    icono($("volver"), G.iconosUI.atras);
    icono($("fijar"), G.iconosUI.chincheta);
    icono($("minimizar"), G.iconosUI.abajo);
    $("burbuja").innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + G.iconosUI.lista + "</svg>" +
                             '<span class="cuenta" id="burbuja-cuenta"></span>';

    $("volver").addEventListener("click", function () { P.alVolver(); });
    $("fijar").addEventListener("click", function () { P.alFijar(); });
    $("minimizar").addEventListener("click", function () { P.minimizar(true); });
    $("burbuja").addEventListener("click", function () { P.minimizar(false); });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!$("menu-categorias").hidden) return abrirMenu(false);
      if ($("panel").classList.contains("con-detalle")) P.alVolver();
    });

    prepararPista();
  };

  P.minimizar = function (si) {
    $("panel").classList.toggle("guardado", si);
    $("burbuja").hidden = !si;
    if (si) abrirMenu(false);
    setTimeout(function () { G.mapa.ajustarTamano(); }, 320);
  };

  P.mostrarDetalle = function (si) {
    $("panel").classList.toggle("con-detalle", si);
    $("volver").hidden = !si;
    $("fijar").hidden = !si || G.hoja.esMovil();
    if (si) { P.minimizar(false); abrirMenu(false); }
    $("vista-detalle").scrollTop = 0;
    setTimeout(revisarPista, 60);
  };

  P.marcarFijada = function (si) {
    $("fijar").setAttribute("aria-pressed", si ? "true" : "false");
  };

  /* ---------- Ciudad ----------
     Siempre desplegable, aunque de momento solo haya Oviedo: es la
     puerta por la que entrarán Madrid, Barcelona y las demás. */
  P.pintarCiudades = function () {
    var caja = $("selector-ciudad"), ciudades = D.ciudades();
    caja.innerHTML = '<select id="ciudad" aria-label="Ciudad">' +
      ciudades.map(function (c) {
        return '<option value="' + G.esc(c.id) + '"' + (c.id === E.ciudad ? " selected" : "") +
               ">" + G.esc(c.nombre) + "</option>";
      }).join("") +
      (ciudades.length < 2 ? '<option disabled>Más ciudades, pronto</option>' : "") +
      "</select>";
    $("ciudad").addEventListener("change", function () {
      if (!D.ciudad(this.value)) return;
      E.cambiar({ ciudad: this.value, sitio: null, categorias: [], busqueda: "" }, "ciudad");
    });
  };

  /* ---------- Origen de las rutas ---------- */
  P.pintarOrigenes = function () {
    var caja = $("selector-origen"), origenes = D.origenes(E.ciudad);
    if (!origenes.length) { caja.innerHTML = ""; return; }
    if (origenes.length === 1) {
      caja.innerHTML = '<span class="origen-fijo">' + svg(G.iconosUI.andando) +
        "desde " + G.esc(origenes[0].corto || origenes[0].nombre) + "</span>";
      return;
    }
    caja.innerHTML = '<select id="origen" aria-label="Punto de partida">' +
      origenes.map(function (o) {
        return '<option value="' + G.esc(o.id) + '"' +
               (E.origen && o.id === E.origen.id ? " selected" : "") + ">desde " +
               G.esc(o.corto || o.nombre) + "</option>";
      }).join("") + "</select>";
    $("origen").addEventListener("change", function () {
      var v = this.value;
      E.cambiar({ origen: D.origenes(E.ciudad).filter(function (o) { return o.id === v; })[0] }, "origen");
    });
  };

  /* ---------- Categorías ----------
     Un desplegable con casillas en vez de diez chips sueltos: la
     lista de sitios se lleva el espacio, que es lo que importa. */
  P.pintarFiltros = function () {
    var menu = $("menu-categorias"), boton = $("boton-categorias");
    var cats = D.categorias(E.ciudad), sitios = D.sitios(E.ciudad);

    menu.innerHTML =
      '<button class="opcion todas" data-cat="" type="button">' +
        '<span class="marca"></span><span>Todas las categorías</span>' +
        '<span class="cuantos">' + sitios.length + "</span></button>" +
      cats.map(function (c) {
        var cuantos = sitios.filter(function (s) { return s.categoria === c.id; }).length;
        return '<button class="opcion" type="button" data-cat="' + G.esc(c.id) + '" ' +
               'aria-pressed="false" style="--color:' + G.esc(c.color) + '">' +
                 '<span class="marca"></span><span class="punto"></span>' +
                 "<span>" + G.esc(c.nombre) + "</span>" +
                 '<span class="cuantos">' + cuantos + "</span></button>";
      }).join("");

    menu.querySelectorAll(".opcion").forEach(function (b) {
      b.addEventListener("click", function () {
        if (!b.dataset.cat) E.todasLasCategorias();
        else E.alternarCategoria(b.dataset.cat);
      });
    });

    boton.addEventListener("click", function () {
      abrirMenu($("menu-categorias").hidden);
    });

    document.addEventListener("click", function (e) {
      if ($("menu-categorias").hidden) return;
      if (!$("menu-categorias").contains(e.target) && e.target !== boton && !boton.contains(e.target))
        abrirMenu(false);
    });

    P.marcarFiltros();
  };

  function abrirMenu(si) {
    $("menu-categorias").hidden = !si;
    $("boton-categorias").setAttribute("aria-expanded", si ? "true" : "false");
  }

  P.marcarFiltros = function () {
    var elegidas = E.categorias;
    $("menu-categorias").querySelectorAll(".opcion").forEach(function (b) {
      var activa = b.dataset.cat
        ? elegidas.indexOf(b.dataset.cat) !== -1
        : elegidas.length === 0;
      b.setAttribute("aria-pressed", activa ? "true" : "false");
    });

    var boton = $("boton-categorias");
    var texto = !elegidas.length ? "Categorías"
              : elegidas.length === 1 ? D.nombreCategoria(elegidas[0])
              : elegidas.length + " categorías";
    $("etiqueta-categorias").textContent = texto;
    boton.classList.toggle("activa", elegidas.length > 0);
  };

  /* ---------- Buscador ---------- */
  P.prepararBuscador = function () {
    var campo = $("busqueda"), limpiar = $("limpiar-busqueda"), t;
    campo.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        E.cambiar({ busqueda: campo.value }, "busqueda");
        limpiar.hidden = !campo.value;
      }, 160);
    });
    limpiar.addEventListener("click", function () {
      campo.value = ""; limpiar.hidden = true;
      E.cambiar({ busqueda: "" }, "busqueda");
      campo.focus();
    });
  };

  /* ---------- Lista ---------- */
  P.pintarLista = function () {
    visibles = D.filtrar(E.ciudad, E.categorias, E.busqueda);
    var lista = $("lista"), total = D.sitios(E.ciudad).length;

    var sinPin = visibles.filter(function (s) { return !s.coords; }).length;
    $("contador").textContent = !visibles.length ? "" :
      (E.categorias.length || E.busqueda
        ? visibles.length + " de " + total + " sitios"
        : total + " sitios") +
      (sinPin === visibles.length ? ", ninguno con chincheta en el mapa"
       : sinPin ? ", " + sinPin + " sin chincheta" : "");
    var cuenta = $("burbuja-cuenta");
    if (cuenta) cuenta.textContent = visibles.length;

    if (!visibles.length) {
      lista.innerHTML = '<p class="vacio">Por aquí no hay nada todavía.<br>Prueba con otra palabra o quita algún filtro.</p>';
      revisarPista();
      return;
    }

    lista.innerHTML = visibles.map(function (s) {
      return '<button class="tarjeta" data-id="' + G.esc(s.id) + '"' +
             (s.id === E.sitio ? ' aria-current="true"' : "") +
             ' style="--color:' + G.esc(D.color(s.categoria)) + '">' +
               '<span class="icono">' + svg(G.iconosCategoria[s.categoria] || G.iconosUI.pin) + "</span>" +
               '<span class="texto">' +
                 '<span class="nombre">' + G.esc(s.nombre) + "</span>" +
                 (s.subtitulo ? '<span class="resumen">' + G.esc(s.subtitulo) + "</span>" : "") +
               "</span>" + lejos(s) +
             "</button>";
    }).join("");

    lista.querySelectorAll(".tarjeta").forEach(function (t) {
      t.addEventListener("click", function () { P.alElegir(t.dataset.id); });
      t.addEventListener("mouseenter", function () { G.mapa.resaltar(t.dataset.id, true); });
      t.addEventListener("mouseleave", function () { G.mapa.resaltar(t.dataset.id, false); });
    });
    setTimeout(revisarPista, 60);
  };

  /* Estimación en línea recta, marcada con ≈ para no prometer lo
     que no es. La ruta de verdad se calcula al abrir la ficha. */
  function lejos(s) {
    if (!s.coords) return '<span class="lejos sin-pin">sin chincheta</span>';
    if (!E.origen) return "";
    var m = G.rutas.distanciaEntre(E.origen.coords, s.coords);
    return '<span class="lejos">≈' + G.minutosAndando(m) + " min<small>" + G.metros(m) + "</small></span>";
  }

  /* ---------- La flechita de "hay más abajo" ---------- */
  function prepararPista() {
    ["vista-lista", "vista-detalle"].forEach(function (id) {
      $(id).addEventListener("scroll", revisarPista, { passive: true });
    });
    window.addEventListener("resize", revisarPista);
  }

  function revisarPista() {
    var caja = $("panel").classList.contains("con-detalle") ? $("vista-detalle") : $("vista-lista");
    var hayMas = caja.scrollHeight - caja.scrollTop - caja.clientHeight > 24;
    $("pista-scroll").hidden = !hayMas || $("panel").classList.contains("guardado");
  }
  P.revisarPista = revisarPista;

  P.visibles = function () { return visibles; };

  P.marcarElegido = function () {
    document.querySelectorAll("#lista .tarjeta").forEach(function (t) {
      if (t.dataset.id === E.sitio) t.setAttribute("aria-current", "true");
      else t.removeAttribute("aria-current");
    });
  };

  P.irA = function (id) {
    var t = document.querySelector('#lista .tarjeta[data-id="' + id + '"]');
    if (t && t.scrollIntoView) t.scrollIntoView({ block: "nearest" });
  };

  function svg(interior) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + interior + "</svg>"; }
  function icono(boton, interior) { if (boton) boton.innerHTML = svg(interior); }
})(window.GUIA);

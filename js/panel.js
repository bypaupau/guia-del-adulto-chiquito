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
  var filtrosListos = false;   // los oyentes globales se ponen una sola vez

  /* Cuánto se espera antes de recolocar el mapa y revisar la pista de
     scroll: un pelín más que la transición más larga del panel (la del
     bloque plegable y la hoja del móvil, .26s en assets/css/panel.css).
     ÚNICO SITIO donde vive este número; hoja.js lo lee de aquí. Si
     tocas las duraciones del CSS, toca también esto. */
  P.msTransicion = 290;

  /* Los rellena app.js */
  P.alElegir = function () {};
  P.alVolver = function () {};
  P.alFijar  = function () {};

  /* ---------- Cabecera: volver, fijar, minimizar ---------- */
  P.prepararCabecera = function () {
    icono($("volver"), G.iconosUI.atras);
    icono($("fijar"), G.iconosUI.chincheta);
    icono($("minimizar"), G.iconosUI.minimizar);
    $("burbuja").innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + G.iconosUI.lista + "</svg>" +
                             '<span class="cuenta" id="burbuja-cuenta"></span>';

    $("volver").addEventListener("click", function () { P.alVolver(); });
    $("fijar").addEventListener("click", function () { P.alFijar(); });
    $("minimizar").addEventListener("click", function () { P.minimizar(true); });
    $("burbuja").addEventListener("click", function () { P.minimizar(false); });
    $("alternar-lista").addEventListener("click", function () {
      P.alternarLista(!P.listaAbierta());
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (menuAbierto()) return abrirMenu(false);
      if ($("panel").classList.contains("con-detalle")) P.alVolver();
    });

    prepararPista();
  };

  P.minimizar = function (si) {
    $("panel").classList.toggle("guardado", si);
    $("burbuja").hidden = !si;
    if (si) abrirMenu(false);
    setTimeout(function () { G.mapa.ajustarTamano(); }, P.msTransicion);
  };

  /* ---------- Abrir y cerrar la lista ----------
     La lista arranca cerrada para que al abrir la página se vea el
     mapa. En escritorio se recoge el bloque entero (CSS: .plegado);
     en el móvil la hoja ya sube y baja sola, así que allí el chevron
     mueve la hoja, que es la misma acción con otro gesto. */
  P.listaAbierta = function () { return !$("panel").classList.contains("plegado"); };

  P.alternarLista = function (abrir) {
    P.sincronizarLista(abrir);
    if (abrir) P.minimizar(false);
    if (G.hoja.esMovil()) G.hoja.poner(abrir ? "media" : "asomada");
    else setTimeout(function () { G.mapa.ajustarTamano(); revisarPista(); }, P.msTransicion);
  };

  /* Deja el chevron diciendo la verdad. La llama también la hoja del
     móvil cuando la arrastran a mano. */
  P.sincronizarLista = function (abierta) {
    $("panel").classList.toggle("plegado", !abierta);
    $("alternar-lista").setAttribute("aria-expanded", abierta ? "true" : "false");
    $("etiqueta-lista").textContent = abierta ? "Esconder la lista" : "Ver la lista";
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
     Es un selector de LOCALIZACIÓN, no un filtro más: por eso lleva
     su rótulo delante ("Ciudad: Oviedo") y va separado de las
     categorías. Sale solo de data/ciudades.js, así que añadir una
     ciudad nueva no obliga a tocar esto.

     Ojo: aquí NO se comprueba D.ciudad(id), porque la configuración
     de una ciudad no existe hasta que se cargan sus datos. De eso se
     encarga app.js al recibir el motivo "ciudad". */
  P.pintarCiudades = function () {
    var caja = $("selector-ciudad"), ciudades = D.ciudades();
    caja.innerHTML =
      '<span class="grupo-ciudad">' +
        '<span class="rotulo-ciudad">Ciudad:</span>' +
        '<select id="ciudad" aria-label="Ciudad">' +
          ciudades.map(function (c) {
            return '<option value="' + G.esc(c.id) + '"' +
                   (c.id === E.ciudad ? " selected" : "") + ">" +
                   G.esc(c.nombre) + "</option>";
          }).join("") +
        "</select>" +
      "</span>";
    $("ciudad").addEventListener("change", function () {
      if (this.value === E.ciudad) return;
      E.cambiar({ ciudad: this.value, sitio: null, categorias: [], busqueda: "" }, "ciudad");
    });
  };

  /* ---------- Origen de las rutas ----------
     Vive en el pie de la lista, no entre los filtros: es la leyenda
     de la columna de "≈ 36 min", así que se lee justo encima de esa
     columna y desaparece cuando la lista está recogida. Las ciudades
     sin punto de partida (Madrid, Barcelona) lo dejan vacío. */
  P.pintarOrigenes = function () {
    var caja = $("selector-origen"), origenes = D.origenes(E.ciudad);

    if (!origenes.length) caja.innerHTML = "";
    else if (origenes.length === 1) {
      caja.innerHTML = svg(G.iconosUI.andando) +
        "<span>Tiempos a pie desde <b>" +
        G.esc(origenes[0].corto || origenes[0].nombre) + "</b></span>";
    } else {
      caja.innerHTML = svg(G.iconosUI.andando) + "<span>Tiempos a pie desde</span>" +
        '<select id="origen" aria-label="Punto de partida">' +
        origenes.map(function (o) {
          return '<option value="' + G.esc(o.id) + '"' +
                 (E.origen && o.id === E.origen.id ? " selected" : "") + ">" +
                 G.esc(o.corto || o.nombre) + "</option>";
        }).join("") + "</select>";
      $("origen").addEventListener("change", function () {
        var v = this.value;
        E.cambiar({ origen: D.origenes(E.ciudad).filter(function (o) { return o.id === v; })[0] }, "origen");
      });
    }
    revisarPie();
  };

  /* El pie solo existe si tiene algo que contar. */
  function revisarPie() {
    var pie = $("pie-lista");
    if (!pie) return;
    pie.hidden = !$("selector-origen").innerHTML && !$("aviso-sin-pin").textContent;
  }

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
        /* Si la lista estaba recogida, se abre: filtrar y no ver el
           resultado es lo mismo que no filtrar. */
        if (!P.listaAbierta()) P.alternarLista(true);
      });
    });

    /* Estos van una sola vez: pintarFiltros se vuelve a llamar al
       cambiar de ciudad, y si no, se apilarían los oyentes. */
    if (!filtrosListos) {
      filtrosListos = true;
      boton.addEventListener("click", function () { abrirMenu(!menuAbierto()); });
      $("cerrar-categorias").addEventListener("click", function () {
        abrirMenu(false);
        boton.focus();   /* el foco vuelve a la pastilla, no se pierde */
      });
    }
    /* Ojo: NO se cierra al pulsar fuera. Eso era propio de la ventana
       flotante de antes; ahora es una sección del panel y cerrarse
       sola al tocar el mapa o la lista despistaría. Se cierra por la
       pastilla, por "Listo" o con Escape. */

    P.marcarFiltros();
  };

  function menuAbierto() { return $("panel").classList.contains("con-categorias"); }

  function abrirMenu(si) {
    $("panel").classList.toggle("con-categorias", si);
    $("boton-categorias").setAttribute("aria-expanded", si ? "true" : "false");

    /* Filtrar sin ver el resultado es lo mismo que no filtrar: al
       abrir el cajón nos aseguramos de que la lista queda debajo, a
       la vista. En el móvil eso significa subir la hoja del todo. */
    if (si) {
      if (G.hoja.esMovil()) { P.sincronizarLista(true); G.hoja.poner("arriba"); }
      else if (!P.listaAbierta()) P.alternarLista(true);
    }
    setTimeout(function () { G.mapa.ajustarTamano(); revisarPista(); }, P.msTransicion);
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
        if (campo.value && !P.listaAbierta()) P.alternarLista(true);
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

    /* La lista se filtra en vivo, pero el cambio puede pasar
       desapercibido. Un pulso corto en la pastilla de la cuenta hace
       que el ojo se entere de que hay resultados nuevos ahí abajo. */
    var cuantos = $("contador"), texto = textoContador(visibles.length, total);
    if (cuantos.textContent && cuantos.textContent !== texto) {
      cuantos.classList.remove("cambia");
      void cuantos.offsetWidth;          /* reinicia la animación */
      cuantos.classList.add("cambia");
    }
    cuantos.textContent = texto;
    $("aviso-sin-pin").textContent = avisoSinPin(visibles.length, sinPin);
    revisarPie();
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

  /* La pastilla del control: corta, porque va pegada a la etiqueta y
     tiene que caber a su lado sin empujar el chevron. */
  function textoContador(cuantos, total) {
    if (!cuantos) return "ninguno";
    return (E.categorias.length || E.busqueda)
      ? cuantos + " de " + total
      : total + " sitios";
  }

  /* El matiz de las chinchetas que faltan se cuenta abajo, en el pie
     de la lista, que es donde se nota: son las tarjetas que ponen
     "sin chincheta" en vez de los minutos. */
  function avisoSinPin(cuantos, sinPin) {
    if (!cuantos || !sinPin) return "";
    return sinPin === cuantos ? "ninguno en el mapa" : sinPin + " sin chincheta";
  }

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

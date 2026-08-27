/* ══════════════════════════════════════════════════════════════
   FICHA · la información del sitio
   ──────────────────────────────────────────────────────────────
   Se pinta dentro del panel (vista-detalle). Con la chincheta se
   "despega" a una tarjeta pequeña en la esquina, para poder mirar
   el mapa sin perder de vista qué sitio estabas viendo.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var F = (G.detalle = {});
  var E = G.estado, D = G.datos;
  var $ = function (id) { return document.getElementById(id); };
  var sitioActual = null, rutaActual = null;

  F.alPulsarFijada = function () {};   // lo rellena app.js
  F.alCerrarFijada = function () {};

  /* ---------- La ficha del panel ---------- */
  F.abrir = function (sitio) {
    sitioActual = sitio; rutaActual = null;
    var color = D.color(sitio.categoria);
    var ciudad = D.ciudad(E.ciudad);

    $("ficha-cuerpo").innerHTML =
      '<span class="rotulo" style="background:' + G.esc(color) + '">' +
        svg(G.iconosCategoria[sitio.categoria] || G.iconosUI.pin) +
        G.esc(D.nombreCategoria(sitio.categoria)) + "</span>" +
      "<h2>" + G.esc(sitio.nombre) + "</h2>" +
      (sitio.subtitulo ? '<p class="sub">' + G.esc(sitio.subtitulo) + "</p>" : "") +
      fotos(sitio) +
      '<div id="zona-ruta"></div>' +
      (sitio.nota ? '<p class="nota">' + G.esc(sitio.nota) + "</p>" : "") +
      '<div class="datos">' +
        fila(G.iconosUI.pin, sitio.direccion) +
        (sitio.telefono ? fila(G.iconosUI.telefono,
          '<a href="tel:+34' + G.esc(sitio.telefono.replace(/\s/g, "")) + '">' + G.esc(sitio.telefono) + "</a>", true) : "") +
        (sitio.horario ? fila(G.iconosUI.reloj, sitio.horario) : "") +
        (sitio.web ? fila(G.iconosUI.web,
          '<a href="' + G.esc(sitio.web) + '" target="_blank" rel="noopener">' +
          G.esc(sitio.web.replace(/^https?:\/\//, "")) + "</a>", true) : "") +
      "</div>" +
      '<div class="acciones">' +
        '<a class="boton fuerte" style="background:' + G.esc(color) + '" href="' + G.esc(enlaceRuta(sitio, ciudad)) +
          '" target="_blank" rel="noopener">' + svg(G.iconosUI.ruta) + "Cómo llegar (Google Maps)</a>" +
        '<a class="boton suave" href="' + G.esc(enlaceMaps(sitio, ciudad)) +
          '" target="_blank" rel="noopener">' + svg(G.iconosUI.pin) + "Verlo en Google Maps</a>" +
      "</div>" +
      (sitio.verificado ? '<p class="verificado">Datos comprobados en ' + G.esc(sitio.verificado) + "</p>" : "");
  };

  F.cargandoRuta = function () {
    var caja = $("zona-ruta");
    if (!caja) return;
    caja.innerHTML = '<div class="ruta-resumen cargando">' + svg(G.iconosUI.andando) +
                     "<span>Calculando la ruta…</span></div>";
  };

  /* La ruta llega después: se rellena aparte sin repintar la ficha. */
  /* Los sitios sin coordenadas (cadenas con muchos locales, cosas
     fuera de la ciudad) no tienen chincheta, y hay que decirlo en vez
     de dejar el hueco vacío. */
  F.sinChincheta = function () {
    var caja = $("zona-ruta");
    if (!caja) return;
    caja.innerHTML = '<div class="ruta-resumen sin-pin">' + svg(G.iconosUI.pin) +
      "<span>Este no tiene chincheta en el mapa" +
      '<span class="cuanto">Búscalo con el botón de Google Maps</span></span></div>';
  };

  F.ponerRuta = function (ruta, origen) {
    rutaActual = ruta;
    var caja = $("zona-ruta");
    if (!caja) return;
    if (!ruta) { caja.innerHTML = ""; return; }

    caja.innerHTML =
      '<div class="ruta-resumen' + (ruta.aproximada ? " aproximada" : "") + '">' +
        svg(G.iconosUI.andando) +
        "<span><b>" + G.rutas.enMinutos(ruta) + " min</b> andando desde " +
        G.esc(origen.corto || origen.nombre) +
        '<span class="cuanto">' + G.metros(ruta.metros) + "</span>" +
        (ruta.aproximada ? "<em>No pude calcular la ruta real, así que esto es la línea recta.</em>" : "") +
        "</span></div>" +
      (ruta.pasos && ruta.pasos.length ?
        '<button class="ver-pasos" id="ver-pasos" aria-expanded="false" aria-controls="pasos">' +
          "<span>Ver las indicaciones (" + ruta.pasos.length + " pasos)</span>" +
          svg(G.iconosUI.abajo) +
        "</button>" +
        '<div class="pasos" id="pasos" hidden>' + ruta.pasos.map(paso).join("") + "</div>"
      : "");

    var boton = $("ver-pasos");
    if (boton) boton.addEventListener("click", function () {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", abierto ? "false" : "true");
      $("pasos").hidden = abierto;
      if (abierto) G.mapa.borrarPaso();
    });

    caja.querySelectorAll(".paso").forEach(function (b, i) {
      b.addEventListener("click", function () {
        var p = ruta.pasos[i];
        if (p && p.punto) G.mapa.marcarPaso(p.punto);
      });
    });
  };

  function paso(p) {
    return '<button class="paso" type="button">' +
             '<span class="marca">' + svg(G.iconosUI[p.icono] || G.iconosUI.recto) + "</span>" +
             '<span class="que">' + p.texto + "</span>" +
             (p.metros ? '<span class="cuanto">' + G.metros(p.metros) + "</span>" : "") +
           "</button>";
  }

  /* ---------- La tarjeta despegada ---------- */
  F.fijar = function (sitio) {
    var caja = $("fijada"), color = D.color(sitio.categoria);
    var minutos = rutaActual ? G.rutas.enMinutos(rutaActual) + " min andando" : "";
    var abajo = sitio.subtitulo || sitio.direccion || "";
    caja.hidden = false;
    caja.style.setProperty("--color", color);
    caja.innerHTML =
      '<span class="icono">' + svg(G.iconosCategoria[sitio.categoria] || G.iconosUI.pin) + "</span>" +
      '<span class="texto">' +
        '<span class="nombre">' + G.esc(sitio.nombre) + "</span>" +
        '<span class="abajo">' + G.esc(abajo) + "</span>" +
        (minutos ? '<span class="tiempo">' + svg(G.iconosUI.andando) + G.esc(minutos) + "</span>" : "") +
      "</span>" +
      '<span class="botones">' +
        '<button class="icono-btn" id="fijada-abrir" aria-label="Ver toda la información"></button>' +
        '<button class="icono-btn" id="fijada-cerrar" aria-label="Quitar la tarjeta"></button>' +
      "</span>";
    $("fijada-abrir").innerHTML = svg(G.iconosUI.expandir);
    $("fijada-cerrar").innerHTML = svg(G.iconosUI.cerrar);
    $("fijada-abrir").addEventListener("click", function () { F.alPulsarFijada(); });
    $("fijada-cerrar").addEventListener("click", function () { F.alCerrarFijada(); });
    document.body.classList.add("con-fijada");
    requestAnimationFrame(function () { caja.classList.add("visible"); });
  };

  F.quitarFijada = function () {
    var caja = $("fijada");
    document.body.classList.remove("con-fijada");
    caja.classList.remove("visible");
    setTimeout(function () { caja.hidden = true; }, 240);
  };

  F.sitioActual = function () { return sitioActual; };

  /* ---------- Piezas ---------- */
  function fotos(s) {
    if (!s.fotos || !s.fotos.length) return "";
    var base = "assets/img/" + E.ciudad + "/" + s.id + "/";
    return '<div class="fotos">' + s.fotos.map(function (f) {
      return '<img src="' + G.esc(base + f) + '" alt="' + G.esc(s.nombre) + '" loading="lazy">';
    }).join("") + "</div>";
  }

  function fila(icono, contenido, esHTML) {
    if (!contenido) return "";
    return "<div>" + svg(icono) + "<span>" + (esHTML ? contenido : G.esc(contenido)) + "</span></div>";
  }

  function svg(interior) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + interior + "</svg>"; }

  /* Google Maps se busca por NOMBRE + DIRECCIÓN, no por coordenadas.
     Con una coordenada suelta, Maps enseña el negocio que le pille más
     cerca y acaba abriendo el local de al lado; con el nombre delante
     acierta, y si el sitio ya no existe al menos cae en la dirección. */
  function busqueda(s, ciudad) {
    var partes = [s.nombre];
    if (s.direccion) partes.push(s.direccion);
    if (ciudad && ciudad.sufijoBusqueda) partes.push(ciudad.sufijoBusqueda);
    return encodeURIComponent(partes.join(", "));
  }
  function enlaceMaps(s, ciudad) {
    return s.maps || "https://www.google.com/maps/search/?api=1&query=" + busqueda(s, ciudad);
  }
  function enlaceRuta(s, ciudad) {
    var origen = E.origen
      ? "&origin=" + encodeURIComponent(E.origen.nombre + ", " + (ciudad ? ciudad.nombre : ""))
      : "";
    return "https://www.google.com/maps/dir/?api=1&travelmode=walking&destination=" +
           busqueda(s, ciudad) + origen;
  }
})(window.GUIA);

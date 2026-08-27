/* ══════════════════════════════════════════════════════════════
   DATOS · consultar y validar lo que registraron los archivos
   de data/. Nadie más lee GUIA._sitios directamente.
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var D = (G.datos = {});

  D.ciudades = function () { return G._ciudades.slice(); };

  D.ciudadPorDefecto = function () {
    var c = G._ciudades.filter(function (x) { return x.porDefecto; })[0];
    return c || G._ciudades[0];
  };

  D.ciudad = function (id) {
    return G._config[id] || null;
  };

  /* Estilo de mapa de una ciudad, con su reserva y su clave. */
  D.estiloMapa = function (idCiudad) {
    var c = D.ciudad(idCiudad) || {};
    var m = c.mapa || {};
    var busca = function (id) {
      return G._estilos.filter(function (e) { return e.id === id; })[0];
    };
    var elegido = busca(m.estilo) || G._estilos[0];
    var reserva = busca(m.reserva);

    /* Abriendo el archivo con doble clic no hay cabecera Referer y
       OpenStreetMap devuelve teselas de "Access blocked". En ese
       caso arrancamos directamente con el mapa de reserva. */
    if (elegido && elegido.requiereReferer && location.protocol === "file:" && reserva) {
      console.info("Guía · sin servidor no se puede usar " + elegido.nombre +
                   ", uso " + reserva.nombre + ". Sirve la carpeta por http para verlo bien.");
      elegido = reserva;
    }
    if (elegido && elegido.parametroClave && !m.clave)
      console.warn('⚠️ Guía · el estilo de mapa "' + elegido.id + '" necesita una clave. ' +
                   'Ponla en data/' + idCiudad + '/ciudad.js (mapa.clave) o elige otro estilo en data/mapas.js.');
    return { estilo: elegido, reserva: reserva, clave: m.clave || "" };
  };

  D.origenes = function (idCiudad) {
    var c = D.ciudad(idCiudad);
    return (c && c.origenes) || [];
  };

  D.origenPorDefecto = function (idCiudad) {
    var o = D.origenes(idCiudad);
    return o.filter(function (x) { return x.porDefecto; })[0] || o[0] || null;
  };

  /* Categorías ordenadas, y solo las que de verdad tienen sitios
     en esta ciudad: así Madrid no enseñará un filtro vacío. */
  D.categorias = function (idCiudad) {
    var sitios = D.sitios(idCiudad);
    return G._categorias
      .filter(function (c) {
        return sitios.some(function (s) { return s.categoria === c.id; });
      })
      .sort(function (a, b) { return (a.orden || 99) - (b.orden || 99); });
  };

  D.categoria = function (id) {
    return G._categorias.filter(function (c) { return c.id === id; })[0] || null;
  };

  D.color = function (idCategoria) {
    var c = D.categoria(idCategoria);
    return (c && c.color) || "#5F6B72";
  };

  D.nombreCategoria = function (idCategoria) {
    var c = D.categoria(idCategoria);
    return (c && c.nombre) || idCategoria;
  };

  D.sitios = function (idCiudad) {
    return G._sitios[idCiudad] || [];
  };

  D.sitio = function (idCiudad, idSitio) {
    return D.sitios(idCiudad).filter(function (s) { return s.id === idSitio; })[0] || null;
  };

  D.conMapa = function (idCiudad) {
    return D.sitios(idCiudad).filter(function (s) { return s.coords; });
  };

  /* Filtro de la lista: categorías marcadas + texto del buscador. */
  D.filtrar = function (idCiudad, categorias, texto) {
    var t = G.normalizar(texto || "").trim();
    return D.sitios(idCiudad).filter(function (s) {
      if (categorias && categorias.length && categorias.indexOf(s.categoria) === -1) return false;
      if (!t) return true;
      var heno = G.normalizar(
        [s.nombre, s.subtitulo, s.direccion, s.nota, D.nombreCategoria(s.categoria)].join(" ")
      );
      return t.split(/\s+/).every(function (palabra) { return heno.indexOf(palabra) !== -1; });
    });
  };

  /* ---------- Revisión al arrancar ----------
     No rompe la app: avisa por consola de lo que está mal, que es
     justo lo que antes pasaba en silencio (una categoría mal
     escrita salía con el icono de otra). */
  D.revisar = function (idCiudad) {
    var problemas = [], vistos = {};
    D.sitios(idCiudad).forEach(function (s) {
      if (!s.id) problemas.push('Un sitio sin id: "' + (s.nombre || "?") + '"');
      else if (vistos[s.id]) problemas.push('id repetido: "' + s.id + '"');
      vistos[s.id] = true;
      if (!D.categoria(s.categoria))
        problemas.push('"' + s.nombre + '" usa la categoría "' + s.categoria + '", que no existe en data/categorias.js');
      if (s.coords && (s.coords.length !== 2 || isNaN(s.coords[0]) || isNaN(s.coords[1])))
        problemas.push('"' + s.nombre + '" tiene las coordenadas mal escritas');
      if (s.lat || s.lon)
        problemas.push('"' + s.nombre + '" usa lat/lon del formato viejo: ahora es coords: [lat, lon]');
    });
    G._categorias.forEach(function (c) {
      if (!G.iconosCategoria[c.id])
        problemas.push('La categoría "' + c.id + '" no tiene icono en assets/icons/categorias.js');
    });
    if (problemas.length) {
      console.warn("⚠️ Guía · revisa los datos de " + idCiudad + ":");
      problemas.forEach(function (p) { console.warn("   · " + p); });
    }
    return problemas;
  };
})(window.GUIA);

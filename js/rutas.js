/* ══════════════════════════════════════════════════════════════
   RUTAS · de un origen a un sitio, andando
   ──────────────────────────────────────────────────────────────
   Servicio: OSRM público de FOSSGIS (routing.openstreetmap.de).
   Es gratuito, no pide clave y permite peticiones desde cualquier
   dominio. A cambio: máximo 1 petición por segundo, uso no
   comercial y sin garantía de disponibilidad — por eso guardamos
   en caché lo ya calculado y hay una reserva si no contesta.
   https://routing.openstreetmap.de/about.html

   Para cambiar de servicio (por ejemplo OpenRouteService) solo se
   toca PROVEEDOR: el resto de la app pide siempre lo mismo y
   recibe siempre lo mismo:
       { coords: [[lat,lon]…], metros, segundos, aproximada }
   ══════════════════════════════════════════════════════════════ */

(function (G) {
  "use strict";

  var R = (G.rutas = {});

  var PROVEEDOR = {
    nombre: "OSRM, FOSSGIS",
    url: function (o, d) {
      return "https://routing.openstreetmap.de/routed-foot/route/v1/foot/" +
             o[1] + "," + o[0] + ";" + d[1] + "," + d[0] +
             "?overview=full&geometries=geojson&alternatives=false&steps=true";
    },
    leer: function (json) {
      if (!json || json.code !== "Ok" || !json.routes || !json.routes.length) return null;
      var r = json.routes[0];
      return {
        coords: r.geometry.coordinates.map(function (c) { return [c[1], c[0]]; }),
        metros: Math.round(r.distance),
        segundos: Math.round(r.duration),
        pasos: indicaciones(r),
        aproximada: false
      };
    }
  };

  /* ---------- De maniobras de OSRM a español ----------
     OSRM devuelve la maniobra en piezas (tipo + sentido + calle),
     no una frase. Esto la arma en castellano y elige el icono. */

  var SENTIDOS = {
    "left": "a la izquierda", "right": "a la derecha",
    "slight left": "ligeramente a la izquierda", "slight right": "ligeramente a la derecha",
    "sharp left": "cerrado a la izquierda", "sharp right": "cerrado a la derecha",
    "straight": "recto", "uturn": "en redondo"
  };

  function iconoDe(tipo, sentido) {
    if (tipo === "depart") return "salida";
    if (tipo === "arrive") return "llegada";
    if (tipo === "roundabout" || tipo === "rotary" || tipo === "roundabout turn") return "rotonda";
    if (!sentido || sentido === "straight") return "recto";
    /* Un "sigue por otra calle" con un sentido leve no es un giro. */
    if ((tipo === "new name" || tipo === "continue") && sentido.indexOf("slight") === 0) return "recto";
    return sentido.indexOf("left") !== -1 ? "izquierda" : "derecha";
  }

  function frase(paso, esUltimo) {
    var m = paso.maneuver || {};
    var tipo = m.type || "";
    var sentido = SENTIDOS[m.modifier] || "";
    var calle = paso.name || "";
    var por = calle ? " por <span class=\"calle\">" + calle + "</span>" : "";
    var en  = calle ? " en <span class=\"calle\">" + calle + "</span>" : "";

    if (tipo === "depart")  return calle ? "Sal" + por : "Empieza a andar";
    if (tipo === "arrive")  return "Llegas" + (m.modifier === "left" ? ", queda a tu izquierda"
                                            : m.modifier === "right" ? ", queda a tu derecha" : "");
    if (tipo === "roundabout" || tipo === "rotary")
      return "En la rotonda, toma la salida " + (m.exit || 1) + por;
    if (tipo === "exit roundabout" || tipo === "exit rotary") return "Sal de la rotonda" + por;
    if (tipo === "new name")  return "Sigue" + por;
    if (tipo === "continue")  return (m.modifier && m.modifier !== "straight" ? "Continúa " + sentido : "Sigue recto") + por;
    if (tipo === "merge")     return "Incorpórate" + por;
    if (tipo === "fork")      return "En la bifurcación, mantente " + (sentido || "recto") + por;
    if (tipo === "end of road") return "Al final de la calle, gira " + (sentido || "") + en;
    if (tipo === "turn" && m.modifier === "straight") return "Sigue recto" + por;
    if (tipo === "turn")      return "Gira " + sentido + en;
    return (sentido ? "Ve " + sentido : "Sigue") + por;
  }

  function indicaciones(ruta) {
    var pasos = [];
    (ruta.legs || []).forEach(function (tramo) {
      (tramo.steps || []).forEach(function (paso) {
        var loc = paso.maneuver && paso.maneuver.location;   // [lon, lat]
        pasos.push({
          texto: frase(paso),
          icono: iconoDe(paso.maneuver && paso.maneuver.type, paso.maneuver && paso.maneuver.modifier),
          metros: Math.round(paso.distance || 0),
          punto: loc ? [loc[1], loc[0]] : null
        });
      });
    });
    /* OSRM cierra cada tramo con un paso de 0 m; sobra salvo el final. */
    return pasos.filter(function (p, i) { return p.metros > 0 || i === pasos.length - 1; });
  }

  var CLAVE_CACHE = "guia-rutas-v2";
  var memoria = leerCache();
  var ultima = 0;   // para no pasarnos de 1 petición por segundo

  function leerCache() {
    try { return JSON.parse(localStorage.getItem(CLAVE_CACHE)) || {}; }
    catch (e) { return {}; }
  }
  function guardarCache() {
    try { localStorage.setItem(CLAVE_CACHE, JSON.stringify(memoria)); } catch (e) {}
  }

  /* Reserva: línea recta. Se dibuja punteada y se avisa de que no
     es una ruta real, que mentir sobre la distancia sería peor. */
  function lineaRecta(o, d) {
    var metros = distancia(o, d);
    return { coords: [o, d], metros: metros, segundos: G.minutosAndando(metros) * 60, pasos: [], aproximada: true };
  }

  function distancia(a, b) {
    var R2 = 6371000, r = Math.PI / 180;
    var dLat = (b[0] - a[0]) * r, dLon = (b[1] - a[1]) * r;
    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return Math.round(R2 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)));
  }
  R.distanciaEntre = distancia;

  /* calcular(origen, destino, cb) · cb(ruta) siempre se llama:
     con la ruta real, con la de caché o con la línea recta. */
  R.calcular = function (origen, destino, cb) {
    var clave = origen.map(red).join(",") + "|" + destino.map(red).join(",");
    if (memoria[clave]) return cb(memoria[clave]);

    var espera = Math.max(0, 1100 - (Date.now() - ultima));
    setTimeout(function () {
      ultima = Date.now();
      pedir(PROVEEDOR.url(origen, destino), function (json) {
        var ruta = json && PROVEEDOR.leer(json);
        if (!ruta) ruta = lineaRecta(origen, destino);
        if (!ruta.aproximada) { memoria[clave] = ruta; guardarCache(); }
        cb(ruta);
      });
    }, espera);
  };

  function red(n) { return Number(n).toFixed(5); }

  function pedir(url, cb) {
    if (!window.fetch) return cb(null);
    var corta = setTimeout(function () { cb(null); cb = function () {}; }, 9000);
    fetch(url, { mode: "cors" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { clearTimeout(corta); cb(j); })
      .catch(function () { clearTimeout(corta); cb(null); });
  }

  /* Expuesto solo para poder probarlo desde fuera del navegador. */
  R._leerRespuesta = function (json) { return PROVEEDOR.leer(json); };

  R.enMinutos = function (ruta) {
    return Math.max(1, Math.round(ruta.segundos / 60));
  };

  R.resumen = function (ruta) {
    return R.enMinutos(ruta) + " min andando · " + G.metros(ruta.metros) +
           (ruta.aproximada ? " (en línea recta)" : "");
  };
})(window.GUIA);

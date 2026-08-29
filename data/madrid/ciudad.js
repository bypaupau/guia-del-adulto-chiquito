/* ══════════════════════════════════════════════════════════════
   MADRID, cómo se ve y desde dónde se calculan las rutas
   ──────────────────────────────────────────────────────────────
   Ciudad recién abierta: de momento solo tiene los sitios que ya
   se habían verificado para el consulado y un par de referencias
   de transporte. Se amplía creando más archivos en data/madrid/
   y apuntándolos en la lista "datos" de data/ciudades.js.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarCiudad({
  id: "madrid",
  nombre: "Madrid",

  mapa: {
    estilo: "osm",
    reserva: "esri-calles",
    clave: ""
  },

  /* Encuadre inicial: la ciudad entera, porque todavía no hay un
     punto de partida (ni piso ni facultad) desde el que mirarla. */
  centro: [40.4250, -3.6800],
  zoom: 12,

  sufijoBusqueda: "Madrid",

  /* Sin orígenes: la app se da cuenta sola y esconde el "desde…",
     las estimaciones a pie y el cálculo de rutas. En cuanto haya
     una dirección de referencia, se añade aquí un bloque igual al
     de Oviedo y todo lo demás vuelve a funcionar. */
  origenes: []
});

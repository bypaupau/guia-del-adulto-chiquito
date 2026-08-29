/* ══════════════════════════════════════════════════════════════
   BARCELONA, cómo se ve y desde dónde se calculan las rutas
   ──────────────────────────────────────────────────────────────
   Ciudad recién abierta. Se amplía creando más archivos en
   data/barcelona/ y apuntándolos en data/ciudades.js.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarCiudad({
  id: "barcelona",
  nombre: "Barcelona",

  mapa: {
    estilo: "osm",
    reserva: "esri-calles",
    clave: ""
  },

  centro: [41.3870, 2.1600],
  zoom: 13,

  sufijoBusqueda: "Barcelona",

  origenes: []
});

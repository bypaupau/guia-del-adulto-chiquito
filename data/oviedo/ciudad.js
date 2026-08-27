/* ══════════════════════════════════════════════════════════════
   OVIEDO, cómo se ve y desde dónde se calculan las rutas
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarCiudad({
  id: "oviedo",
  nombre: "Oviedo",

  /* Qué teselas se pintan. Los estilos están en data/mapas.js.
     "reserva" es a lo que se cambia solo si el primero no responde.
     "clave" solo hace falta si el estilo elegido la pide. */
  mapa: {
    estilo: "osm",
    reserva: "esri-calles",
    clave: ""
  },

  /* Encuadre inicial: se abre sobre la Facultad de Informática, que
     es desde donde va a salir Daniel, en vez de enseñar la ciudad
     entera con los pines desperdigados. Sube el zoom para acercarte
     más (15 se ve el barrio, 17 se ve la calle). */
  centro: [43.356500, -5.851500],
  zoom: 15,

  /* Se añade al buscar en Google Maps un sitio que no tiene
     coordenadas propias (cadenas con muchos locales). */
  sufijoBusqueda: "Oviedo",

  /* Puntos desde los que se dibujan las rutas.
     El que lleva porDefecto:true es el que se usa al abrir.
     Para añadir el piso de Daniel cuando lo tengamos, basta con
     otro bloque aquí; la app coge la lista tal cual. */
  origenes: [
    {
      id: "informatica",
      nombre: "Facultad de Informática",
      corto: "Informática",
      coords: [43.354839, -5.851292],
      nota: "Campus de Los Catalanes, Calle Valdés Salas",
      porDefecto: true
    }
  ]
});

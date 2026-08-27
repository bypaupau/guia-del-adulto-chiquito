/* ══════════════════════════════════════════════════════════════
   ESTILOS DE MAPA · qué teselas se pintan debajo de los pines
   ──────────────────────────────────────────────────────────────
   Cada ciudad elige uno en su ciudad.js:
       mapa: { estilo: "osm", reserva: "esri-gris" }

   Campos:
     base        la URL de las teselas. {z}/{x}/{y} los rellena
                 Leaflet; {r} se convierte en "@2x" en pantallas
                 retina (los Mac) si el servidor las sirve.
     etiquetas   capa opcional que SOLO trae los nombres de calle.
                 Si existe, la base se atenúa y esta no: así el
                 mapa queda suave pero se sigue leyendo.
     atenuar     filtro CSS que se aplica a la base.
     opacidad    cuánto papel se deja ver por debajo (0 a 1).
     clave       algunos servicios la piden. Si el estilo tiene
                 parametroClave y aquí no hay nada, se avisa por
                 consola. OJO: en una página estática la clave
                 queda a la vista de cualquiera; ver el README.

   El de por defecto (OpenStreetMap) no necesita clave ninguna.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarEstilosMapa([

  /* El de serie. Es el mapa con más detalle de los gratuitos: se
     ven los portales, los comercios y los nombres de calle pequeños,
     que es justo lo que se echaba de menos con el de Esri. Va poco
     atenuado a propósito, para no comerse esa información.

     OJO: OpenStreetMap exige que el navegador mande la cabecera
     Referer, y abriendo el archivo con doble clic (file://) no se
     manda. Por eso "requiereReferer": en ese caso la aplicación se
     pasa sola al mapa de reserva. Publicado o servido por http va
     perfecto. */
  {
    id: "osm",
    nombre: "OpenStreetMap",
    base: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    requiereReferer: true,
    maxZoom: 19,
    atenuar: "saturate(.78) contrast(.98) brightness(1.02)",
    opacidad: .95,
    atribucion: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },

  /* El de reserva. Más cálido y beige, pega muy bien con el papel
     del folleto y funciona igual con doble clic que publicado (ni
     clave ni Referer), pero tiene bastante menos detalle: a zoom
     alto se quedan calles sin nombre. */
  {
    id: "esri-calles",
    nombre: "Esri, Calles",
    base: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    maxZoom: 19,
    atenuar: "saturate(.7) contrast(.94) brightness(1.05)",
    opacidad: .9,
    atribucion: "Teselas &copy; Esri &mdash; datos &copy; OpenStreetMap y colaboradores"
  },

  /* La reserva de siempre: gris, sobria y con las etiquetas aparte. */
  {
    id: "esri-gris",
    nombre: "Esri, Gris claro",
    base: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    etiquetas: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    maxZoom: 19,
    atenuar: "contrast(.96) brightness(1.03)",
    opacidad: .95,
    atribucion: "Teselas &copy; Esri &mdash; datos &copy; OpenStreetMap y colaboradores"
  },

  /* El más bonito de todos, pero desde 2025 pide clave: sin ella
     las teselas salen con la marca de agua "API KEY REQUIRED".
     La clave gratuita se pide en carto.com/basemaps/apikey y se
     escribe en el ciudad.js. Lee antes la nota del README sobre
     claves en páginas estáticas. */
  {
    id: "carto-voyager",
    nombre: "CARTO Voyager (necesita clave)",
    base: "https://basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
    etiquetas: "https://basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
    parametroClave: "key",
    maxZoom: 20,
    atenuar: "saturate(.66) contrast(.92) brightness(1.05)",
    opacidad: .9,
    atribucion: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &middot; &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }

]);

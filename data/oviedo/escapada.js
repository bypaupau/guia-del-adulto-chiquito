/* ══════════════════════════════════════════════════════════════
   SITIOS ESCAPADA de Oviedo
   ──────────────────────────────────────────────────────────────
   Para añadir un sitio: copia un bloque entero (desde { hasta },),
   pégalo y cambia los datos. No borres las comas.

   Campos:
     id          obligatorio, minúsculas y guiones, único en la ciudad.
                 Sale en el enlace (…#/oviedo/waterproof) y da nombre
                 a la carpeta de fotos.
     nombre      obligatorio.
     subtitulo   una línea corta que se ve en la lista.
     categoria   obligatorio, debe existir en data/categorias.js
     coords      [lat, lon]. si lo omites, el sitio sale en la lista
                 pero sin chincheta (cadenas, sitios fuera de Oviedo…).
                 Para sacarlas: añade ?editar al final del enlace de la
                 página y haz clic en el mapa; te copia las coordenadas.
     direccion, telefono, horario, web, nota   opcionales.
     maps        enlace propio a Google Maps (solo si no hay coords).
     fotos       ["foto-1.jpg"] → assets/img/oviedo/<id>/foto-1.jpg
     verificado  "AAAA-MM". cuándo comprobamos los datos por última vez.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarSitios("oviedo", [
  {
    id: "gijon",
    coords: [43.54494, -5.66275],
    nombre: "Gijón",
    subtitulo: "A 25-30 minutos, la playa más cercana",
    categoria: "escapada",
    direccion: "Bus ALSA 2-6 € o tren de Cercanías",
    nota: "Tu escapada de domingo por defecto. San Lorenzo es la playa, Cimavilla el barrio bonito.",
    maps: "https://www.google.com/maps/search/?api=1&query=Gij%C3%B3n",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "cudillero",
    coords: [43.56298, -6.14520],
    nombre: "Cudillero",
    subtitulo: "Pueblo pesquero de colores",
    categoria: "escapada",
    direccion: "En bus ALSA o tren desde Oviedo",
    nota: "Casitas de colores en anfiteatro sobre el mar. Es el pueblo más fotografiado de Asturias y se entiende por qué.",
    maps: "https://www.google.com/maps/search/?api=1&query=Cudillero+Asturias",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "lagos-de-covadonga",
    coords: [43.26992, -4.98615],
    nombre: "Lagos de Covadonga",
    subtitulo: "Picos de Europa",
    categoria: "escapada",
    direccion: "Primero a Cangas de Onís, luego bus lanzadera",
    nota: "En temporada alta no se puede subir en coche: hay bus lanzadera, unos 9 € ida y vuelta, y se compra por internet ANTES de ir en buslagoscovadonga.es. Vale toda la vuelta, te lo prometo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Lagos+de+Covadonga",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "aeropuerto-de-asturias",
    coords: [43.56162, -6.03091],
    nombre: "Aeropuerto de Asturias",
    subtitulo: "OVD, a unos 40 minutos",
    categoria: "escapada",
    direccion: "Bus ALSA desde la estación de autobuses",
    nota: "Salidas casi cada hora. De aquí salen los vuelos baratos al resto de Europa.",
    maps: "https://www.google.com/maps/search/?api=1&query=Aeropuerto+de+Asturias",
    fotos: [],
    verificado: "2026-08"
  }

]);

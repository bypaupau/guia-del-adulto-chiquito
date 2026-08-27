/* ══════════════════════════════════════════════════════════════
   SITIOS CAFE de Oviedo
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
    id: "mercado-el-fontan",
    nombre: "Mercado El Fontán",
    subtitulo: "Fruta, verdura, carne y pescado fresco",
    categoria: "cafe",
    coords: [43.36019, -5.84564],
    direccion: "Plaza 19 de Octubre s/n, 33009",
    telefono: "985 20 43 94",
    horario: "Lunes a viernes de 8:00 a 20:00, sábados de 8:00 a 15:30",
    nota: "Los domingos solo abre la panadería. Aquí compras fresco de verdad, y de paso es de los rincones más bonitos del casco antiguo.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "radical",
    nombre: "Radical",
    subtitulo: "Café de especialidad y té matcha",
    categoria: "cafe",
    coords: [43.365484, -5.852768],
    direccion: "C/ Fray Ceferino 5, 33001",
    horario: "Martes a sábado de 10:00 a 19:30",
    nota: "Para cuando necesites estudiar fuera de casa con un café decente. Está cerca de la estación.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "la-gente-cafe",
    nombre: "La Gente Café",
    subtitulo: "Cafetería",
    categoria: "cafe",
    coords: [43.364006, -5.841934],
    direccion: "C/ Martínez Vigil 6, 33010",
    telefono: "643 82 34 57",
    horario: "Lunes a viernes de 8:30 a 16:00, fines de semana de 9:00 a 17:00",
    nota: "Otro sitio para sentarte un rato cuando el piso te quede chico. A dos calles de Gascona.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "pan-y-cebolla",
    nombre: "Pan y Cebolla",
    subtitulo: "Productos asturianos",
    categoria: "cafe",
    coords: [43.373933, -5.830959],
    direccion: "C/ Ámsterdam 4, 33011",
    telefono: "624 05 06 86",
    horario: "Lunes a viernes de 9:30 a 15:30 y de 17:30 a 20:00, fines de semana de 9:30 a 14:30",
    nota: "Para cuando quieras llevarle algo típico a alguien, o darte un gusto tú.",
    fotos: [],
    verificado: "2026-08"
  }

]);

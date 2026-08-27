/* ══════════════════════════════════════════════════════════════
   SITIOS ARREGLOS de Oviedo
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
    id: "intecat-apple",
    nombre: "INTECAT iService",
    subtitulo: "El servicio técnico autorizado de Apple",
    categoria: "arreglos",
    coords: [43.363506, -5.856241],
    direccion: "Calle Cervantes 20, 33002",
    telefono: "984 18 15 86",
    horario: "Lunes a viernes de 10:00 a 14:00 y de 16:00 a 19:00, fines de semana cerrado",
    nota: "En Asturias no hay Apple Store oficial y esto es lo más cerca que vas a estar. Si tu Mac o tu iPhone están en garantía, ven aquí y no a otro sitio, porque una reparación fuera del canal autorizado te la puede anular. Muy importante, que es un error fácil de cometer: la TIENDA de INTECAT está en Nueve de Mayo 2, pero el TALLER es este, en Cervantes 20. Para reparar hay que venir aquí.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "ovirepair",
    nombre: "OviRepair",
    subtitulo: "Móviles y ordenadores",
    categoria: "arreglos",
    coords: [43.367205, -5.845329],
    direccion: "Avenida de Pumarín 10, 33001",
    telefono: "984 25 02 16",
    horario: "Lunes a viernes de 10:00 a 20:00, sábados de 11:00 a 17:00",
    nota: "Pantallas, baterías, recuperación de datos. También venden móviles reacondicionados. Tienen WhatsApp (643 286 781): pide presupuesto por ahí antes de dejar el aparato.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "mr-computer",
    nombre: "Mr.Computer",
    subtitulo: "Ordenadores y portátiles",
    categoria: "arreglos",
    coords: [43.36561, -5.850429],
    direccion: "Calle Nueve de Mayo 9, 33001",
    telefono: "984 20 86 69",
    horario: "Lunes a viernes de 9:30 a 14:00 y de 16:30 a 20:00",
    nota: "Reparan PC, tablet y móvil, y venden ordenadores reacondicionados con dos años de garantía. Si el portátil te muere y sale más a cuenta cambiarlo que arreglarlo, este es el sitio. Tienen otra tienda en Fernando Alonso 26 (985 21 82 66) y WhatsApp (611 10 35 10).",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "ifeno",
    nombre: "IFENO",
    subtitulo: "Especialistas en iPhone, también portátiles",
    categoria: "arreglos",
    coords: [43.358938, -5.867678],
    direccion: "Calle Fuertes Acevedo 56, 33006",
    telefono: "985 07 20 53",
    horario: "Lunes a viernes de 10:00 a 14:00 y de 16:00 a 20:00",
    nota: "Móviles, tablets, ordenadores y televisores. Trabajan con recambios compatibles, así que suele salir bastante más barato que el canal oficial.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "cash-converters",
    nombre: "Cash Converters",
    subtitulo: "Segunda mano: comprar barato o vender",
    categoria: "arreglos",
    coords: [43.360755, -5.858472],
    direccion: "Avenida de Galicia 25, 33005",
    telefono: "985 23 07 00",
    nota: "Para pillar un cargador, un móvil o un portátil usado sin meterte en Wallapop, o para vender algo antes de volverte. Abre de lunes a sábado, mañana y tarde, con cierre al mediodía. A diez minutos andando del centro.",
    fotos: [],
    verificado: "2026-08"
  }

]);

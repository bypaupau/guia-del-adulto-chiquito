/* ══════════════════════════════════════════════════════════════
   SITIOS COMIDA de Oviedo
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
    id: "calle-gascona",
    nombre: "Calle Gascona",
    subtitulo: "El Bulevar de la Sidra",
    categoria: "comida",
    coords: [43.364543, -5.844962],
    direccion: "Calle Gascona, 33001",
    nota: "Una calle entera de sidrerías, una al lado de la otra. Si un día no sabes a dónde ir, vienes aquí y eliges la que más te llame. Ninguna te va a fallar.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "tierra-astur",
    nombre: "Tierra Astur",
    subtitulo: "Cachopo, fabada, chuletón",
    categoria: "comida",
    coords: [43.363934, -5.84415],
    direccion: "Calle Gascona 1, 33001",
    telefono: "985 20 25 02",
    nota: "El clásico al que todo el mundo lleva a las visitas. Raciones enormes: si van dos, con un cachopo les sobra.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "el-ferroviario",
    nombre: "El Ferroviario",
    subtitulo: "Sidrería asturiana",
    categoria: "comida",
    coords: [43.364051, -5.844449],
    direccion: "Calle Gascona 5, 33001",
    telefono: "985 22 52 15",
    horario: "Martes a jueves, domingos y festivos de 12:00 a 24:00; viernes y vísperas hasta la 1:00; lunes cerrado",
    nota: "Fabada, cachopo y pixín. También raciones grandes. Es la sidrería más antigua de Gascona: lleva abierta desde 1951.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "la-panoya",
    nombre: "La Panoya",
    subtitulo: "Menú del día, unos 14,50 €",
    categoria: "comida",
    coords: [43.378836, -5.830409],
    direccion: "Calle Corredoria Alta 26, 33011",
    telefono: "984 19 78 94",
    horario: "Lunes a jueves de 11:00 a 23:00, viernes hasta el cierre, sábados y domingos cerrado",
    nota: "Abierta desde 1972, con más de veinte opciones de primero y segundo. Solo de lunes a viernes, los fines de semana cierra. Suele llenarse, así que reserva. Está en La Corredoria, al norte — te queda de camino al HUCA.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "la-casona-de-la-montana",
    nombre: "La Casona de la Montaña",
    subtitulo: "Menú del día, unos 14,50 €",
    categoria: "comida",
    coords: [43.350203, -5.853955],
    direccion: "Av. de Pedro Masaveu s/n, Parque de Invierno, 33008",
    telefono: "684 62 75 19",
    horario: "Martes a domingo de 12:30 a 22:00, lunes cerrado",
    nota: "El menú del día es de martes a viernes. Tiene terraza y los domingos hay música en vivo. Está dentro del Parque de Invierno, así que la caminata hasta allá ya vale la pena sola.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "la-corte-de-pelayo",
    nombre: "La Corte de Pelayo",
    subtitulo: "Su cachopo es famoso",
    categoria: "comida",
    coords: [43.361771, -5.847691],
    direccion: "Calle San Francisco 21, 33003",
    telefono: "985 21 31 45",
    horario: "Lunes a sábado de 13:00 a 17:00 y de 20:00 a 24:00; domingos solo de 13:00 a 17:00",
    nota: "Justo al lado del Campo San Francisco. Un poco más caro que el resto, pero vale el capricho.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "sidreria-la-villa",
    nombre: "Sidrería La Villa",
    subtitulo: "Menú del día, desde unos 13 €",
    categoria: "comida",
    coords: [43.384641, -5.823087],
    direccion: "Calle Los Campos 1, 33011",
    telefono: "985 43 58 49",
    horario: "Martes a jueves de 11:30 a 1:00, viernes y sábados hasta las 2:00, domingos hasta las 24:00, lunes cerrado",
    nota: "El menú más económico de la lista, de martes a viernes. Ojo con la distancia: está bastante al norte, no es un sitio al que caer caminando desde el centro.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "goya-13",
    nombre: "Goya 13",
    subtitulo: "Gastrobar, unos 16 €",
    categoria: "comida",
    coords: [43.359386, -5.843143],
    direccion: "C/ Marqués de Gastañaga 13, 33009",
    telefono: "984 39 67 73",
    nota: "Escoges dos de los tres platos que ofrecen. Incluye bebida, pan y postre o café.",
    fotos: [],
    verificado: "2026-08"
  }

]);

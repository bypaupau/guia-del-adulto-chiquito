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
,
  {
    id: "camilo-de-blas",
    nombre: "Camilo de Blas",
    subtitulo: "Confitería de 1914, la de los carbayones",
    categoria: "cafe",
    direccion: "C/ Jovellanos 7, 33003",
    telefono: "985 21 18 51",
    web: "https://camilodeblas.es/",
    nota: "El carbayón es EL dulce de Oviedo: hojaldre con crema de almendra. Si algún día tienes que llevar algo a casa de alguien, o quieres mandar un regalo, se compra aquí. Tienen otra tienda en C/ Santa Susana 8 (985 27 45 24). El horario no lo pudimos confirmar.",
    maps: "https://www.google.com/maps/search/?api=1&query=Camilo+de+Blas+Calle+Jovellanos+7+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "rialto",
    nombre: "Confitería Rialto",
    subtitulo: "Las moscovitas de toda la vida",
    categoria: "cafe",
    direccion: "C/ San Francisco 12",
    telefono: "985 21 21 64",
    web: "https://www.moscovitas.com/",
    nota: "El otro dulce de Oviedo: obleas finísimas de almendra y chocolate. Vienen en lata y aguantan un viaje largo, así que son el regalo fácil. Tienen otra tienda en C/ Bermúdez de Castro 2 (985 29 40 27). Aviso: algún directorio los sitúa en Velázquez 2, pero nosotros seguimos su web oficial.",
    maps: "https://www.google.com/maps/search/?api=1&query=Confiteria+Rialto+Calle+San+Francisco+12+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "ovetus",
    nombre: "Confitería Ovetus",
    subtitulo: "Bombones, tartas y empanadas",
    categoria: "cafe",
    direccion: "Plaza San Miguel 1",
    telefono: "985 27 25 77",
    web: "https://www.ovetusconfiteria.com/",
    nota: "Más nueva que las dos anteriores y con tartas por encargo, por si cae un cumpleaños. También están en C/ Uría 40 y C/ Valentín Masip 13. El horario no lo pudimos confirmar.",
    maps: "https://www.google.com/maps/search/?api=1&query=Confiteria+Ovetus+Plaza+San+Miguel+1+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "el-calderu",
    nombre: "Panadería El Calderu",
    subtitulo: "Pan del día, temprano",
    categoria: "cafe",
    direccion: "C/ Fernando Alonso 26 (El Campillín)",
    telefono: "985 22 31 08",
    horario: "Lunes a viernes de 7:00 a 15:00, sábados y domingos de 8:00 a 14:30",
    web: "https://panaderiaelcalderu.com/",
    nota: "Abre a las siete de la mañana, que es justo lo que necesitas si tienes clase temprano. Tienen más tiendas: La Corredoria (Arroyo Vaqueros 9, hasta las 21:00), Ciudad Naranco (Ricardo Montes 25), La Florida (Pl. Gabino Díaz Merchán) y Arquitecto Tioda 2.",
    maps: "https://www.google.com/maps/search/?api=1&query=Panaderia+El+Calderu+Calle+Fernando+Alonso+26+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "26-grados",
    nombre: "26 Grados",
    subtitulo: "Panadería y cafetería, abre todos los días",
    categoria: "cafe",
    direccion: "C/ José Ramón Tolivar Faes 5-7 (Montecerrao)",
    telefono: "985 75 74 39",
    horario: "Todos los días de 8:30 a 23:00",
    web: "https://www.26grados.com/",
    nota: "Guárdate este: es de los pocos sitios de pan que abre domingos y hasta las once de la noche. Sirven también desayunos, bocadillos y platos combinados. Otro local en la Corredoria (C/ Maestro Don Marciano 1).",
    maps: "https://www.google.com/maps/search/?api=1&query=26+Grados+Calle+Jose+Ramon+Tolivar+Faes+5+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "la-masera-de-vetusta",
    nombre: "La Masera de Vetusta",
    subtitulo: "Panadería y confitería artesana",
    categoria: "cafe",
    direccion: "Plaza de la Constitución 11, 33009",
    telefono: "985 21 37 12",
    web: "https://www.lamaseradevetusta.es/",
    nota: "Está en plena plaza del Ayuntamiento, al lado del Fontán, así que cae de camino si bajas al mercado. El horario no lo pudimos confirmar.",
    maps: "https://www.google.com/maps/search/?api=1&query=La+Masera+de+Vetusta+Plaza+de+la+Constitucion+11+Oviedo",
    fotos: [],
    verificado: "2026-08"
  }

]);

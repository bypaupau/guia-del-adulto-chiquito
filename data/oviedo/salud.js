/* ══════════════════════════════════════════════════════════════
   SITIOS SALUD de Oviedo
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
    id: "huca",
    nombre: "HUCA",
    subtitulo: "Hospital Universitario Central de Asturias",
    categoria: "salud",
    coords: [43.375126, -5.832513],
    direccion: "Avenida de Roma s/n, 33011, La Cadellada",
    telefono: "985 10 80 00",
    nota: "El hospital público grande de la ciudad, con urgencias siempre abiertas. Si es una emergencia de verdad vienes aquí y no lo piensas dos veces: te atienden tengas el seguro que tengas y vengas del país que vengas. Ojo, está al norte, fuera del centro: mira bien la ruta antes de necesitarla.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "clinica-asturias",
    nombre: "Clínica Asturias",
    subtitulo: "Privado, urgencias 24 h",
    categoria: "salud",
    coords: [43.36785, -5.85618],
    direccion: "Calle Naranjo de Bulnes 4, 33012",
    telefono: "985 28 60 00",
    nota: "El único hospital privado que está dentro de la ciudad, o sea el más fácil de alcanzar. Comprueba en tu cuadro médico si tu seguro trabaja con este o con el otro, y tacha el que no.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "centro-medico-de-asturias",
    nombre: "Centro Médico de Asturias",
    subtitulo: "Privado, urgencias 24 h",
    categoria: "salud",
    coords: [43.34193, -5.87433],
    direccion: "Av. José María Richard Grandío s/n, 33193, Latores",
    telefono: "985 25 03 00",
    nota: "El hospital privado de referencia de Asturias. Más grande y mejor equipado, pero está al suroeste, a las afueras: no es sitio para ir andando.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "instituto-fernandez-vega",
    nombre: "Instituto Fernández-Vega",
    subtitulo: "Todo lo de los ojos",
    categoria: "salud",
    coords: [43.370643, -5.871411],
    direccion: "Av. Dres. Fernández-Vega 34, 33012",
    telefono: "985 24 01 41",
    nota: "Una de las clínicas oftalmológicas más reconocidas de España, y te queda en la misma ciudad. Si usas lentes de contacto, apunta este.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "c-s-el-cristo",
    nombre: "C.S. El Cristo",
    subtitulo: "Centro de salud público",
    categoria: "salud",
    coords: [43.356488, -5.862699],
    direccion: "C/ Álvaro Flórez Estrada 21, 33006",
    nota: "Para lo del día a día si consigues tarjeta sanitaria. Ojo: el centro de salud que te toca depende de tu dirección — búscalo en la app AsturSalud cuando ya tengas piso.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "c-s-paulino-prieto",
    nombre: "C.S. Paulino Prieto",
    subtitulo: "Centro de salud público",
    categoria: "salud",
    coords: [43.35917, -5.84693],
    direccion: "C/ Martínez Marina 10, 33009",
    nota: "Uno de los centros de salud más céntricos.",
    fotos: [],
    verificado: "2026-08"
  }

]);

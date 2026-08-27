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
  },

  {
    id: "farmacia-grau",
    nombre: "Farmacia Grau",
    subtitulo: "La más cercana a la facultad",
    categoria: "salud",
    coords: [43.356494, -5.850209],
    direccion: "Calle González Besada 16, 33007",
    telefono: "985 23 78 64",
    horario: "Lunes a viernes de 9:30 a 13:30 y de 16:30 a 20:00, sábados de 10:30 a 13:00, domingos cerrado",
    nota: "Tu farmacia de diario: la tienes a un paso de la facultad. Importante saberlo desde el principio: en Oviedo NO hay ninguna farmacia abierta 24 horas. Por la noche funciona el turno de guardia, que va rotando; se consulta en farmasturias.org o mirando el cartel del escaparate de cualquier farmacia, que siempre dice cuál está de guardia hoy.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "farmacia-adoratrices",
    nombre: "Farmacia Adoratrices",
    subtitulo: "La otra que te queda cerca",
    categoria: "salud",
    coords: [43.35646, -5.848005],
    direccion: "Calle Sacramento 17, 33008",
    telefono: "985 20 41 99",
    horario: "Lunes a viernes de 9:30 a 13:30 y de 16:30 a 20:00, sábados de 10:30 a 13:00, domingos cerrado",
    nota: "A dos calles de la anterior, por si una está cerrada. Hacen reparto a domicilio el mismo día, que agradecerás el día que estés en la cama sin poder moverte.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "farmacia-cavia",
    nombre: "Farmacia Cavia",
    subtitulo: "La que abre hasta medianoche, todos los días",
    categoria: "salud",
    coords: [43.364874, -5.850367],
    direccion: "Calle Doctor Casal 8, 33001",
    telefono: "985 21 85 99",
    horario: "Lunes a viernes de 7:30 a 24:00, sábados, domingos y festivos de 8:30 a 24:00",
    nota: "Apúntate esta, que es la que salva las noches. Abre hasta las doce TODOS los días del año, festivos incluidos, y está en pleno centro. No es 24 horas (eso no existe aquí), pero es lo más parecido. Tienen WhatsApp: 684 649 634.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "hospital-monte-naranco",
    nombre: "Hospital Monte Naranco",
    subtitulo: "Público, pero SIN urgencias",
    categoria: "salud",
    coords: [43.370323, -5.872913],
    direccion: "Avenida Doctores Fernández Vega 107, 33012",
    telefono: "985 10 69 00",
    nota: "Ojo con este, que en el folleto de papel te lo puse en la lista de hospitales y hay un matiz importante: es público y está bien, pero se dedica sobre todo a geriatría, paliativos y traumatología, y NO tiene servicio de urgencias propio. Si es una urgencia, al HUCA. Aquí se viene con cita de consulta, derivado desde tu centro de salud.",
    fotos: [],
    verificado: "2026-08"
  }

]);

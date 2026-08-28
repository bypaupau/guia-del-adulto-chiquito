/* ══════════════════════════════════════════════════════════════
   SITIOS DE COMIDA LATINA de Oviedo
   ──────────────────────────────────────────────────────────────
   La página del folleto que dice "y si extraño mi comida
   ecuatoriana". Aquí van los sitios donde comer o comprar lo de
   allá: ecuatoriano, colombiano, venezolano y las tiendas donde
   encontrar el producto de casa. El id de la categoría sigue
   siendo "sabor" para no romper los enlaces ya compartidos; lo
   que se ve por pantalla sale de data/categorias.js.
   Los campos están explicados en salud.js.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarSitios("oviedo", [

  {
    id: "mitad-del-mundo",
    nombre: "Mitad del Mundo",
    subtitulo: "Ecuatoriano de verdad, en pleno centro",
    categoria: "sabor",
    coords: [43.364068, -5.848534],
    direccion: "Calle Posada Herrera 6, bajo 3, 33009",
    telefono: "643 83 57 37",
    horario: "Martes y miércoles de 9:30 a 20:00, de jueves a domingo hasta las 23:00, lunes cerrado",
    web: "https://barrestaurantemitaddelmundo.com/",
    nota: "Este es EL sitio. Bolón mixto, chicharrones con patacones, maduro con queso, encebollado, ceviche y hasta desayunos y menú del día. No cierran a mediodía. Está al lado del Teatro Campoamor, a un paseo desde el centro. Hacen también recogida y reparto, y sacan pack sorpresa en Too Good To Go por unos 7 €. El día que te pueda la morriña, vienes aquí.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "mi-tierra-latina",
    nombre: "Mi Tierra Latina",
    subtitulo: "Frutería y despensa latina",
    categoria: "sabor",
    coords: [43.370331, -5.841212],
    direccion: "Avenida Aureliano San Román 2, 33011, La Corredoria",
    horario: "Todos los días de 9:00 a 21:30",
    nota: "Aquí es donde encuentras lo que no hay en el Alimerka: plátano verde, harina de maíz, achiote, condimentos y conservas de allá. Tienen sección de harinas y granos. Está en La Corredoria, en la misma calle que la lavandería Waterproof, así que te cuadra hacer las dos cosas del tirón.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "sabor-latino",
    nombre: "Sabor Latino",
    subtitulo: "Colombiano, lo más parecido de por aquí",
    categoria: "sabor",
    coords: [43.367537, -5.839645],
    direccion: "Calle Isla de Cuba 7, 33011",
    telefono: "984 18 05 32",
    horario: "Todos los días de 9:00 a 21:00",
    nota: "No es ecuatoriano, pero es lo que más se le acerca en sabores: empanadas, papas rellenas, chicharrones, jugos y repostería. Abre todos los días y tiene terraza. Para llevar también. AVISO: Google lo sitúa ahora en C/ Jesús Sáenz de Miera (33010) con el teléfono 984 49 16 50; puede que se hayan mudado o que tengan dos locales. Comprueba antes de ir.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "guayaba",
    nombre: "Guayaba",
    subtitulo: "Venezolano, para arepas y jugos",
    categoria: "sabor",
    coords: [43.360887, -5.845319],
    direccion: "Calle El Peso 5, 33009",
    telefono: "603 42 93 88",
    nota: "Arepas, cachapas y jugos tropicales mezclados con cocina asturiana. Está en el casco antiguo, a dos pasos del Fontán, así que te queda de camino cuando bajes al mercado. Tienen opciones sin gluten.",
    fotos: [],
    verificado: "2026-08"
  }
,
  {
    id: "emperatriz",
    nombre: "Emperatriz Sidrería",
    subtitulo: "Sidrería asturiana con cocina ecuatoriana",
    categoria: "sabor",
    coords: [43.361633, -5.862952],
    direccion: "Calle Silla del Rey 19, bajo, 33013",
    telefono: "603 85 17 57",
    horario: "De miércoles a lunes de 11:00 a 16:00 y de 19:00 a 24:00, martes cerrado",
    nota: "El descubrimiento: por fuera es una sidrería de barrio y por dentro se come ecuatoriano. Las reseñas dicen que el encebollado es de lo mejor que se come por aquí, y va por 4,7 en Google. Está en El Cristo, cerca del HUCA viejo. Cierra los martes y hace jornada partida, así que si vas a media tarde te lo encuentras cerrado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Emperatriz+Sidreria+Calle+Silla+del+Rey+19+Oviedo",
    fotos: [],
    verificado: "2026-08"
  }

]);

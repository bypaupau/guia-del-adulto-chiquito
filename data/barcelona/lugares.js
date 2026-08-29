/* ══════════════════════════════════════════════════════════════
   SITIOS de Barcelona
   ──────────────────────────────────────────────────────────────
   Arranque de la ciudad, con lo mínimo que necesita alguien que
   baja unos días: el consulado, la estación y el hospital.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarSitios("barcelona", [
  {
    id: "consulado-de-ecuador",
    nombre: "Consulado General de Ecuador",
    subtitulo: "Ojo: este NO es el que le toca a Asturias",
    categoria: "tramites",
    direccion: "Carrer de Nàpols 187, 5º, 08013 Barcelona",
    telefono: "93 246 24 90",
    horario: "De lunes a viernes de 8:30 a 14:30, con cita previa",
    web: "https://consuladogeb.reservio.ec/",
    nota: "Apuntado por si algún día vives o pasas por Cataluña, pero si sigues empadronado en Asturias tu consulado es el de Madrid. La cita se pide en consuladogeb.reservio.ec y el teléfono de emergencias es el +34 691 680 952. Datos de la lista consular oficial del Ministerio de Asuntos Exteriores de España, actualizada el 31 de julio de 2026. No lleva chincheta porque no encontré su coordenada con una fuente concreta.",
    maps: "https://www.google.com/maps/search/?api=1&query=Consulado+General+del+Ecuador+Carrer+de+N%C3%A0pols+187+Barcelona",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "barcelona-sants",
    nombre: "Estación de Barcelona-Sants",
    subtitulo: "La estación grande de la ciudad",
    categoria: "transporte",
    coords: [41.379007, 2.140004],
    direccion: "Plaça dels Països Catalans 1-7, 08014 Barcelona",
    web: "https://www.adif.es/",
    nota: "Aquí llega prácticamente todo: alta velocidad, media distancia, cercanías y los autobuses de largo recorrido, y encima tiene metro debajo. Si vienes desde Oviedo lo normal es hacer transbordo en Madrid.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "hospital-clinic",
    nombre: "Hospital Clínic",
    subtitulo: "Hospital público de referencia, en el Eixample",
    categoria: "salud",
    coords: [41.38949, 2.15224],
    direccion: "Barrio del Eixample, 08036 Barcelona",
    web: "https://www.clinicbarcelona.org/",
    nota: "Uno de los grandes hospitales públicos de la ciudad, con su propia parada de metro (L5, Hospital Clínic) a 200 metros. Con la tarjeta sanitaria europea o el papeleo en regla te atienden igual que en Asturias. Para una urgencia de verdad, el número en toda España es el 112.",
    fotos: [],
    verificado: "2026-08"
  }
]);

/* ══════════════════════════════════════════════════════════════
   SITIOS de Madrid
   ──────────────────────────────────────────────────────────────
   Arranque de la ciudad. Cuando crezca, esto se parte en un
   archivo por categoría (salud.js, tramites.js, transporte.js…)
   igual que en Oviedo, y se apuntan en data/ciudades.js.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarSitios("madrid", [
  {
    id: "consulado-de-ecuador",
    nombre: "Consulado General de Ecuador",
    subtitulo: "El que le corresponde a Asturias",
    categoria: "tramites",
    coords: [40.442557, -3.700816],
    direccion: "Calle Alenza 1, 28003 Madrid (metro Ríos Rosas)",
    telefono: "91 343 02 50",
    horario: "De lunes a viernes de 8:30 a 16:30, siempre con cita previa",
    web: "https://www.citapreviaecuador.es/",
    nota: "Aunque vivas en Oviedo, tu consulado es este. Los de Bilbao y Santander están más cerca pero son honorarios y no tramitan el pasaporte. Todo va con cita previa por citapreviaecuador.es. El teléfono de emergencias 24 horas es el 608 795 061. Desde Oviedo son unas 3 horas en tren o 5 en bus, así que junta todos los trámites en un mismo viaje.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "atocha",
    nombre: "Estación Puerta de Atocha–Almudena Grandes",
    subtitulo: "Donde te deja el tren desde Oviedo",
    categoria: "transporte",
    coords: [40.40456, -3.68868],
    direccion: "Distrito de Arganzuela, 28045 Madrid",
    web: "https://www.adif.es/",
    nota: "Es la estación de la alta velocidad y de casi todo lo de largo recorrido. Si bajas a Madrid a hacer papeleo, lo normal es que llegues aquí. Ojo, que Madrid tiene dos estaciones grandes: Atocha y Chamartín, y no todos los trenes usan la misma, así que mira siempre el billete antes de coger el metro.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "aeropuerto-barajas-t4",
    nombre: "Aeropuerto Adolfo Suárez Madrid-Barajas (T4)",
    subtitulo: "La terminal de los vuelos largos",
    categoria: "transporte",
    coords: [40.49143, -3.59158],
    direccion: "Terminal 4, 28042 Madrid",
    web: "https://www.aena.es/",
    nota: "La chincheta está en la T4, que es de donde suelen salir los vuelos de largo recorrido. Comprueba SIEMPRE tu terminal en el billete: entre la T1 y la T4 hay un buen rato en autobús lanzadera. Desde Oviedo hay vuelo directo, pero también se llega en tren hasta Atocha y luego en metro.",
    fotos: [],
    verificado: "2026-08"
  }
]);

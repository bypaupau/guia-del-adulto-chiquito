/* ══════════════════════════════════════════════════════════════
   SITIOS ROPA de Oviedo
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
    id: "arreglos-co",
    nombre: "Arreglos & Co",
    subtitulo: "En el centro comercial Salesas",
    categoria: "ropa",
    coords: [43.366898, -5.848863],
    direccion: "Calle General Elorza 75, local 020B, C.C. Salesas, 33002",
    telefono: "985 20 11 45",
    horario: "Lunes a sábado de 10:00 a 21:00",
    nota: "Bajos, cremalleras, entallar, y también hacen tintorería. Es la apuesta más segura de todas: es una cadena con web propia y actualizada, mientras que las costureras de barrio abren y cierran sin que ningún directorio se entere. Horario largo: de lunes a sábado de 10:00 a 21:00, sin cerrar a mediodía. Está a unos 20 minutos andando desde Informática.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "waterproof",
    nombre: "Waterproof",
    subtitulo: "Lavandería de autoservicio, la más barata",
    categoria: "ropa",
    coords: [43.369848, -5.842933],
    direccion: "Calle Aureliano San Román 6, 33011",
    telefono: "655 79 33 04",
    horario: "Todos los días de 8:00 a 23:00, último lavado a las 22:30",
    nota: "Abierta de 8:00 a 23:00 los 365 días. Lavado desde 3 € y secado desde 1,80 €, o sea que una colada entera te sale por unos 5 €. Truco: de lunes a jueves de 8:00 a 11:00 te descuentan 1 €. Tiene máquinas grandes, hasta de 20 kilos.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "happylaundry-gascona",
    nombre: "HappyLaundry Gascona",
    subtitulo: "Lavandería de autoservicio, la más céntrica",
    categoria: "ropa",
    coords: [43.36522, -5.845922],
    direccion: "Calle Gascona 30, 33001",
    telefono: "672 06 90 40",
    nota: "De 8:00 a 22:00 todos los días del año. Tiene una lavadora de 20 kilos, que es la que necesitas para el edredón o el saco de dormir: eso no entra en las máquinas de la residencia.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "happylaundry-el-cristo",
    nombre: "HappyLaundry El Cristo",
    subtitulo: "Lavandería de autoservicio, junto al campus",
    categoria: "ropa",
    coords: [43.355727, -5.861309],
    direccion: "Avenida del Cristo 32, 33006",
    telefono: "672 06 90 40",
    nota: "La misma cadena, pero pegada al campus de El Cristo. De 8:00 a 22:00 todos los días, con lavadoras de 10 y de 20 kilos.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "tintoreria-iberica",
    nombre: "Tintorería Ibérica",
    subtitulo: "Te lavan ellos, y te la llevan a casa",
    categoria: "ropa",
    coords: [43.357131, -5.848502],
    direccion: "Calle González Besada 9, 33007",
    telefono: "985 23 61 78",
    horario: "Lunes a viernes de 9:30 a 13:30 y de 16:00 a 20:00, sábados de 10:00 a 13:30 (en julio y agosto cierran los sábados)",
    nota: "Esta es la que buscas cuando no quieres lavar tú: dejas la bolsa y te la devuelven lavada y doblada. Además recogen y entregan a domicilio gratis en Oviedo si el pedido pasa de 20 €. También hacen tintorería y son especialistas en piel. Tienen WhatsApp: 644 22 59 11. De lunes a viernes de 9:30 a 13:30 y de 16:00 a 20:00; sábados solo por la mañana.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "pressto-salesas",
    nombre: "Pressto Salesas",
    subtitulo: "Tintorería y lavandería con horario largo",
    categoria: "ropa",
    coords: [43.366898, -5.848863],
    direccion: "C.C. Salesas, Calle General Elorza 75, 33002",
    telefono: "985 21 15 41",
    horario: "Lunes a sábado de 10:00 a 22:00",
    nota: "Lavan, planchan, hacen tintorería y también arreglos. De lunes a sábado de 10:00 a 22:00, que es la gran ventaja frente a las tintorerías de calle. Para un abrigo o un traje, con llevarlo una o dos veces por temporada te vale.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "decathlon-city",
    nombre: "Decathlon City",
    subtitulo: "Lo primero que tienes que comprarte",
    categoria: "ropa",
    coords: [43.36355, -5.85088],
    direccion: "Calle Uría 3, 33003",
    telefono: "985 60 63 46",
    horario: "Lunes a sábado de 10:00 a 21:00, domingos cerrado",
    nota: "En pleno centro, a tres minutos de El Corte Inglés. Aquí está la chaqueta impermeable con capucha, el forro polar y las zapatillas impermeables, que es exactamente lo que necesitas en Asturias y a buen precio. De lunes a sábado de 10:00 a 21:00. Si acabas subiendo mucho a la montaña, entonces sí mira M+ (Fray Ceferino 5) o Deportes Cavana (Marqués de Pidal 22).",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "zona-comercial-uria-y-pelayo",
    nombre: "Zona comercial de Uría y Pelayo",
    subtitulo: "Las tiendas de ropa del centro",
    categoria: "ropa",
    coords: [43.36436, -5.8516],
    direccion: "Calles Uría, Pelayo y Palacio Valdés",
    nota: "Todo el centro comercial de Oviedo cabe en un paseo de quince minutos: bajas por Uría desde El Corte Inglés hasta Zara y vuelves por Pelayo. Lo más asequible de la zona son Pull&Bear y Springfield, los dos en Uría. Ojo: el comercio del centro cierra los domingos, y las tiendas pequeñas cierran también a mediodía.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "parque-principado",
    nombre: "Parque Principado",
    subtitulo: "Aquí montas el armario de invierno de golpe",
    categoria: "ropa",
    coords: [43.39051, -5.80373],
    direccion: "Autovía A-66 km 4,5, 33429, a unos 5 km del centro",
    nota: "El único Primark de toda Asturias está aquí, junto con Lefties, C&A y H&M en el mismo edificio. Es el sitio para comprar mucho y barato de una sentada. Se llega con el bus urbano línea D, cada 30 minutos, 1,20 € el billete, o en tren de Cercanías: hay una estación que se llama Parque Principado. Reserva una mañana entera el primer fin de semana.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "koopera-store",
    nombre: "Koopera Store",
    subtitulo: "Ropa de segunda mano, en el centro",
    categoria: "ropa",
    coords: [43.36544, -5.85376],
    direccion: "Calle Uría 31, 33003",
    telefono: "688 800 001",
    horario: "Martes a domingo de 10:00 a 20:30, lunes cerrado",
    nota: "Tienda de segunda mano de Cáritas, a dos pasos de Zara. De lunes a sábado de 10:00 a 20:00. Es la única de segunda mano del centro que pude verificar: Humana, que te sonará, no tiene tiendas en Asturias. Para lo demás, Wallapop y Vinted se mueven bastante por aquí.",
    fotos: [],
    verificado: "2026-08"
  }
,

  {
    id: "cc-modoo",
    nombre: "C.C. Modoo",
    subtitulo: "El centro comercial que te pilla al lado del campus",
    categoria: "ropa",
    coords: [43.35834, -5.86093],
    direccion: "Calle Arturo Álvarez Buylla, 33005 (Buenavista)",
    nota: "Este es EL que te interesa de diario: está a un paseo corto desde Informática, junto a la estación de Oviedo-Llamaquique. Tiene tiendas, cafeterías y sitio para resolver un recado rápido sin cruzar la ciudad. Al lado está Espacio Buenavista, con El Corte Inglés y el Primark de la ciudad. Antes de plantarte, mira la tienda concreta que buscas: los locales de los centros comerciales cambian bastante.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "cc-salesas",
    nombre: "C.C. Salesas",
    subtitulo: "Pequeño y céntrico, con horario largo",
    categoria: "ropa",
    coords: [43.3661, -5.8495],
    direccion: "Calle Nueve de Mayo 2, 33002",
    nota: "Tres plantas en pleno centro. No es enorme, pero abre de 10:00 a 21:00 sin cerrar a mediodía y ahí dentro están Arreglos & Co (los bajos de pantalón) y Pressto (la tintorería), que ya tienes fichados en esta misma guía. Es el sitio al que ir cuando el resto del comercio del centro ya cerró para comer.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "cc-los-prados",
    nombre: "C.C. Los Prados",
    subtitulo: "Hipermercado, tiendas y cines bajo el mismo techo",
    categoria: "ropa",
    coords: [43.37096, -5.83108],
    direccion: "Avenida Fernández Ladreda s/n, 33011",
    nota: "El de 'ir a hacer la compra grande y de paso todo lo demás': hipermercado Carrefour dentro, tiendas de ropa, cines Yelmo y gimnasio. Si un mes te toca reponer de todo (despensa, un par de camisetas, una película), aquí lo haces en un solo viaje sin salir de Oviedo. Está al noreste, más lejos que el centro pero mucho más cerca que el Parque Principado.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "el-corte-ingles",
    nombre: "El Corte Inglés",
    subtitulo: "Grandes almacenes: de todo, pero caro",
    categoria: "ropa",
    coords: [43.36439, -5.85215],
    direccion: "Calle Uría 15, 33003",
    nota: "Aquí encuentras lo que no encuentras en ningún otro sitio, y lo pagas. Úsalo para lo urgente y lo raro: un adaptador de enchufe, una maleta, un regalo decente, ropa formal si te hace falta. Tienen supermercado dentro, que abre cuando el resto ya cerró. Hay un segundo El Corte Inglés en el centro comercial Espacio Buenavista (Calle Arturo Álvarez Buylla 5), que es el que te pilla cerca del campus y el que está pegado al Primark.",
    fotos: [],
    verificado: "2026-08"
  }
]);

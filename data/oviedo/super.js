/* ══════════════════════════════════════════════════════════════
   SITIOS SUPER de Oviedo
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
    id: "alimerka",
    nombre: "Alimerka",
    subtitulo: "El asturiano, tu súper de diario",
    categoria: "super",
    direccion: "Muchos locales por toda la ciudad",
    nota: "Es el que más vas a ver por Oviedo y tiene mucho producto local. Busca el que te quede más cerca del piso. Recuerda: la fruta la pesas tú y le pones la etiqueta ANTES de pasar por caja.",
    maps: "https://www.google.com/maps/search/?api=1&query=Alimerka+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "mercadona",
    nombre: "Mercadona",
    subtitulo: "El clásico de toda España",
    categoria: "super",
    direccion: "Varios locales en Oviedo",
    nota: "Su marca blanca, Hacendado, es buenísima y barata. Si no sabes qué marca comprar, compra esa. Los que pillan más a mano: Plaza Daoiz y Velarde 5, C/ General Elorza 72 y Rúa Monte Cerrao 24.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "lidl",
    nombre: "Lidl",
    subtitulo: "El más barato para lo básico",
    categoria: "super",
    direccion: "C/ Cudillero 2 y Avda. del Mar 94",
    web: "https://www.lidl.es/s/es-ES/tiendas/oviedo/",
    nota: "Leche, huevos, pasta, arroz, congelados. La fruta a veces está más barata aquí que en ningún lado. En Oviedo solo hay estos dos, así que no te pilla al lado de casa: ve con mochila y compra para la semana.",
    maps: "https://www.google.com/maps/search/?api=1&query=Lidl+Calle+Cudillero+2+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "aldi",
    nombre: "Aldi",
    subtitulo: "Ojo: no hay ninguno en Oviedo",
    categoria: "super",
    direccion: "Camino de la Fresneda, 33429 (La Fresneda, Siero)",
    horario: "Lunes a sábado de 9:00 a 21:30, domingos cerrado",
    web: "https://www.aldi.es/",
    nota: "Lo comprobamos en su buscador oficial y en toda Asturias solo hay este y el de Gijón. El más cercano está en La Fresneda, ya en el concejo de Siero, junto al centro comercial Parque Principado. O sea: no cuentes con Aldi para el día a día, solo si un día te acercas al Principado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Aldi+Camino+de+la+Fresneda+La+Fresneda+Siero+Asturias",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "dia",
    nombre: "Día",
    subtitulo: "El de barrio, el que te salva",
    categoria: "super",
    direccion: "8 tiendas repartidas por Oviedo",
    web: "https://www.dia.es/tiendas/buscador-tiendas/asturias/oviedo",
    nota: "Pequeñito y un poco más caro, pero hay muchos y te salva cuando te falta algo. Direcciones confirmadas: Av. Buenavista 8, Av. El Cristo 26-28, C/ San Lázaro 7, C/ Río Narcea 28-30, C/ José López Muñiz 2, C/ Catedrático Martínez Cachero 3-5, Av. Valentín Masip 7 y Av. Sotomayor 3 (Trubia).",
    maps: "https://www.google.com/maps/search/?api=1&query=Supermercado+Dia+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "carrefour-express",
    nombre: "Carrefour Express",
    subtitulo: "El otro de barrio",
    categoria: "super",
    direccion: "Plaza de la Paz 8, Avda. Galicia 7, Arzobispo Guisasola 42 y Fundación Príncipe de Asturias",
    web: "https://www.carrefour.es/tiendas-carrefour/principado-de-asturias/",
    nota: "Los cuatro siguen abiertos. El que estaba en C/ Piloña 31 ya cerró, así que no vayas. Si necesitas hipermercado de los grandes, el Carrefour de Los Prados está dentro del centro comercial.",
    maps: "https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Plaza+de+la+Paz+8+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "organic",
    nombre: "Orgánic",
    subtitulo: "Ecotienda y herbolario, con productos a granel",
    categoria: "super",
    direccion: "C/ Campomanes 16, 33008",
    telefono: "984 28 35 43",
    nota: "Aquí es donde compras frutos secos, legumbres y cereales a granel, o sea llevando tu propio bote y pagando por peso: sale más barato que el paquete y no acumulas plástico. También tienen fresco, congelado, sin gluten e infusiones. Está en pleno centro. El horario no lo pudimos confirmar.",
    maps: "https://www.google.com/maps/search/?api=1&query=Organic+productos+ecologicos+Calle+Campomanes+16+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "fuente-de-vida",
    nombre: "Herbolario Fuente de Vida",
    subtitulo: "Ecológico y suplementación",
    categoria: "super",
    direccion: "C/ Silla del Rey 18",
    telefono: "985 23 56 17",
    nota: "La alternativa a Orgánic si te queda más cerca. Productos ecológicos y suplementos, por si en algún momento te da por cuidarte en serio. El horario no lo pudimos confirmar.",
    maps: "https://www.google.com/maps/search/?api=1&query=Herbolario+Fuente+de+Vida+Calle+Silla+del+Rey+18+Oviedo",
    fotos: [],
    verificado: "2026-08"
  }

]);

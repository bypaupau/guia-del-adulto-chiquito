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
    nota: "Su marca blanca, Hacendado, es buenísima y barata. Si no sabes qué marca comprar, compra esa.",
    maps: "https://www.google.com/maps/search/?api=1&query=Mercadona+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "lidl-y-aldi",
    nombre: "Lidl y Aldi",
    subtitulo: "Los más baratos para lo básico",
    categoria: "super",
    direccion: "Varios locales en Oviedo",
    nota: "Leche, huevos, pasta, arroz, congelados. La fruta a veces está más barata aquí que en ningún lado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Lidl+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "dia-y-carrefour-express",
    nombre: "Día y Carrefour Express",
    subtitulo: "Los de barrio",
    categoria: "super",
    direccion: "Varios locales en Oviedo",
    nota: "Pequeñitos y un poco más caros, pero te salvan cuando te falta algo a las nueve de la noche.",
    maps: "https://www.google.com/maps/search/?api=1&query=Supermercado+D%C3%ADa+Oviedo",
    fotos: [],
    verificado: "2026-08"
  }

]);

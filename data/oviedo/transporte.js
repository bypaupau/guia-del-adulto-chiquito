/* ══════════════════════════════════════════════════════════════
   SITIOS TRANSPORTE de Oviedo
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
    id: "estacion-de-autobuses",
    nombre: "Estación de autobuses",
    subtitulo: "ALSA, al aeropuerto y a toda España",
    categoria: "transporte",
    coords: [43.36921, -5.8509],
    direccion: "Calle Pepe Cosmen s/n, 33007",
    telefono: "985 22 24 22",
    nota: "De aquí sale todo: Gijón, Avilés, el aeropuerto, Madrid. La oficina de TUA, el bus urbano, también está aquí. La estación de tren queda pegada.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "estacion-de-tren",
    nombre: "Estación de tren",
    subtitulo: "Renfe y Cercanías",
    categoria: "transporte",
    coords: [43.36636, -5.85487],
    direccion: "Calle Uría s/n, 33003",
    nota: "Cercanías a Gijón y Avilés muy baratito, y trenes largos al resto de España. Con la tarjeta Conecta los trenes de Asturias salen por poquísimo.",
    fotos: [],
    verificado: "2026-08"
  }

]);

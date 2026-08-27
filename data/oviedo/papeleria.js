/* ══════════════════════════════════════════════════════════════
   SITIOS PAPELERIA de Oviedo
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
    id: "reprografia-de-la-universidad",
    nombre: "Reprografía de la Universidad",
    subtitulo: "Lo más barato para imprimir, con diferencia",
    categoria: "papeleria",
    direccion: "Dentro de los campus: Cristo A, Llamaquique y El Milán",
    nota: "Imprimir en la universidad sale mucho más barato que en una copistería privada y hay máquinas de autoservicio con tarjeta recargable en las bibliotecas. Aviso importante: no he podido confirmar en la web de la Universidad que haya mostrador de reprografía abierto en cada campus. Lo que sí existe es la Imprenta universitaria, en el Edificio de Servicios del campus de El Milán (985 10 95 40), que hace encuadernación por encargo. Pregunta en conserjería nada más llegar: es de las primeras cosas que conviene averiguar si vas a imprimir apuntes.",
    maps: "https://www.google.com/maps/search/?api=1&query=Universidad+de+Oviedo+reprograf%C3%ADa",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "carlin",
    nombre: "Carlin",
    subtitulo: "La papelería céntrica de referencia",
    categoria: "papeleria",
    coords: [43.365141, -5.846601],
    direccion: "Calle Foncalada 11, 33002",
    telefono: "985 98 56 80",
    horario: "Lunes a viernes de 9:00 a 14:00 y de 16:30 a 19:30, fines de semana cerrado",
    nota: "Material de escritorio, papelería técnica y todo lo de oficina. A un paso de la calle Uría, así que te queda de camino para casi todo.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "copisteria-fueyo",
    nombre: "Copistería Fueyo",
    subtitulo: "Fotocopias en pleno centro",
    categoria: "papeleria",
    coords: [43.360374, -5.848683],
    direccion: "Calle Cabo Noval 11 bajo, 33007",
    telefono: "985 21 28 56",
    nota: "La más céntrica de todas, para cuando necesitas cuatro copias y no vas a cruzar la ciudad por eso. Un aviso: hay directorios que la sitúan en Marqués de Santa Cruz 3 con este mismo teléfono, a dos minutos de aquí. Puede que tengan dos locales o que se hayan mudado, así que llama antes de ir.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "copyser",
    nombre: "Copyser",
    subtitulo: "Copistería junto al campus de El Cristo",
    categoria: "papeleria",
    coords: [43.356636, -5.873635],
    direccion: "Calle Catedrático Rodrigo Uría 3, 33006",
    telefono: "984 28 01 64",
    horario: "Lunes a jueves de 8:00 a 19:30, viernes hasta las 19:00, fines de semana cerrado",
    nota: "Impresión digital y encuadernación, pegada al campus de El Cristo.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "jorche-tecnocopias",
    nombre: "Jorche Tecnocopias",
    subtitulo: "La que abre hasta tarde",
    categoria: "papeleria",
    coords: [43.359936, -5.856876],
    direccion: "Calle Concepción Arenal s/n, Centro Cívico Comercial, 33005",
    telefono: "985 24 53 86",
    nota: "Imprenta digital y reprografía dentro del Centro Cívico Comercial. Ojo con esta: la web de Jorche ya solo lista sus locales de Gijón, los horarios que circulan se contradicen y hay reseñas que dicen haberla encontrado cerrada. Llama antes de cruzar la ciudad, y no cuentes con ella para una urgencia nocturna hasta confirmarlo.",
    fotos: [],
    verificado: "2026-08"
  }

]);

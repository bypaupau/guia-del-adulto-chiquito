/* ══════════════════════════════════════════════════════════════
   SITIOS TRAMITES de Oviedo
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
    id: "consulado-de-ecuador",
    nombre: "Consulado de Ecuador",
    subtitulo: "Está en Madrid, no en Asturias",
    categoria: "tramites",
    direccion: "Calle Alenza 1, planta baja, 28003 Madrid (metro Ríos Rosas)",
    telefono: "608 795 061",
    nota: "Ojo con esto, que no es obvio: Asturias depende del Consulado General en MADRID. Los de Bilbao y Santander están más cerca, pero son consulados honorarios y no son los que tramitan tu pasaporte. Ese teléfono es el de emergencias 24 horas. Desde Oviedo, Madrid está a unas 3 horas en tren o 5 en bus. Todo va con cita previa.",
    maps: "https://www.google.com/maps/search/?api=1&query=Consulado+General+del+Ecuador+Calle+Alenza+1+Madrid",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "policia-nacional",
    nombre: "Policía Nacional",
    subtitulo: "Aquí se ponen las denuncias",
    categoria: "tramites",
    coords: [43.362653, -5.853438],
    direccion: "Avenida Buenavista s/n, 33004",
    telefono: "985 46 71 00",
    nota: "Si pierdes o te roban el pasaporte, tu primera parada es esta, antes que ninguna otra. Pide que en la denuncia figure literalmente 'pérdida de pasaporte ecuatoriano', y que lleve firma y sello. Importante: una denuncia puesta en un juzgado NO te sirve para el consulado, tiene que ser en la Policía. Emergencias: 091.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "padron-municipal",
    nombre: "Padrón municipal",
    subtitulo: "Sección de Estadística del Ayuntamiento",
    categoria: "tramites",
    coords: [43.359787, -5.847358],
    direccion: "Calle Rosal 23, 33009",
    telefono: "985 98 18 89",
    nota: "Aquí te empadronas. Número en el gestor de colas de 9:00 a 12:00, atienden hasta las 14:00, y es gratis. Llevas pasaporte y contrato de alquiler de seis meses mínimo. Ojo: hay guías viejas que lo sitúan en Calle Quintana; se mudó, es Rosal 23.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "ayuntamiento-de-oviedo",
    nombre: "Ayuntamiento de Oviedo",
    subtitulo: "Casa consistorial",
    categoria: "tramites",
    coords: [43.360548, -5.844938],
    direccion: "Plaza de la Constitución s/n, 33009",
    telefono: "984 08 38 00",
    nota: "De lunes a viernes de 8:00 a 15:00. Está en pleno casco antiguo, al lado del Fontán, así que de paso ya conoces la plaza más bonita de la ciudad.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "oficina-de-extranjeria",
    nombre: "Oficina de Extranjería",
    subtitulo: "Delegación del Gobierno",
    categoria: "tramites",
    coords: [43.360574, -5.853707],
    direccion: "Plaza de España 3, 33007",
    telefono: "984 76 93 49",
    nota: "Con menos de seis meses no tienes que venir aquí: tu visado ya te autoriza y no necesitas la TIE. Te la apunto por si algo cambia o si acabas alargando la estancia. De 9:00 a 14:00 y siempre con cita previa.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "oficina-de-atencion-internacional",
    nombre: "Oficina de Atención Internacional",
    subtitulo: "Universidad de Oviedo",
    categoria: "tramites",
    coords: [43.364563, -5.854933],
    direccion: "Calle Independencia 13, entrada por Ventura Rodríguez, 33004",
    telefono: "985 10 40 30",
    nota: "Tu gente. Matrícula, carné universitario, certificado de llegada y cualquier lío que no sepas resolver. De 9:00 a 14:00. Si algo se pone raro, empieza siempre por aquí antes de meterte tú solo en una oficina pública.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "correos",
    nombre: "Correos",
    subtitulo: "Oficina principal",
    categoria: "tramites",
    coords: [43.36332, -5.848043],
    direccion: "Calle Alonso de Quintanilla 1, 33002",
    telefono: "985 20 88 84",
    nota: "Para cuando quieras mandarme algo. O para recoger un paquete que no te cupo por el buzón.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "zona-bancaria",
    nombre: "Zona bancaria",
    subtitulo: "Plaza de la Escandalera y alrededores",
    categoria: "tramites",
    coords: [43.362168, -5.84755],
    direccion: "Plaza de la Escandalera, Calle Fruela y primer tramo de Uría",
    nota: "Aquí se concentran los bancos del centro: Unicaja en la propia Escandalera, Sabadell en el precioso edificio del antiguo Banco Herrero en Fruela 11, y Santander y CaixaBank en Uría. Todos a menos de 300 metros entre sí. No te doy una sucursal concreta a propósito: los bancos cierran oficinas constantemente y prefiero mandarte a la zona, que esa no se mueve.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "inss-oviedo",
    nombre: "INSS Oviedo",
    subtitulo: "Seguridad Social",
    categoria: "tramites",
    coords: [43.359603, -5.851751],
    direccion: "C/ Santa Teresa 8-10, 33007",
    telefono: "985 10 78 00",
    nota: "Aquí es donde preguntas si te corresponde cobertura pública. Ecuador tiene convenio de reciprocidad con España, así que vale la pena preguntar aunque ya tengas seguro privado.",
    fotos: [],
    verificado: "2026-08"
  }

]);

/* ══════════════════════════════════════════════════════════════
   SITIOS CASA Y BAZAR de Oviedo
   ──────────────────────────────────────────────────────────────
   Lo que no es comida ni ropa pero hace falta el primer mes:
   sábanas, toallas, ollas, un cubo, una bombilla, un destornillador.
   La guía física no tenía nada de esto y es de lo primero que se
   necesita al llegar a un piso vacío.

   Para añadir un sitio: copia un bloque entero (desde { hasta },),
   pégalo y cambia los datos. No borres las comas.

   Campos:
     id          obligatorio, minúsculas y guiones, único en la ciudad.
     nombre      obligatorio.
     subtitulo   una línea corta que se ve en la lista.
     categoria   obligatorio, debe existir en data/categorias.js
     coords      [lat, lon]. si lo omites, el sitio sale en la lista
                 pero sin chincheta.
     aproximada  true si la chincheta está puesta a ojo sobre la calle.
     direccion, telefono, horario, web, nota   opcionales.
     maps        enlace propio a Google Maps (solo si no hay coords).
     fotos       ["foto-1.jpg"] → assets/img/oviedo/<id>/foto-1.jpg
     verificado  "AAAA-MM". cuándo comprobamos los datos por última vez.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarSitios("oviedo", [
  {
    id: "casa-viva",
    nombre: "Casa Viva",
    subtitulo: "Sábanas, toallas, vajilla y cosas de casa, en el centro",
    categoria: "hogar",
    coords: [43.364038, -5.850123],
    direccion: "Calle Palacio Valdés 15, 33002",
    telefono: "685 62 74 36",
    horario: "De lunes a sábado de 10:00 a 20:00, domingos cerrado",
    web: "https://www.casaviva.es/tienda-casaviva-oviedo.html",
    nota: "Si solo vas a entrar en una tienda de estas, que sea esta: está en pleno centro, se llega andando y tiene a la vez lo textil (sábanas, toallas, fundas de almohada) y lo de cocina (vajilla, vasos, sartenes, tarros). Llévate medido el ancho de la cama ANTES de ir, que en España las sábanas van por centímetros (90, 105, 135, 150) y no por 'individual' o 'de dos plazas'. Aviso: en el directorio Firmania figuran otro teléfono (985 73 75 14) y cierre a las 21:00; estos datos son los de su propia web.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "flying-tiger",
    nombre: "Flying Tiger Copenhagen",
    subtitulo: "Lo barato y resultón para ir tapando huecos",
    categoria: "hogar",
    coords: [43.36315, -5.85088],
    direccion: "Calle Conde de Toreno 1, 33004",
    nota: "El sitio de las cosas pequeñas que no sabías que te faltaban hasta que te faltan: perchas, cajas, velas, un abrelatas, cables, cuadernos, cargadores. Casi nada pasa de unos pocos euros. No es donde compras la sartén buena, pero sí donde resuelves diez tonterías de golpe la primera semana. No pude confirmar horario ni teléfono en ninguna fuente fiable, así que mejor te asomas: está a dos pasos de la estatua de Mafalda.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "ferreteria-viejo",
    nombre: "Ferretería Viejo",
    subtitulo: "Bombillas, tornillos y copias de llaves, de barrio",
    categoria: "hogar",
    direccion: "Calle Rafael Gallego Sainz 3, 33012 (barrio de Vallobín)",
    telefono: "985 27 44 42",
    horario: "De lunes a viernes de 9:30 a 13:30 y de 16:30 a 20:00; sábados de 9:30 a 13:30",
    web: "https://ferreteriaviejo.es/",
    nota: "Apúntate esta, que es de las que salvan la tarde: hacen copias de llaves (hazte una de repuesta EN CUANTO tengas piso y déjala en sitio seguro, que quedarse fuera un domingo es carísimo) y venden bombillas, tendederos, tabla de planchar, felpudos y ese tornillo suelto que necesitas. Es ferretería de barrio de las de toda la vida, así que cierran a mediodía y no abren los domingos. No la puse en el mapa porque no encontré su coordenada en ninguna fuente con nombre y apellidos, y prefiero dejarte el botón de Google Maps antes que clavarte una chincheta a ojo.",
    maps: "https://www.google.com/maps/search/?api=1&query=Ferreter%C3%ADa+Viejo+Calle+Rafael+Gallego+Sainz+3+Oviedo",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "ikea-asturias",
    nombre: "IKEA Asturias",
    subtitulo: "Para montar la casa entera de una sentada",
    categoria: "hogar",
    coords: [43.38789, -5.80575],
    direccion: "Centro Comercial Parque Principado, A-66 km 4,5, 33429 Siero",
    horario: "De lunes a sábado de 10:00 a 22:00",
    web: "https://www.ikea.com/es/es/stores/asturias/",
    nota: "Está pegado al Parque Principado, así que un mismo viaje te vale para el armario de invierno y para el menaje. Aquí es donde se resuelven de golpe el juego de sábanas, el edredón, las toallas, la vajilla, la lámpara y el escurreplatos, y sale más barato que ir comprándolo suelto. Dos consejos: mira antes en su web si lo que quieres está en stock en Asturias, y ojo con volver en bus cargado (para lo grande, el Click & Collect o que te lo lleven). Su web avisa de que cierran el 15 y el 31 de agosto de 2026.",
    fotos: [],
    verificado: "2026-08"
  },

  {
    id: "leroy-merlin",
    nombre: "Leroy Merlin",
    subtitulo: "Bricolaje grande: herramientas, pintura, cortinas",
    categoria: "hogar",
    coords: [43.41466, -5.79901],
    aproximada: true,
    direccion: "Parque Comercial Azabache, ctra. AS-18 Oviedo–Gijón km 7,4, 33690 Llanera",
    telefono: "985 98 08 98",
    horario: "De lunes a sábado de 7:30 a 22:00, domingos cerrado",
    web: "https://www.leroymerlin.es/tiendas/oviedo.html",
    nota: "Se llama 'Leroy Merlin Oviedo' pero está en Llanera, fuera de la ciudad: solo merece el viaje si necesitas algo gordo (una estantería, una barra de cortina, pintura, una escalera, taladrar algo). Para un tornillo o una bombilla, te sirve la ferretería del barrio y tardas la décima parte. La chincheta está sobre su aparcamiento, que es la única coordenada que aparece en OpenStreetMap, así que puede bailar unos metros respecto a la puerta.",
    fotos: [],
    verificado: "2026-08"
  }
]);

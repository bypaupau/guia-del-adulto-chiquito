/* ══════════════════════════════════════════════════════════════
   CIUDADES · el índice
   ──────────────────────────────────────────────────────────────
   Qué ciudades existen y qué archivos de datos hay que cargar
   para cada una. Es lo único que hay que tocar para añadir una
   ciudad nueva; index.html no se toca.

   Para añadir Madrid:
     1. crea la carpeta data/madrid/
     2. copia data/oviedo/ciudad.js dentro y cambia centro, zoom
        y orígenes
     3. crea los archivos de sitios que quieras (salud.js, etc.)
     4. añade aquí abajo el bloque de la ciudad

   "datos" son los nombres de los archivos, sin .js, en el orden
   en que se cargan. "ciudad" va siempre el primero.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarCiudades([
  {
    id: "oviedo",
    nombre: "Oviedo",
    region: "Asturias",
    carpeta: "data/oviedo",
    porDefecto: true,
    datos: [
      "ciudad",
      "salud", "comida", "sabor", "cafe", "super", "cuidado",
      "transporte", "tramites", "papeleria", "arreglos", "ropa", "hogar",
      "escapada", "cultura", "ocio", "aire"
    ]
  }

  /* ,{
    id: "madrid",
    nombre: "Madrid",
    region: "Comunidad de Madrid",
    carpeta: "data/madrid",
    datos: ["ciudad", "salud", "comida"]
  } */
]);

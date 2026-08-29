/* ══════════════════════════════════════════════════════════════
   CIUDADES · el índice
   ──────────────────────────────────────────────────────────────
   Qué ciudades existen y qué archivos de datos hay que cargar
   para cada una. Es lo único que hay que tocar para añadir una
   ciudad nueva; index.html no se toca.

   La estructura es siempre la misma:  ciudad → archivo → lugares.
   Cada archivo de "datos" agrupa una categoría (o varias, mientras
   la ciudad sea pequeña), así que un lugar nuevo se añade pegando
   un bloque dentro del archivo que le toque. La aplicación no
   tiene que enterarse de nada.

   Para añadir una ciudad:
     1. crea la carpeta data/<ciudad>/
     2. copia data/madrid/ciudad.js dentro y cambia id, nombre,
        centro, zoom y orígenes
     3. crea los archivos de sitios que quieras
     4. añade aquí abajo el bloque de la ciudad

   "datos" son los nombres de los archivos, sin .js, en el orden
   en que se cargan. "ciudad" va siempre el primero.

   OJO: el id de la ciudad sale en el enlace (#/oviedo/waterproof)
   y da nombre a la carpeta de fotos. No lo cambies una vez que
   hayas compartido enlaces.
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
  },

  /* Madrid y Barcelona están recién abiertas: llevan lo justo para
     que se pueda cambiar de ciudad y ver que todo funciona. Para
     llenarlas, parte "lugares" en un archivo por categoría (como
     Oviedo) y añádelos a esta lista. */
  {
    id: "madrid",
    nombre: "Madrid",
    region: "Comunidad de Madrid",
    carpeta: "data/madrid",
    datos: ["ciudad", "lugares"]
  },

  {
    id: "barcelona",
    nombre: "Barcelona",
    region: "Cataluña",
    carpeta: "data/barcelona",
    datos: ["ciudad", "lugares"]
  }
]);

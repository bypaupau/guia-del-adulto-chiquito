/* ══════════════════════════════════════════════════════════════
   CATEGORÍAS · la única fuente de verdad
   ──────────────────────────────────────────────────────────────
   De aquí salen, a la vez y sin repetirse en ningún otro sitio:
     · el color del pin en el mapa
     · el punto de color y el relleno del chip del filtro
     · el icono
     · el nombre visible y el orden en la lista de filtros

   Para añadir una categoría nueva: copia un bloque, cambia los
   datos y añade su icono en assets/icons/categorias.js con el
   mismo id. Si le creas archivo de datos propio, acuérdate de
   apuntarlo en data/ciudades.js.

   Los colores son oscuros a propósito: el símbolo del pin va en
   color papel encima, y así se lee.
   ══════════════════════════════════════════════════════════════ */

GUIA.registrarCategorias([
  { id: "salud",      nombre: "Salud",            color: "#C0453A", orden: 1 },
  { id: "comida",     nombre: "Comer",            color: "#C57B2A", orden: 2 },
  { id: "cafe",       nombre: "Cafés y tiendas",  color: "#7C5A45", orden: 3 },
  { id: "super",      nombre: "Súper",            color: "#6C8F3C", orden: 4 },
  { id: "transporte", nombre: "Transporte",       color: "#37718E", orden: 5 },
  { id: "tramites",   nombre: "Trámites",         color: "#6A5B8C", orden: 6 },
  { id: "papeleria",  nombre: "Papelería",        color: "#3F8079", orden: 7 },
  { id: "arreglos",   nombre: "Reparaciones",     color: "#5F6B72", orden: 8 },
  { id: "ropa",       nombre: "Ropa",             color: "#A8446F", orden: 9 },
  { id: "escapada",   nombre: "Escapadas",        color: "#2E6B4F", orden: 10 }
]);

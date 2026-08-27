# El mapa del adulto chiquito

La versión web de la *Guía de Supervivencia Adulta*. Un mapa de Oviedo con los
sitios que hacen falta para resolver el día a día: salud, comida, trámites,
lavanderías, papelerías, reparaciones…

Se abre haciendo doble clic en `index.html` y funciona igual publicado en
GitHub Pages. No hay que instalar ni compilar nada.

---

## Cómo está organizado

```
index.html            solo la estructura de la página
assets/
  css/                tokens.css (medidas y colores) + un archivo por zona
  icons/              los SVG: categorias.js e interfaz (ui.js)
  img/<ciudad>/<id>/  las fotos de cada sitio
  vendor/leaflet/     la librería del mapa, sin tocar
data/
  categorias.js       ← color, icono y nombre de cada categoría
  ciudades.js         ← qué ciudades hay y qué archivos cargar
  oviedo/
    ciudad.js         centro del mapa, zoom y puntos de partida
    salud.js …        un archivo por categoría, con los sitios
js/
  nucleo.js           el objeto GUIA y los registros
  datos.js            consultar y validar los datos
  estado.js           ciudad, filtros, sitio abierto y la dirección del navegador
  mapa.js             capas, pines y ruta dibujada
  rutas.js            cálculo de rutas a pie
  panel.js            buscador, filtros y lista
  detalle.js          la ficha del sitio
  hoja.js             la hoja deslizante de móvil
  app.js              junta las piezas
  cargador.js         trae los datos de la ciudad y arranca
```

La idea de fondo: **los datos no saben nada de la app y la app no sabe nada de
los datos concretos.** Por eso casi todo lo que vas a querer hacer se hace
tocando solo `data/`.

---

## Tareas de todos los días

### Añadir un sitio

Abre el archivo de su categoría (por ejemplo `data/oviedo/ropa.js`), copia un
bloque entero desde `{` hasta `},` y cambia los datos. Nada más.

Para sacar las coordenadas: añade `?editar` al final de la dirección
(`index.html?editar`) y haz clic en el mapa; te las copia al portapapeles con
el formato exacto.

Si un sitio no tiene una ubicación única (una cadena con muchos locales) o está
fuera de la ciudad, omite `coords`: sale en la lista pero sin chincheta.

### Añadir una categoría

Una línea en `data/categorias.js` (id, nombre, color, orden) y su dibujo en
`assets/icons/categorias.js` con el mismo id. Si le creas un archivo de datos
propio, apúntalo en la lista `datos` de la ciudad, en `data/ciudades.js`.

El color se define **solo ahí**: de ese único sitio salen el pin del mapa, el
punto del chip y el borde de la tarjeta de la lista.

### Añadir una ciudad

1. `data/madrid/` con una copia de `ciudad.js` (centro, zoom, orígenes).
2. Los archivos de sitios que quieras.
3. El bloque de la ciudad en `data/ciudades.js`.

`index.html` no se toca. Cuando haya más de una ciudad aparece solo el
selector en el panel.

### Añadir fotos

`assets/img/oviedo/<id-del-sitio>/foto-1.jpg` y en el sitio:
`fotos: ["foto-1.jpg"]`.

---

## Detalles que conviene saber

**El mapa.** Los estilos disponibles están en `data/mapas.js` y cada ciudad
elige el suyo en su `ciudad.js`. El de serie es **Esri · Calles**, atenuado con
un filtro y dejando asomar el papel del fondo: mapa de color pero tranquilo,
calles legibles y pines que destacan. No necesita clave y funciona igual
abriendo el archivo con doble clic que publicado en la web.

Hay un estilo de OpenStreetMap disponible, pero **solo funciona servido por
http(s)**: sus servidores exigen la cabecera `Referer`, que el navegador no
manda al abrir un archivo local, y salen teselas de "Access blocked". Si lo
quieres usar, ponlo cuando la página esté en GitHub Pages, o sirve la carpeta
en local con `python3 -m http.server 8000` y abre `localhost:8000`.

**Sobre las claves (API keys) en esta página.** Esto es una página estática: no
hay servidor, el navegador se descarga los archivos tal cual. Cualquier clave
que escribas en el código **la puede ver cualquiera** que abra el inspector o
mire el repositorio, así que no existe forma de "esconderla" aquí. Los archivos
`.env` y los entornos virtuales solo protegen claves en programas que corren en
un servidor o en tu propio ordenador, no en un sitio publicado en GitHub Pages.
Lo que se hace de verdad en el mundo del frontend es: usar servicios que no
pidan clave (lo que hacemos ahora), o usar una clave gratuita y limitarla al
dominio propio, asumiendo que se ve. Si algún día quieres CARTO Voyager, se
pide gratis en carto.com/basemaps/apikey, se escribe en `mapa.clave` del
`ciudad.js` y se acepta que queda a la vista: son teselas de mapa, no una
contraseña, y su cuota gratuita es de 5 millones de peticiones al mes.

**Las rutas.** Se calculan con el OSRM público de FOSSGIS
(`routing.openstreetmap.de`): gratuito, sin clave, peatonal. A cambio pide no
pasar de una petición por segundo y no garantiza disponibilidad, así que las
rutas ya calculadas se guardan en el navegador y, si no contesta, se dibuja una
línea recta punteada avisando de que no es una ruta real. Para cambiar de
servicio solo se toca el bloque `PROVEEDOR` de `js/rutas.js`.

**El punto de partida.** Está en `data/oviedo/ciudad.js`, en la lista
`origenes`. Ahora hay uno (la Facultad de Informática); en cuanto haya dos
aparece solo el selector en el panel.

**La interfaz.** Todo flota sobre el mapa en paneles de cristal: el mapa ocupa
la pantalla entera y el panel se puede minimizar a una burbuja. La información
de un sitio se abre **dentro del mismo panel** (se vuelve con la flecha, o con
Escape) y con el botón de la chincheta se "despega" a una tarjeta pequeña abajo
a la derecha, para mirar el mapa sin perderla de vista.

La ciudad y las categorías son dos desplegables. El de categorías es de
selección múltiple y cada línea lleva el punto del color con el que sale esa
categoría en el mapa, así que hace de filtro y de leyenda a la vez.

**El panel nunca tapa el mapa entero**, ni en el ordenador (no pasa de
`--alto-panel`, 62% de la altura) ni en el móvil (la hoja sube como mucho al
82%, con tres posiciones: asomada, media y arriba). Cuando queda contenido por
debajo aparece una flechita tenue que respira. Esto importa porque Daniel va a
abrir la guía escaneando un QR con el móvil.

**Una sola tipografía.** El folleto usa cursivas; en un mapa se leen mal, así
que aquí manda la legibilidad. Si quieres probar otra letra para los títulos,
se cambia `--letra-titulo` en `assets/css/tokens.css` y nada más.

**Las indicaciones.** La ficha enseña los pasos de la ruta a pie en español.
OSRM no devuelve frases, sino la maniobra en piezas (tipo + sentido + calle);
la traducción y la elección del icono están en `js/rutas.js`. Al pulsar un
paso, el mapa se acerca a ese punto.

**La dirección del navegador.** Cada sitio tiene la suya:
`…/index.html#/oviedo/waterproof`. Se puede enlazar, y el botón *atrás* cierra
la ficha en vez de salirse.

**Si algo no cuadra.** Al arrancar se revisan los datos y los problemas salen
por la consola del navegador (categorías que no existen, ids repetidos,
coordenadas mal escritas). Antes esos fallos pasaban en silencio.

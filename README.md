# El mapa del adulto chiquito

La versión web de la Guía de Supervivencia Adulta. Es una página
estática: ni build, ni npm, ni servidor. Se abre con doble clic sobre
`index.html` y funciona igual publicada en GitHub Pages.

---

## Cómo está montado

```
index.html            solo la estructura. Ninguna lógica, ningún dato.
assets/css/           estilos, uno por pieza
  tokens.css            medidas, colores de la interfaz y receta del cristal
  base.css              reset y piezas compartidas
  intro.css             la bienvenida de tres segundos
  mapa.css              chinchetas, ruta y etiquetas
  panel.css             el panel de cristal, el chevron y la lista
  detalle.css           la ficha de cada sitio
assets/icons/         los SVG, en JavaScript para poder pintarlos dentro del pin
assets/vendor/        Leaflet, con copia local para que funcione sin internet
data/                 LOS DATOS. Aquí es donde se añaden sitios y ciudades.
js/                   la aplicación
```

La regla es que **`js/` no sabe qué sitios existen y `data/` no sabe cómo
se pintan**. Los archivos de `data/` solo llaman a tres funciones
(`GUIA.registrarCiudades`, `GUIA.registrarCiudad`, `GUIA.registrarSitios`)
y la aplicación lee lo que se haya registrado.

### Los archivos de `js/`

| archivo | de qué se ocupa |
|---|---|
| `nucleo.js`   | crea el objeto `GUIA` y los registros. Va el primero. |
| `datos.js`    | consultar y validar lo registrado. Nadie más toca `GUIA._sitios`. |
| `estado.js`   | qué ciudad, qué filtros, qué sitio abierto. Vive en la dirección (`#/oviedo/casa-viva`). |
| `mapa.js`     | capas, chinchetas y ruta dibujada. |
| `rutas.js`    | pide las rutas a pie a OSRM y las traduce a indicaciones en español. |
| `panel.js`    | cabecera, buscador, filtros, chevron y lista. |
| `detalle.js`  | la ficha del sitio y la tarjeta despegada. |
| `hoja.js`     | en el móvil el panel sube y baja como una hoja. |
| `intro.js`    | retira la bienvenida cuando termina. |
| `app.js`      | junta las piezas. Quién llama a quién, y nada más. |
| `cargador.js` | trae los datos de la ciudad y arranca. Va el último. |

---

## Añadir un sitio

Abre el archivo de `data/<ciudad>/` que le toque por categoría (por
ejemplo `data/oviedo/hogar.js`), copia un bloque entero desde `{` hasta
`},` y cambia los datos. **No hay que tocar nada más.**

```js
{
  id: "casa-viva",                     // minúsculas y guiones, único en la ciudad
  nombre: "Casa Viva",
  subtitulo: "Sábanas, toallas y cosas de casa",
  categoria: "hogar",                  // tiene que existir en data/categorias.js
  coords: [43.364038, -5.850123],      // [lat, lon]; si no lo pones, sale sin chincheta
  aproximada: false,                   // true = la chincheta está puesta a ojo
  direccion: "Calle Palacio Valdés 15, 33002",
  telefono: "685 62 74 36",
  horario: "De lunes a sábado de 10:00 a 20:00",
  web: "https://…",
  nota: "El texto largo de la ficha.",
  maps: "https://…",                   // enlace propio, solo si no hay coords
  fotos: [],                           // → assets/img/<ciudad>/<id>/foto-1.jpg
  verificado: "2026-08"                // cuándo se comprobó
}
```

`id` sale en el enlace que se comparte y da nombre a la carpeta de fotos:
una vez compartido, no se cambia.

**Para sacar las coordenadas**: añade `?editar` al final del enlace de la
página y haz clic en el mapa; te copia la línea `coords:` al portapapeles.

**Regla del proyecto**: ni un teléfono, ni una dirección, ni un horario,
ni una coordenada sin fuente comprobada. Un hueco vacío es mejor que un
dato inventado. Si solo puedes aproximar la chincheta a nivel de calle,
pon `aproximada: true` y la ficha lo avisa sola.

---

## Añadir una categoría

1. Un bloque en `data/categorias.js` con `id`, `nombre`, `color` y `orden`.
2. El icono en `assets/icons/categorias.js`, con **el mismo `id`**.
3. Si le creas archivo propio, apúntalo en la lista `datos` de su ciudad
   en `data/ciudades.js`.

`data/categorias.js` es la única fuente de verdad del color: de ahí sale
a la vez el de la chincheta, el del punto del filtro y el de la tarjeta.
Nunca escribas un color de categoría en el CSS.

Los colores tienen que distinguirse entre sí. Con dieciséis categorías la
paleta ya va justa: elige el nuevo comprobando que queda lejos de todos
los demás, no solo del que se te parezca a ojo.

---

## Añadir una ciudad

1. Crea la carpeta `data/<ciudad>/`.
2. Copia `data/madrid/ciudad.js` dentro y cambia `id`, `nombre`, `centro`,
   `zoom`, `sufijoBusqueda` y `origenes`.
3. Crea los archivos de sitios que quieras (uno por categoría cuando la
   ciudad crezca; uno solo, tipo `lugares.js`, mientras sea pequeña).
4. Añade el bloque de la ciudad en `data/ciudades.js`.

`index.html` **no se toca**: `js/cargador.js` inyecta los archivos que
diga el índice, y solo la primera vez que se visita esa ciudad.

La estructura en disco es literalmente **ciudad → archivo → lugares**, o
sea `ciudad → categoría → lugares` cuando cada archivo es una categoría.

### Ciudades sin punto de partida

`origenes: []` es válido y es lo que tienen Madrid y Barcelona. La
aplicación se da cuenta sola: esconde el "desde…", no calcula rutas a pie
y no enseña estimaciones de tiempo. En cuanto haya una dirección de
referencia, se añade un bloque en `origenes` y todo vuelve a funcionar.

---

## Cosas que conviene saber

**Nada de módulos ES ni de `fetch`.** Etiquetas `<script>` clásicas y
datos en archivos `.js`. Con módulos o con `fetch` de archivos locales,
abrir la página con doble clic falla por CORS.

**El mapa base**. Los estilos están en `data/mapas.js` y cada ciudad elige
el suyo. El de serie es OpenStreetMap, que exige cabecera `Referer`: con
doble clic no se manda, así que la aplicación se pasa sola al de reserva
(Esri). Publicada, va perfecto.

**Dos números distintos de distancia, y no es un error.** La lista enseña
línea recta (por eso lleva `≈`) y la ficha enseña la ruta real de OSRM.
Cuando OSRM da un rodeo, los dos se contradicen a lo bestia.

**Claves de API**. En una página estática no se pueden esconder: no hay
servidor. Ni `.env` ni build step ayudan. Si eliges un estilo de mapa que
pida clave, esa clave queda a la vista de cualquiera.

**Enlaces a Google Maps**: se construyen con nombre + dirección, nunca con
la coordenada suelta, porque con una coordenada Maps abre el negocio de al
lado.

**Revisión automática**. Al arrancar, `datos.js` avisa por consola de ids
repetidos, categorías que no existen, coordenadas mal escritas y
categorías sin icono. No rompe nada: solo lo cuenta. Merece la pena tener
la consola abierta después de añadir sitios.

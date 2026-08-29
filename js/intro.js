/* ══════════════════════════════════════════════════════════════
   INTRO · retirar la bienvenida cuando termine
   ──────────────────────────────────────────────────────────────
   La animación entera es CSS (assets/css/intro.css). Aquí solo se
   quita el elemento del documento cuando acaba, para que no se
   quede una capa invisible por encima del mapa.

   No bloquea nada: el velo lleva pointer-events:none, así que el
   mapa responde desde el primer momento y este archivo no retrasa
   el arranque de la aplicación.
   ══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var velo = document.getElementById("intro");
  if (!velo) return;

  var quitado = false;
  function quitar() {
    if (quitado) return;
    quitado = true;
    velo.hidden = true;
  }

  /* Si el sistema pide menos movimiento, ni la enseñamos. */
  var menosMovimiento = window.matchMedia &&
                        window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  if (menosMovimiento) return quitar();

  /* Lo normal: se va cuando termina la animación del velo. */
  velo.addEventListener("animationend", function (e) {
    if (e.target === velo) quitar();
  });

  /* Red de seguridad, por si el navegador no dispara el evento. */
  setTimeout(quitar, 4200);
})();

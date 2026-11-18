/* Realidad aumentada · Objetivos ↔ resultados (bone). Trabajo de graduación de Andre Jo:
   objetivos §2.2, discusión §9.1–9.5 y conclusiones cap. X. Encuesta Likert 1–5, 101 participantes
   (23–25 sep 2026, iPhone 16 y 13). */
(function () {
  function fila(n, verbo, hecho, cifra, cifraTxt, clase, retraso) {
    return '<div class="ra-res" data-anim="subir" style="--retraso:' + retraso + 'ms">' +
      '<span class="ra-n' + (clase ? ' ra-n--' + clase : '') + '">' + n + '</span>' +
      '<div class="ra-res__obj"><p class="ra-res__t">' + verbo + '</p><p class="ra-res__d">' + hecho + '</p></div>' +
      '<div class="ra-res__dato">' + (cifra ? '<b>' + cifra + '</b>' : '') + '<span>' + cifraTxt + '</span></div></div>';
  }

  Presentacion.diapositiva({
    id: 'ra-resultados',
    titulo: 'Objetivos y resultados',
    seccion: 'Realidad aumentada',
    tema: 'bone',
    resumen: 'Cada objetivo con su resultado',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Resultados', 'Objetivos y resultados', { sm: true })}
        <div class="ra-tabla" style="margin-top:var(--e-3)">
          ${fila(1, 'Rediseñar', '5 montículos en Blender (vértices, Bevel, Boolean, UV y oclusión ambiental) y La Palangana con textura nueva.', '4.63', 'colores y texturas · 92.1 % favorable', '', 260)}
          ${fila(2, 'Interactuar', 'Pellizco de 0.1× a 5.0× y traslación vertical de −1 a 1 m, sin rotación manual.', '4.71', 'gestos intuitivos y fluidos · 94.1 %', 'app', 340)}
          ${fila(3, 'Anclar', 'Detección de planos horizontales y verticales con ARKit.', '', 'Ambos planos detectados y modelos colocados', 'ok', 420)}
          ${fila(4, 'Evaluar', '101 participantes · Likert 1–5 · iPhone 16 y 13, en días nublados, soleados y con lluvia.', '4.59', 'claro y detallado · 88.1 %', 'oro', 500)}
        </div>
      </div>
    `
  });
})();

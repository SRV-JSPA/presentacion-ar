/* Realidad aumentada · Objetivos específicos (bone). Plantilla PPT, pp. 24–25:
   los cuatro objetivos en una sola diapositiva, condensados a su verbo. */
(function () {
  function obj(n, verbo, desc, retraso, clase) {
    return '<div class="tarjeta ra-item' + (clase === 'oro' ? ' tarjeta--oro' : '') + '" data-anim="subir" style="--retraso:' + retraso + 'ms">' +
      '<span class="ra-n' + (clase ? ' ra-n--' + clase : '') + '">' + n + '</span>' +
      '<div><p class="tarjeta__t">' + verbo + '</p><p class="tarjeta__d">' + desc + '</p></div></div>';
  }

  Presentacion.diapositiva({
    id: 'ra-objetivos',
    titulo: 'Objetivos del módulo de RA',
    seccion: 'Realidad aumentada',
    tema: 'bone',
    resumen: 'Rediseñar, interactuar, anclar y evaluar',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Objetivos', 'Rediseñar, interactuar, anclar y evaluar.', { sm: true })}
        <div class="ra-rejilla" style="margin-top:var(--e-4)">
          ${obj(1, 'Rediseñar', 'Adaptar visualmente los modelos 3D de las estructuras mayas con modelado, texturizado y edición de materiales, para darles más realismo y autenticidad histórica.', 280)}
          ${obj(2, 'Interactuar', 'Llevar a iOS la interacción gestual hecha en Android, manteniendo estables los modelos al escalarlos y moverlos en vertical dentro de límites establecidos.', 360, 'app')}
          ${obj(3, 'Anclar', 'Llevar a iOS la detección de planos horizontales y verticales con el anclaje espacial de ARKit, para que los modelos queden bien colocados y estables.', 440, 'ok')}
          ${obj(4, 'Evaluar', 'Medir con usuarios la calidad visual en ARKit: percepción de realismo, coherencia de sombras y adaptación a la luz del entorno.', 520, 'oro')}
        </div>
        ${Deck.fuente('Objetivos específicos del trabajo de graduación, módulo de realidad aumentada.')}
      </div>
    `
  });
})();

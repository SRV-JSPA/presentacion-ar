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
        ${Deck.cabeza('Objetivos', 'Rediseñar, interactuar, anclar y evaluar', { sm: true })}
        <div class="ra-rejilla" style="margin-top:var(--e-4)">
          ${obj(1, 'Rediseñar', 'Modelos 3D más realistas y fieles a la historia.', 280)}
          ${obj(2, 'Interactuar', 'Gestos de Android en iOS: escalar y subir sin perder estabilidad.', 360, 'app')}
          ${obj(3, 'Anclar', 'Detectar planos con ARKit para fijar los modelos al entorno.', 440, 'ok')}
          ${obj(4, 'Evaluar', 'Probar con usuarios el realismo, las sombras y la luz.', 520, 'oro')}
        </div>
      </div>
    `
  });
})();

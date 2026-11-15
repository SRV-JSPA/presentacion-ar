/* Guía virtual · Objetivos específicos (bone). Tesis de Nancy Mazariegos, cap. IV-B. */
(function () {
  function t(titulo, texto, retraso, oro) {
    return '<div class="tarjeta' + (oro ? ' tarjeta--oro' : '') + '" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 190px">' +
      '<span class="esquinas' + (oro ? ' esquinas--mira' : '') + '" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
      '<p class="tarjeta__t">' + titulo + '</p><p class="tarjeta__d">' + texto + '</p></div>';
  }
  Presentacion.diapositiva({
    id: 'guia-objetivos',
    titulo: 'Objetivos del guía virtual',
    seccion: 'Guía virtual',
    tema: 'bone',
    resumen: 'Integrar, narrar, animar, activar y evaluar',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Objetivos', 'Un guía que se ve, se escucha y aparece solo.')}
        <div class="fila" data-anim-grupo="subir" data-intervalo="90" style="margin-top:var(--e-4);gap:var(--e-3);align-items:stretch">
          ${t('Integrar', 'El guía maya dentro de la app iOS con realidad aumentada.', 280)}
          ${t('Narrar', 'Narración pregrabada sincronizada con el guía.', 360)}
          ${t('Animar', 'Gestos y estados sincronizados con la voz.', 440)}
          ${t('Activar', 'Se reproduce solo al acercarse a cada punto.', 520)}
          ${t('Evaluar', 'Audio y sincronía, probados con usuarios.', 600, true)}
        </div>
      </div>
    `
  });
})();

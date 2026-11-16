/* 14 · Título del módulo GPS (ink). Misma plantilla de apertura de módulo que la
   diapositiva de título de arquitectura (26-titulo-tesis): número en recuadro con
   esquinas, el título oficial completo y el pie de la universidad. Es el segundo
   módulo de la presentación, de ahí el 02. Título literal: tesis, portada. */
(function () {
  Presentacion.diapositiva({
    id: 'gps-intro',
    titulo: 'Implementación de módulo de localización',
    seccion: 'Módulo GPS',
    tema: 'ink',
    resumen: 'El título completo del módulo de GPS',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:2.8s"></span>
        <div class="pila">
          <div data-anim="subir" style="--retraso:0ms;position:relative;display:inline-block;padding:.4em 1.1em">
            ${Motivos.esquinas()}
            <p class="cifra" aria-hidden="true" style="margin:0;line-height:1;font-size:5rem">02</p>
          </div>
          <p class="lead" data-anim="subir" style="--retraso:280ms;max-width:62ch;font-size:var(--t-2);color:var(--texto);margin-top:var(--e-3)">Implementación de un módulo de localización en tiempo real con detección de proximidad en iOS implementando Swift y librerías de Google para el Parque Arqueológico Kaminaljuyú.</p>
          ${Deck.fuente('Universidad del Valle de Guatemala · Trabajo de graduación')}
        </div>
      </div>
    `
  });
})();

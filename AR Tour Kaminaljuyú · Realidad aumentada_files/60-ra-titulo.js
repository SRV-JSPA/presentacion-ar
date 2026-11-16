/* Realidad aumentada · Título del trabajo de graduación (ink). Plantilla PPT, p. 21. */
(function () {
  Presentacion.diapositiva({
    id: 'ra-titulo',
    titulo: 'Anclaje de modelos 3D',
    seccion: 'Realidad aumentada',
    tema: 'ink',
    resumen: 'El título completo del trabajo de graduación',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:2.8s"></span>
        <div class="pila">
          <div data-anim="subir" style="--retraso:0ms;position:relative;display:inline-block;padding:.4em 1.1em">
            ${Motivos.esquinas()}
            <p class="cifra" aria-hidden="true" style="margin:0;line-height:1;font-size:5rem">03</p>
          </div>
          <p class="lead" data-anim="subir" style="--retraso:280ms;max-width:56ch;font-size:calc(var(--u)*3.4);color:var(--texto);margin-top:var(--e-3)">Implementación de un sistema de anclaje de modelos 3D rediseñados en Blender, con ARKit y SceneKit, en realidad aumentada para iOS en el Parque Arqueológico Kaminaljuyú.</p>
          ${Deck.fuente('Universidad del Valle de Guatemala · Trabajo de graduación')}
        </div>
      </div>
    `
  });
})();

(function () {
  Presentacion.diapositiva({
    id: 'guia-titulo',
    titulo: 'Guía virtual interactivo',
    seccion: 'Guía virtual',
    tema: 'ink',
    resumen: 'El título completo del trabajo de graduación',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:2.8s"></span>
        <div class="pila">
          <div data-anim="subir" style="--retraso:0ms;position:relative;display:inline-block;padding:.4em 1.1em">
            ${Motivos.esquinas()}
            <p class="cifra" aria-hidden="true" style="margin:0;line-height:1;font-size:5rem">04</p>
          </div>
          <p class="lead" data-anim="subir" style="--retraso:280ms;max-width:62ch;font-size:var(--t-2);color:var(--texto);margin-top:var(--e-3)">Diseño y desarrollo de un guía virtual interactivo con animación y audio con realidad aumentada mediante una aplicación móvil iOS para el Parque Arqueológico Kaminaljuyú.</p>
          ${Deck.fuente('Universidad del Valle de Guatemala · Trabajo de graduación')}
        </div>
      </div>
    `
  });
})();

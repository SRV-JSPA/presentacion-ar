(function () {
  Presentacion.diapositiva({
    id: 'titulo-tesis',
    titulo: 'Implementación de arquitectura modular',
    seccion: 'Ingeniería',
    tema: 'ink',
    resumen: 'El título completo del trabajo de graduación',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:2.8s"></span>
        <div class="pila">
          <div data-anim="subir" style="--retraso:0ms;position:relative;display:inline-block;padding:.4em 1.1em">
            ${Motivos.esquinas()}
            <p class="cifra" aria-hidden="true" style="margin:0;line-height:1;font-size:5rem">01</p>
          </div>
          <p class="lead" data-anim="subir" style="--retraso:280ms;max-width:62ch;font-size:var(--t-2);color:var(--texto);margin-top:var(--e-3)">Implementación de arquitectura modular para la integración de componentes y gestión multilenguaje en una aplicación de realidad aumentada desarrollada en iOS, utilizando Swift y frameworks nativos para el Parque Arqueológico Kaminaljuyú.</p>
          <p class="tarjeta__d" data-anim="subir" style="--retraso:420ms;margin-top:var(--e-2);position:relative;z-index:2;font-size:1.4rem;font-weight:700">Universidad del Valle de Guatemala · Trabajo de graduación</p>
        </div>
      </div>
    `
  });
})();

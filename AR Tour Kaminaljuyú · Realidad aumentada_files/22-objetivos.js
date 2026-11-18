(function () {
  Presentacion.diapositiva({
    id: 'objetivos',
    titulo: 'Objetivos',
    seccion: 'Ingeniería',
    tema: 'ink',
    resumen: 'Diseñar, comunicar, desarrollar, traducir y probar',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Objetivos', 'Diseñar, desarrollar, traducir y probar el sistema.')}
        <div class="fila" data-anim-grupo="subir" data-intervalo="90" style="margin-top:var(--e-4);gap:var(--e-3);align-items:stretch">
          <div class="tarjeta" data-anim="subir" style="--retraso:280ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t" style="font-size:1.7rem">Diseñar</p><p class="tarjeta__d" style="font-size:1.25rem">Una arquitectura modular: módulos, capas y dependencias.</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:360ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t" style="font-size:1.7rem">Comunicar</p><p class="tarjeta__d" style="font-size:1.25rem">Con reglas claras entre módulos.</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:440ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t" style="font-size:1.7rem">Desarrollar</p><p class="tarjeta__d" style="font-size:1.25rem">La aplicación iOS con esa arquitectura, en Swift nativo.</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:520ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t" style="font-size:1.7rem">Traducir</p><p class="tarjeta__d" style="font-size:1.25rem">Con un módulo multilenguaje para español e inglés.</p></div>
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:600ms;flex:1 1 190px"><span class="esquinas esquinas--mira" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t" style="font-size:1.7rem">Probar</p><p class="tarjeta__d" style="font-size:1.25rem">El recorrido completo con usuarios, de inicio a fin.</p></div>
        </div>
      </div>
    `
  });
})();

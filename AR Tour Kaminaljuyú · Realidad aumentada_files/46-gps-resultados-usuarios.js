/* 20 · Resultados: validación con usuarios (ink). 101 participantes, recorrido de
   prueba en el campus de la UVG, instrumento Likert 1–5. Las cuatro afirmaciones del
   módulo (preguntas 10–13) cumplieron ambos criterios de aceptación. tesis §8.8, §8.10. */
(function () {
  function sombra3d(v, f) {
    var a = f ? 55 : 45, b = f ? 28 : 22, d1 = f ? 5 : 3, d2 = f ? 10 : 6;
    return 'box-shadow:' + d1 + 'px ' + d1 + 'px 0 0 color-mix(in srgb,var(' + v + ') ' + a + '%,transparent),' +
      d2 + 'px ' + d2 + 'px 0 0 color-mix(in srgb,var(' + v + ') ' + b + '%,transparent)';
  }
  function tile(pct, media, texto, v, retraso, oro) {
    return '<div class="tarjeta' + (oro ? ' tarjeta--oro' : '') + '" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 150px;padding:var(--e-2) var(--e-3);' + sombra3d(v, oro) + '">' +
      '<p class="cifra" style="font-size:2.3rem;margin:0;color:var(' + v + ')">' + pct + '</p>' +
      '<p class="tarjeta__d" style="margin-top:.2em">' + texto + '</p>' +
      '<p class="mono" style="font-size:var(--t-etiqueta);color:var(--texto-mute);margin-top:.4em">media ' + media + ' / 5</p></div>';
  }

  Presentacion.diapositiva({
    id: 'gps-resultados-usuarios',
    titulo: 'Resultados: usuarios',
    seccion: 'Módulo GPS',
    tema: 'ink',
    resumen: '101 participantes; 93–96% favorable; las 4 dimensiones validadas',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:3s"></span>
        ${Deck.cabeza('Resultados · usuarios', '101 participantes; acuerdo alto y constante.', { sm: true })}
        <p class="texto" data-anim="subir" style="--retraso:200ms;margin-top:var(--e-1)">
          Recorrido de prueba en el campus de la UVG · escala Likert 1–5 · cuatro afirmaciones del módulo.</p>
        <div class="fila" style="margin-top:var(--e-3);gap:var(--e-3);align-items:stretch">
          ${tile('93.1%', '4.63', 'La ubicación coincide con la real', '--app', 280)}
          ${tile('94.1%', '4.66', 'La guía lleva al montículo sin perderse', '--app', 350)}
          ${tile('96.0%', '4.73', 'La llegada se detecta automáticamente', '--acento', 420, true)}
          ${tile('94.1%', '4.71', 'El mapa ayuda a ubicar los montículos', '--app', 490)}
        </div>
        <div class="tarjeta" data-anim="subir" style="--retraso:580ms;margin-top:var(--e-3);padding:var(--e-2) var(--e-3);border-color:color-mix(in srgb,var(--resuelto) 40%,transparent)">
          <p class="tarjeta__d"><b class="resuelto">Las 4 dimensiones validadas.</b>
          Cada una superó los dos criterios: <span class="k">≥ 80%</span> favorable y media <span class="k">≥ 4.0</span>,
          con 13–16 puntos y 0.63–0.73 de margen. La mejor valorada fue la <b style="color:var(--texto)">detección de llegada</b>.</p>
        </div>
        ${Deck.fuente('Encuesta a usuarios, n = 101 · preguntas 10 a 13 del instrumento.')}
      </div>
    `
  });
})();

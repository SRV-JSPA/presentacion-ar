/* Guía virtual · Metodología en cascada (ink). Tesis cap. VII y VII-D. */
(function () {
  function f(n, titulo, texto, retraso, oro) {
    return '<div class="tarjeta' + (oro ? ' tarjeta--oro' : '') + '" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 190px">' +
      '<span class="esquinas' + (oro ? ' esquinas--mira' : '') + '" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
      '<p class="cifra" style="font-size:1.7rem;margin:0">' + n + '</p><p class="tarjeta__t">' + titulo + '</p><p class="tarjeta__d">' + texto + '</p></div>';
  }
  Presentacion.diapositiva({
    id: 'guia-metodologia',
    titulo: 'Metodología: cascada',
    seccion: 'Guía virtual',
    tema: 'ink',
    resumen: 'Cinco fases; cada una entrega el insumo de la siguiente',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Metodología · Cascada', 'Cinco fases en cascada.')}
        <div class="fila" data-anim-grupo="subir" data-intervalo="90" style="margin-top:var(--e-4);gap:var(--e-3);align-items:stretch">
          ${f(1, 'Guiones', 'Investigación de cada punto, en español e inglés.', 260)}
          ${f(2, 'Audio', 'Narración generada con ElevenLabs.', 340)}
          ${f(3, 'Animación', 'El guía sincronizado con InfiniteTalk.', 420)}
          ${f(4, 'Integración', 'Contenido dentro de la app iOS, por ubicación.', 500)}
          ${f(5, 'Validación', 'Pruebas con usuarios.', 580, true)}
        </div>
        <p class="tarjeta__d" data-anim="aparecer" style="--retraso:900ms;position:relative;z-index:2;font-size:1.4rem;font-weight:700">Requisitos claros y puntos de interés definidos desde el inicio.</p>
      </div>
    `
  });
})();

/* Guía virtual · Audio con ElevenLabs (bone). Tesis §VII-A, Fase 2 y conclusiones (1,386 s). */
(function () {
  function onda() {
    var r = Deck.azar(7), barras = '';
    for (var i = 0; i < 48; i++) {
      var env = Math.sin(Math.PI * (i + .5) / 48);
      var h = Math.round(14 + 86 * env * (.35 + .65 * r()));
      barras += '<i style="height:' + h + '%;--i:' + i + '"></i>';
    }
    return '<div class="guia-onda" aria-hidden="true">' + barras + '</div>';
  }
  function chip(t) { return '<span class="guia-chip">' + t + '</span>'; }
  Presentacion.diapositiva({
    id: 'guia-voz',
    titulo: 'Audio: ElevenLabs',
    seccion: 'Guía virtual',
    tema: 'bone',
    resumen: 'La voz del guía, generada con IA en dos idiomas',
    html: `
      <div class="lienzo">
       <div class="fila" style="gap:var(--e-5);align-items:center">
        <div class="pila" style="flex:1 1 320px;gap:var(--e-3)">
          ${Deck.cabeza('Audio · ElevenLabs', 'La voz del guía, generada con IA.')}
          <p class="lead" data-anim="subir" style="--retraso:240ms">Cada guion se convirtió en narración, en <b style="color:var(--texto)">español e inglés</b>.</p>
          <div class="fila" data-anim="subir" style="--retraso:320ms;gap:.5em;flex-wrap:wrap">
            ${chip('velocidad')}${chip('estabilidad')}${chip('similitud')}${chip('estilo')}
          </div>
        </div>
        <div class="pila" style="flex:1 1 300px;gap:var(--e-2)">
          <div data-anim="escala" style="--retraso:300ms;align-self:stretch;width:100%">${onda()}</div>
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:420ms;padding:var(--e-2) var(--e-3)">
            <span class="esquinas esquinas--mira" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
            <p class="cifra" style="font-size:3.6rem;margin:0">1,386 s</p>
            <p class="tarjeta__d">de narración entre ambos idiomas</p>
          </div>
        </div>
       </div>
        ${Deck.fuente('Elegida frente a Google TTS, Amazon Polly, Azure Speech y Murf AI por su naturalidad y control de la voz.')}
      </div>
    `
  });
})();

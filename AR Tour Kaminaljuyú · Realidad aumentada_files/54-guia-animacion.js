/* Guía virtual · Animación con InfiniteTalk (ink). Video real del guía, sin audio.
   Tesis §VI-K, §VII-A y Fase 3. */
(function () {
  var VIDEO = './AR Tour Kaminaljuyú · Realidad aumentada_files/guia-maya.mp4';
  function paso(t, d, retraso, oro) {
    return '<div class="tarjeta' + (oro ? ' tarjeta--oro' : '') + '" data-anim="subir" style="--retraso:' + retraso + 'ms;padding:.7em 1em">' +
      '<p class="tarjeta__t">' + t + '</p><p class="tarjeta__d">' + d + '</p></div>';
  }
  function flecha(retraso) {
    return '<span class="guia-flecha" data-anim="aparecer" style="--retraso:' + retraso + 'ms" aria-hidden="true">↓</span>';
  }
  var video = null;
  Presentacion.diapositiva({
    id: 'guia-animacion',
    titulo: 'Animación: InfiniteTalk',
    seccion: 'Guía virtual',
    tema: 'ink',
    resumen: 'Una imagen y un audio bastan para animar al guía',
    html: `
      <div class="lienzo">
       <div class="fila" style="gap:var(--e-5);align-items:center">
        <div class="pila" style="flex:1 1 320px;gap:var(--e-2)">
          ${Deck.cabeza('Animación · InfiniteTalk', 'Una imagen y un audio: el guía cobra vida.', { sm: true })}
          <div class="pila" style="gap:.35em;margin-top:var(--e-2);max-width:34rem">
            ${paso('Imagen del personaje + audio narrado', 'El insumo: la ilustración maya y la voz de ElevenLabs.', 260)}
            ${flecha(340)}
            ${paso('InfiniteTalk', 'Genera el movimiento a partir del audio, guiado por prompts.', 400)}
            ${flecha(480)}
            ${paso('Labios y gestos sincronizados', 'Cada clip se revisó y se asignó a su punto de interés.', 540, true)}
          </div>
        </div>
        <div style="flex:0 0 auto;margin-right:clamp(0px,8vw,160px);--retraso:300ms" data-anim="escala">
          <div class="telefono" data-ui="oscura" style="--ancho:clamp(200px,23vw,264px)">
            <div class="telefono__pantalla">
              <div class="pantalla" data-ancho="390" data-alto="844" style="background:#fff">
                <video class="guia-video" src="${VIDEO}" muted loop playsinline preload="auto" aria-label="El guía virtual animado"></video>
              </div>
            </div>
          </div>
        </div>
       </div>
        ${Deck.fuente('Elegida frente a SadTalker, Wav2Lip y D-ID por su sincronía labial y gestual.')}
      </div>
    `,
    alEntrar: function (el) {
      video = el.querySelector('.guia-video');
      if (!video) return;
      video.muted = true;
      try { video.currentTime = 0; } catch (e) {}
      if (Deck.quieto()) return;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    },
    alSalir: function () { if (video) video.pause(); }
  });
})();

/* Guía virtual · Dentro de la app (bone). Decisión del recuadro superpuesto y frameworks.
   Tesis §VII-A y §VII-C. */
(function () {
  var DIR = './AR Tour Kaminaljuyú · Realidad aumentada_files/';
  function dec(beneficio, tag, apoyo, color, retraso) {
    return '<div class="gps-dec" data-anim="subir" style="--retraso:' + retraso + 'ms">' +
      '<p class="gps-dec__h"><b style="color:var(' + color + ')">' + beneficio + '</b></p>' +
      '<span class="gps-dec__tag">' + tag + '</span>' +
      '<p class="gps-dec__r">' + apoyo + '</p></div>';
  }
  var video = null;
  Presentacion.diapositiva({
    id: 'guia-app',
    titulo: 'El guía dentro de la app',
    seccion: 'Guía virtual',
    tema: 'bone',
    resumen: 'Un recuadro sobre la cámara; el parque sigue al frente',
    html: `
      <div class="lienzo">
       <div class="fila" style="gap:var(--e-5);align-items:center">
        <div class="pila" style="flex:1 1 340px;gap:var(--e-2)">
          ${Deck.cabeza('En la app', 'Un recuadro sobre la cámara: el parque sigue al frente.', { sm: true })}
          <div class="pila" data-anim-grupo="subir" data-intervalo="80" style="gap:var(--e-2);margin-top:var(--e-2)">
            ${dec('No tapa el sitio', 'Recuadro superpuesto', 'Más simple y estable que anclar un modelo 3D en exteriores.', '--acento', 260)}
            ${dec('Aparece al llegar', 'Core Location', 'Cada punto de interés dispara su narración y animación.', '--app', 340)}
            ${dec('Voz e imagen juntas', 'AVFoundation · ARKit', 'Reproducción del contenido sobre la vista de la cámara.', '--resuelto', 420)}
          </div>
        </div>
        <div style="flex:0 0 auto;margin-right:clamp(0px,8vw,160px)" data-anim="escala">
          <div class="telefono" data-ui="oscura" style="--ancho:clamp(200px,23vw,264px)">
            <div class="telefono__pantalla">
              <div class="pantalla" data-ancho="390" data-alto="844">
                <video class="guia-video" src="${DIR}app-recorrido.mp4" muted loop playsinline preload="auto" aria-label="Grabación de la app: el guía en el recuadro sobre la cámara" style="background:#000"></video>
              </div>
            </div>
          </div>
        </div>
       </div>
        ${Deck.fuente('Swift · Xcode · ARKit · Core Location · AVFoundation')}
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

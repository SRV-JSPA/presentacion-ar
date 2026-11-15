(function () {
  function sombra3d(colorVar, fuerte) {
    var a = fuerte ? 55 : 45, b = fuerte ? 28 : 22, d1 = fuerte ? 5 : 3, d2 = fuerte ? 10 : 6;
    return 'box-shadow:' + d1 + 'px ' + d1 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + a + '%,transparent),' +
      d2 + 'px ' + d2 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + b + '%,transparent)';
  }
  function cifraTile(valor, texto, colorVar, retraso, grande) {
    return '<div class="tarjeta" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 ' + (grande ? 220 : 130) + 'px;padding:' + (grande ? 'var(--e-2)' : '.6em .8em') + ';' + sombra3d(colorVar, grande) + '">' +
      '<p class="cifra" style="font-size:' + (grande ? '2.8rem' : '1.6rem') + ';margin:0;color:var(' + colorVar + ')">' + valor + '</p><p class="tarjeta__d">' + texto + '</p></div>';
  }
  function linea(texto, pct) {
    return '<div class="fila" style="justify-content:space-between;gap:var(--e-2);padding:.4em 0;border-top:1px solid color-mix(in srgb,var(--texto) 14%,transparent)">' +
      '<span class="tarjeta__d" style="flex:1;font-size:var(--t-texto)">' + texto + '</span>' +
      '<span class="tarjeta__t" style="font-size:var(--t-lead)">' + pct + '</span>' +
    '</div>';
  }

  Presentacion.diapositiva({
    id: 'resultados-usuarios',
    titulo: 'Resultados: usuarios y rendimiento',
    seccion: 'Ingeniería',
    tema: 'ink',
    resumen: '95% completó el recorrido, 93.1% en su idioma, microsegundos de costo',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:3s"></span>
        ${Deck.cabeza('Resultados', '95% completó el recorrido; microsegundos de costo.', { sm: true })}
        <div class="fila" style="margin-top:var(--e-3);gap:var(--e-3);align-items:stretch">
          ${cifraTile('95.0%', 'completó el recorrido sin interrupciones', '--resuelto', 240, true)}
          ${cifraTile('93.1%', 'vio todo en el idioma elegido', '--oro-tema', 310, true)}
        </div>
        <div class="tarjeta" data-anim="subir" style="--retraso:390ms;margin-top:var(--e-2);padding:var(--e-2) var(--e-3)">
          ${linea('App fluida, sin trabarse ni congelarse', '91.1% · 4.65')}
          ${linea('Nunca se quedaron esperando sin saber qué pasaba', '91.1% · 4.63')}
          ${linea('El paso entre mapa, RA y guía se sintió natural', '88.1% · 4.60')}
        </div>
        <p class="etiqueta" data-anim="subir" style="--retraso:460ms;margin-top:var(--e-3)">Rendimiento (iOS) · tiempo por operación</p>
        <div class="fila" style="gap:.5em;margin-top:var(--e-1)">
          ${cifraTile('8.4 µs', 'cambiar idioma', '--app', 500, false)}
          ${cifraTile('0.44 µs', 'leer un texto', '--oro-tema', 530, false)}
          ${cifraTile('&lt;1 µs', 'aviso a 4 módulos', '--resuelto', 560, false)}
          ${cifraTile('10.3 µs', 'ruta de 3 puntos', '--app', 590, false)}
        </div>
        ${Deck.fuente('Memoria similar a la versión Android (38–40 MB vs. 42–44 MB) · encuesta a 101 participantes.')}
      </div>
    `
  });
})();

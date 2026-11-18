(function () {
  function sombra3d(colorVar, fuerte) {
    var a = fuerte ? 55 : 45, b = fuerte ? 28 : 22, d1 = fuerte ? 5 : 3, d2 = fuerte ? 10 : 6;
    return 'box-shadow:' + d1 + 'px ' + d1 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + a + '%,transparent),' +
      d2 + 'px ' + d2 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + b + '%,transparent)';
  }
  function cifraTile(valor, texto, colorVar, retraso, grande) {
    return '<div class="tarjeta" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 ' + (grande ? 220 : 160) + 'px;padding:' + (grande ? 'var(--e-2)' : '.7em .9em') + ';' + sombra3d(colorVar, grande) + '">' +
      '<p class="cifra" style="font-size:' + (grande ? '2.8rem' : '2.1rem') + ';margin:0;color:var(' + colorVar + ')">' + valor + '</p><p class="tarjeta__d">' + texto + '</p></div>';
  }
  function linea(texto, pct) {
    return '<div class="fila" style="justify-content:space-between;gap:var(--e-2);padding:.5em 0;border-top:1px solid color-mix(in srgb,var(--texto) 14%,transparent)">' +
      '<span class="tarjeta__d" style="flex:1">' + texto + '</span>' +
      '<span class="tarjeta__t">' + pct + '</span>' +
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
        ${Deck.cabeza('Resultados', '95% completó el recorrido. El costo fue de microsegundos.', { sm: true })}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--e-5);margin-top:var(--e-3)">
          <div>
            <p class="etiqueta" data-anim="subir" style="--retraso:220ms;position:relative;z-index:2">Usuarios · 101 participantes</p>
            <div class="fila" style="margin-top:var(--e-2);gap:var(--e-2);align-items:stretch">
              ${cifraTile('95.0%', 'completó el recorrido', '--resuelto', 260, true)}
              ${cifraTile('93.1%', 'idioma correcto', '--oro-tema', 320, true)}
            </div>
            <div class="tarjeta" data-anim="subir" style="--retraso:390ms;margin-top:var(--e-2);padding:var(--e-2)">
              ${linea('App fluida', '91.1%')}
              ${linea('Nunca esperó sin saber qué pasaba', '91.1%')}
              ${linea('Transición mapa/RA/guía natural', '88.1%')}
            </div>
          </div>
          <div>
            <p class="etiqueta" data-anim="subir" style="--retraso:460ms;position:relative;z-index:2">Rendimiento (iOS)</p>
            <div class="fila" style="flex-wrap:wrap;gap:.5em;margin-top:var(--e-2)">
              ${cifraTile('8.4 µs', 'cambiar idioma', '--app', 500, false)}
              ${cifraTile('0.44 µs', 'leer un texto', '--oro-tema', 530, false)}
              ${cifraTile('&lt;1 µs', 'aviso a 4 módulos', '--resuelto', 560, false)}
              ${cifraTile('10.3 µs', 'ruta de 3 puntos', '--app', 590, false)}
            </div>
            <p class="tarjeta__d" data-anim="subir" style="--retraso:640ms;margin-top:var(--e-2);position:relative;z-index:2;font-size:1.4rem;font-weight:700">Memoria similar a la versión Android (38–40 vs. 42–44 MB).</p>
          </div>
        </div>
      </div>
    `
  });
})();

(function () {
  function sombra3d(colorVar, fuerte) {
    var a = fuerte ? 55 : 45, b = fuerte ? 28 : 22, d1 = fuerte ? 5 : 3, d2 = fuerte ? 10 : 6;
    return 'box-shadow:' + d1 + 'px ' + d1 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + a + '%,transparent),' +
      d2 + 'px ' + d2 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + b + '%,transparent)';
  }
  function cifraTile(valor, texto, colorVar, retraso) {
    return '<div class="tarjeta" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 170px;padding:var(--e-2);' + sombra3d(colorVar, false) + '">' +
      '<p class="cifra" style="font-size:2.6rem;margin:0;color:var(' + colorVar + ')">' + valor + '</p><p class="tarjeta__d">' + texto + '</p></div>';
  }
  function panel(etiqueta, colorVar, pills, retraso) {
    return '<div data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 220px;padding:var(--e-2) var(--e-3);border-radius:var(--r-3);' +
      'background:color-mix(in srgb,var(' + colorVar + ') 16%,var(--fondo));border:1px solid color-mix(in srgb,var(' + colorVar + ') 40%,transparent);' + sombra3d(colorVar, true) + '">' +
      '<p class="etiqueta" style="color:var(' + colorVar + ')">' + etiqueta + '</p>' +
      '<div class="fila" style="gap:.5em;margin-top:var(--e-2)">' + pills + '</div></div>';
  }
  function pill(nombre, n) {
    return '<span class="rotulo" style="font-size:1.25rem;padding:.5em .85em"><b>' + n + '</b> ' + nombre + '</span>';
  }

  Presentacion.diapositiva({
    id: 'resultados-pruebas',
    titulo: 'Resultados: arquitectura y pruebas',
    seccion: 'Ingeniería',
    tema: 'bone',
    resumen: '1.6% de núcleo compartido, 33/33 pruebas aprobadas, 100% traducido',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:3s"></span>
        ${Deck.cabeza('Resultados', 'Una arquitectura pequeña y bien probada.', { sm: true })}
        <div class="fila" style="margin-top:var(--e-3);gap:var(--e-3);align-items:stretch">
          ${cifraTile('1.6%', 'núcleo compartido', '--app', 240)}
          ${cifraTile('33/33', 'pruebas aprobadas', '--oro-tema', 310)}
          ${cifraTile('100%', 'contenido traducido', '--resuelto', 380)}
        </div>
        <div class="fila" style="margin-top:var(--e-3);gap:var(--e-3);align-items:stretch">
          ${panel('Arquitectura · 20 pruebas', '--app',
            pill('Estado del recorrido', 5) + pill('Integración', 4) + pill('Bus de eventos', 3) + pill('Desacoplamiento', 3) + pill('Extremo a extremo', 3) + pill('Flujo simulado', 2), 460)}
          ${panel('Lenguaje · 13 pruebas', '--oro-tema',
            pill('Textos', 6) + pill('Idioma', 4) + pill('Videos', 3), 530)}
        </div>
        <p class="tarjeta__d" data-anim="subir" style="--retraso:600ms;margin-top:var(--e-3);position:relative;z-index:2;font-size:1.4rem;font-weight:700">Solo 125 de 7 616 líneas son núcleo compartido · 52 textos y 16 videos por idioma · XCTest y Swift Testing en Xcode.</p>
      </div>
    `
  });
})();

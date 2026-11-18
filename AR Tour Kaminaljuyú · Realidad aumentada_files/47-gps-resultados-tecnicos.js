/* 21 · Resultados: rendimiento técnico (bone). 15 corridas instrumentadas con
   PerformanceLogger. La métrica perceptual converge con la técnica. Cuatro casos de
   prueba sobre los flujos críticos, todos aprobados. tesis §8.9. */
(function () {
  function sombra3d(v, f) {
    var a = f ? 55 : 45, b = f ? 28 : 22, d1 = f ? 5 : 3, d2 = f ? 10 : 6;
    return 'box-shadow:' + d1 + 'px ' + d1 + 'px 0 0 color-mix(in srgb,var(' + v + ') ' + a + '%,transparent),' +
      d2 + 'px ' + d2 + 'px 0 0 color-mix(in srgb,var(' + v + ') ' + b + '%,transparent)';
  }
  function tile(valor, texto, v, retraso) {
    return '<div class="tarjeta" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 150px;padding:var(--e-2) var(--e-3);' + sombra3d(v, false) + '">' +
      '<p class="cifra" style="font-size:2.4rem;margin:0;color:var(' + v + ')">' + valor + '</p>' +
      '<p class="tarjeta__d" style="margin-top:.2em">' + texto + '</p></div>';
  }
  function cp(id, flujo, retraso) {
    return '<div class="fila" data-anim="subir" style="--retraso:' + retraso + 'ms;justify-content:space-between;gap:var(--e-2);padding:.18em 0;border-top:1px solid color-mix(in srgb,var(--texto) 14%,transparent)">' +
      '<span class="tarjeta__d" style="flex:1"><b class="mono" style="color:var(--texto)">' + id + '</b> · ' + flujo + '</span>' +
      '<span class="chip chip--ok" style="padding:.4em .9em"><span class="punto"></span>Aprobado</span></div>';
  }

  Presentacion.diapositiva({
    id: 'gps-resultados-tecnicos',
    titulo: 'Resultados: rendimiento',
    seccion: 'Módulo GPS',
    tema: 'bone',
    resumen: '99.90% de lecturas aceptadas, microsegundos de cómputo, 4/4 casos',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:3s"></span>
        ${Deck.cabeza('Resultados · técnico', '15 corridas que miden lo que percibe el usuario.', { sm: true })}
        <div class="fila" style="margin-top:var(--e-2);gap:var(--e-3);align-items:stretch">
          ${tile('99.90%', 'lecturas aceptadas (4&nbsp;197 / 4&nbsp;201)', '--resuelto', 280)}
          ${tile('4.97 m', 'precisión media · 97.74% ≤ 5 m', '--app', 350)}
          ${tile('0.0103 ms', 'cálculo Haversine · 11 POIs', '--acento', 420)}
          ${tile('0.993 Hz', 'actualización estable (~1 s)', '--app', 490)}
        </div>
        <div class="tarjeta" data-anim="subir" style="--retraso:560ms;margin-top:var(--e-2);padding:.15em var(--e-3)">
          <p class="etiqueta" style="margin:.12em 0">Casos de prueba · flujos críticos</p>
          ${cp('CP-01', 'Adquisición y descarte de lecturas de baja calidad', 600)}
          ${cp('CP-02', 'Distancia y rumbo a los 11 POIs', 650)}
          ${cp('CP-03', 'Detección de llegada al cruzar los 25 m', 700)}
          ${cp('CP-04', 'Avance secuencial y transiciones del recorrido', 750)}
        </div>
        <p class="tarjeta__d" data-anim="aparecer" style="--retraso:900ms;margin-top:.25em;position:relative;z-index:2;font-size:1.4rem;font-weight:700">Instrumentación PerformanceLogger · 15 corridas controladas.</p>
      </div>
    `
  });
})();

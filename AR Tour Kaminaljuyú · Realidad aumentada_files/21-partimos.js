(function () {
  function sombra3d(colorVar, fuerte) {
    var a = fuerte ? 55 : 45, b = fuerte ? 28 : 22, d1 = fuerte ? 5 : 3, d2 = fuerte ? 10 : 6;
    return 'box-shadow:' + d1 + 'px ' + d1 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + a + '%,transparent),' +
      d2 + 'px ' + d2 + 'px 0 0 color-mix(in srgb,var(' + colorVar + ') ' + b + '%,transparent)';
  }
  function modulo(t, d, colorVar, retraso) {
    var cls = 'tarjeta' + (colorVar === '--oro-tema' ? ' tarjeta--oro' : '');
    return '<div class="' + cls + '" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 130px;padding:var(--e-2);' + sombra3d(colorVar, false) + '">' +
      '<p class="tarjeta__t" style="font-size:var(--t-lead)">' + t + '</p><p class="tarjeta__d">' + d + '</p></div>';
  }
  Presentacion.diapositiva({
    id: 'partimos',
    titulo: '¿De dónde partimos?',
    seccion: 'Ingeniería',
    tema: 'bone',
    resumen: 'De un componente que lo hacía todo en Android, a cuatro módulos en iOS',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Contexto', '¿De dónde partimos?')}
        <div style="margin-top:var(--e-5);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:var(--e-4)">
          <div class="tarjeta" data-anim="subir" style="--retraso:250ms;${sombra3d('--app', true)}">
            ${Motivos.rotulo('ANTES', '', 'rotulo--app')}
            <p class="tarjeta__t" style="margin-top:var(--e-2)">Un solo componente lo hacía casi todo</p>
            <div class="fila" style="gap:var(--e-1);margin-top:var(--e-2)">
              ${['Estado del recorrido','Ruta','Proximidad','Cálculos geográficos','Modelos 3D','Flecha de dirección','Interfaz'].map(function (t) { return Motivos.rotulo(t); }).join('')}
            </div>
            <p class="tarjeta__d" style="margin-top:var(--e-3)">Sin cambio de idioma · difícil trabajar <b>en paralelo</b></p>
          </div>
          <span aria-hidden="true" style="color:var(--acento)"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 6l6 6-6 6"></path></svg></span>
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:380ms;${sombra3d('--oro-tema', true)}">
            ${Motivos.rotulo('DESPUÉS', '', 'rotulo--oro')}
            <p class="tarjeta__t" style="margin-top:var(--e-2)">Arquitectura modular en Swift</p>
            <div class="fila" data-anim-grupo="subir" data-intervalo="90" style="gap:var(--e-2);margin-top:var(--e-2)">
              ${modulo('GPS', 'ubicación y ruta', '--resuelto', 430)}
              ${modulo('Realidad aumentada', 'modelos 3D', '--resuelto', 460)}
              ${modulo('Guía virtual', 'videos y subtítulos', '--resuelto', 490)}
              ${modulo('Lenguaje', 'español e inglés', '--oro-tema', 520)}
            </div>
            <p class="tarjeta__d" style="margin-top:var(--e-3);background:color-mix(in srgb,var(--oro-tema) 12%,transparent);border-radius:var(--r-2,6px);padding:.5em .8em">Núcleo compartido pequeño: bus de eventos + estado del recorrido</p>
            <p class="tarjeta__d" style="margin-top:var(--e-2)">Cada módulo con <b>una sola puerta de entrada</b> · 4 personas en paralelo</p>
          </div>
        </div>
      </div>
    `
  });
})();

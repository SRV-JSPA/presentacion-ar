/* Guía virtual · Resultados (ink). Tesis cap. VIII, Cuadro 1 (Likert 1–5, % positivo = 4 y 5). */
(function () {
  function linea(texto, pct, prom, nota) {
    return '<div class="fila" style="justify-content:space-between;gap:var(--e-2);padding:.45em 0;border-top:1px solid color-mix(in srgb,var(--texto) 14%,transparent)">' +
      '<span class="tarjeta__d" style="flex:1;font-size:var(--t-texto)">' + texto + (nota ? ' <span class="guia-nota">' + nota + '</span>' : '') + '</span>' +
      '<span class="tarjeta__t" style="font-size:var(--t-lead)">' + pct + ' · ' + prom + '</span></div>';
  }
  Presentacion.diapositiva({
    id: 'guia-resultados',
    titulo: 'Resultados del guía virtual',
    seccion: 'Guía virtual',
    tema: 'ink',
    resumen: 'Los cuatro aspectos superaron 4.6 sobre 5',
    html: `
      <div class="lienzo" style="position:relative;overflow:hidden">
        <span class="escaneo escaneo--subir" aria-hidden="true" style="--escaneo-dur:3s"></span>
        ${Deck.cabeza('Resultados', 'Los cuatro aspectos superaron 4.6 sobre 5.', { sm: true })}
        <div class="fila" style="margin-top:var(--e-3);gap:var(--e-4);align-items:stretch">
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:240ms;flex:0 1 230px;padding:var(--e-2) var(--e-3)">
            <span class="esquinas esquinas--mira" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
            <p class="cifra" style="font-size:3.4rem;margin:0">101</p>
            <p class="tarjeta__d">participantes, dentro del Parque Kaminaljuyú</p>
          </div>
          <div class="tarjeta" data-anim="subir" style="--retraso:320ms;flex:1 1 380px;padding:var(--e-2) var(--e-3)">
            ${linea('Tamaño del recuadro', '96.4%', '4.70')}
            ${linea('Claridad del guía en el recuadro', '95.2%', '4.71')}
            ${linea('Experiencia con el guía animado', '90.4%', '4.69')}
            ${linea('Legibilidad del texto', '90.4%', '4.63', 'a mejorar con luz exterior')}
          </div>
        </div>
        ${Deck.fuente('Escala de Likert 1–5 · % de respuestas 4 y 5.')}
      </div>
    `
  });
})();

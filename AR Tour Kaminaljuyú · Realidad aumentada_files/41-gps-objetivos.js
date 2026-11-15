/* 15 · Objetivos del módulo (bone). Los cinco objetivos específicos del módulo GPS,
   condensados a su verbo. Literales en tesis §2.2; la quinta tarjeta (validar) en oro
   porque cierra el ciclo con usuarios. */
(function () {
  function obj(verbo, desc, retraso, oro) {
    return '<div class="tarjeta' + (oro ? ' tarjeta--oro' : '') + '" data-anim="subir" style="--retraso:' + retraso + 'ms;flex:1 1 180px">' +
      '<span class="esquinas' + (oro ? ' esquinas--mira' : '') + '" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
      '<p class="tarjeta__t">' + verbo + '</p><p class="tarjeta__d">' + desc + '</p></div>';
  }

  Presentacion.diapositiva({
    id: 'gps-objetivos',
    titulo: 'Objetivos del módulo',
    seccion: 'Módulo GPS',
    tema: 'bone',
    resumen: 'Geolocalizar, mapear, detectar proximidad, comunicar y validar',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Objetivos', 'Geolocalizar, mapear, detectar, comunicar y validar.')}
        <div class="fila" data-anim-grupo="subir" data-intervalo="90"
             style="margin-top:var(--e-4);gap:var(--e-3);align-items:stretch">
          ${obj('Geolocalizar', 'Rastrear la ubicación del visitante en tiempo real con las librerías nativas de iOS.', 280)}
          ${obj('Mapear', 'Dibujar los 11 puntos de interés y la ruta del tour sobre el mapa.', 360)}
          ${obj('Detectar', 'Calcular la proximidad y determinar automáticamente la llegada a cada montículo.', 440)}
          ${obj('Comunicar', 'Transmitir coordenadas, metadatos y eventos de llegada al módulo de RA.', 520)}
          ${obj('Validar', 'Comprobar todo con pruebas de usuario en dispositivo físico.', 600, true)}
        </div>
        ${Deck.fuente('Objetivos específicos del trabajo de graduación, módulo de GPS y navegación.')}
      </div>
    `
  });
})();

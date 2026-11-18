/* 17 · Decisiones de diseño (bone). Para público mixto: cada decisión se encabeza con
   su beneficio en lenguaje llano y el nombre técnico queda como etiqueta pequeña, para
   que el tribunal lo reconozca sin cargar la diapositiva. tesis §7.3. */
(function () {
  function dec(beneficio, tag, apoyo, color, retraso) {
    return '<div class="gps-dec" data-anim="subir" style="--retraso:' + retraso + 'ms">' +
      '<p class="gps-dec__h"><b style="color:var(' + color + ')">' + beneficio + '</b></p>' +
      '<span class="gps-dec__tag">' + tag + '</span>' +
      '<p class="gps-dec__r">' + apoyo + '</p></div>';
  }

  Presentacion.diapositiva({
    id: 'gps-decisiones',
    titulo: 'Decisiones de diseño',
    seccion: 'Módulo GPS',
    tema: 'bone',
    resumen: 'Cinco decisiones, cada una por un beneficio concreto',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Decisiones', 'Cada tecnología se eligió por un beneficio concreto.', { sm: true })}
        <div class="gps-decs" data-anim-grupo="subir" data-intervalo="80" style="margin-top:var(--e-3)">
          ${dec('Ubicación muy precisa', 'CoreLocation', 'Usa la mejor precisión del teléfono y descarta las señales poco confiables.', '--app', 260)}
          ${dec('Distancias exactas a pie', 'Fórmula de Haversine', 'Precisa a pocos metros y muy rápida de calcular en el teléfono.', '--acento', 340)}
          ${dec('Llegada sin instalar equipo', 'Geofencing propio', 'No hace falta colocar sensores ni antenas dentro del parque.', '--resuelto', 420)}
          ${dec('Un mapa que ya conocen', 'Google Maps', 'Cartografía detallada de Guatemala, familiar para el visitante.', '--app', 500)}
          ${dec('Las partes se avisan solas', 'Combine', 'El GPS notifica al resto de la app justo cuando algo ocurre.', '--acento', 580)}
        </div>
        <p class="tarjeta__d" data-anim="aparecer" style="--retraso:900ms;position:relative;z-index:2;font-size:1.4rem;font-weight:700">Selección y justificación de tecnologías del módulo.</p>
      </div>
    `
  });
})();

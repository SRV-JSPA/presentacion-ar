/* 16 · Metodología (ink). Desarrollo iterativo e incremental en ocho fases: cada una
   deja una capacidad verificable y la siguiente la extiende. El contrato con RA
   (GPSModuleInterface) se definió temprano para avanzar en paralelo. tesis §7.2, §7.6. */
(function () {
  var FASES = [
    ['1', 'Entorno', 'Xcode, CocoaPods y Google Maps SDK; claves fuera del repo'],
    ['2', 'Geolocalización', 'LocationService: CoreLocation + Combine, con filtros de calidad'],
    ['3', 'Datos', 'POILocation y POIRegistry: los 11 puntos de interés'],
    ['4', 'Matemática', 'GeoUtils: distancia Haversine y cálculo de rumbo'],
    ['5', 'Cartografía', 'MapViewRepresentable y RouteConfig: mapa, marcadores y ruta'],
    ['6', 'Proximidad', 'ProximityService: geofencing por software, umbral de 25 m'],
    ['7', 'Recorrido', 'RouteNavigator, TourManager y la fachada GPSModuleInterface'],
    ['8', 'Validación', '101 usuarios en el campus de la UVG', true]
  ];
  function fase(f) {
    return '<div class="gps-fase' + (f[3] ? ' gps-fase--oro' : '') + '" data-anim="subir" style="--retraso:' + (260 + (f[0] - 1) * 55) + 'ms">' +
      '<span class="gps-fase__n">' + f[0] + '</span>' +
      '<div><p class="gps-fase__t">' + f[1] + '</p><p class="gps-fase__d">' + f[2] + '</p></div></div>';
  }

  Presentacion.diapositiva({
    id: 'gps-metodologia',
    titulo: 'Ocho fases incrementales',
    seccion: 'Módulo GPS',
    tema: 'ink',
    resumen: 'Desarrollo iterativo: cada fase deja una capacidad verificable',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Metodología', 'Ocho fases, cada una se apoya en la anterior.', { sm: true })}
        <p class="texto" data-anim="subir" style="--retraso:200ms;margin-top:var(--e-1);max-width:60ch">
          Desarrollo <b style="color:var(--texto)">iterativo e incremental</b>. El contrato con el módulo de RA
          se definió en la fase&nbsp;7, pero se acordó temprano para avanzar en paralelo.</p>
        <div class="gps-fases" data-anim-grupo="subir" data-intervalo="55" style="--retraso:260ms;margin-top:var(--e-3)">
          ${FASES.map(fase).join('')}
        </div>
      </div>
    `
  });
})();

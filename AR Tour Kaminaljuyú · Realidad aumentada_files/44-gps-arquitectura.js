/* 18 · Arquitectura y flujo (ink). La tubería de datos del módulo: de la señal del
   sistema a la fachada que consume el módulo de RA. GPSModuleInterface es el contrato
   (Singleton + Facade): 9 propiedades @Published y 3 publicadores de eventos.
   tesis §7.6 fase 7, §8.7; código FeatureModules/GPSModule. */
(function () {
  var NODOS = [
    ['CoreLocation', 'señal del sistema', ''],
    ['LocationService', 'posición filtrada', 'app'],
    ['GeoUtils', 'distancia y rumbo', 'app'],
    ['ProximityService', 'nivel de cercanía', 'app'],
    ['TourManager', 'estado del recorrido', 'app'],
    ['GPSModuleInterface', 'fachada · contrato', 'oro'],
    ['Módulo de RA', 'coloca el modelo 3D', 'ra']
  ];
  function nodo(n, ultimo) {
    var cls = n[2] === 'oro' ? ' gps-nodo--oro' : n[2] === 'ra' ? ' gps-nodo--ra' : n[2] === 'app' ? ' gps-nodo--app' : '';
    return '<div class="gps-nodo' + cls + '"><p class="gps-nodo__t">' + n[0] + '</p><p class="gps-nodo__d">' + n[1] + '</p></div>' +
      (ultimo ? '' : '<span class="gps-flecha" aria-hidden="true">→</span>');
  }

  Presentacion.diapositiva({
    id: 'gps-arquitectura',
    titulo: 'Arquitectura y flujo',
    seccion: 'Módulo GPS',
    tema: 'ink',
    resumen: 'De la señal a la fachada que consume el módulo de RA',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Arquitectura', 'Una tubería de datos, una fachada como contrato.', { sm: true })}
        <div class="gps-flow" data-anim-grupo="subir" data-intervalo="70" style="margin-top:var(--e-4)">
          ${NODOS.map(function (n, i) { return nodo(n, i === NODOS.length - 1); }).join('')}
        </div>
        <div class="fila" style="margin-top:var(--e-4);gap:var(--e-3);justify-content:center">
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:600ms;flex:0 1 680px;max-width:680px">
            <p class="etiqueta" style="color:var(--acento)">El contrato con RA</p>
            <p class="tarjeta__d" style="margin-top:var(--e-1)">
              <b style="color:var(--texto)">GPSModuleInterface</b> expone
              <b style="color:var(--texto)">9 propiedades</b> reactivas y <b style="color:var(--texto)">3 publicadores</b>
              de eventos. RA consume llegada y estado sin acoplarse a la lógica interna.</p>
          </div>
        </div>
      </div>
    `
  });
})();

/* 14 · Módulo GPS — apertura (ink). El módulo es la capa de datos espaciales:
   ubica al visitante en tiempo real y dispara el contenido en RA al llegar a cada
   montículo. El teléfono recrea la vista real del mapa (MapViewRepresentable +
   MapOverlayView): marcador del usuario (flecha), POIs rojos, objetivo en oro,
   polilínea del recorrido y la tarjeta de navegación con distancia al objetivo.
   Objetivo general: tesis §2.1. */
(function () {
  function mapa() {
    return `
      <div class="gps-map" aria-hidden="true">
        <svg viewBox="0 0 390 560" preserveAspectRatio="xMidYMid slice" class="gps-map__svg">
          <rect x="0" y="0" width="390" height="560" fill="#20262B"/>
          <g stroke="#2E363D" stroke-width="18" fill="none" stroke-linecap="round">
            <path d="M-20 120 L180 160 L300 120 L430 170"/>
            <path d="M60 -20 L90 200 L60 420 L120 600"/>
            <path d="M-20 400 L160 430 L320 380 L430 430"/>
          </g>
          <g stroke="#3A454D" stroke-width="2" fill="none" opacity=".7">
            <path d="M-20 120 L180 160 L300 120 L430 170"/>
            <path d="M60 -20 L90 200 L60 420 L120 600"/>
            <path d="M-20 400 L160 430 L320 380 L430 430"/>
          </g>
          <!-- Polilínea del recorrido (conectores) -->
          <path d="M110 470 L150 360 L120 250 L210 200 L300 150" fill="none"
                stroke="#E6BA62" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".92"/>
          <!-- POIs: rojos; el objetivo en oro -->
          <g>
            <circle cx="150" cy="360" r="7" fill="#D15B33" stroke="#17130F" stroke-width="2"/>
            <circle cx="120" cy="250" r="7" fill="#D15B33" stroke="#17130F" stroke-width="2"/>
            <circle cx="210" cy="200" r="7" fill="#D15B33" stroke="#17130F" stroke-width="2"/>
            <g>
              <circle cx="300" cy="150" r="15" fill="#E6BA62" opacity=".25"/>
              <circle cx="300" cy="150" r="9" fill="#E6BA62" stroke="#17130F" stroke-width="2"/>
            </g>
          </g>
          <!-- Usuario: flecha direccional -->
          <g transform="translate(110 470) rotate(28)">
            <circle r="16" fill="#2E6BE6" opacity=".2"/>
            <path d="M0 -13 L9 11 L0 5 L-9 11 Z" fill="#2E6BE6" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
          </g>
        </svg>
        <div class="gps-nav">
          <div class="gps-nav__dir">↗</div>
          <div class="gps-nav__txt">
            <span class="gps-nav__k">Siguiente · Montículo 7</span>
            <span class="gps-nav__d">A <b>18 m</b> · a la derecha</span>
          </div>
        </div>
      </div>`;
  }

  Presentacion.diapositiva({
    id: 'gps-intro',
    titulo: 'Del GPS a la escena',
    seccion: 'Módulo GPS',
    tema: 'ink',
    transicion: 'giro',
    resumen: 'La capa de datos espaciales que ubica al visitante y dispara la RA',
    html: `
      <div class="lienzo">
       <div class="fila" style="gap:var(--e-5);align-items:center">
        <div class="pila" style="flex:1 1 300px;gap:var(--e-3);min-width:min(100%,320px)">
          ${Deck.cabeza('Módulo GPS', 'Del GPS a la escena.')}
          <p class="lead" data-anim="subir" style="--retraso:240ms">
            Un módulo de <b style="color:var(--texto)">localización en tiempo real con detección de proximidad</b>
            en iOS: ubica al visitante y avisa cuándo llega a cada montículo.</p>
        </div>
        <div style="flex:0 0 auto" data-anim="escala">
          <div class="telefono" data-ui="oscura" style="--ancho:clamp(168px,19vw,206px)">
            <div class="telefono__pantalla">
              <div class="pantalla" data-ancho="390" data-alto="844">
                <div class="estado estado--claro"></div>
                ${mapa()}
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    `
  });
})();

(function () {
  Presentacion.diapositiva({
    id: 'cuatro-modulos',
    titulo: 'Una aplicación, cuatro módulos',
    seccion: 'Ingeniería',
    tema: 'ink',
    resumen: 'GPS, realidad aumentada, guía virtual y lenguaje, cada uno en paralelo',
    html: `
      <div class="lienzo">
        <div class="pila" style="max-width:68ch">
          ${Deck.cabeza('Arquitectura', 'Una aplicación, cuatro módulos.')}
        </div>
        <div class="fila" data-anim-grupo="subir" data-intervalo="110" style="margin-top:var(--e-5);gap:var(--e-4)">
          <div class="tarjeta" data-anim="subir" style="--retraso:300ms;flex:1 1 200px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t">GPS</p><p class="tarjeta__d">Ubicación y ruta</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:400ms;flex:1 1 200px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t">Realidad aumentada</p><p class="tarjeta__d">Modelos 3D</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:500ms;flex:1 1 200px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t">Guía virtual</p><p class="tarjeta__d">Videos y subtítulos</p></div>
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:600ms;flex:1 1 200px"><span class="esquinas esquinas--mira" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="tarjeta__t">Lenguaje</p><p class="tarjeta__d">Español e inglés</p></div>
        </div>
        ${Deck.fuente('Lenguaje · GPS · Realidad aumentada · Guía virtual. Cada integrante del equipo desarrolló uno, en paralelo.')}
      </div>
    `
  });
})();

(function () {
  Presentacion.diapositiva({
    id: 'resultados',
    titulo: 'Resultados',
    seccion: 'Ingeniería',
    tema: 'bone',
    resumen: '1.6% de núcleo compartido, 33/33 pruebas, 93.1% conformes con el idioma',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Resultados', 'Una arquitectura que no cuesta nada notar.')}
        <div class="fila" data-anim-grupo="subir" data-intervalo="110" style="margin-top:var(--e-5);gap:var(--e-4)">
          <div class="tarjeta" data-anim="subir" style="--retraso:300ms;flex:1 1 180px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra">1.6%</p><p class="tarjeta__d">del código es el núcleo compartido entre módulos</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:410ms;flex:1 1 180px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra">33/33</p><p class="tarjeta__d">pruebas automatizadas aprobadas</p></div>
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:520ms;flex:1 1 180px"><span class="esquinas esquinas--mira" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra">93.1%</p><p class="tarjeta__d">de los usuarios vio todo el contenido en su idioma elegido</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:630ms;flex:1 1 180px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra cifra--mono">10.3 µs</p><p class="tarjeta__d">para procesar un recorrido completo</p></div>
        </div>
        ${Deck.fuente('Encuesta a 101 participantes del campus · pruebas con Swift Testing y XCTest.')}
      </div>
    `
  });
})();

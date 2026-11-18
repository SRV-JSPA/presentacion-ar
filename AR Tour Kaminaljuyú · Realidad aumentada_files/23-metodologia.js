(function () {
  Presentacion.diapositiva({
    id: 'metodologia',
    titulo: 'Metodología',
    seccion: 'Ingeniería',
    tema: 'bone',
    resumen: 'Cinco fases, cada una apoyada en la anterior',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Metodología', 'Cinco fases en cascada.')}
        <div class="fila" data-anim-grupo="subir" data-intervalo="90" style="margin-top:var(--e-4);gap:var(--e-3);align-items:stretch">
          <div class="tarjeta" data-anim="subir" style="--retraso:260ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra" style="font-size:2rem;margin:0">1</p><p class="tarjeta__t" style="font-size:1.7rem">Diseño</p><p class="tarjeta__d" style="font-size:1.25rem">Analizar la app Android y dividirla en módulos.</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:340ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra" style="font-size:2rem;margin:0">2</p><p class="tarjeta__t" style="font-size:1.7rem">Comunicación</p><p class="tarjeta__d" style="font-size:1.25rem">Reglas entre módulos, bus de eventos y estado compartido.</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:420ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra" style="font-size:2rem;margin:0">3</p><p class="tarjeta__t" style="font-size:1.7rem">Desarrollo</p><p class="tarjeta__d" style="font-size:1.25rem">Integración del trabajo de los cuatro en Xcode.</p></div>
          <div class="tarjeta" data-anim="subir" style="--retraso:500ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra" style="font-size:2rem;margin:0">4</p><p class="tarjeta__t" style="font-size:1.7rem">Multilenguaje</p><p class="tarjeta__d" style="font-size:1.25rem">Textos y videos en español e inglés, con pruebas automatizadas.</p></div>
          <div class="tarjeta tarjeta--oro" data-anim="subir" style="--retraso:580ms;flex:1 1 190px"><span class="esquinas" aria-hidden="true"><i></i><i></i><i></i><i></i></span><p class="cifra" style="font-size:2rem;margin:0">5</p><p class="tarjeta__t" style="font-size:1.7rem">Pruebas</p><p class="tarjeta__d" style="font-size:1.25rem">Validación con 101 usuarios en el campus.</p></div>
        </div>
      </div>
    `
  });
})();

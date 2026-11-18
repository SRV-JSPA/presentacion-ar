/* Realidad aumentada · Rediseño de los montículos (bone). Plantilla PPT, p. 22.
   En lugar de la captura de Blender se muestra el modelo real de la app (Monticulo3.obj)
   en el visor 3D del deck; arrastrar gira y la rueda escala. */
(function () {
  var visor = null;
  Presentacion.diapositiva({
    id: 'ra-rediseno',
    titulo: 'Rediseño de los montículos',
    seccion: 'Realidad aumentada',
    tema: 'bone',
    resumen: 'Mapeo UV en Blender para que la textura de piedra se ajuste a cada cara',
    html: `
      <div class="lienzo">
        <div class="ra-dos">
          <div class="pila" style="gap:var(--e-3)">
            ${Deck.cabeza('Rediseño en Blender', 'Los montículos se rediseñaron en Blender.', { sm: true })}
            <p class="lead" data-anim="subir" style="--retraso:240ms">
              En la <b style="color:var(--texto)">vista UV</b> de Blender, el mapeo UV despliega la malla de la
              pirámide sobre la textura. Así se comprueba que la imagen de piedra se ajuste
              correctamente a <b style="color:var(--texto)">cada cara del modelo 3D</b>.</p>
            <ul class="lista" data-anim-grupo="subir" data-intervalo="90" style="--retraso:380ms">
              <li><span><b>Modelado:</b> ajuste de la geometría de cada estructura</span></li>
              <li><span><b>Texturizado:</b> mapeo UV de la textura de piedra</span></li>
              <li><span><b>Exportación:</b> un archivo <span class="k">.obj</span> por punto del recorrido</span></li>
            </ul>
          </div>
          <div class="ra-uv-par">
            <figure class="ra-uv" data-anim="subir" style="--retraso:200ms">
              <img src="./AR Tour Kaminaljuyú · Realidad aumentada_files/ra-uv-c-ii-3.jpg?v=1"
                   alt="Mapa UV de un nivel del montículo C-II-3 desplegado sobre la textura de piedra">
              <figcaption class="ra-pie">Mapa UV · un nivel de la pirámide sobre ColoBase.jpeg</figcaption>
            </figure>
            <span class="ra-flecha" aria-hidden="true">→</span>
            <div class="ra-uv-3d" data-anim="escala" style="--retraso:100ms">
              <div class="ra-marco" data-sin-deslizar>
                <div class="ra-visor"></div>
                ${Motivos.esquinas()}
              </div>
              <p class="ra-pie">Monticulo3.obj · modelo en la app</p>
            </div>
          </div>
        </div>
      </div>
    `,
    alEntrar: function (el) {
      if (!visor) {
        visor = Visor3D.crear(el.querySelector('.ra-visor'), {
          modelo: 'm3', tono: 'bone', niveles: 10, giro: .8, inclinacion: .5, velocidad: .12,
          encuadre: 1.1, escalar: true,
          interactivo: !(window.matchMedia && matchMedia('(hover: none) and (pointer: coarse)').matches)
        });
      }
      visor.medir();
      if (Deck.quieto()) { visor.final({ curvas: .12 }); return; }
      visor.revelar({ retraso: 250, curvas: .12 });
      visor.iniciar();
    },
    alSalir: function () { if (visor) { visor.detener(); visor.cancelar(); } }
  });
})();

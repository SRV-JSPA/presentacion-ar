/* Realidad aumentada · Interacción con los modelos 3D (bone). Plantilla PPT, p. 27.
   Límites: traslación en Y de −1 a 1 m respecto al anclaje; escala de 0.1 a 5.0. */
(function () {
  function item(n, titulo, desc, clase, retraso, lim) {
    return '<div class="tarjeta ra-item" data-anim="subir" style="--retraso:' + retraso + 'ms">' +
      '<span class="ra-n' + (clase ? ' ra-n--' + clase : '') + '">' + n + '</span>' +
      '<div><p class="tarjeta__t">' + titulo + '</p><p class="tarjeta__d">' + desc + '</p>' +
      (lim ? '<span class="ra-lim">' + lim + '</span>' : '') + '</div></div>';
  }

  Presentacion.diapositiva({
    id: 'ra-interaccion',
    titulo: 'Interacción con los modelos 3D',
    seccion: 'Realidad aumentada',
    tema: 'bone',
    resumen: 'Pellizco para escalar, deslizar para subir o bajar, caminar para explorar',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Interacción', 'Interacción con los modelos 3D.', { sm: true })}
        <div class="ra-rejilla" style="margin-top:var(--e-4)">
          ${item('01', 'Gestos a utilizar', 'El escalado se hace con el <b style="color:var(--texto)">pellizco con dos dedos</b> y la traslación vertical con un <b style="color:var(--texto)">deslizamiento</b> del dedo hacia arriba o hacia abajo.', '', 260)}
          ${item('02', 'Traslación vertical', 'El gesto desplaza el nodo del modelo en el eje Y respecto a su posición de anclaje. Al llegar al límite el modelo no se mueve más y conserva su estabilidad espacial.', 'oro', 340, 'eje Y · −1 m a 1 m')}
          ${item('03', 'Exploración caminando', 'Sin rotación manual: el modelo conserva la orientación real y el turista lo explora caminando a su alrededor.', 'app', 420)}
          ${item('04', 'Escalamiento del modelo', 'El reconocedor de gestos nativo de iOS detecta el pellizco y aplica el factor de escala al nodo en SceneKit, para que el modelo crezca en pasos graduales y no de golpe.', 'ok', 500, 'escala · 0.1× a 5.0×')}
        </div>
      </div>
    `
  });
})();

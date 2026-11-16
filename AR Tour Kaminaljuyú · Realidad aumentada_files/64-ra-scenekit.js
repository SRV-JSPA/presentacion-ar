/* Realidad aumentada · Posicionamiento de modelos con SceneKit (bone). Plantilla PPT, p. 26.
   El tercer paso no tenía título en la plantilla («Tercer concepto»); aquí se titula por lo que hace. */
(function () {
  function paso(letra, titulo, tag, desc, clase, retraso) {
    return '<div class="tarjeta ra-paso" data-anim="subir" style="--retraso:' + retraso + 'ms">' +
      '<span class="ra-n' + (clase ? ' ra-n--' + clase : '') + '">' + letra + '</span>' +
      '<p class="tarjeta__t">' + titulo + '</p><span class="tag">' + tag + '</span>' +
      '<p class="tarjeta__d">' + desc + '</p></div>';
  }
  var F = '<span class="ra-flecha" aria-hidden="true">→</span>';

  Presentacion.diapositiva({
    id: 'ra-scenekit',
    titulo: 'Posicionamiento con SceneKit',
    seccion: 'Realidad aumentada',
    tema: 'bone',
    resumen: 'Del archivo .obj al modelo dibujado sobre la cámara',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('SceneKit', 'Posicionamiento de los modelos.', { sm: true })}
        <div class="ra-pasos" style="margin-top:var(--e-4)">
          ${paso('A', 'Modelos en formato .obj', 'Blender → app', 'Se cargan los modelos 3D rediseñados en Blender, uno por cada punto.', '', 260)}
          ${F}
          ${paso('B', 'Nodos en la escena', 'SceneKit', 'Cada modelo se agrega a la escena de SceneKit como un nodo y se asocia a la ubicación de su punto.', 'oro', 360)}
          ${F}
          ${paso('C', 'Dibujo sobre la cámara', 'ARKit + SceneKit', 'SceneKit dibuja el modelo sobre la imagen de la cámara, en la posición definida por ARKit y alineado con el entorno físico.', 'ok', 460)}
        </div>
      </div>
    `
  });
})();

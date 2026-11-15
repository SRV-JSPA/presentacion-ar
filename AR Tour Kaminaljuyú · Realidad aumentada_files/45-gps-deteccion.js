/* 19 · Cómo sabe que llegaste (bone). El corazón del módulo, en lenguaje llano para
   público mixto: limpia la señal, corrige el margen de error y avisa a 25 m. La escala
   va de lejos a la llegada. Respaldo técnico: tesis §7.6 fase 6, §8.6;
   código ProximityService / GeoUtils / AppConfig. */
(function () {
  var NIVELES = [
    ['Llegó', '≤ 25 m', 'Aparece el contenido en realidad aumentada', 'oro'],
    ['Cerca', '25 – 60 m', 'La app anticipa la llegada', 'app'],
    ['Visible', '60 – 150 m', 'El montículo ya está cerca', ''],
    ['Lejos', '> 150 m', 'Te guía con distancia y dirección', '']
  ];
  function nivel(n) {
    var cls = n[3] ? ' gps-niv--' + n[3] : '';
    return '<div class="gps-niv' + cls + '" data-anim="subir">' +
      '<span class="gps-niv__punto"></span>' +
      '<span class="gps-niv__nombre">' + n[0] + '</span>' +
      '<span class="gps-niv__rango mono">' + n[1] + '</span>' +
      '<span class="gps-niv__que">' + n[2] + '</span></div>';
  }

  Presentacion.diapositiva({
    id: 'gps-deteccion',
    titulo: 'Cómo sabe que llegaste',
    seccion: 'Módulo GPS',
    tema: 'bone',
    resumen: 'Limpia la señal, corrige el margen y avisa a 25 metros',
    html: `
      <div class="lienzo">
       <div class="fila" style="gap:var(--e-5);align-items:stretch">
        <div class="pila" style="flex:1 1 280px;gap:var(--e-3)">
          ${Deck.cabeza('Llegada', 'Sabe que llegaste, sin que toques nada.', { sm: true })}
          <ol class="gps-pasos" data-anim-grupo="subir" data-intervalo="90" style="--retraso:260ms">
            <li><b>Limpia la señal.</b> Descarta las lecturas de GPS poco confiables.</li>
            <li><b>Corrige el margen.</b> Ajusta la distancia según el error del propio GPS.</li>
            <li><b>Avisa al llegar.</b> Cuando estás a <span class="k">25 m</span> del montículo, una sola vez.</li>
          </ol>
        </div>
        <div class="pila" style="flex:1 1 320px;gap:var(--e-2);justify-content:center">
          <p class="etiqueta" data-anim="subir" style="--retraso:300ms">De lejos a la llegada</p>
          <div class="gps-escala" data-anim-grupo="subir" data-intervalo="80" style="--retraso:340ms">
            ${NIVELES.map(nivel).join('')}
          </div>
        </div>
       </div>
      </div>
    `
  });
})();

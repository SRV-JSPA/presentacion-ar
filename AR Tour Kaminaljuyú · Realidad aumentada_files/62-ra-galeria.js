/* Realidad aumentada · Galería de modelos (bone). Plantilla PPT, p. 23.
   Los seis modelos (montículos 3, 7, 12, 13, 14 y La Palangana) se dibujan con el visor 3D a partir
   de sus .obj reales (window.Modelos; fuentes en monticulos/Models). */
(function () {
  var DIR = './AR Tour Kaminaljuyú · Realidad aumentada_files/';
  var PIEZAS = [
    { nombre: 'Montículo 13', modelo: 'm13', giro: .8 },
    { nombre: 'Montículo 12', modelo: 'm12', giro: 2.35 },
    { nombre: 'Montículo 3', modelo: 'm3', giro: .8 },
    { nombre: 'Montículo 7', modelo: 'm7', giro: .8 },
    { nombre: 'Montículo 14', modelo: 'm14', giro: .9 },
    { nombre: 'La Palangana', modelo: 'palangana', giro: .6, incl: .8 }
  ];
  var visores = [];

  function pieza(p, i) {
    var vista = p.modelo
      ? '<div class="ra-visor" data-i="' + i + '"></div>'
      : '<img src="' + DIR + p.img + '" alt="' + p.nombre + '" onerror="this.closest(\'.ra-pieza\').classList.add(\'ra-pieza--sin\')">' +
        '<span class="ra-pieza__falta" aria-hidden="true"></span>';
    return '<figure class="ra-pieza" style="margin:0"><div class="ra-pieza__vista">' + vista + '</div>' +
      '<figcaption class="ra-pieza__t">' + p.nombre + '</figcaption></figure>';
  }

  Presentacion.diapositiva({
    id: 'ra-galeria',
    titulo: 'Galería de modelos',
    seccion: 'Realidad aumentada',
    tema: 'bone',
    resumen: 'Los montículos rediseñados que se colocan en realidad aumentada',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Galería', 'Los modelos del recorrido.', { sm: true })}
        <div class="ra-galeria" data-anim-grupo="subir" data-intervalo="80" style="margin-top:var(--e-3)">
          ${PIEZAS.map(pieza).join('')}
        </div>
      </div>
    `,
    alEntrar: function (el) {
      PIEZAS.forEach(function (p, i) {
        if (!p.modelo) return;
        if (!visores[i]) {
          visores[i] = Visor3D.crear(el.querySelector('.ra-visor[data-i="' + i + '"]'), {
            modelo: p.modelo, tono: 'bone', niveles: 8, giro: p.giro, inclinacion: p.incl || .55, velocidad: .1,
            encuadre: 1.05, interactivo: false, suelo: false, grosor: 1.1, grosorCurvas: 1
          });
        }
        var v = visores[i];
        v.medir();
        if (Deck.quieto()) { v.final({ curvas: 0 }); return; }
        v.revelar({ retraso: 200 + i * 120, curvas: 0 });
        v.iniciar();
      });
    },
    alSalir: function () { visores.forEach(function (v) { if (v) { v.detener(); v.cancelar(); } }); }
  });
})();

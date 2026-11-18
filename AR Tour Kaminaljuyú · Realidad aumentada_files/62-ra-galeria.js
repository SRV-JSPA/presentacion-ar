/* Realidad aumentada · Galería de modelos (bone). Plantilla PPT, p. 23.
   Renders con textura de los seis modelos (ra-gal-*.png, recortados de la galería de la plantilla).
   Códigos C-II-x según el trabajo de graduación (§4.1.4); La Palangana es la Estructura E. */
(function () {
  var DIR = './AR Tour Kaminaljuyú · Realidad aumentada_files/';
  var PIEZAS = [
    { codigo: 'C-II-13', nombre: 'Montículo 13', img: 'ra-gal-m13.png' },
    { codigo: 'C-II-12', nombre: 'Montículo 12', img: 'ra-gal-m12.png' },
    { codigo: 'C-II-3', nombre: 'Montículo 3', img: 'ra-gal-m3.png' },
    { codigo: 'C-II-7', nombre: 'Montículo 7', img: 'ra-gal-m7.png' },
    { codigo: 'C-II-14', nombre: 'Montículo 14', img: 'ra-gal-m14.png' },
    { codigo: 'Estructura E', nombre: 'La Palangana', img: 'ra-gal-palangana.png' }
  ];

  function pieza(p) {
    return '<figure class="ra-pieza" style="margin:0">' +
      '<div class="ra-pieza__vista"><img src="' + DIR + p.img + '?v=1" alt="Modelo 3D de ' + p.nombre + '" loading="lazy"></div>' +
      '<figcaption class="ra-pieza__t">' + p.nombre + ' <span class="ra-pieza__c">' + p.codigo + '</span></figcaption></figure>';
  }

  Presentacion.diapositiva({
    id: 'ra-galeria',
    titulo: 'Galería de modelos',
    seccion: 'Realidad aumentada',
    tema: 'bone',
    resumen: 'Los montículos rediseñados que se colocan en realidad aumentada',
    html: `
      <div class="lienzo">
        ${Deck.cabeza('Galería', 'Los modelos del recorrido', { sm: true })}
        <div class="ra-galeria" data-anim-grupo="subir" data-intervalo="80" style="margin-top:var(--e-3)">
          ${PIEZAS.map(pieza).join('')}
        </div>
      </div>
    `
  });
})();

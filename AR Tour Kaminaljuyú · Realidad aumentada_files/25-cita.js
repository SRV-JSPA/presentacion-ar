(function () {
  Presentacion.diapositiva({
    id: 'cita',
    titulo: 'Una idea final',
    seccion: 'Ingeniería',
    tema: 'bone',
    resumen: 'El orden interno de una aplicación es lo que le permite crecer sin romperse',
    html: `
      <div class="lienzo" style="align-items:center;text-align:center">
        <div class="pila" style="align-items:center;max-width:52ch;margin:0 auto">
          <p aria-hidden="true" data-anim="subir" style="--retraso:0ms;font-size:3.4rem;line-height:1;color:var(--acento);margin:0">&ldquo;</p>
          <blockquote class="titular" data-anim="subir" style="--retraso:150ms;margin:0;max-width:none;text-align:center">El orden interno de una aplicación es lo que le permite crecer sin romperse.</blockquote>
        </div>
      </div>
    `
  });
})();

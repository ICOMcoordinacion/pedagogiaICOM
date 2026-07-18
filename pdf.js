// Generación de "PDF" a partir de las materias seleccionadas.
// Ya NO usa html2pdf.js / html2canvas: construye el contenido en un
// contenedor oculto (#printRoot) y usa el motor de paginación nativo del
// navegador (window.print -> Guardar como PDF). Los estilos de impresión
// viven en print.css (cargado con media="print" en el HTML), que usa
// @page y break-inside/break-before reales: el navegador pagina el
// contenido de verdad, por lo que no hay cortes de texto ni hojas en
// blanco espurias como ocurría con la captura por canvas.

function generarPDF(materias, fileName) {
  const fecha = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  const printRoot = document.getElementById('printRoot');
  if (!printRoot) {
    alert('No se encontró el contenedor de impresión.');
    return;
  }

  // ---------- Portada + índice ----------
  let html = `
    <div class="pr-portada">
      <span class="pr-badge">Plan de estudios</span>
      <h1>Licenciatura en Pedagogía</h1>
      <div class="pr-inst">INSTITUTO COMERCIAL MÉXICO</div>
      <div class="pr-meta">
        <div>Documento generado: ${fecha}</div>
        <div>Materias incluidas: ${materias.length}</div>
      </div>
      <div class="pr-toc-title">Contenido</div>
      <div>
  `;
  materias.forEach((m, idx) => {
    html += `
      <div class="pr-toc-item">
        <span class="num">${String(idx + 1).padStart(2, '0')}</span>
        <span class="nombre">${m.nombre}</span>
        <span class="cuatri">${m.clave} · ${m.cuatrimestre}</span>
      </div>
    `;
  });
  html += `</div></div>`;

  // ---------- Una página por materia ----------
  materias.forEach((m, idx) => {
    html += `<div class="pr-materia"><div class="pr-body">`;
    html += `
      <div class="pr-header">
        <div class="pr-doctype"><span>Asignatura · ${m.cuatrimestre}</span><span>${String(idx + 1).padStart(2, '0')} / ${materias.length}</span></div>
        <h2>${m.nombre}</h2>
        <span class="pr-tag">${m.clave}</span>
      </div>
    `;

    if (m.objetivo && m.objetivo !== 'No especificado en el documento fuente.') {
      html += `<div class="pr-objetivo"><strong>Objetivo general</strong>${m.objetivo}</div>`;
    }

    if (m.temas && m.temas.length) {
      html += `<div class="pr-section-title">Temas y subtemas</div>`;
      m.temas.forEach(t => {
        html += `<div class="pr-tema"><span class="pr-titulo">${t.titulo}</span><ul>`;
        t.items.forEach(item => { html += `<li>${item}</li>`; });
        html += `</ul></div>`;
      });
    }

    html += `</div>`; // cierra .pr-body

    html += `
      <div class="pr-footer">
        <span>Instituto Comercial México · Licenciatura en Pedagogía</span>
        <span>${m.clave}</span>
      </div>
    `;
    html += `</div>`; // cierra .pr-materia
  });

  printRoot.innerHTML = html;

  // El navegador usa document.title como nombre sugerido al "Guardar como PDF"
  const tituloPrevio = document.title;
  document.title = fileName;

  const restaurar = () => {
    document.title = tituloPrevio;
    window.removeEventListener('afterprint', restaurar);
  };
  window.addEventListener('afterprint', restaurar);

  // Pequeño margen para que el navegador termine de aplicar el layout
  // antes de abrir el diálogo de impresión.
  setTimeout(() => window.print(), 50);
}

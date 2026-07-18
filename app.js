// Lógica de la interfaz: navegación, dashboard, filtro y render de contenido
// Depende de: data.js (objeto 'datos'), pdf.js (función generarPDF)

  const navCuatrimestres = document.getElementById('navCuatrimestres');
  const navMaterias = document.getElementById('navMaterias');
  const panelPrincipal = document.getElementById('panelPrincipal');
  const secBadge = document.getElementById('secBadge');
  const secTitle = document.getElementById('secTitle');
  const secSubtitle = document.getElementById('secSubtitle');
  const sidebarSecundario = document.getElementById('sidebarSecundario');

  let cuatrimestreActivo = null;
  let materiaActiva = null;

  // Construir navegación de cuatrimestres + Inicio
  function renderCuatrimestres() {
    navCuatrimestres.innerHTML = '';
    // Item Inicio
    const inicioDiv = document.createElement('div');
    inicioDiv.className = 'nav-item';
    inicioDiv.dataset.cuatrimestre = 'inicio';
    inicioDiv.innerHTML = `<span class="nav-dot"></span> Inicio`;
    inicioDiv.addEventListener('click', () => {
      seleccionarInicio();
    });
    navCuatrimestres.appendChild(inicioDiv);

    // Cuatrimestres 1-9
    for (let i = 1; i <= 9; i++) {
      const info = datos[i];
      const div = document.createElement('div');
      div.className = 'nav-item';
      div.dataset.cuatrimestre = i;
      const badge = document.createElement('span');
      badge.className = 'badge-materias';
      badge.textContent = info && info.materias ? info.materias.length : 0;
      div.innerHTML = `<span class="nav-dot"></span> Cuatrimestre ${i}`;
      div.appendChild(badge);
      div.addEventListener('click', () => {
        seleccionarCuatrimestre(i);
      });
      navCuatrimestres.appendChild(div);
    }
  }

  // Seleccionar Inicio
  function seleccionarInicio() {
    document.querySelectorAll('#navCuatrimestres .nav-item').forEach(el => {
      el.classList.remove('active');
      if (el.dataset.cuatrimestre === 'inicio') el.classList.add('active');
    });
    sidebarSecundario.classList.add('hidden');
    mostrarDashboard();
    cuatrimestreActivo = null;
    materiaActiva = null;
    panelPrincipal.scrollTop = 0;
  }

  // Mostrar dashboard de inicio
  function mostrarDashboard() {
    let totalMaterias = 0;
    for (let i = 1; i <= 9; i++) {
      if (datos[i]) totalMaterias += datos[i].materias.length;
    }
    const html = `
      <div class="doc-header">
        <div class="doc-type">Panel de control</div>
        <div class="doc-title">Plan de estudios · 9 cuatrimestres</div>
        <div class="doc-sub">INSTITUTO COMERCIAL MÉXICO · Licenciatura en Pedagogía</div>
      </div>
      <div class="section-title">Resumen general</div>
      <div class="dashboard-grid">
        <div class="dashboard-card"><div class="numero">9</div><div class="etiqueta">Cuatrimestres</div></div>
        <div class="dashboard-card"><div class="numero">${totalMaterias}</div><div class="etiqueta">Asignaturas totales</div></div>
        <div class="dashboard-card"><div class="numero">—</div><div class="etiqueta">PDFs generados</div></div>
        <div class="dashboard-card"><div class="numero">📋</div><div class="etiqueta">Filtro por temario</div></div>
      </div>

      <div class="filter-section">
        <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin-bottom:12px;">
          <input type="text" id="filterInput" class="filter-input" placeholder="Buscar por nombre, clave o contenido..." style="flex:1; min-width:200px; margin-bottom:0;">
          <span style="font-size:13px; color:#666;" id="resultCount"></span>
          <button class="select-all-btn" id="selectAllBtn">Seleccionar todos</button>
          <button class="select-all-btn" id="deselectAllBtn">Deseleccionar todos</button>
        </div>
        <div id="materiasFilterContainer" style="max-height:300px; overflow-y:auto; border:1px solid #eee; border-radius:4px; padding:8px 12px; background:#fff;">
          <!-- Aquí se renderizan las materias filtradas -->
        </div>
        <div class="pdf-actions">
          <input type="text" id="pdfNameInput" placeholder="Nombre del archivo PDF" value="plan_estudios" />
          <label style="display:flex; align-items:center; gap:6px; font-size:12px; color:#555; white-space:nowrap;">
            <input type="checkbox" id="soloContenidoCheck"> Solo temas y subtemas
          </label>
          <button class="btn-pdf" id="generarPdfBtn">Generar PDF</button>
          <span class="seleccionadas-info" id="selectedCount">0 seleccionadas</span>
          <span class="seleccionadas-info" style="display:block;width:100%;margin-top:6px;">Se abrirá el diálogo de impresión: selecciona "Guardar como PDF" como destino.</span>
        </div>
      </div>

      <div style="margin-top:32px;padding:20px;background:#f7f7f7;border-radius:6px;border:1px solid #e8e8e8;">
        <p style="font-size:14px;color:#444;"><strong>Funcionalidad:</strong> Filtra materias, selecciona las que desees y genera un PDF con todo su contenido.</p>
        <p style="font-size:13px;color:#888;margin-top:6px;">Selecciona un cuatrimestre en el menú lateral para explorar las materias de forma individual.</p>
      </div>
    `;
    panelPrincipal.innerHTML = html;

    // Inicializar eventos del dashboard
    const filterInput = document.getElementById('filterInput');
    const container = document.getElementById('materiasFilterContainer');
    const resultCount = document.getElementById('resultCount');
    const selectAllBtn = document.getElementById('selectAllBtn');
    const deselectAllBtn = document.getElementById('deselectAllBtn');
    const generarBtn = document.getElementById('generarPdfBtn');
    const pdfNameInput = document.getElementById('pdfNameInput');
    const selectedCount = document.getElementById('selectedCount');

    // Obtener todas las materias (aplanar)
    function getAllMaterias() {
      const list = [];
      for (const cuatriKey in datos) {
        const cuatri = datos[cuatriKey];
        for (const mat of cuatri.materias) {
          list.push({
            ...mat,
            cuatrimestre: cuatri.nombre,
            cuatrimestreNum: parseInt(cuatriKey)
          });
        }
      }
      return list;
    }

    const todasLasMaterias = getAllMaterias();

    function renderFiltered(query) {
      const q = query.toLowerCase().trim();
      let filtered = todasLasMaterias;
      if (q !== '') {
        filtered = filtered.filter(m => {
          // buscar en nombre, clave, objetivo, temas
          const text = `${m.nombre} ${m.clave} ${m.objetivo} ${m.temas.map(t => t.titulo + ' ' + t.items.join(' ')).join(' ')}`.toLowerCase();
          return text.includes(q);
        });
      }
      resultCount.textContent = `${filtered.length} materias`;
      // Renderizar items
      let html = '';
      filtered.forEach((m, idx) => {
        const checked = m._checked ? 'checked' : '';
        html += `
          <div class="materia-item">
            <input type="checkbox" class="materia-check" data-id="${m.id}" ${checked}>
            <span class="badge-clave">${m.clave}</span>
            <span class="nombre">${m.nombre}</span>
            <span class="cuatri">${m.cuatrimestre}</span>
          </div>
        `;
      });
      container.innerHTML = html;
      // Actualizar contador de seleccionados
      updateSelectedCount();
      // Sincronizar estado de checkboxes con el objeto
      document.querySelectorAll('.materia-check').forEach(chk => {
        chk.addEventListener('change', function() {
          const id = this.dataset.id;
          const mat = todasLasMaterias.find(m => m.id === id);
          if (mat) mat._checked = this.checked;
          updateSelectedCount();
        });
      });
    }

    function updateSelectedCount() {
      const selected = todasLasMaterias.filter(m => m._checked).length;
      selectedCount.textContent = `${selected} seleccionadas`;
    }

    // Inicializar con todas las materias
    renderFiltered('');

    // Evento filtro
    filterInput.addEventListener('input', function() {
      renderFiltered(this.value);
    });

    // Seleccionar todos
    selectAllBtn.addEventListener('click', function() {
      document.querySelectorAll('.materia-check').forEach(chk => {
        chk.checked = true;
        const id = chk.dataset.id;
        const mat = todasLasMaterias.find(m => m.id === id);
        if (mat) mat._checked = true;
      });
      updateSelectedCount();
    });

    deselectAllBtn.addEventListener('click', function() {
      document.querySelectorAll('.materia-check').forEach(chk => {
        chk.checked = false;
        const id = chk.dataset.id;
        const mat = todasLasMaterias.find(m => m.id === id);
        if (mat) mat._checked = false;
      });
      updateSelectedCount();
    });

    // Generar PDF
    const soloContenidoCheck = document.getElementById('soloContenidoCheck');
    generarBtn.addEventListener('click', function() {
      const selected = todasLasMaterias.filter(m => m._checked);
      if (selected.length === 0) {
        alert('Selecciona al menos una materia para generar el PDF.');
        return;
      }
      const fileName = pdfNameInput.value.trim() || 'plan_estudios';
      if (soloContenidoCheck && soloContenidoCheck.checked) {
        generarPDFSoloContenido(selected, fileName);
      } else {
        generarPDF(selected, fileName);
      }
    });
  }

  // Función para generar PDF con diseño mejorado
  // Seleccionar un cuatrimestre
  function seleccionarCuatrimestre(num) {
    document.querySelectorAll('#navCuatrimestres .nav-item').forEach(el => {
      el.classList.remove('active');
      if (parseInt(el.dataset.cuatrimestre) === num) el.classList.add('active');
    });

    sidebarSecundario.classList.remove('hidden');

    cuatrimestreActivo = num;
    const info = datos[num];
    if (!info) return;

    secBadge.textContent = `Cuatrimestre ${num}`;
    secTitle.textContent = info.nombre;
    secSubtitle.textContent = `${info.materias.length} materia${info.materias.length !== 1 ? 's' : ''}`;

    renderMaterias(num);

    if (info.materias.length > 0) {
      const primera = info.materias[0];
      seleccionarMateria(primera.id);
    } else {
      panelPrincipal.innerHTML = `
        <div class="placeholder-msg" style="margin-top:60px;">
          <strong>${info.nombre}</strong><br>
          No hay materias asignadas aún para este cuatrimestre.
        </div>
      `;
      materiaActiva = null;
      panelPrincipal.scrollTop = 0;
    }
  }

  // Renderizar lista de materias en el sidebar secundario (solo nombre)
  function renderMaterias(num) {
    const info = datos[num];
    navMaterias.innerHTML = '';
    if (!info || info.materias.length === 0) {
      navMaterias.innerHTML = `<div class="placeholder-msg" style="padding:20px;font-size:13px;color:#aaa;">Sin materias</div>`;
      return;
    }
    info.materias.forEach(mat => {
      const div = document.createElement('div');
      div.className = 'nav-item';
      div.dataset.materiaId = mat.id;
      div.innerHTML = `<span class="nav-dot"></span> ${mat.nombre}`;
      div.addEventListener('click', () => {
        seleccionarMateria(mat.id);
      });
      navMaterias.appendChild(div);
    });
  }

  // Seleccionar una materia
  function seleccionarMateria(id) {
    let materia = null;
    let cuatrimestreNum = null;
    for (let i = 1; i <= 9; i++) {
      const info = datos[i];
      if (!info) continue;
      const found = info.materias.find(m => m.id === id);
      if (found) {
        materia = found;
        cuatrimestreNum = i;
        break;
      }
    }
    if (!materia) return;

    materiaActiva = id;

    document.querySelectorAll('#navMaterias .nav-item').forEach(el => {
      el.classList.remove('active');
      if (el.dataset.materiaId === id) el.classList.add('active');
    });

    renderMateriaContent(materia, cuatrimestreNum);
    // Desplazar al inicio del panel
    panelPrincipal.scrollTop = 0;
  }

  // Eliminar números romanos al inicio de un string (para títulos de temas)
  function removeRomanNumerals(text) {
    return text.replace(/^(?:(?:I{1,3}|IV|V|VI{0,3}|IX|X)\.[0-9]*\s*)/, '').trim();
  }

  // Renderizar el contenido de una materia en el panel principal
  function renderMateriaContent(materia, cuatrimestreNum) {
    let html = `
      <div class="doc-header">
        <div class="doc-type">Asignatura · Cuatrimestre ${cuatrimestreNum}</div>
        <div class="doc-title">${materia.nombre}</div>
        <div class="doc-sub">Clave ${materia.clave}</div>
        <div class="meta-row">
          <div class="meta-item"><span class="meta-label">Objetivo general</span><span class="meta-val" style="font-weight:400;">${materia.objetivo}</span></div>
        </div>
      </div>
    `;

    // Temas
    if (materia.temas && materia.temas.length) {
      html += `<div class="section-title">Temas y subtemas</div>`;
      materia.temas.forEach((t, idx) => {
        let copyText = `${t.titulo}\n`;
        t.items.forEach(item => {
          copyText += `- ${removeRomanNumerals(item)}\n`;
        });
        const cleanItems = t.items.map(item => removeRomanNumerals(item));

        html += `<div class="card">`;
        html += `<div class="card-label">`;
        html += `${t.titulo}`;
        html += `<span class="copy-btn" data-copy="${encodeURIComponent(copyText)}" title="Copiar tema">📋</span>`;
        html += `</div>`;
        html += `<div class="card-body"><ul>`;
        cleanItems.forEach(item => {
          html += `<li>${item}</li>`;
        });
        html += `</ul></div></div>`;
      });
    }

    // Actividades
    html += `<div class="section-title">Actividades de aprendizaje</div>`;
    html += `<div class="two-col">`;
    html += `<div class="card"><div class="card-label">Bajo la conducción de un docente</div><div class="card-body"><ul>`;
    if (materia.actividadesDocente && materia.actividadesDocente.length) {
      materia.actividadesDocente.forEach(a => html += `<li>${a}</li>`);
    } else {
      html += `<li>No especificadas</li>`;
    }
    html += `</ul></div></div>`;
    html += `<div class="card"><div class="card-label">Independientes</div><div class="card-body"><ul>`;
    if (materia.actividadesIndependiente && materia.actividadesIndependiente.length) {
      materia.actividadesIndependiente.forEach(a => html += `<li>${a}</li>`);
    } else {
      html += `<li>No especificadas</li>`;
    }
    html += `</ul></div></div>`;
    html += `</div>`;

    // Evaluación
    html += `<div class="section-title">Criterios y procedimientos de evaluación</div>`;
    html += `<table class="ft"><thead><tr><th>Concepto</th><th>Porcentaje</th></tr></thead><tbody>`;
    if (materia.evaluacion && materia.evaluacion.length) {
      materia.evaluacion.forEach(e => {
        html += `<tr><td>${e.concepto}</td><td>${e.porcentaje}</td></tr>`;
      });
    } else {
      html += `<tr><td colspan="2">Sin información</td></tr>`;
    }
    html += `</tbody></table>`;

    panelPrincipal.innerHTML = html;

    // Eventos de copia
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const encoded = this.dataset.copy;
        const text = decodeURIComponent(encoded);
        navigator.clipboard.writeText(text).then(() => {
          this.textContent = '✅';
          this.classList.add('copied');
          setTimeout(() => {
            this.textContent = '📋';
            this.classList.remove('copied');
          }, 1500);
        }).catch(() => {
          alert('No se pudo copiar el texto.');
        });
      });
    });
  }

  // Inicializar: mostrar Inicio
  function init() {
    renderCuatrimestres();
    const inicioItem = document.querySelector('#navCuatrimestres .nav-item[data-cuatrimestre="inicio"]');
    if (inicioItem) {
      inicioItem.click();
    } else {
      seleccionarInicio();
    }
  }

  init();

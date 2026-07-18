// Datos del plan de estudios: 9 cuatrimestres, materias y contenidos
  
// Objeto global 'datos' consumido por app.js y pdf.js
  const datos = {
    1: {
      nombre: 'Primer cuatrimestre',
      materias: [
        {
          id: '1-p101',
          clave: 'P101',
          nombre: 'Metodología de la Investigación I',
          objetivo: 'Conocerá los conceptos fundamentales del conocimiento científico y aplicará el método en el proceso de la investigación educativa.',
          temas: [
            { titulo: 'Ciencia', items: ['Conceptualización de ciencia e investigación', 'Objeto y estructura del conocimiento científico', 'Clasificación de las ciencias', 'Características de la ciencia', 'Supuestos filosóficos de la ciencia'] },
            { titulo: 'El proceso de investigación científica', items: ['Delimitación del problema. Objeto de estudio.', 'Objetivo de investigación', 'Observación científica (Características y tipos, Relación sujeto-objeto de conocimiento, Diseño de observación y registro)', 'Fundamentación teórica (Marco teórico conceptual)', 'Planteamiento de hipótesis', 'Estrategia metodológica seleccionada (Identificación y definición según el modelo, Tipos de investigación, Población y muestra, Instrumentos, Sujetos, Variables, Procedimientos, Resultados, Conclusiones, Referencias consultadas)'] }
          ],
          actividadesDocente: ['Lluvia de ideas', 'Elaboración de mapas conceptuales sobre el proceso de investigación científica', 'Lecturas dirigidas', 'Exposición', 'Presentación de avances en la investigación', 'Plenaria grupal', 'Mesa redonda'],
          actividadesIndependiente: ['Investigación bibliográfica', 'Lectura de textos', 'Elaboración de mapas mentales, mapas conceptuales y cuadros sinópticos sobre la ciencia y la investigación', 'Aplicación del método en el desarrollo de un proyecto de investigación', 'Elaboración de fichas de trabajo'],
          evaluacion: [
            { concepto: 'Exposición', porcentaje: '10%' },
            { concepto: 'Exámenes parciales', porcentaje: '30%' },
            { concepto: 'Examen final', porcentaje: '30%' },
            { concepto: 'Presentación de avances del proyecto de investigación', porcentaje: '20%' },
            { concepto: 'Entrega de fichas de trabajo, mapas mentales, mapas conceptuales y cuadros sinópticos', porcentaje: '10%' }
          ]
        },
        {
          id: '1-p102',
          clave: 'P102',
          nombre: 'Introducción a la Psicología',
          objetivo: 'El alumno conocerá los principios y métodos más importantes de la psicología, así como identificará y analizará su influencia en el proceso educativo.',
          temas: [
            { titulo: 'Introducción a la psicología', items: ['Concepto de psicología', 'Breve historia de la psicología', 'Áreas de aplicación de la psicología'] },
            { titulo: 'Herencia y medio ambiente', items: ['Factores que influyen sobre el desarrollo', 'Crecimiento y maduración', 'Factor herencia', 'Factor medio ambiente', 'Implicaciones educativas del proceso de crecimiento y desarrollo'] },
            { titulo: 'Bases biológicas de la conducta', items: ['Definición', 'Campo de estudios y aplicaciones', 'Relación entre sistema nervioso y la conducta', 'Sistema Nervioso', 'Sistema Nervioso Central', 'Sistema Nervioso Periférico'] },
            { titulo: 'Percepción', items: ['Naturaleza y medición de la percepción', 'Propiedades del estímulo', 'Estructura y disposición de los sistemas sensoriales', 'Traducción y codificación de la energía estímulo', 'Percepción de intensidad y cualidad', 'Percepción de las propiedades espaciales y temporales'] },
            { titulo: 'Inteligencia y aprendizaje', items: ['Concepto', 'Clasificación del C.I.', 'Teoría de Gualfore', 'Instrumentos de medición'] },
            { titulo: 'Motivación', items: ['Definición', 'Motivos', 'Modelo hemostático', 'Incentivos', 'Motivación y aprendizaje'] },
            { titulo: 'Personalidad', items: ['Teorías descriptivas de la personalidad', 'Las teorías psicodinámicas', 'Las teorías neoclásicas'] },
            { titulo: 'Psicología de la educación', items: ['Concepto General', 'Base científica de psicología de la educación', 'Métodos de investigación', 'Modelos'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales', 'Elaboración de cuadros comparativos de aprendizaje e inteligencia', 'Analizar las teorías de la personalidad', 'Debate grupal sobre las bases biológicas de la conducta', 'Exposición de temas', 'Lectura dirigida'],
          actividadesIndependiente: ['Investigación bibliográfica y documental', 'Lectura de textos', 'Elaboración de un ensayo de la psicología de la educación', 'Trabajo de investigación', 'Elaboración de reportes de lectura', 'Elaboración de un cuadro sinóptico de las teorías de la personalidad'],
          evaluacion: [
            { concepto: 'Exámenes parciales', porcentaje: '20%' },
            { concepto: 'Examen final', porcentaje: '20%' },
            { concepto: 'Entrega del ensayo', porcentaje: '20%' },
            { concepto: 'Entrega de mapas conceptuales, cuadros sinópticos, mapas mentales', porcentaje: '20%' },
            { concepto: 'Exposición', porcentaje: '20%' }
          ]
        },
        {
          id: '1-p103',
          clave: 'P103',
          nombre: 'Antropología Filosófica',
          objetivo: 'Conocerá los fundamentos de la antropología filosófica y su relación con la educación, analizando las distintas concepciones del ser humano a lo largo de la historia.',
          temas: [
            { titulo: 'Antropología filosófica', items: ['Objeto de estudio', 'Método de aproximación a su objeto', 'Características del pensamiento antropológico', 'Relación entre antropología filosófica y pedagogía'] },
            { titulo: 'Filosofía del hombre', items: ['Definición de ser humano', 'Ontogénesis de lo humano', 'Dualismos antropológicos', 'Monismos antropológicos', 'La trascendencia humana'] },
            { titulo: 'Comprensión histórica del ser humano', items: ['Pensamiento griego (Sócrates, Platón, Aristóteles)', 'Pensamiento cristiano (San Agustín, Santo Tomás)', 'Pensamiento moderno (Rousseau, Kant)', 'Pensamiento contemporáneo (Marx, Nietzsche, Freud, Ortega y Gasset, Sartre, Heidegger)'] },
            { titulo: 'Relación entre antropología filosófica y pedagogía', items: ['El concepto de ser humano en la sistematización de la enseñanza de Comenio', 'La visión orgánica de la pedagogía en Pestalozzi', 'La visión de ser humano en el pragmatismo pedagógico de Dewey', 'La educación por medio del trabajo en Freinet', 'Visión de la educación por los sentidos en Montessori', 'El ser humano en la desescolarización de Illich'] }
          ],
          actividadesDocente: ['Elaboración de síntesis conceptuales', 'Exposición de temas', 'Mesa redonda', 'Elaboración de cuadros comparativos del pensamiento pedagógico en las diversas etapas históricas', 'Elaboración de cuadros sinópticos de la filosofía del hombre', 'Resolución de cuestionarios'],
          actividadesIndependiente: ['Investigación bibliográfica y documental', 'Elaboración de un ensayo de la comprensión histórica del ser humano', 'Elaboración de fichas bibliográficas de la relación entre la antropología filosófica y la pedagogía', 'Lectura de textos', 'Análisis de textos'],
          evaluacion: [
            { concepto: 'Entrega de síntesis conceptuales', porcentaje: '25%' },
            { concepto: 'Exposición', porcentaje: '10%' },
            { concepto: 'Entrega de ensayos', porcentaje: '25%' },
            { concepto: 'Exámenes parciales', porcentaje: '25%' },
            { concepto: 'Entrega de cuadros comparativos, cuadros sinópticos y fichas bibliográficas', porcentaje: '25%' }
          ]
        },
        {
          id: '1-p104',
          clave: 'P104',
          nombre: 'Historia General de la Educación I',
          objetivo: 'Identificará las diversas corrientes educativas y los principales pensamientos pedagógicos que existieron desde la edad antigua hasta la reforma.',
          temas: [
            { titulo: 'Historia de la educación', items: ['Génesis y desarrollo', 'Campo de estudio de la historia de la educación'] },
            { titulo: 'Concepciones históricas de la educación', items: ['Idealismo', 'Historicismo', 'Materialismo'] },
            { titulo: 'La educación en la época antigua', items: ['Grecia (Educación en Esparta y Atenas, Sócrates, Platón y Aristóteles, La escuela pública y la escuela básica)', 'Roma (La patristica, La escolástica, Esplendor en Roma: Helenismo, Cristianismo, Latinismo, Vicentismo)'] },
            { titulo: 'La educación en la Edad Media', items: ['Cristianismo', 'Patristica', 'Escolástica', 'Las universidades medievales', 'San Agustín', 'Santo Tomás', 'Debate entre la fe y la razón'] },
            { titulo: 'La educación en la época moderna', items: ['Humanismo y Renacimiento (Antropocentrismo, Educación y cultura laicas, La formación del hombre libre)', 'Reforma y contrarreforma (Martín Lutero, Proyectos educativos: Reforma y Contrareforma, Las escuelas Jesuitas)'] }
          ],
          actividadesDocente: ['Análisis de casos simulados', 'Elaboración de cuadros cronológicos resaltando las diferentes tendencias educativas', 'Elaboración de síntesis conceptuales', 'Discusión grupal de la historia de la educación', 'Elaboración de una línea del tiempo en la que se incluya la educación en la época antigua, en la edad media y en la época moderna', 'Plenaria grupal', 'Lluvia de ideas', 'Exposición'],
          actividadesIndependiente: ['Elaboración de cuadros comparativos de las diversas concepciones históricas de la educación', 'Elaboración de reportes de lectura', 'Investigación bibliográfica y documental', 'Elaboración de un ensayo', 'Resolución de cuestionarios', 'Lectura de textos'],
          evaluacion: [
            { concepto: 'Exámenes parciales', porcentaje: '30%' },
            { concepto: 'Resolución de cuestionarios', porcentaje: '20%' },
            { concepto: 'Exposición', porcentaje: '20%' },
            { concepto: 'Entrega de cuadros comparativos, línea de tiempo', porcentaje: '20%' },
            { concepto: 'Entrega del ensayo', porcentaje: '20%' }
          ]
        },
        {
          id: '1-p105',
          clave: 'P105',
          nombre: 'Teoría Pedagógica I',
          objetivo: 'Al término del curso el alumno analizará el problema de la articulación del conocimiento a través del análisis de diversos elementos de reflexión de la pedagogía como ciencia.',
          temas: [
            { titulo: 'Conceptualización', items: ['Definición de pedagogía', 'Objeto de estudio', 'La pedagogía como teoría', 'La pedagogía como praxis', 'La pedagogía como ciencia', 'Identidad de la pedagogía', 'Delimitación teórico-metodológica'] },
            { titulo: 'Problemática epistemológica', items: ['Carácter científico de la pedagogía', 'Ciencia o ciencias de la educación', 'Dimensiones', 'Relación pedagógica-escuela'] },
            { titulo: 'Construcción teórica', items: ['Legitimación del discurso pedagógico', 'Articulación del discurso pedagógico y la escuela'] },
            { titulo: 'Ciencias auxiliares de la pedagogía', items: ['Sociología', 'Filosofía', 'Psicología', 'Historia'] },
            { titulo: 'La pedagogía como profesión', items: ['Práctica profesional', 'Instituciones educativas', 'Problemática socio-histórica de la formación'] }
          ],
          actividadesDocente: ['Mesa redonda', 'Lecturas comentadas', 'Debate grupal', 'Elaboración de mapas mentales de la conceptualización de la pedagogía', 'Elaboración de un cuadro sinóptico de las ciencias auxiliares de la pedagogía', 'Análisis grupal de la problemática epistemológica', 'Exposición'],
          actividadesIndependiente: ['Elaboración de un ensayo', 'Investigación bibliográfica y documental', 'Lectura de textos', 'Elaboración de un ensayo de la pedagogía como profesión', 'Trabajo de investigación'],
          evaluacion: [
            { concepto: 'Exámenes parciales', porcentaje: '30%' },
            { concepto: 'Examen final', porcentaje: '30%' },
            { concepto: 'Entrega del ensayo', porcentaje: '20%' },
            { concepto: 'Entrega de mapas conceptuales', porcentaje: '10%' },
            { concepto: 'Exposición', porcentaje: '10%' }
          ]
        },
        {
          id: '1-p106',
          clave: 'P106',
          nombre: 'Métodos de Estudio',
          objetivo: 'Al término del curso el alumno conocerá y aplicará algunos métodos para orientar el estudio, las técnicas de lectura y redacción, de exposición oral de temas, la administración del tiempo de estudio y los elementos a considerar para la presentación de exámenes.',
          temas: [
            { titulo: 'Métodos para orientar el estudio', items: ['Deductivo', 'Inductivo', 'Observación', 'Experimentación'] },
            { titulo: 'Técnicas de lectura', items: ['Importancia de la lectura', 'Tipos de la lectura', 'Etapas de la lectura', 'Condiciones de lectura (Externas, Internas, Físicas)'] },
            { titulo: 'Técnicas de redacción', items: ['Importancia de la redacción', 'Circularidad de la lecto-escritura', 'Tipos de redacción (Resumen, Síntesis, Paráfrasis, Monografía)', 'Guión', 'Ensayo', 'Factores para presentación de trabajos (Organización: Estructura lineal, Estructura global)'] },
            { titulo: 'Exposición oral del tema', items: ['Técnicas individuales (Conferencia, Entrevista)', 'Técnicas grupales (Comisión, Corrillo, Debate dirigido, Debate público, Foro, Phillips 6´6, Mesa redonda, Estudio de casos)'] },
            { titulo: 'Administración del tiempo de estudio', items: ['Importancia', 'Objetivos', 'Jerarquización de actividades académicas', 'Distribución del tiempo', 'Revisión, preparación y evaluación del material', 'Calendarización semanal de actividades académicas'] },
            { titulo: 'Presentación de exámenes', items: ['Lectura completa de las instrucciones', 'Comprensión de la pregunta', 'Buena distribución del tiempo para respuestas', 'Letra legible', 'Buena distribución del texto', 'Títulos y párrafos adecuados al tema', 'Exposición de la información', 'Relectura del examen'] }
          ],
          actividadesDocente: ['Lluvia de ideas', 'Elaboración de cuadros comparativos de los métodos para orientar el estudio', 'Analizar y discutir las técnicas de lectura', 'Elaboración de fichas de trabajo de las técnicas de redacción', 'Resolución de ejercicios', 'Lecturas comentadas', 'Debate grupal', 'Elaboración de mapas conceptuales', 'Exposición'],
          actividadesIndependiente: ['Elaboración de un ensayo sobre la presentación de exámenes', 'Investigación bibliográfica y documental', 'Lectura de textos', 'Resúmenes y sinopsis de las lecturas realizadas de cada tema'],
          evaluacion: [
            { concepto: 'Exámenes parciales', porcentaje: '30%' },
            { concepto: 'Entrega del ensayo', porcentaje: '20%' },
            { concepto: 'Resolución de ejercicios', porcentaje: '20%' },
            { concepto: 'Entrega de mapas conceptuales, cuadros comparativos, fichas de trabajo', porcentaje: '20%' },
            { concepto: 'Exposición', porcentaje: '10%' }
          ]
        }
      ]
    },
    2: {
      nombre: 'Segundo cuatrimestre',
      materias: [
        {
          id: '2-p207',
          clave: 'P207',
          nombre: 'Metodología de la Investigación II',
          objetivo: 'Identificará, diseñará y aplicará los instrumentos metodológicos de la investigación en la construcción del saber científico social.',
          temas: [
            { titulo: 'La investigación de los fenómenos sociales', items: ['Evolución del pensamiento científico en las ciencias sociales', 'Perspectivas epistemológicas para la investigación pedagógica (Empírico-analítica, Fenomenológica-hermenéutica)'] },
            { titulo: 'Perspectiva empírico-analítica', items: ['Investigación histórica –descriptiva', 'Investigación causal-experimental', 'Investigación causal-no experimental'] },
            { titulo: 'Perspectiva fenomenológica-hermenéutica', items: ['Informe fenomenológico', 'Investigación etnográfica', 'Investigación-acción', 'Investigación participativa'] }
          ],
          actividadesDocente: ['Elección, diseño y desarrollo de un proyecto de investigación bajo uno de los enfoques de investigación estudiados en el curso', 'Seminarios', 'Exposición', 'Elaboración de fichas de trabajo de la investigación de los fenómenos sociales', 'Analizar y realizar cuadros comparativos de la perspectiva empírico-analítica y fenomenológica-hermenéutica'],
          actividadesIndependiente: ['Lectura de textos', 'Elaboración de un ensayo', 'Resolución de cuestionarios', 'Elaboración de un fichero bibliográfico y de trabajo', 'Trabajo de investigación'],
          evaluacion: [
            { concepto: 'Entrega de avances de investigación', porcentaje: '30%' },
            { concepto: 'Entrega de fichas de trabajo, cuadros comparativos', porcentaje: '20%' },
            { concepto: 'Entrega de proyecto final de investigación', porcentaje: '50%' }
          ]
        },
        {
          id: '2-p208',
          clave: 'P208',
          nombre: 'Psicología del Aprendizaje',
          objetivo: 'El alumno conocerá y analizará las principales teorías de los procesos de aprendizaje para su aplicación en el que hacer educativo.',
          temas: [
            { titulo: 'Psicología educativa y aprendizaje', items: ['Aprendizaje y enseñanza', 'Proceso de aprendizaje en el “hecho educativo”', 'Enfoques teóricos en el estudio del aprendizaje', 'Origen y desarrollo', 'Principales teóricos (Watson, Wallon, Piaget, Inhelder, Freud)'] },
            { titulo: 'Aprendizaje: enfoques conductuales', items: ['El aprendizaje como cambio conductual observable (Skinner, Thorndike)', 'La teoría cognitiva social (Bandura)'] },
            { titulo: 'Enfoque cognoscitivista', items: ['Los resultados del aprendizaje (Gagne)', 'Aprendizaje por descubrimiento (Brunner)', 'Aprendizaje receptivo (Ausubel)', 'Desarrollo de capacidades metacognitivas'] },
            { titulo: 'Enfoque psicoanalítico', items: ['Aprendizaje como vínculo amoroso'] },
            { titulo: 'Psicología social evolutiva', items: ['Aprendizaje social y desarrollo cognitivo', 'Importancia del medio social en el desarrollo psicológico'] }
          ],
          actividadesDocente: ['Elaboración de cuadros sinópticos de la psicología educativa y aprendizaje', 'Elaboración de mapas mentales', 'Elaboración de cuadro comparativo del enfoque conductual, enfoque cognoscitivista y enfoque psicoanalítico', 'Lecturas dirigidas', 'Fichas de trabajo', 'Debate', 'Mesa redonda', 'Exposición'],
          actividadesIndependiente: ['Análisis de textos', 'Investigación documental', 'Elaboración de un ensayo', 'Elaboración de lecturas de comprensión y críticas', 'Trabajo de investigación sobre la psicología social y evolutiva', 'Trabajo monográfico de la psicología educativa y aprendizaje'],
          evaluacion: [
            { concepto: 'Exámenes parciales y final', porcentaje: '30%' },
            { concepto: 'Elaboración de mapas conceptuales, cuadros Sinópticos, cuadros comparativos', porcentaje: '20%' },
            { concepto: 'Trabajo de investigación', porcentaje: '30%' },
            { concepto: 'Trabajo monográfico', porcentaje: '20%' }
          ]
        },
        {
          id: '2-p209',
          clave: 'P209',
          nombre: 'Sociología de la Educación',
          objetivo: 'Analizará las principales corrientes sociológicas que le permitan ubicar el proceso educativo en su dimensión social.',
          temas: [
            { titulo: 'Sociología', items: ['Concepto de sociología', 'El carácter científico de la sociología', 'Campo de estudio de la sociología', 'El problema epistemológico de la sociología', 'La sociología y su relación con otras disciplinas científicas'] },
            { titulo: 'Sociología de la educación', items: ['Las relaciones entre la pedagogía y la sociología', 'El carácter sociológico del fenómeno educativo', 'La sociología como ciencia auxiliar en la comprensión del fenómeno educativo', 'Relaciones entre sistema educativo y sistema social', 'Métodos de la sociología de la educación'] },
            { titulo: 'Principales corrientes sociológicas', items: ['Positivismo', 'Evolucionismo', 'Marxismo', 'Estructuralismo', 'Funcionalismo'] },
            { titulo: 'Origen y desarrollo de las teorías sociológicas', items: ['Teoría Marxista (Relaciones sociales de producción, Concepto de clase social, Relación estructura-superestructura, Modelos económicos y sociales, Ideología, Educación)', 'Teoría weberiana (Capitalismo, Tipos de dominación, Legitimidad, Racionalidad, Educación)', 'Emilio Durkheim (Solidaridad orgánica, Trabajo, Familia, Educación)', 'Teoría general de sociedad Talcott Parsons (Sistema, Sistema económico, político, cultural, Sistema de la personalidad)'] },
            { titulo: 'Corrientes sociológicas contemporáneas', items: ['Neopositivismo', 'Conductismo', 'Estructural funcionalismo', 'Escuela fenomenológica', 'Sociología histórica'] },
            { titulo: 'Importancia de la educación en la sociedad', items: ['La educación como hecho social susceptible de observación sociológica', 'Funciones de la educación (Socializadora, Reproductora, Como medio de control social, Como instrumento de transformación social)'] },
            { titulo: 'La escuela como institución social', items: ['La escuela como aparato ideológico del estado', 'Agentes socializadores', 'La desescolarización'] },
            { titulo: 'La familia como institución social', items: ['Antecedentes históricos de la familia', 'Funciones'] },
            { titulo: 'Estructura social', items: ['Clases sociales', 'La educación como agente de movilidad social'] },
            { titulo: 'Principales teóricos de la sociología actual', items: ['Louis Althusser', 'Pierre Bordieu', 'Antonio Gramsci', 'Jürgen Habermas', 'Herbert Blumer', 'George Gadawer'] }
          ],
          actividadesDocente: ['Discusión grupal de la sociología de la educación', 'Elaboración de cuadros comparativos de las distintas corrientes sociológicas', 'Exposición', 'Plenaria', 'Elaboración de cuadros sinópticos del origen y desarrollo de las teorías sociológicas', 'Lectura comentada de textos', 'Analizar la importancia de la educación en la sociedad', 'Resolución de cuestionarios'],
          actividadesIndependiente: ['Investigación bibliográfica y documental', 'Elaboración de cuadros comparativos la escuela y la familia como institución social', 'Elaboración de fichas de trabajo', 'Elaboración de un ensayo', 'Lectura de textos', 'Elaboración de fichas de trabajo de los principales teóricos de la sociedad actual'],
          evaluacion: [
            { concepto: 'Ensayo', porcentaje: '20%' },
            { concepto: 'Exposición', porcentaje: '20%' },
            { concepto: 'Entrega de cuadros comparativos, cuadros Sinópticos y fichas de trabajo', porcentaje: '30%' },
            { concepto: 'Exámenes parciales y final', porcentaje: '30%' }
          ]
        },
        {
          id: '2-p210',
          clave: 'P210',
          nombre: 'Historia General de la Educación II',
          objetivo: 'Identificará las diversas corrientes educativas y los principales pensamientos pedagógicos que existieron desde la reforma a la postmodernidad.',
          temas: [
            { titulo: 'Realismo', items: ['El siglo XVII', 'La educación como función del Estado', 'Figuras representativas (Bacon, Descartes, Hume, Comenio)'] },
            { titulo: 'Naturalismo', items: ['El siglo XVIII', 'La ilustración (Características principales)', 'La enciclopedia (Figuras representativas, Rousseau, Voltaire, Montesquieu)'] },
            { titulo: 'Liberalismo y Neohumanismo', items: ['Kant', 'Pestalozzi'] },
            { titulo: 'Maquinismo', items: ['Desarrollo científico', 'Herbart', 'Comte y el positivismo'] },
            { titulo: 'Época contemporánea', items: ['Directriz individualista', 'Directriz social', 'Existencialismo', 'Dewey', 'W. James y el pragmatismo', 'La educación moderna (Las Escuelas Nuevas: La escuela del trabajo y la escuela de la sociabilidad, La pedagogía científica; Figuras representativas: María Montessori, Freinet, Makarenko, Froebel)'] },
            { titulo: 'Postmodernidad', items: ['Neoliberalismo y globalización', 'La personalidad del ser humano'] }
          ],
          actividadesDocente: ['Lluvia de ideas', 'Esquemas cronológicos del Realismo y Naturalismo', 'Plenaria grupal', 'Elaboración de cuadros comparativos liberalismo y neohumanismo', 'Fichas de trabajo', 'Resúmenes de cada tema', 'Lectura de textos dirigida', 'Exposición'],
          actividadesIndependiente: ['Lectura de textos', 'Análisis de textos', 'Investigación bibliográfica y documental', 'Elaboración de un ensayo de la educación en la época contemporánea'],
          evaluacion: [
            { concepto: 'Exámenes parciales y final', porcentaje: '50%' },
            { concepto: 'Exposición', porcentaje: '10%' },
            { concepto: 'Entrega de cuadros comparativos, Esquemas cronológicos', porcentaje: '10%' },
            { concepto: 'Entrega de ensayo', porcentaje: '30%' }
          ]
        },
        {
          id: '2-p211',
          clave: 'P211',
          nombre: 'Teoría Pedagógica II',
          objetivo: 'Identificará y comprenderá las diversas perspectivas teóricas acerca de la pedagogía y sus más representativos exponentes',
          temas: [
            { titulo: 'Concepción de pedagogía en la época antigua', items: ['Los orígenes de la escuela antigua (La paideia y los ideales de la cultura grecolatina, Ideales de la cultura romana)'] },
            { titulo: 'Pensamiento acerca de la naturaleza del hombre y papel de la pedagogía', items: ['El debate de la determinación natural y social del hombre', 'El Emilio de Jean-Jacques Rousseau y la pedagogía moderna'] },
            { titulo: 'La Ilustración', items: ['Ensayos sobre pedagogía en Kant', 'El pragmatismo de W. James', 'Pensamiento de la educación de John Locke', 'Los escritos pedagógicos de Francis Bacon'] },
            { titulo: 'Los orígenes de la pedagogía contemporánea', items: ['Heinrich Pestalozzi', 'Ovidio Decroly', 'María Montessori', 'Celestine Freinet', 'John Dewey', 'Jean Piaget', 'Edward Claparéde'] },
            { titulo: 'Pedagogía socialista', items: ['Gramsci, educación y hegemonía', 'Makarenko, la educación a través del colectivo'] },
            { titulo: 'Pedagogía libertaria', items: ['A. S. Neill, la escuela en libertad', 'Freire, concientización y liberación', 'Illich, desescolarización de la sociedad'] }
          ],
          actividadesDocente: ['Análisis de las principales teorías de la pedagogía', 'Elaboración de cuadros comparativos de la pedagogía positiva, racional e integral', 'Fichas de trabajo', 'Elaboración de cuadros sinópticos de la escuela nueva – la escuela activa', 'Debate grupal', 'Análisis y discusión de la pedagogía general y diferencial', 'Lecturas comentadas', 'Exposición'],
          actividadesIndependiente: ['No especificadas en el documento fuente.'],
          evaluacion: [
            { concepto: 'Exámenes', porcentaje: '50%' },
            { concepto: 'Ensayos', porcentaje: '30%' },
            { concepto: 'Cuadros comparativos', porcentaje: '10%' },
            { concepto: 'Exposiciones', porcentaje: '10%' }
          ]
        },
        {
          id: '2-p212',
          clave: 'P212',
          nombre: 'Pensamiento y Lenguaje',
          objetivo: 'Al finalizar el curso el alumno podrá describir el proceso de desarrollo del lenguaje y las teorías sobre el pensamiento que dan lugar al comportamiento humano para integrarlos a la cognición y el desarrollo humanos.',
          temas: [
            { titulo: 'La lingüística', items: ['Concepto de lingüística', 'El signo lingüístico', 'Definición de lenguaje y lengua', 'La importancia de la lingüística en el proceso de comunicación'] },
            { titulo: 'Conformación del lenguaje', items: ['Raíces genéticas del pensamiento y habla', 'La teoría de Stern sobre desarrollo del lenguaje', 'Fonemas y morfemas', 'Las primeras palabras', 'Sintaxis', 'Gramática'] },
            { titulo: 'Aproximaciones del pensamiento asociacionista y neoasociacionista', items: ['Concepto de pensamiento', 'Razonamiento analógico como solución de problemas', 'Análisis de la psicología del pensamiento', 'El pensamiento como aprendizaje', 'Conceptos y categorización', 'Prueba de Hipótesis', 'Estrategias'] },
            { titulo: 'Aproximaciones estructurales', items: ['Definición del pensamiento', 'Pensamiento productivo y reproductivo', 'Toma de decisiones', 'Fases de la resolución de problemas'] },
            { titulo: 'Pensamiento y significado', items: ['Naturaleza del pensamiento', 'Estructura cognoscitiva', 'Elementos para la construcción del pensamiento', 'Actividad e imagen', 'Interpretación de problemas'] },
            { titulo: 'El pensamiento como proceso de información', items: ['No se detallan subtemas en el documento'] },
            { titulo: 'Pensamiento y lenguaje en animales', items: ['La prueba del espejo', 'Autoconciencia', 'Pensamiento representacional', 'Experimentos sobre el lenguaje en animales (Von Frisch -abejas-, Kellog -chimpancés-, Premack -chimpancés-, Patterson -gorila-)'] },
            { titulo: 'El razonamiento', items: ['Pensamiento y habla', 'Psicología del razonamiento', 'Razonamiento condicional', 'Razonamiento probabilístico', 'Razonamiento deductivo (Lógica formal y errores lógicos, Ordenamientos lineales)'] }
          ],
          actividadesDocente: ['No especificadas en el documento fuente.'],
          actividadesIndependiente: ['No especificadas en el documento fuente.'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        }
      ]
    },
    3: {
      nombre: 'Tercer cuatrimestre',
      materias: [
        {
          id: '3-p313',
          clave: 'P313',
          nombre: 'Estadística Aplicada a la Educación',
          objetivo: 'Identificará y aplicará diversas técnicas estadísticas para la recolección, procesamiento e interpretación de datos que faciliten la investigación pedagógica.',
          temas: [
            { titulo: 'Variables y gráficas', items: ['Conceptos fundamentales', 'Notación Científica', 'Funciones y coordenadas rectangulares'] },
            { titulo: 'Distribuciones de frecuencias y sus gráficas', items: ['Análisis de datos', 'Distribución de frecuencias', 'Gráficas de distribuciones de frecuencias', 'Curvas de frecuencia', 'Aplicaciones'] },
            { titulo: 'Medida de tendencia central', items: ['Definición de promedios', 'Relaciones entre la media, la mediana y la moda'] },
            { titulo: 'Medidas de dispersión o variabilidad', items: ['Concepto de variación o dispersión', 'Métodos cortos de cálculo', 'Coeficiente de variación', 'Variables tipificadas', 'Aplicaciones'] },
            { titulo: 'Cálculos de probabilidades', items: ['Conceptos básicos', 'Cálculo de probabilidades', 'Distribuciones de probabilidad y esperanza matemática', 'Relación entre población, Media Muestra y Varianza', 'Análisis Combinatorio'] },
            { titulo: 'Distribuciones de probabilidad', items: ['Clasificación de las distribuciones de probabilidad', 'Distribuciones de variables discretas', 'distribuciones de variables continuas', 'Aplicaciones'] }
          ],
          actividadesDocente: ['No especificadas en el documento fuente.'],
          actividadesIndependiente: ['No especificadas en el documento fuente.'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '3-p314',
          clave: 'P314',
          nombre: 'Psicología del Desarrollo Humano',
          objetivo: 'No especificado en el documento fuente.',
          temas: [
            { titulo: 'Aspectos y teorías del desarrollo humano', items: ['Conceptualización de desarrollo', 'La historia del estudio del desarrollo humano', 'Periodos del ciclo de vida humana', 'Teorías sobre el desarrollo humano'] },
            { titulo: 'Desarrollo prenatal', items: ['Herencia y crianza', 'Fecundación', 'Periodo germinal', 'Periodo embrionario', 'Periodo fetal', 'Parto', 'Condiciones que pueden influir en el desarrollo'] },
            { titulo: 'Los dos primeros años de vida', items: ['Desarrollo físico y motor', 'Desarrollo intelectual', 'Desarrollo social afectivo'] },
            { titulo: 'El segundo año de vida', items: ['Desarrollo físico, motor, intelectual, social y afectivo', 'El negativismo de los 2 años', 'Logros del segundo año de vida', 'El juego'] },
            { titulo: 'Desarrollo cognoscitivo del producto (etapa preoperacional)', items: ['Función simbólica', 'Preconcepto', 'Características del pensamiento preoperacional'] },
            { titulo: 'El niño preescolar (3 a 6 años)', items: ['Desarrollo físico y motor', 'Desarrollo del lenguaje'] },
            { titulo: 'Aspectos psicosociales del preescolar', items: ['Descubrimiento del sexo', 'Sociabilización', 'El jardín de niños', 'El juego', 'El sentimiento religioso', 'La conciencia moral'] },
            { titulo: 'Desarrollo del niño escolar', items: ['Desarrollo cognoscitivo', 'Desarrollo físico y motor'] },
            { titulo: 'Características del niño escolar', items: ['Afectividad', 'Sociabilización', 'Educación sexual', 'Vida religiosa y moralidad', 'El juego', 'Problemas en el niño'] }
          ],
          actividadesDocente: ['Análisis y discusión de los aspectos y teorías del desarrollo humano', 'Esquematizar el desarrollo prenatal', 'Elaboración de cuadros comparativos de las diferentes etapas del niño', 'Lluvia de ideas', 'Debates', 'Dinámica grupal', 'Estudio de casos', 'Exposiciones'],
          actividadesIndependiente: ['Investigación bibliográfica y documental', 'Elaboración de ensayos', 'Elaboración de reportes de lectura', 'Lectura de textos', 'Trabajo de investigación', 'Elaboración de un trabajo de investigación sobre el desarrollo del niño en el aspecto físico, motor, intelectual y afectivo en la etapa de la infancia'],
          evaluacion: [
            { concepto: 'Exámenes parciales y final', porcentaje: '50%' },
            { concepto: 'Ensayos', porcentaje: '40%' },
            { concepto: 'Exposición en clase de los trabajos de investigación', porcentaje: '10%' }
          ]
        },
        {
          id: '3-p315',
          clave: 'P315',
          nombre: 'Epistemología de la Educación',
          objetivo: 'Analizará y diferenciará los diversos paradigmas en torno al origen, la esencia y construcción del conocimiento y su incidencia en el fenómeno educativo.',
          temas: [
            { titulo: 'Ciencia', items: ['Definición', 'Rasgos generales', 'Clasificación de las ciencias'] },
            { titulo: 'Objeto, método y estructura del conocimiento', items: ['La construcción del objeto', 'Objeto y método de la filosofía del conocimiento', 'Construcción social del conocimiento científico'] },
            { titulo: 'Enfoques en relación a la posibilidad del conocimiento', items: ['Dogmatismo', 'Escepticismo', 'Relativismo', 'Criticismo'] },
            { titulo: 'Enfoques en relación al origen del conocimiento', items: ['Racionalismo', 'Empirismo', 'Intelectualismo', 'Apriorismo'] },
            { titulo: 'Posturas en relación a la esencia del conocimiento', items: ['Objetivismo', 'Realismo', 'Idealismo'] },
            { titulo: 'Corrientes epistemológicas en la ciencia', items: ['Empírico-analítica', 'Idealista', 'Fenomenología hermenéutica y lingüística', 'Dialéctica-crítica hermenéutica'] }
          ],
          actividadesDocente: ['No especificadas en el documento fuente.'],
          actividadesIndependiente: ['No especificadas en el documento fuente.'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '3-p316',
          clave: 'P316',
          nombre: 'Historia de la Educación en México I',
          objetivo: 'Identificará las diversas etapas históricas del pensamiento educativo en México desde sus inicios hasta la independencia.',
          temas: [
            { titulo: 'Época prehispánica', items: ['Los primeros pobladores de América', 'La educación en las diferentes civilizaciones', 'Origen de la educación intencional e institucionalizada'] },
            { titulo: 'Época colonial', items: ['La conquista y la transculturización', 'El proyecto de la Corona Española', 'Ordenes religiosas, evangelización y castellanización (Franciscanos, Dominicos, Agustinos, Bernardinos)', 'Métodos misionales (Teatro, Mímica, Intérpretes, Catequesis)', 'La Real y Pontificia Universidad de México (La educación femenina)', 'La educación laica (Colegio de las Vizcainas, Escuela de Minería, Jardín Botánico, Academia de las nobles Artes)', 'Figuras representativas (Bartolomé de las Casas, Fray Pedro de Gante, Fray Juan de Zumárraga)', 'Establecimiento de La Compañía de Jesús en la Nueva España (Métodos de estudio)'] },
            { titulo: 'Época independiente', items: ['La ilustración', 'La escuela Lancasteriana (Pedagogía Lancasteriana)', 'Expulsión de los Jesuitas', 'Orígenes de la educación pública en México'] }
          ],
          actividadesDocente: ['No especificadas en el documento fuente.'],
          actividadesIndependiente: ['No especificadas en el documento fuente.'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '3-p317',
          clave: 'P317',
          nombre: 'Introducción a la Didáctica',
          objetivo: 'Conocerá los elementos fundamentales que integran el proceso didáctico, así como analizará los principales enfoques teóricos de la didáctica.',
          temas: [
            { titulo: 'Problematización y conceptualización de la didáctica', items: ['Fundamentación epistemología', 'Objeto de estudio de la didáctica', 'Elementos del proceso didáctico'] },
            { titulo: 'Desarrollo histórico de didáctica', items: ['La construcción del contenido didáctico', 'El origen de la didáctica (Ratke 1629)', 'La didáctica magna (Comenio 1657)', 'La pedagogía de la instrucción (Herbart 1806)'] },
            { titulo: 'Enfoques teóricos de la didáctica', items: ['Escuela tradicional', 'Escuela de tecnología educativa', 'Escuela crítica', 'Escuela nueva'] }
          ],
          actividadesDocente: ['Dinámica grupal: Sociodrama', 'Debate grupal', 'Elaboración de mapas conceptuales de la didáctica y su problematización', 'Elaboración de un cuadro comparativo sobre los diferentes enfoques teóricos de la didáctica', 'Lluvia de ideas'],
          actividadesIndependiente: ['Investigación bibliográfica', 'Lectura de textos', 'Esquematizar cronológicamente el desarrollo de la didáctica', 'Fichas de resumen', 'Elaboración de un ensayo'],
          evaluacion: [
            { concepto: 'Exámenes parciales y examen final', porcentaje: '50%' },
            { concepto: 'Entrega del cuadro comparativo', porcentaje: '20%' },
            { concepto: 'Entrega del ensayo', porcentaje: '30%' }
          ]
        },
        {
          id: '3-p318',
          clave: 'P318',
          nombre: 'Filosofía de la Educación',
          objetivo: 'Analizará los principios teóricos de la filosofía de la educación e identificará los diversos planteamientos que han existido a través de la historia y que han determinado el hecho educativo.',
          temas: [
            { titulo: 'Filosofía de la educación', items: ['Concepto de filosofía, educación y filosofía de la educación', 'La filosofía de la educación en el contexto de las disciplinas filosóficas', 'Filosofía y método'] },
            { titulo: 'Elementos de análisis filosófico de la educación', items: ['Antropología filosófica y praxis educativa', 'Esencia de la educación', 'Fines de la educación', 'La educación como proceso de reflexión', 'La educación como generadora y reproductora de axiología', 'La educación como transformación', 'Disciplinas filosóficas que estudian el fenómeno educativo', 'Teleología educativa', 'Discurso filosófico-educativo'] },
            { titulo: 'Métodos filosóficos', items: ['Mayeútica', 'Dialéctica', 'Lógica'] },
            { titulo: 'Paradigmas filosóficos', items: ['Humanismo', 'Ilustración', 'Pragmatismo', 'Idealismo contemporáneo', 'Existencialismo', 'Positivismo', 'Materialismo histórico-dialéctico', 'Neopositivismo'] },
            { titulo: 'Pensamiento filosófico en la historia', items: ['Edad antigua (Los presocráticos, Filosofía Ática: Aristóteles, Sócrates, Platón, Época Helenista)', 'Edad media (San Agustín, Boccio, Filosofía escolástica: Santo Tomás de Aquino, San Anselmo, Escuela de Oxford)', 'Edad Moderna (Renacimiento y racionalismo, René Descartes, Leibniz, Hobbes, Hegel, Herbert, Hume, Schopenhauer)', 'Época contemporánea (Nietzsche, Kierkegaard, Illich)'] }
          ],
          actividadesDocente: ['Debates', 'Elaboración de cuadros comparativos sobre el pensamiento filosófico', 'Resúmenes y sinopsis de cada tema', 'Plenaria grupal', 'Elaboración de cuadros comparativos del pensamiento filosófico en la historia', 'Lluvia de ideas', 'Lecturas comentadas', 'Exposición'],
          actividadesIndependiente: ['Investigación bibliográfica y documental', 'Análisis de textos', 'Elaboración de ensayos', 'Lectura de textos', 'Trabajo de investigación', 'Solución de cuestionarios'],
          evaluacion: [
            { concepto: 'Ensayos', porcentaje: '35%' },
            { concepto: 'Examen', porcentaje: '35%' },
            { concepto: 'Exposición', porcentaje: '15%' },
            { concepto: 'Entrega de cuadros comparativos', porcentaje: '15%' }
          ]
        }
      ]
    },
    4: {
      nombre: 'Cuarto cuatrimestre',
      materias: [
        {
          id: '4-p419',
          clave: 'P419',
          nombre: 'Estadística Inferencial',
          objetivo: 'Al término del curso el alumno aplicará las técnicas de la estadística que le permitan inferir las características de una población en base a la información contenida en una muestra, aplicando las habilidades adquiridas al contexto pedagógico.',
          temas: [
            { titulo: 'Inferencia estadística', items: ['Conceptos fundamentales', 'Aplicaciones'] },
            { titulo: 'Distribuciones muestrales', items: ['Concepto de distribución de muestreo', 'Distribuciones relacionadas con la distribución normal', 'Uso de tablas'] },
            { titulo: 'Estimación de parámetros', items: ['Estimación y estimador', 'Intervalos de confianza', 'Aplicaciones'] },
            { titulo: 'Pruebas de hipótesis', items: ['Teoría de decisiones estadísticas', 'Pruebas de hipótesis', 'Potencia de una prueba', 'Aplicaciones'] },
            { titulo: 'Prueba Ji-cuadrado', items: ['Frecuencias observadas y teóricas', 'Definición de X²', 'Contrastes de significación', 'Bondad de ajuste', 'Tablas de contingencia', 'Corrección de Yates'] },
            { titulo: 'Análisis de regresión lineal y correlación simple', items: ['Relaciones entre variables', 'Teoría muestra de la correlación y regresión'] },
            { titulo: 'Estadística no paramétrica', items: ['Medida y escalas de medidas', 'La prueba de las rachas', 'Correlación de rango de Spearman', 'Prueba de los signos', 'La prueba de U de Mann-Whitney', 'La prueba de Wilcoxon', 'La prueba de Kruskal-Wallis', 'Comparación entre las pruebas paramétricas y no paramétricas', 'Aplicaciones'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales', 'Resolución de ejercicios', 'Solución e interpretación de problemas resueltos', 'Ejercicios prácticos y problemas de aplicación', 'Exposición'],
          actividadesIndependiente: ['Resolución de ejercicios', 'Investigación documental', 'Trabajo de investigación'],
          evaluacion: [
            { concepto: 'Resolución de ejercicios', porcentaje: '40%' },
            { concepto: 'Examen', porcentaje: '40%' },
            { concepto: 'Exposición', porcentaje: '10%' },
            { concepto: 'Investigación documental', porcentaje: '10%' }
          ]
        },
        {
          id: '4-p420',
          clave: 'P420',
          nombre: 'Didáctica Específica',
          objetivo: 'Distinguirá las aportaciones teóricas de la planeación didáctica en la aplicación, diseño y elaboración de propuestas didácticas para ser usadas en un curso, así como la evaluación de los diferentes momentos del mismo.',
          temas: [
            { titulo: 'Metodología didáctica', items: ['Conceptos', 'Elementos', 'Elaboración'] },
            { titulo: 'Métodos de enseñanza', items: ['Didáctico', 'Científico', 'Métodos de enseñanza individualizada', 'Métodos de enseñanza socializada'] },
            { titulo: 'Técnicas de enseñanza', items: ['Técnica expositiva', 'Técnica de estudio dirigido', 'Técnica de la argumentación'] },
            { titulo: 'Material didáctico', items: ['Importancia', 'Clasificación', 'Audiovisuales', 'Tridimensionales'] },
            { titulo: 'Planeación didáctica', items: ['Planes de estudio anual o de curso', 'Planes de estudio de unidad', 'Planes de estudio de clase', 'Actividades extraclase'] },
            { titulo: 'Evaluación escolar', items: ['Validez y confiabilidad', 'Análisis de tareas', 'Análisis de objetivos', 'Análisis de características de los alumnos', 'Medición del rendimiento escolar', 'Verificación del aprendizaje', 'Evaluación del rendimiento escolar'] },
            { titulo: 'Planeación didáctica y realidad educativa', items: ['Pertinencia de la planeación didáctica de un modelo de acuerdo al nivel educativo', 'Planeación didáctica y hecho educativo cambiante'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales de las técnicas y métodos', 'Elaboración de una planeación didáctica', 'Discusión dirigida', 'Lecturas comentadas', 'Dinámica de grupo', 'Exposición'],
          actividadesIndependiente: ['Análisis crítico de lecturas', 'Investigación bibliográfica', 'Elaboración de ensayos', 'Trabajo de investigación'],
          evaluacion: [
            { concepto: 'Ensayos', porcentaje: '30%' },
            { concepto: 'Trabajo de investigación', porcentaje: '30%' },
            { concepto: 'Exposición de temas', porcentaje: '30%' },
            { concepto: 'Exámenes', porcentaje: '10%' }
          ]
        },
        {
          id: '4-p421',
          clave: 'P421',
          nombre: 'Conocimiento de la Adolescencia',
          objetivo: 'El alumno describirá los cambios fisiológicos, psíquicos y sociales que ocurren en la adolescencia, lo que le permitirá comprender los problemas que enfrentan los adolescentes en esta etapa de su vida.',
          temas: [
            { titulo: 'Adolescencia', items: ['Pubertad', 'Significado', 'Cambios fisiológicos', 'Efectos de la maduración sexual', 'Adolescencia', 'Actitudes sociales', 'Problemas de la adolescencia'] },
            { titulo: 'Psicología de la adolescencia', items: ['Factores psicológicos', 'Integración de la conciencia', 'Tipología juvenil', 'Consecuencia de los cambios'] },
            { titulo: 'Desarrollo psicológico en la adolescencia', items: ['Desarrollo intelectual', 'Desarrollo psicológico', 'Desarrollo social', 'Desarrollo moral'] },
            { titulo: 'Transición en lo sexual', items: ['Sexualidad', 'Significado', 'Roles', 'Actitud frente a la sexualidad', 'Comunicación', 'Valores sobre la conducta sexual'] },
            { titulo: 'Estatus, aspiraciones e intereses del adolescente', items: ['Estatus social', 'Símbolos del estatus', 'Niveles de aspiración', 'Intereses'] },
            { titulo: 'El adolescente y la escuela', items: ['Consideraciones generales', 'El docente y el adolescente', 'Desertor escolar', 'Orientación vocacional'] },
            { titulo: 'Sociología de la adolescencia', items: ['La vida social contemporánea', 'Necesidades psicosociales del adolescente', 'Planeación de la vida en el adolescente', 'Integración de la vida en el adolescente'] }
          ],
          actividadesDocente: ['Lecturas dirigidas', 'Elaboración de mapas conceptuales sobre los cambios físicos, sociales, psicológicos y biológicos que ocurren en la adolescencia', 'Debate', 'Lluvia de ideas', 'Análisis de las necesidades psicosociales del adolescente', 'Análisis de casos', 'Exposición'],
          actividadesIndependiente: ['Lectura crítica de textos', 'Investigación bibliográfica y documental', 'Elaboración de ensayos', 'Trabajo de investigación', 'Elaboración de reportes de observación de conductas sociales de los adolescentes'],
          evaluacion: [
            { concepto: 'Ensayos', porcentaje: '20%' },
            { concepto: 'Exposición', porcentaje: '10%' },
            { concepto: 'Exámenes parciales', porcentaje: '30%' },
            { concepto: 'Entrega de mapas conceptuales', porcentaje: '10%' },
            { concepto: 'Trabajo de investigación', porcentaje: '30%' }
          ]
        },
        {
          id: '4-p422',
          clave: 'P422',
          nombre: 'Historia de la Educación en México II',
          objetivo: 'Identificará las etapas históricas en el pensamiento educativo en México desde la época de la Reforma hasta nuestros días.',
          temas: [
            { titulo: 'Época de la Reforma y el Porfiriato', items: ['Figuras representativas (Gabino Barreda y el positivismo en México, Joaquín Baranda y la fundación de las escuelas normales, Justo Sierra y el laicismo en la educación, Vidal Alcocer y la pedagogía del cuidado social)', 'La reforma de la Escuela Elemental', 'Enrique C. Rebsamen y la Escuela Modelo de Orizaba', 'La educación rural'] },
            { titulo: 'Época Revolucionaria y posrevolucionaria', items: ['Constitución política de 1917. Art. 3°', 'Ideales educativos de la Revolución', 'Educación liberal', 'Educación populista', 'Educación comunista', 'Educación nacionalista', 'José Vasconcelos y la Secretaría de Educación Pública', 'Narciso Bassols'] },
            { titulo: 'Educación socialista', items: ['El laicismo', 'Política educativa radical. De Calles a Cárdenas (La enseñanza Técnica Superior Nacional)'] },
            { titulo: 'Período de conciliación y consolidación (1946-1964)', items: ['Impulso de la educación técnica', 'Libros de texto gratuitos', 'Pensamiento de Jaime Torres Bodet'] },
            { titulo: 'Educación contemporánea', items: ['Agudización de la problemática educativa', 'Movimientos estudiantiles', 'Las reformas educativas', 'Modernización educativa', 'La educación y el mundo global', 'Sistema educativo actual'] }
          ],
          actividadesDocente: ['Esquematizar la educación en la época de la reforma y el porfiriato', 'Elaboración de cuadros comparativos de las épocas y periodos de la educación en México', 'Plenaria grupal', 'Exposiciones', 'Lecturas comentadas', 'Debates'],
          actividadesIndependiente: ['Línea del tiempo con las diferentes épocas y periodos de la educación en México', 'Lectura de textos', 'Fichas de trabajo', 'Investigación bibliográfica', 'Elaboración de ensayos', 'Visitar el Archivo General de la Nación para conocer las fuentes históricas originales', 'Trabajo de investigación'],
          evaluacion: [
            { concepto: 'Exámenes parciales', porcentaje: '70%' },
            { concepto: 'Entrega de cuadros comparativos', porcentaje: '20%' },
            { concepto: 'Exposición de temas', porcentaje: '10%' }
          ]
        },
        {
          id: '4-p423',
          clave: 'P423',
          nombre: 'Auxiliares de la Comunicación',
          objetivo: 'Conocerá las teorías, técnicas y elementos de la comunicación y los aplicará en el diseño y producción de programas educativos.',
          temas: [
            { titulo: 'Comunicación', items: ['Elementos de la comunicación humana', 'Propósitos de la comunicación', 'El proceso de comunicación', 'Codificación y decodificación social de los mensajes'] },
            { titulo: 'Tipos de comunicación', items: ['Interpersonal', 'Grupal'] },
            { titulo: 'Dimensión educativa y social de la comunicación', items: ['La comunicación en el proceso de aprendizaje', 'Aprendizaje significativo', 'La comunicación como elemento indispensable en el proceso educativo'] },
            { titulo: 'Corrientes teóricas de la comunicación', items: ['Enfoque estructural-funcionalista', 'Enfoque empírico-experimental', 'Enfoque marxista'] },
            { titulo: 'Modelos de comunicación', items: ['Modelo de Shannon y Weaver', 'Modelo de Lasswell', 'Modelo de Jacobson', 'Modelo de David K. Berlo', 'Modelo de Newcomb', 'Modelo de Wenstley y MacLean', 'Modelo de Gerbner'] },
            { titulo: 'Comunicación de masas', items: ['Definición', 'Los medios masivos de comunicación y su impacto en el proceso educativo', 'Los medios masivos de comunicación y su influencia en la conducta social'] },
            { titulo: 'Los medios de comunicación y su utilización en la educación', items: ['Prensa', 'Radio', 'Televisión', 'Cine', 'Video', 'Medios virtuales de comunicación', 'Grabaciones'] },
            { titulo: 'Materiales para los medios audiovisuales', items: ['Proyector de transparencias (acetatos)', 'Grabadora de audio', 'Proyector de cuerpos opacos', 'Proyector de diapositivas', 'Mimeógrafo', 'Cámara de video', 'Computadora'] },
            { titulo: 'Técnicas de análisis cualitativos y cuantitativos', items: ['Análisis del discurso', 'Análisis de contenido', 'Análisis de la forma, color, sonido y fondo'] },
            { titulo: 'Producción de programas educativos', items: ['Selección y uso de medios', 'Diseño del programa', 'Preproducción', 'Producción del programa', 'Implementación', 'Evaluación del proyecto'] }
          ],
          actividadesDocente: ['Análisis de programas educativos y puesta en común', 'Plenaria grupal', 'Elaboración de un programa educativo utilizando un medio elegido', 'Elaboración de guiones', 'Elaboración de cuadros comparativos de los modelos de educación', 'Ejercicios y prácticas', 'Exposiciones'],
          actividadesIndependiente: ['Lectura de textos', 'Elaboración de un ensayo', 'Análisis de programas educativos', 'Elaboración de reseñas, sinopsis, artículos, noticias, etc.', 'Investigación documental'],
          evaluacion: [
            { concepto: 'Ensayo', porcentaje: '30%' },
            { concepto: 'Entrega de un programa educativo', porcentaje: '20%' },
            { concepto: 'Entrega de reseñas, sinopsis, artículos, noticias, etc.', porcentaje: '10%' },
            { concepto: 'Entrega de análisis de programas educativos', porcentaje: '15%' },
            { concepto: 'Ejercicios y prácticas', porcentaje: '15%' },
            { concepto: 'Entrega de guiones', porcentaje: '10%' }
          ]
        },
        {
          id: '4-p424',
          clave: 'P424',
          nombre: 'Planeación Educativa',
          objetivo: 'El alumno describirá la naturaleza de la planeación, analizando el Sistema Educativo Nacional, así como la metodología, los proyectos y enfoques aplicables a la planeación educativa.',
          temas: [
            { titulo: 'Naturaleza y propósito de la planeación', items: ['Concepto', 'Proceso', 'Objetivo', 'Dimensiones', 'Tipos'] },
            { titulo: 'Planeación en el proceso administrativo', items: ['Las funciones administrativas', 'Taxonomía de la planeación', 'Responsabilidad compartida y carácter interdisciplinario'] },
            { titulo: 'Bases sociales y políticas de la planeación educativa', items: ['Alcances', 'Factores de planeación', 'Características', 'La planeación como proceso técnico', 'Política económica', 'Planes y programas del Sistema Educativo Nacional'] },
            { titulo: 'Marco jurídico de la planeación', items: ['Tendencias', 'Clasificación', 'Naturaleza jurídica de la planeación', 'Fuentes y sujetos del derecho educativo', 'Marco jurídico de la planeación educativa', 'Límites jurídicos de la planeación'] },
            { titulo: 'Metodología de la planeación', items: ['Marco conceptual', 'Propósito de la planeación', 'Establecimiento de alternativas', 'Análisis de alternativas', 'Ejecución de proyectos', 'Control de la ejecución', 'Evaluación de resultados'] },
            { titulo: 'Modelos de predicción de demandas', items: ['Factores de tendencia, estacional y azar', 'Desarrollo de un modelo', 'Pruebas de un modelo'] },
            { titulo: 'El enfoque de misiones en la planeación', items: ['Análisis de misiones', 'Objetivo de misión', 'Requisitos de ejecución', 'Perfil de misiones', 'Funciones, tareas, métodos y procedimientos'] },
            { titulo: 'El enfoque de sistemas en la elaboración y evaluación de programas', items: ['Conceptos', 'Evaluación de necesidades internas y externas', 'Modelos de elementos organizacionales', 'Planeación participativa', 'Requisitos de cambio y mantenimiento', 'Métodos y medios', 'Evaluación de necesidades', 'Pasos para conducir una evaluación de necesidades'] },
            { titulo: 'Análisis de la planeación educativa actual', items: ['Planeación educativa en México', 'Planeación educativa en América Latina'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales', 'Análisis de la planeación educativa', 'Discusión dirigida', 'Dinámicas grupales', 'Lluvia de ideas', 'Exposición de temas'],
          actividadesIndependiente: ['Análisis crítico de las lecturas', 'Fichas de trabajo', 'Elaboración de ensayos', 'Trabajo de investigación'],
          evaluacion: [
            { concepto: 'Trabajo de investigación', porcentaje: '30%' },
            { concepto: 'Elaboración de ensayos', porcentaje: '20%' },
            { concepto: 'Exposición de temas', porcentaje: '10%' },
            { concepto: 'Exámenes', porcentaje: '40%' }
          ]
        }
      ]
    },
    5: {
      nombre: 'Quinto cuatrimestre',
      materias: [
        {
          id: '5-p525',
          clave: 'P525',
          nombre: 'Conocimiento del Adulto',
          objetivo: 'El alumno identificará las características del adulto a fin de identificar su perfil educativo, desarrollando las estrategias pedagógicas que apoyen su desarrollo integral.',
          temas: [
            { titulo: 'Planteamiento general de la adultez', items: ['Desarrollo humano', 'Dinámica de la personalidad'] },
            { titulo: 'Edad adulta temprana: roles y consecuencias', items: ['La juventud última etapa de la adolescencia', 'Madurez biopsicosocial, desarrollo cognoscitivo y físico', 'Sexualidad, amor, matrimonio y familia', 'Maternidad y paternidad, divorcio', 'El mundo del trabajo en el hombre y la mujer', 'La educación del adulto, el adiestramiento y la capacitación'] },
            { titulo: 'La edad madura', items: ['Teorías psicosociales del envejecimiento', 'El climaterio y la sexualidad', 'Capacidad física: salud y enfermedad', 'Cambios cognoscitivos y de personalidad', 'Rechazo o aceptación social'] },
            { titulo: 'Senectud y vejez', items: ['El proceso de envejecimiento y causas', 'Cambios cognoscitivos físicos y emocionales', 'Enfermedades de la vejez: Demencia, Alzheimer, etc.', 'El anciano, su familia, sus nietos', 'Retiro, viudez, asilos', 'Aprender a envejecer y a vivir mejor'] },
            { titulo: 'Muerte', items: ['Pensamientos y temores', 'Enfermedades que llevan a la muerte: su preparación', 'Cómo afrontar la propia muerte', 'El derecho de morir, duelo y luto', 'Padres que sobreviven a los hijos'] }
          ],
          actividadesDocente: ['Análisis y debate grupal de la edad adulta temprana, roles y consecuencias', 'Elaboración de mapas mentales de la edad madura', 'Sociodrama', 'Dinámica grupal', 'Debates', 'Elaboración de mapas conceptuales', 'Exposición de temas'],
          actividadesIndependiente: ['Lectura crítica', 'Investigación bibliográfica y documental', 'Trabajo de investigación', 'Entrega de artículos', 'Elaboración de ensayos', 'Elaboración de propuestas pedagógicas basadas en las necesidades físicas, sociales, psicológicas del adulto'],
          evaluacion: [
            { concepto: 'Elaboración de mapas conceptuales', porcentaje: '40%' },
            { concepto: 'Exposición de temas', porcentaje: '30%' },
            { concepto: 'Trabajo de investigación bibliográfica y propuesta', porcentaje: '30%' }
          ]
        },
        {
          id: '5-p526',
          clave: 'P526',
          nombre: 'Política y Legislación Educativa en México I',
          objetivo: 'Analizar la política y legislación educativa en el contexto nacional a partir del proyecto de consolidación del estado postrevolucionario hasta 1964.',
          temas: [
            { titulo: 'Conceptos fundamentales', items: ['Política educativa', 'Legislación educativa'] },
            { titulo: 'Desarrollo histórico de la política y legislación educativa a través de los sexenios', items: ['Política y legislación en los gobiernos de Madero, Huerta y Carranza', 'Características de la política y legislación educativa', 'Origen e importancia del artículo 3° de la Constitución de 1917', 'Fundamento de la política educativa posrevolucionaria'] },
            { titulo: 'Política y legislación educativa en los gobiernos de Adolfo de la Huerta y Álvaro Obregón', items: ['Bases jurídicas', 'Importancia de José Vasconcelos en la política educativa obregonista', 'Creación de la Secretaría de Educación Pública'] },
            { titulo: 'Política y legislación en el período del Maximato', items: ['Fundamentos centrales de la política y legislación educativa', 'Autonomía universitaria'] },
            { titulo: 'Política y legislación educativa en el gobierno de Lázaro Cárdenas', items: ['El primer plan sexenal y su implementación', 'Transformación estructural del sistema educativo mexicano', 'Creación del IPN', 'Educación obrera', 'Educación indígena'] }
          ],
          actividadesDocente: ['Debate grupal', 'Análisis sobre las orientaciones generales de la política y legislación educativa en México', 'Elaboración de cuadros comparativos de la política educativa en la historia', 'Lluvia de ideas', 'Exposiciones'],
          actividadesIndependiente: ['Lectura de textos', 'Investigación bibliográfica y documental', 'Elaboración de un portafolio de artículos periodísticos', 'Elaboración de ensayos'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '5-p527',
          clave: 'P527',
          nombre: 'Psicología Social',
          objetivo: 'Al finalizar el curso el alumno identificará la problemática de la psicología social, los procesos implicados en el comportamiento social de los individuos en diferentes contextos, su anclaje en las relaciones sociales de la vida cotidiana y en los procesos en los que se desarrolla el hecho educativo.',
          temas: [
            { titulo: 'La psicología social como ciencia', items: ['Esbozo histórico de la psicología social', 'Objeto de estudio', 'Comportamiento social y ambiente', 'Comportamiento social y cultura'] },
            { titulo: 'Medio social y personalidad en grupos', items: ['Medio social y personalidad', 'La personalidad como unidad psico-social', 'Roles sociales y personalidad', 'Procesos grupales'] },
            { titulo: 'La atribución y la formación de impresiones', items: ['Principios de atribución de H. Kelley', 'Principios en la atribución', 'Efectos de primacía y cercanía temporal'] },
            { titulo: 'Actitudes y creencias', items: ['Formación de las actitudes', 'Cambios de esquemas y de creencias', 'Persuasión y cambio de actitudes', 'La persistencia de las actitudes'] },
            { titulo: 'Prejuicios y estereotipos', items: ['La personalidad autoritaria', 'El conocimiento social y los estereotipos', 'Los estereotipos y las profecías'] },
            { titulo: 'Atracción, repulsión y conflicto', items: ['Proximidad, alejamiento y familiaridad', 'Competencia', 'Conflicto'] }
          ],
          actividadesDocente: ['Elaboración de cuadros sinópticos de la psicología social como ciencia', 'Análisis y discusión del medio social y personalidad en grupos', 'Elaboración de mapas mentales de actitudes y creencias', 'Elaboración de cuadros comparativos de prejuicios y estereotipos', 'Discusión dirigida', 'Exposición', 'Análisis y presentación de casos', 'Mesas redondas'],
          actividadesIndependiente: ['Investigación bibliográfica, documental y de campo', 'Elaboración de un ensayo sobre la atracción, repulsión y conflicto', 'Lectura de textos', 'Elaboración de un trabajo de investigación'],
          evaluacion: [
            { concepto: 'Exposición', porcentaje: '20%' },
            { concepto: 'Exámenes', porcentaje: '40%' },
            { concepto: 'Cuadros, mapas, esquemas', porcentaje: '20%' },
            { concepto: 'Entrega del ensayo', porcentaje: '10%' },
            { concepto: 'Entrega del trabajo de investigación', porcentaje: '10%' }
          ]
        },
        {
          id: '5-p528',
          clave: 'P528',
          nombre: 'Dinámica de Grupos',
          objetivo: 'No especificado en el documento fuente.',
          temas: [
            { titulo: 'Generalidades sobre la psicodinámica de grupos', items: ['Definición de grupo', 'Características de un grupo', 'Propiedades de un grupo', 'Clasificación de los grupos'] },
            { titulo: 'Técnicas grupales', items: ['Definición de técnica grupal', 'Lineamientos generales para la aplicación de técnicas grupales', 'Criterios para la elección de la técnica adecuada', 'Clasificación de las técnicas grupales', 'Técnicas didácticas características de un grupo educacional'] },
            { titulo: 'Liderazgo', items: ['Tipos de poder', 'Dinámica de la motivación del poder', 'Los diferentes tipos de relaciones en las organizaciones', 'El líder en el proceso grupal'] },
            { titulo: 'Toma de decisiones', items: ['Decisiones en los grupos', 'Participación grupal', 'Factores intergrupales en la toma de decisiones', 'Consecuencias de la participación grupal e individual', 'Decisiones en las organizaciones'] },
            { titulo: 'Conflicto social', items: ['Conformidad e inconformidad', 'Grupos sociales patológicos', 'Socialización', 'La comunicación en el conflicto'] },
            { titulo: 'Las organizaciones', items: ['Formas de organización social', 'Grupos sociales', 'Grupos formales e informales', 'Socialización en la organización'] },
            { titulo: 'La organización como un sistema', items: ['Relación interdependiente de las organizaciones y el medio', 'Desarrollo y mantenimiento de las organizaciones', 'Procesos sociales generados y apoyados en las organizaciones', 'Papel del grupo en la organización'] },
            { titulo: 'Grupos especiales', items: ['Dinámica analítica de grupo', 'Grupos específicos', 'Desarrollo grupal'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales sobre la psicodinámica de grupos', 'Análisis de las técnicas grupales', 'Debates', 'Dinámica de grupos', 'Ejercicios grupales', 'Plenaria grupal', 'Exposición de temas'],
          actividadesIndependiente: ['Investigación documental', 'Lectura crítica', 'Elaboración de un ensayo', 'Trabajo de investigación', 'Elaboración de un trabajo monográfico sobre la organización como un sistema y los grupos especiales'],
          evaluacion: [
            { concepto: 'Exposición de temas', porcentaje: '25%' },
            { concepto: 'Cuadros, mapas, esquemas', porcentaje: '25%' },
            { concepto: 'Trabajo monográfico', porcentaje: '25%' },
            { concepto: 'Exámenes', porcentaje: '25%' }
          ]
        },
        {
          id: '5-p529',
          clave: 'P529',
          nombre: 'Administración Educativa',
          objetivo: 'El alumno identificará los fundamentos de la administración y organización educativa para su posterior aplicación en el ejercicio profesional.',
          temas: [
            { titulo: 'Introducción', items: ['Conceptos', 'Funciones de la administración educativa', 'Finalidades de la administración educativa'] },
            { titulo: 'Teorías administrativas', items: ['Antecedentes históricos', 'Teoría clásica', 'Escuela de relaciones humanas', 'Escuela estructuralista o sistémica', 'Neohumano-relacionismo', 'Sociología de las organizaciones', 'Autogestión'] },
            { titulo: 'Influencia de las principales teorías', items: ['Análisis de la influencia de cada teoría', 'Características privativas de las organizaciones educativas'] },
            { titulo: 'Proceso administrativo en las organizaciones educativas', items: ['Planeación', 'Organización educativa', 'Integración de personal', 'Dirección', 'Control escolar'] },
            { titulo: 'La escuela como organización', items: ['Organizaciones complejas y burocráticas', 'Conducta organizacional', 'Toma de decisiones', 'El liderazgo en la escuela', 'El clima en la organización', 'Conceptos de la conducta organizacional en la práctica administrativa escolar'] },
            { titulo: 'Funciones administrativas del personal escolar', items: ['Descripción de puestos', 'Funciones de la organización escolar', 'Perfil del aspirante a ocupar un puesto'] },
            { titulo: 'Aplicación de técnicas e instrumentos educativos al campo de la organización educativa', items: ['Manual administrativo', 'Organigramas', 'Fluxogramas', 'Cronogramas', 'Método de camino crítico'] },
            { titulo: 'Funciones directivas', items: ['Dirección administrativa', 'Dirección pedagógica', 'Dirección técnica'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales sobre las teorías administrativas', 'Análisis de la influencia de las principales teorías', 'Esquematizar el proceso administrativo en las organizaciones educativas', 'Debates', 'Lecturas dirigidas', 'Dinámica grupal', 'Exposición de temas'],
          actividadesIndependiente: ['Lectura crítica', 'Fichas de trabajo', 'Investigación bibliográfica', 'Elaboración de ensayos'],
          evaluacion: [
            { concepto: 'Elaboración de ensayos', porcentaje: '25%' },
            { concepto: 'Trabajo de investigación', porcentaje: '25%' },
            { concepto: 'Exposición de temas', porcentaje: '25%' },
            { concepto: 'Exámenes', porcentaje: '25%' }
          ]
        },
        {
          id: '5-p530',
          clave: 'P530',
          nombre: 'Diseño Curricular',
          objetivo: 'Contará con los elementos teóricos metodológicos de la teoría curricular para la construcción de programas educativos que respondan a las necesidades sociales, educativas y de desarrollo que requiere el país.',
          temas: [
            { titulo: 'Curriculum', items: ['Conceptualización', 'Elementos del curriculum', 'Currículo: Proceso y producto'] },
            { titulo: 'Fuentes del curriculum', items: ['Axiológicas', 'Filosóficas', 'Epistemológicas', 'Sociológicas', 'Psicoeducativas', 'Pedagógicas'] },
            { titulo: 'Dimensiones', items: ['Formal', 'Oculta', 'Real', 'Vivido'] },
            { titulo: 'Diseño curricular', items: ['Concepto y función del diseño curricular'] },
            { titulo: 'Enfoques y alternativas de metodologías de diseño curricular', items: ['Metodologías curriculares clásicas', 'Metodologías curriculares sistémicas', 'Metodologías curriculares críticas y sociopolíticas', 'Metodologías curriculares constructivistas'] },
            { titulo: 'Modelos educativos', items: ['Modelo de W. James Popham', 'Modelo de Anderson y Faist', 'Modelo de Bela H. Banathy', 'Modelo de Hilda Taba', 'Modelo de Ralph Tyler'] },
            { titulo: 'Modelos de organización curricular', items: ['Rígido', 'Semirígido', 'Flexible'] },
            { titulo: 'Principios educativos', items: ['Finalidad y misión de un proyecto educativo', 'Determinación de necesidades educativas', 'Proyección en perfiles educativos'] },
            { titulo: 'Metodología del diseño curricular', items: ['Identificación de necesidades', 'Plan de estudios', 'Programas de estudio', 'Perfiles de ingreso y egreso', 'Mapa curricular'] },
            { titulo: 'Programas de estudio', items: ['Planeación didáctica', 'Tipos y modelos de planeación didáctica', 'Instrumentación y estrategias didácticas', 'Función docente'] }
          ],
          actividadesDocente: ['Análisis de currículos', 'Ejercicios de diseño curricular', 'Elaboración de mapas mentales', 'Lecturas comentadas'],
          actividadesIndependiente: ['Investigación bibliográfica y documental', 'Elaboración de un currículo', 'Lectura de textos'],
          evaluacion: [
            { concepto: 'Diseño de un currículo', porcentaje: '40%' },
            { concepto: 'Planeación de unidades didácticas', porcentaje: '30%' },
            { concepto: 'Examen', porcentaje: '30%' }
          ]
        }
      ]
    },
    6: {
      nombre: 'Sexto cuatrimestre',
      materias: [
        {
          id: '6-p631',
          clave: 'P631',
          nombre: 'Psicopatología del Escolar',
          objetivo: 'El alumno identificará las diversas psicopatologías más frecuentes que se pueden presentar en el desarrollo humano a través del proceso educativo así como también comprenderá la importancia de atención y canalización al profesional adecuado.',
          temas: [
            { titulo: 'Teorías de la personalidad y psicopatología', items: ['Psicoanálisis clásico (Freud, Erikson)', 'Escuelas culturales e interpersonales (Horney, Sullivan, Jung, Adler, Rank, Klein, Reich, Meyer)'] },
            { titulo: 'Clasificación', items: ['Esquizofrenia', 'Paranoias', 'Trastornos esquizoafectivos', 'Trastornos afectivos', 'Neurosis', 'Trastornos de personalidad', 'Trastornos psicosexuales', 'Trastornos de adaptación', 'Psicosis'] },
            { titulo: 'Trastornos específicos del desarrollo de la infancia', items: ['Trastornos de lenguaje', 'Trastornos de aprendizaje', 'Trastornos de alimentación', 'Trastornos de conducta', 'Ansiedad', 'Adaptación', 'Identidad'] },
            { titulo: 'Áreas de interés especial', items: ['Síndrome del niño golpeado', 'Trastornos afectivos', 'Drogadicción', 'Alcoholismo'] },
            { titulo: 'Instituciones y profesionistas de atención específica', items: ['Especialistas', 'Instituciones'] }
          ],
          actividadesDocente: ['Elaboración de mapas mentales de las teorías de la personalidad y psicopatología', 'Elaboración de un cuadro comparativo de las teorías de la personalidad', 'Esquematizar los trastornos específicos del desarrollo de la infancia', 'Debates', 'Lluvia de ideas', 'Dinámica de grupos', 'Análisis de casos', 'Exposición de temas'],
          actividadesIndependiente: ['Fichas de trabajo', 'Investigación bibliográfica y documental', 'Elaboración de sinopsis', 'Lectura crítica', 'Trabajo de investigación', 'Visitar alguna institución de atención específica'],
          evaluacion: [
            { concepto: 'Exposición de temas', porcentaje: '20%' },
            { concepto: 'Presentación de casos', porcentaje: '20%' },
            { concepto: 'Trabajo de investigación', porcentaje: '10%' },
            { concepto: 'Exámenes', porcentaje: '40%' }
          ]
        },
        {
          id: '6-p632',
          clave: 'P632',
          nombre: 'Política y Legislación Educativa en México II',
          objetivo: 'Valorar los aportes en materia de política y legislación educativa, así como examinar los tratados y acuerdos que se generan en el ámbito educativo.',
          temas: [
            { titulo: 'El desarrollo histórico de la política y legislación educativa en los gobiernos de Gustavo Díaz Ordaz a José López Portillo', items: ['Gustavo Díaz Ordaz (Movimiento estudiantil de 1968)', 'Luis Echeverría Álvarez (Fundamento de la Reforma Educativa, Ley Federal de Educación, Ley Nacional de Educación de Adultos)', 'José López Portillo (Plan Nacional de Educación, Plan Global de Desarrollo)'] },
            { titulo: 'Política y legislación educativa: génesis y desarrollo de los gobiernos neoliberales', items: ['Miguel de la Madrid Hurtado (Lineamientos educativos del Plan Nacional de Desarrollo, Concepción de la revolución educativa, Reformas a la Ley Federal de Educación)'] },
            { titulo: 'Carlos Salinas de Gortari', items: ['Modernización educativa', 'Reformas al artículo 3° constitucional', 'La educación y el Tratado de Libre Comercio'] },
            { titulo: 'Ernesto Zedillo Ponce de León', items: ['Legislación educativa', 'Perspectivas político educativas'] },
            { titulo: 'Política y legislación educativa en el ámbito internacional', items: ['OCDE', 'UNESCO', 'FMI', 'Banco Mundial'] }
          ],
          actividadesDocente: ['Debate grupal', 'Análisis sobre las orientaciones generales de la política y legislación educativa en los gobiernos neoliberales', 'Elaboración de cuadros comparativos de la política educativa en la historia', 'Lluvia de ideas', 'Exposiciones'],
          actividadesIndependiente: ['Lectura de textos', 'Investigación bibliográfica y documental', 'Elaboración de un portafolio de artículos periodísticos', 'Elaboración de ensayos'],
          evaluacion: [
            { concepto: 'Exposición', porcentaje: '20%' },
            { concepto: 'Examen', porcentaje: '50%' },
            { concepto: 'Entrega de cuadros comparativos', porcentaje: '10%' },
            { concepto: 'Entrega de portafolio de artículos periodísticos', porcentaje: '10%' },
            { concepto: 'Entrega de ensayos', porcentaje: '10%' }
          ]
        },
        {
          id: '6-p633',
          clave: 'P633',
          nombre: 'Producción de Apoyos Didácticos',
          objetivo: 'Conocerá las teorías, los materiales y recursos que facilitan el aprendizaje para diseñar y elaborar material didáctico considerando los objetivos de aprendizaje y las características del sujeto o población al que va dirigido.',
          temas: [
            { titulo: 'El material didáctico como apoyo en la promoción de aprendizajes significativos', items: ['Material didáctico y tecnología educativa', 'Antecedentes', 'Conceptualización de recurso y auxiliar didáctico', 'Clasificación', 'Alcances y limitaciones'] },
            { titulo: 'Habilidades básicas', items: ['Creatividad', 'Dibujo', 'Rotulación', 'Uso del color'] },
            { titulo: 'Material didáctico', items: ['Básico (Franelógrafo, Carteles, Retroproyector, Caricaturas)', 'Interactivos (Juegos, Dramatizaciones, Títeres y teatro guiñol, Material de reúso)'] },
            { titulo: 'Propuestas educativas de material didáctico', items: ['Material de lecto-escritura de Freinet', 'Material para alfabetización de Freire', 'Material para educación especial de Montessori', 'Material de Froebel'] }
          ],
          actividadesDocente: ['No especificadas'],
          actividadesIndependiente: ['No especificadas'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '6-p634',
          clave: 'P634',
          nombre: 'Evaluación Curricular',
          objetivo: 'Evaluará los procesos curriculares internos y externos fundamentándose en los criterios y principios metodológicos de la evaluación curricular.',
          temas: [
            { titulo: 'Niveles de análisis de los fenómenos educativos', items: ['Institucional', 'Social', 'Del espacio escolar'] },
            { titulo: 'Modelos de análisis para la construcción y reconstrucción del currículo', items: ['Evaluación de condicionantes internas y externas de los procesos curriculares', 'Congruencia', 'Viabilidad', 'Continuidad', 'Integración y vigencia'] },
            { titulo: 'Indicadores de la pertinencia del currículo', items: ['Nivel institucional (Antecedentes, Administración del currículo, Servicios de apoyo a la administración, Extensión académica, Proyectos de investigación y difusión académica)', 'Población estudiantil (Matriculación, Deserción, Reprobación, Acreditación, Egreso, Titulación, Servicio social)', 'Planta docente (Características, Profesiones, Grados académicos, Carga académica, Producción académica)'] },
            { titulo: 'Calidad educativa del plan de estudios', items: ['Análisis y contrastación de todos los elementos del plan de estudios', 'Fundamentación', 'Perfiles', 'Organización curricular', 'Proceso de enseñanza-aprendizaje', 'Congruencia interna', 'Contenidos programáticos', 'Actividades de enseñanza-aprendizaje', 'Bibliografía', 'Recursos didácticos', 'Sistema de evaluación'] }
          ],
          actividadesDocente: ['Plenaria', 'Lecturas comentadas', 'Elaboración de un proyecto de evaluación de un currículo', 'Elaboración de cuadros sinópticos', 'Mesas redondas'],
          actividadesIndependiente: ['Investigación bibliográfica, documental y de campo', 'Elaboración, pilotaje y aplicación de instrumentos de evaluación', 'Lectura de textos'],
          evaluacion: [
            { concepto: 'Aplicación de un proyecto de evaluación de un currículo', porcentaje: '25%' },
            { concepto: 'Entrega de avances del proyecto', porcentaje: '25%' },
            { concepto: 'Examen', porcentaje: '50%' }
          ]
        },
        {
          id: '6-p635',
          clave: 'P635',
          nombre: 'Educación y Diversidad Cultural',
          objetivo: 'Al finalizar el curso el alumno analizará las teorías y experiencias más relevantes orientadas a la educación en y para la diversidad, así como las líneas marcadas por las organizaciones internacionales y nacionales, que deben servir de pauta a las políticas educativas en relación con la educación para la diversidad.',
          temas: [
            { titulo: 'La educación para la diversidad', items: ['Razones que la justifican', 'Antecedentes y fundamentos teóricos', 'Modelos y enfoques de la educación para la diversidad', 'Educación para la diversidad y ciudadanía', 'La educación para la diversidad y el sistema educativo', 'La formación del profesorado en educación para la diversidad y la ciudadanía'] },
            { titulo: 'Diversidad humana', items: ['Diversas culturas', 'Poblaciones y sociedades', 'Cuerpos humanos', 'Lenguaje y comunicación', 'Género y edad', 'Lugares donde vivir', 'Alimentos para subsistir y convivir', 'Las reglas del intercambio', 'Parientes y extraños', 'La distinción social', 'Bandas y estados', 'La ritualización de la vida social', 'Sistemas de creencias', 'La memoria colectiva y la tradición oral'] },
            { titulo: 'Contexto', items: ['Socio-histórico y económico en México y Estados Unidos', 'Aspectos fundamentales de los principales grupos étnicos y culturales asentados en nuestro contexto', 'Bases internacionales orientadas a la educación para la diversidad: ONU, UNESCO, COE, UE, otras.', 'Marco legal sobre educación para la diversidad', 'Los derechos humanos y la lucha contra las discriminaciones y la educación para la diversidad'] },
            { titulo: 'Análisis situacional', items: ['Nuestra concepción de la diversidad cultural', 'La desigualdad social y la intervención educativa ante la diversidad sociocultural', 'La diversidad sociocultural en el contexto del Sistema Educativo Mexicano'] }
          ],
          actividadesDocente: ['Mesa redonda sobre la importancia de políticas educativas de y para la diversidad cultural', 'Debate grupal sobre la situación actual del país', 'Exposición de temas por parte de los alumnos', 'Análisis de casos'],
          actividadesIndependiente: ['Investigación bibliográfica, documental y de campo', 'Análisis de textos', 'Análisis de casos', 'Elaboración de un ensayo sobre la situación educativa actual en México en y para la diversidad cultural', 'Elaboración de fichas de trabajo sobre cada uno de los temas'],
          evaluacion: [
            { concepto: 'Trabajo de Investigación', porcentaje: '40%' },
            { concepto: 'Presentación del trabajo de investigación', porcentaje: '20%' },
            { concepto: 'Entrega del ensayo', porcentaje: '20%' },
            { concepto: 'Exposición de temas', porcentaje: '20%' }
          ]
        },
        {
          id: '6-p636',
          clave: 'P636',
          nombre: 'Desarrollo Organizacional',
          objetivo: 'Al término del curso el alumno identificará los elementos interrelacionantes que se involucrarán para otorgar dinamismo a las organizaciones con futuro, lo que le permitirá diseñar e implementar estrategias para la organización en que se desempeñe como pedagogo.',
          temas: [
            { titulo: 'Las áreas de contacto en el desarrollo organizacional', items: ['La organización y el ambiente (Problemática entre la organización y el ambiente)', 'Los grupos y la organización (Relación interior de la empresa, El modelo de diferenciación e integración)', 'El individuo y la organización (Sistemas individuales: motivación, valores, percepciones; Las metas organizacionales y las satisfacciones individuales)'] },
            { titulo: 'Elementos del desarrollo organizacional', items: ['Agente del cambio (Significado, Agentes socioculturales, Agentes económicos)', 'Factores susceptibles de cambio (Habilidades, Conocimientos, Actitudes, Motivación, Requerimientos ambientales)'] },
            { titulo: 'Etapas de desarrollo organizacional y problemática', items: ['Etapas (Diagnóstica, Planteamiento de la acción, Ejecución, Evaluación)', 'Problemática del desarrollo organizacional (Estabilidad y cambio, Resistencia al cambio, Duplicidad de autoridad, Conflictos)', 'El fracaso del desarrollo organizacional (Causas más frecuentes, Variables que intervienen)'] },
            { titulo: 'Evaluación del proceso de desarrollo organizacional', items: ['El proceso de evaluación', 'Logro de objetivos (Evaluación de estrategias empleadas, Elaboración de un nuevo diagnóstico)', 'Diseño de nuevas estrategias (Terminación de una intervención de desarrollo organizacional)', 'El desarrollo organizacional en México (Situación de la organización en México, Influencias socioeconómicas en desarrollo organizacional, Tendencias y perspectivas)'] }
          ],
          actividadesDocente: ['Debate grupal', 'Elaborar proyectos y programas de desarrollo organizacional', 'Análisis y presentación de casos', 'Elaboración de mapas conceptuales', 'Mesa redonda'],
          actividadesIndependiente: ['Elaboración de un trabajo de investigación', 'Elaboración de fichas de trabajo', 'Diseño de un proyecto para el desarrollo de una organización', 'Lectura de textos', 'Elaboración de un ensayo'],
          evaluacion: [
            { concepto: 'Entrega del trabajo de investigación', porcentaje: '30%' },
            { concepto: 'Entrega del proyecto', porcentaje: '35%' },
            { concepto: 'Exámenes parciales', porcentaje: '35%' }
          ]
        }
      ]
    },
    7: {
      nombre: 'Séptimo cuatrimestre',
      materias: [
        {
          id: '7-p737',
          clave: 'P737',
          nombre: 'Seminario de Investigación I',
          objetivo: 'Aplicará los elementos teórico-metodológicos de la investigación en el desarrollo de su proyecto conforme a la opción de titulación elegida.',
          temas: [
            { titulo: 'Generalidades sobre el trabajo de tesis', items: ['Selección del tema de investigación', 'Justificación del tema de investigación', 'Planteamiento del problema de investigación', 'Delimitación del problema de investigación', 'Formulación de los objetivos de la investigación'] },
            { titulo: 'Técnicas de investigación', items: ['Elaboración del marco teórico y conceptual', 'Citas textuales y notas de pie de página', 'Hipótesis probables de la investigación'] },
            { titulo: 'Definición de la metodología para la investigación del problema', items: ['Elección del material instrumental'] },
            { titulo: 'Trabajo de campo', items: ['Observación', 'Entrevista', 'Encuesta', 'Diseño y aplicación de cuestionarios', 'Aplicación de escalas', 'Recolección de información'] },
            { titulo: 'Procesamiento de la información', items: ['Tratamiento estadístico de la información', 'Medidas de tendencia central', 'Medidas de dispersión', 'Representación gráfica de los datos'] },
            { titulo: 'Análisis e interpretación de los datos', items: ['Análisis e interpretación de los datos', 'Presentación de resultados', 'Elaboración del informe de investigación'] }
          ],
          actividadesDocente: ['Discusión sobre los avances del proyecto de titulación', 'Análisis de instrumentos de investigación', 'Presentación ante el grupo del proyecto de titulación'],
          actividadesIndependiente: ['Realización de resúmenes de investigación', 'Aplicación de la investigación', 'Aplicación de entrevistas, cuestionarios, etc.', 'Realización de observaciones', 'Lectura de textos'],
          evaluacion: [
            { concepto: 'Presentación de avances del proyecto de titulación', porcentaje: '20%' },
            { concepto: 'Aplicación de instrumentos de investigación', porcentaje: '20%' },
            { concepto: 'Presentación del cronograma', porcentaje: '10%' },
            { concepto: 'Presentación ante el grupo del proyecto de titulación', porcentaje: '10%' },
            { concepto: 'Entrega del proyecto de titulación', porcentaje: '40%' }
          ]
        },
        {
          id: '7-p738',
          clave: 'P738',
          nombre: 'Psicotécnica Pedagógica',
          objetivo: 'El alumno conocerá la aplicación, medición y evaluación en diversos tipos de pruebas pedagógicas, así como identificará las características, la confiabilidad y validez requeridas en el área educativa.',
          temas: [
            { titulo: 'Introducción a la psicotécnica', items: ['Definición', 'Medición y evaluación'] },
            { titulo: 'Instrumentos psicométricos', items: ['Observación', 'Escalas estimativas', 'Cuestionarios y encuestas', 'Autobiografía', 'Entrevista', 'Listas de control'] },
            { titulo: 'Pruebas', items: ['Cualidades', 'Clasificación'] },
            { titulo: 'Técnicas proyectivas', items: ['Test de Rorschach', 'Pruebas de apercepción temática (TAT)', 'Pruebas de apercepción para niños', 'Prueba de frases incompletas', 'Asociación de palabras'] },
            { titulo: 'Pruebas mentales', items: ['Psicometría', 'Usos', 'Diagnóstico', 'Pronóstico'] },
            { titulo: 'Pruebas de inteligencia', items: ['Army Beta', 'Dominós', 'Meili', 'Raven'] },
            { titulo: 'Pruebas de interés vocacional', items: ['Kuder', 'Escala de intereses, habilidades y aptitudes vocacionales'] },
            { titulo: 'Pruebas de personalidad', items: ['Autocrítica', 'Inventario de adaptación', 'Inventario de personalidad', 'Perfil de valores'] },
            { titulo: 'Pruebas objetivas', items: ['Características', 'Diagnóstico', 'Pronóstico'] },
            { titulo: 'Test psicométricos', items: ['Goodenough', 'Thurstone', 'Morey Otero', 'Toulouse-Piéron', 'ABD: Fhilo'] }
          ],
          actividadesDocente: ['No especificadas'],
          actividadesIndependiente: ['No especificadas'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '7-p739',
          clave: 'P739',
          nombre: 'Tecnología Educativa',
          objetivo: 'Al finalizar el curso el alumno analizará los cambios culturales que están transformando la sociedad y el ámbito educativo, reflexionará acerca del impacto de las nuevas tecnologías de la información y la comunicación en los nuevos ambientes de aprendizaje, desarrollando habilidades en el diseño y evaluación de recursos pedagógicos con nuevas Tecnologías de Información y Comunicación.',
          temas: [
            { titulo: 'Métodos de instrucción', items: ['La instrucción cara a cara o presencial', 'La instrucción interactiva basada en la web', 'Comunicación vía correo electrónico', 'Foros de discusión electrónicos', 'Contenido para aprendizaje autónomo', 'Software para trabajo colaborativo', 'Aulas virtuales', 'Evaluación en línea', 'Videoconferencia', 'Audio conferencia', 'Conferencia vía computadoras'] },
            { titulo: 'Estilos de aprendizaje', items: ['Visuales–verbales', 'Visual-espacial', 'Verbal-lingüístico', 'Kinestésico-corporal', 'Lógico-matemático', 'Relaciones interpersonales', 'Relaciones intrapersonales'] },
            { titulo: 'Recursos audiovisuales aplicados a la educación', items: ['El video', 'Audio', 'Recursos multimedia'] },
            { titulo: 'Interacción y diseño de ambientes virtuales', items: ['Análisis de necesidades', 'Contexto de las necesidades', 'Los objetivos de formación', 'Selección de los recursos más adecuados', 'Determinación de los contenidos de aprendizaje', 'Planeación de las modalidades de evaluación'] },
            { titulo: 'Evaluación en la educación mediada por tecnología', items: ['Exámenes en forma presencial', 'Exámenes en forma virtual', 'Actividades de aprendizaje, dentro de estas técnicas', 'Evaluación del desempeño en foros asincrónicos de comunicación', 'Autoevaluación', 'Coevaluación'] }
          ],
          actividadesDocente: ['Analizará el impacto de las nuevas tecnologías de la información en la aplicación del ámbito educativo', 'Discusión en grupo de la necesidad de construir nuevas teorías del aprendizaje en las TIC´s', 'Exposición de temas por parte de los alumnos'],
          actividadesIndependiente: ['Análisis de textos especializados', 'Investigación bibliográfica y documental', 'Diseño de modelos de instrucción apoyado en tecnologías de información y comunicación', 'Elaboración de esquemas', 'Elaboración de fichas de trabajo sobre los diferentes temas del curso', 'Elaboración de un ensayo sobre el impacto de las nuevas tecnologías de la información en la aplicación del ámbito educativo'],
          evaluacion: [
            { concepto: 'Diseño de modelos de instrucción', porcentaje: '40%' },
            { concepto: 'Trabajo de investigación', porcentaje: '20%' },
            { concepto: 'Entrega del ensayo', porcentaje: '20%' }
          ]
        },
        {
          id: '7-p740',
          clave: 'P740',
          nombre: 'Educación en América Latina',
          objetivo: 'El alumno explicará las necesidades sociales que impulsan la educación de adultos, su relación con la estructura política y social de una nación, así como las opciones políticas para distintas coyunturas histórico-estructurales.',
          temas: [
            { titulo: 'Paradigmas de la educación no formal', items: ['Visión incremental', 'Visión estructuralista', 'El enfoque de la modernización-capital humano', 'La pedagogía del oprimido y la educación popular', 'Idealismo pragmático', 'Ingeniería social del cooperativismo'] },
            { titulo: 'La economía política de la educación en América Latina', items: ['El estado capitalista hegemónico y educación', 'El estado y la política educativa', 'Estructura social y expansión educativa', 'Ideología, educación y planteamiento político', 'Racionalidad política de la educación para adultos en América Latina'] },
            { titulo: 'Perspectivas teórico-metodológicas de la educación de adultos en América Latina', items: ['El objeto de investigación en la educación de adultos', 'Alcance de la investigación', 'Análisis corporativo de la política educativa'] }
          ],
          actividadesDocente: ['No especificadas'],
          actividadesIndependiente: ['No especificadas'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '7-p741',
          clave: 'P741',
          nombre: 'Orientación Educativa y Vocacional I',
          objetivo: 'El alumno distinguirá los tipos de orientación educativa en los diferentes niveles, aplicando los métodos y técnicas necesarias para llevarla a cabo.',
          temas: [
            { titulo: 'Fundamentos básicos de la orientación educativa', items: ['Filosofía funcional', 'Definición de la orientación', 'Aspectos básicos de la orientación', 'Funciones de la orientación educativa', 'Conceptos básicos de la orientación', 'Tipos de orientación'] },
            { titulo: 'Personal profesional que interviene en la orientación educativa', items: ['Departamento psicológico escolar psicopedagógico', 'Objetivos y funciones', 'Características del orientador', 'Elementos que intervienen en el proceso de orientación educativa'] },
            { titulo: 'La capacitación del maestro en la detección de tipos de alumnos', items: ['La orientación grupal', 'La evaluación en la orientación', 'La detección de niños atípicos y excepcionales'] },
            { titulo: 'La orientación educativa en el proceso de enseñanza-aprendizaje', items: ['La orientación en el plan de estudios', 'Tiempo para tareas de la orientación', 'La orientación en el aprendizaje'] },
            { titulo: 'La orientación educativa en alumnos de rendimiento inferior y en desventaja', items: ['Orientación de los alumnos de rendimiento inferior', 'La orientación de niños y jóvenes en desventaja'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales', 'Elaboración de cuadros comparativos sobre los tipos de orientación', 'Debate', 'Mesas redondas', 'Exposición de temas'],
          actividadesIndependiente: ['Lecturas críticas', 'Sinopsis de métodos y técnicas en la orientación educativa', 'Investigación bibliográfica y documental', 'Elaboración de ensayos'],
          evaluacion: [
            { concepto: 'Trabajo de investigación', porcentaje: '30%' },
            { concepto: 'Exposición de temas', porcentaje: '20%' },
            { concepto: 'Exámenes', porcentaje: '50%' }
          ]
        },
        {
          id: '7-p742',
          clave: 'P742',
          nombre: 'Desarrollo de Habilidades Docentes',
          objetivo: 'Al término del curso el alumno analizará y aplicará los elementos que intervienen en el proceso educativo, desarrollando habilidades docentes.',
          temas: [
            { titulo: 'Análisis de la tipología docente', items: ['Características de los diferentes tipos de docentes', 'Ventajas y desventajas de los diferentes tipos de docentes', 'Aplicación de los conceptos psicopedagógicos en la labor del docente', 'Riesgos, valores y elementos del verdadero docente'] },
            { titulo: 'Objetivos', items: ['Objetivos de una educación integral', 'La programación por objetivos'] },
            { titulo: 'Metodología', items: ['El problema como núcleo integrador del aprendizaje', 'Globalización'] },
            { titulo: 'Recursos didácticos', items: ['Selección y elaboración del material didáctico', 'Diseño de programas y planes de clase'] },
            { titulo: 'Evaluación diagnóstica', items: ['Procesos de evaluación', 'El diagnóstico en la evaluación'] }
          ],
          actividadesDocente: ['No especificadas'],
          actividadesIndependiente: ['No especificadas'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        }
      ]
    },
    8: {
      nombre: 'Octavo cuatrimestre',
      materias: [
        {
          id: '8-p843',
          clave: 'P843',
          nombre: 'Seminario de Investigación II',
          objetivo: 'No especificado en el documento fuente.',
          temas: [
            { titulo: 'Procesamiento de la información', items: ['Tratamiento estadístico de la información', 'Representación gráfica de los datos'] },
            { titulo: 'Análisis e interpretación de los datos', items: ['Análisis e interpretación de los datos', 'Presentación de resultados', 'Conclusiones', 'Elaboración del informe de investigación'] },
            { titulo: 'Presentación del trabajo', items: ['Revisión de la primera redacción del trabajo', 'Presentación del trabajo con los requisitos necesarios', 'Partes preliminares', 'Cuerpo de trabajo (Partes finales, Presentación formal de la tesis)'] }
          ],
          actividadesDocente: ['Presentación de avances de educación', 'Presentación ante el grupo del proyecto de tesis', 'Debate grupal'],
          actividadesIndependiente: ['Aplicación de la investigación', 'Fichas de trabajo', 'Lectura de textos'],
          evaluacion: [
            { concepto: 'Entrega de avances de investigación', porcentaje: '40%' },
            { concepto: 'Presentación de proyecto de tesis', porcentaje: '60%' }
          ]
        },
        {
          id: '8-p844',
          clave: 'P844',
          nombre: 'Capacitación Empresarial I',
          objetivo: 'Integrará los elementos administrativos, pedagógicos y legales de la capacitación, que le permita ubicar el papel del pedagogo como educador, instructor y formador de recursos humanos.',
          temas: [
            { titulo: 'Administración de recursos humanos, origen y disciplinas', items: ['Origen', 'La función de administración de recursos humanos', 'Análisis de puestos, reclutamiento y selección de personal'] },
            { titulo: 'Capacitación', items: ['Ubicación en el proceso educativo', 'Capacitación y educación', 'Integración de personal', 'Desarrollo de personal', 'Pasos de la función de capacitación'] },
            { titulo: 'Tipos de capacitación', items: ['Capacitación directa', 'Capacitación indirecta'] },
            { titulo: 'Marco legal de la capacitación', items: ['Factores externos y factores internos', 'Ley Federal del Trabajo'] },
            { titulo: 'Importancia del instructor dentro de la capacitación', items: ['Características del instructor', 'Educación de adultos', 'Proceso enseñanza-aprendizaje'] },
            { titulo: 'Detección de necesidades de capacitación', items: ['Personal técnico', 'Personal administrativo', 'Personal profesional'] },
            { titulo: 'Evaluación de la capacitación', items: ['Descripción del curso', 'Resultados obtenidos', 'Condiciones del curso'] }
          ],
          actividadesDocente: ['Elaboración de mapas conceptuales', 'Análisis de la capacitación y el papel del pedagogo', 'Exposición de temas', 'Lluvia de ideas', 'Dinámica de grupos', 'Debate'],
          actividadesIndependiente: ['Lectura crítica', 'Fichas de trabajo', 'Elaboración de resúmenes, síntesis, reseñas críticas', 'Investigación bibliográfica, documental y de campo', 'Elaboración de un ensayo'],
          evaluacion: [
            { concepto: 'Trabajo de investigación', porcentaje: '30%' },
            { concepto: 'Exposición de temas', porcentaje: '30%' },
            { concepto: 'Exámenes', porcentaje: '40%' }
          ]
        },
        {
          id: '8-p845',
          clave: 'P845',
          nombre: 'Desarrollo Comunitario I',
          objetivo: 'Analizará las experiencias de educación popular o comunitaria que le permitan incorporar elementos a su proyecto social.',
          temas: [
            { titulo: 'Desarrollo comunitario', items: ['Concepto y objeto de estudio', 'El papel del pedagogo en el desarrollo de la comunidad'] },
            { titulo: 'Comunidad', items: ['Concepto', 'Tipos', 'Cultura', 'Valores', 'Historias'] },
            { titulo: 'Grupo social clave', items: ['Antecedentes', 'Características', 'Ideología', 'Cosmovisión'] },
            { titulo: 'Estudio de la comunidad', items: ['Procedimiento Kruse', 'Método indirecto', 'Método directo', 'Método histórico', 'Metodología social'] },
            { titulo: 'Proceso educativo', items: ['Objetivos generales', 'Concepciones educativas en la comunidad', 'Concepciones de la relación comunidad-educador', 'Ambiente educativo', 'Procedimientos'] },
            { titulo: 'Núcleo didáctico', items: ['Antecedentes', 'Objetivos particulares y específicos', 'Contenidos', 'Métodos', 'Técnicas participativas', 'Materiales educativos y de apoyo'] },
            { titulo: 'Reflexiones sobre la práctica', items: ['Nueva práctica de desarrollo comunitario', 'La investigación-acción participativa'] }
          ],
          actividadesDocente: ['Plenaria grupal', 'Elaboración e implementación de un proyecto de desarrollo comunitario', 'Lecturas comentadas', 'Exposiciones', 'Puesta en común'],
          actividadesIndependiente: ['Visitas a comunidades', 'Solución de casos y problemas', 'Aplicación de técnicas de investigación social', 'Lectura de textos'],
          evaluacion: [
            { concepto: 'Examen', porcentaje: '40%' },
            { concepto: 'Exposición', porcentaje: '10%' },
            { concepto: 'Entrega de avances del proyecto de desarrollo comunitario', porcentaje: '25%' },
            { concepto: 'Proyecto de desarrollo comunitario elaborado e implementado', porcentaje: '25%' }
          ]
        },
        {
          id: '8-p846',
          clave: 'P846',
          nombre: 'Orientación Educativa y Vocacional II',
          objetivo: 'El alumno identificará la importancia de la asesoría en la planeación de la carrera y vida de los individuos para lograr su autorrealización como seres humanos, a través del análisis de sus capacidades, habilidades, intereses y valores, para contribuir así a mejorar su entorno social en el que vive.',
          temas: [
            { titulo: 'Orientación vocacional', items: ['Conceptos', 'Objetivos'] },
            { titulo: 'Significado de la vocación', items: ['La autorrealización', 'El plan de vida', 'La motivación de logro'] },
            { titulo: 'Metodología de la orientación vocacional', items: ['Técnicas para el conocimiento individual', 'Técnicas de información profesional', 'Técnicas para la toma de decisiones', 'Factores que condicionan la elección profesional'] },
            { titulo: 'Teorías sobre la elección de carrera', items: ['Teoría de Anne Roe', 'Teoría de Holland', 'Teoría de Ginzberg, Ginsburg, Axelrad y Herma', 'Noción psicoanalítica', 'Teoría de Donald Super'] },
            { titulo: 'Orientación para integrarse en el mercado laboral', items: ['El mercado de trabajo y sus características', 'Las oportunidades de trabajo', 'La oferta laboral', 'La fuerza de trabajo profesional', 'El perfil profesiográfico', 'La profesión como un estilo de vida', 'La responsabilidad profesional'] }
          ],
          actividadesDocente: ['Dinámica grupal', 'Análisis de textos para exponer y fundamentar en clase', 'Debate', 'Elaboración de mapas conceptuales', 'Exposición de temas'],
          actividadesIndependiente: ['Lectura crítica', 'Investigación bibliográfica', 'Trabajo de investigación', 'Elaboración de ensayos'],
          evaluacion: [
            { concepto: 'Exámenes parciales', porcentaje: '50%' },
            { concepto: 'Elaboración de ensayos', porcentaje: '30%' },
            { concepto: 'Trabajo de investigación', porcentaje: '20%' }
          ]
        },
        {
          id: '8-p847',
          clave: 'P847',
          nombre: 'Pedagogía Comparada',
          objetivo: 'Al finalizar el curso, el alumno aplicará los principios metodológicos para realizar comparaciones útiles y fiables del tejido social y educativo del mundo moderno.',
          temas: [
            { titulo: 'Fundamentos teóricos de la educación comparada', items: ['Definiciones', 'Aproximación histórica', 'Temas prioritarios para la educación comparada de hoy', 'Educación comparada y su relación con otras disciplinas de las Ciencias de la Educación'] },
            { titulo: 'Metodología de la educación comparada', items: ['El método comparativo', 'Teorías y metodologías preferentes de la década de los 90', 'Metodología cualitativa vs. Metodología cuantitativa en la Educación comparada', 'Estadísticas y generalización en Educación comparada'] },
            { titulo: 'Debates actuales en torno a la educación comparada', items: ['Teoría vs. Práctica', 'Globalización e identidad', 'Estudios comparativos de las instituciones internacionales (UE, OCDE, UNESCO, etc.)', 'Transferencia educativa y convergencia educativa'] },
            { titulo: 'Los sistemas educativos', items: ['El sistema educativo francés', 'El sistema educativo inglés', 'El sistema educativo alemán'] }
          ],
          actividadesDocente: ['Exposición de temas', 'Elaboración de cuadro de síntesis de las teorías y metodologías de la educación comparada', 'Análisis en equipos de las características en la metodología cualitativa y cuantitativa de la educación comparada', 'Análisis de informes OCDE, UNESCO, etc.', 'Análisis estadístico del método comparativo'],
          actividadesIndependiente: ['Elaboración de un trabajo de investigación', 'Elaboración de un ensayo', 'Trabajo comparativo de los sistemas educativos actuales', 'Aplicación de la metodología de la educación comparada en un proyecto educativo', 'Análisis de textos', 'Investigación bibliográfica y documental'],
          evaluacion: [
            { concepto: 'Trabajo comparativo', porcentaje: '25%' },
            { concepto: 'Dos exámenes parciales', porcentaje: '25%' },
            { concepto: 'Exposición, esquemas y cuadros sinópticos', porcentaje: '25%' },
            { concepto: 'Trabajo de investigación y proyecto', porcentaje: '25%' }
          ]
        },
        {
          id: '8-p848',
          clave: 'P848',
          nombre: 'Ética Profesional',
          objetivo: 'Conocerá los fundamentos de ética y moral, así como analizará y valorará la importancia de la actitud y la conducta ética en el ejercicio profesional.',
          temas: [
            { titulo: 'Ética', items: ['Definición', 'La ética como disciplina filosófica', 'Relación entre ética y axiología', 'Objetivismo y subjetivismo axiológico'] },
            { titulo: 'La ética y su objeto', items: ['El método filosófico en la reflexión sobre la moral', 'El ser humano como sujeto moral', 'El acto moral, la persona y la obligación moral', 'Moral social'] },
            { titulo: 'Postura ético-antropológica', items: ['Noción de hombre', 'Persona y dignidad', 'La libertad humana y la autonomía', 'El criterio ético', 'Génesis de los valores'] },
            { titulo: 'Posturas ético-filosóficas en torno a la educación', items: ['Marxismo', 'Anarquismo', 'Existencialismo', 'Humanismo personalista'] },
            { titulo: 'Ética profesional', items: ['Deontología', 'Perfil ético del pedagogo', 'Práctica profesional y conducta moral'] }
          ],
          actividadesDocente: ['No especificadas'],
          actividadesIndependiente: ['No especificadas'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '8-p949',
          clave: 'P949',
          nombre: 'Educación Especial',
          objetivo: 'El alumno identificará y analizará los diversos problemas que requieren de educación especial y su tratamiento, lo cual le permita evaluar el papel del pedagogo dentro de un grupo clínico interdisciplinario.',
          temas: [
            { titulo: 'Educación especial', items: ['Campos de acción', 'Antecedentes históricos', 'Educación Especial en México', 'Cuidado y educación del individuo especial', 'Entorno familiar y social'] },
            { titulo: 'Diagnóstico y tratamiento de problemas de orden intelectual y neurológico', items: ['Daño cerebral', 'Parálisis cerebral', 'Retraso mental', 'Hiperkinesis', 'Sobredotados'] },
            { titulo: 'Diagnóstico y tratamiento de problemas de orden físico', items: ['Trastornos del lenguaje', 'Discapacidades físicas', 'Deficiencia motora', 'Ceguera y debilidad visual', 'Hipoacusia'] },
            { titulo: 'Diagnóstico y tratamiento de problemas de orden emocional y social', items: ['Inadaptación emocional', 'Inadaptación social'] }
          ],
          actividadesDocente: ['No especificadas'],
          actividadesIndependiente: ['No especificadas'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        }
      ]
    },
    9: {
      nombre: 'Noveno cuatrimestre',
      materias: [
        {
          id: '9-p950',
          clave: 'P950',
          nombre: 'Desarrollo Comunitario II',
          objetivo: 'Al finalizar el curso el alumno analizará la práctica profesional del pedagogo en el impulso del desarrollo de la comunidad, distinguiendo la metodología, instrumentos y diagnóstico aplicables a su estudio.',
          temas: [
            { titulo: 'Caracterización del sistema social', items: ['Contexto geográfico', 'Condiciones sociales, económicas, políticas, etc.', 'Servicios', 'Relaciones de los miembros', 'Relaciones de poder', 'Formas de participación y organización comunitaria'] },
            { titulo: 'Investigación comunitaria', items: ['Investigación etnográfica (Distinción entre la etnografía y otros modelos de investigación, Etnografía educativa, Teoría y estructura de la investigación, Selección y muestreo, Estrategias de recogida de datos, Análisis e interpretación de los datos, Evaluación del diseño etnográfico)'] },
            { titulo: 'Elementos del proyecto de desarrollo de la comunidad', items: ['Localización', 'Antecedentes históricos', 'Técnicas de recolección de datos', 'Estructuras físicas fundamentales', 'Infraestructura y equipamiento', 'Población', 'Niveles de vida', 'Organización social', 'Procesos sociales', 'Recursos y potencialidades', 'Fortalecimiento de potencialidades organizativas de la comunidad', 'Articulación con otros programas de desarrollo', 'Generalidades', 'Objetivos', 'Ejes de desarrollo', 'Contenido'] }
          ],
          actividadesDocente: ['No especificadas'],
          actividadesIndependiente: ['No especificadas'],
          evaluacion: [{ concepto: 'Sin información', porcentaje: '—' }]
        },
        {
          id: '9-p951',
          clave: 'P951',
          nombre: 'Pedagogía Contemporánea',
          objetivo: 'Al término del curso el alumno analizará los planteamientos fundamentales de las principales corrientes pedagógicas contemporáneas, lo que le permitirá la reconstrucción teórica y proyección con respecto a la educación actual.',
          temas: [
            { titulo: 'Sociedad siglo XXI', items: ['Las principales corrientes pedagógicas contemporáneas', 'La sociedad y la pedagogía en el siglo XXI', 'Globalización', 'Modernidad', 'Postmodernidad', 'Democracia y mercado'] },
            { titulo: 'Pedagogías cognoscitivistas', items: ['Principales enfoques constructivistas', 'Aprendizaje significativo: David Ausubel', 'Psicología genético-cognitiva: Jean Piaget y J. Bruner', 'Socio educativo: Vigotsky', 'Organización grupal e interacción entre alumnos', 'El constructivismo en la educación y el aula', 'Aprendizaje basado en competencias'] },
            { titulo: 'Pedagogía institucional', items: ['Cambios del concepto de institución', 'El pensamiento pedagógico antiautoritario', 'C. Freinet: Educación por el trabajo', 'C. Rogers: La educación centrada en el estudiante', 'M. Lobrot: Pedagogía institucional y Autogestión pedagógica', 'Pedagogía no directiva: el problema de la no-directividad y de la autonomía en el proceso educativo', 'Pedagogía autogestionaria: la alternativa para el desarrollo de la responsabilidad, la autonomía y el carácter activo-transformador del estudiante', 'Análisis institucional'] },
            { titulo: 'Pedagogía crítica', items: ['Surgimiento de la Pedagogía crítica en América Latina y su relación con la Teología de la Liberación', 'Principales representantes: Paulo Freire, Peter McLaren, Henry Giroux, Antonio Gramsci, Michael Apple'] }
          ],
          actividadesDocente: ['Exposición oral', 'Discusión en grupos acerca de los diferentes aportes y representantes de la educación pedagógica contemporánea', 'Reflexión crítica individual y colectiva sobre las teorías'],
          actividadesIndependiente: ['Investigación bibliográfica y documental', 'Trabajo monográfico sobre las teorías pedagógicas contemporáneas', 'Elaboración de un trabajo de investigación', 'Elaboración de un ensayo acerca de la perspectiva actual en la producción teórica pedagógica', 'Lectura de textos'],
          evaluacion: [
            { concepto: 'Entrega del trabajo de investigación', porcentaje: '30%' },
            { concepto: 'Exposición de temas', porcentaje: '10%' },
            { concepto: 'Análisis de casos', porcentaje: '20%' },
            { concepto: 'Ensayo y trabajo monográfico', porcentaje: '40%' }
          ]
        },
        {
          id: '9-p952',
          clave: 'P952',
          nombre: 'Gestión Directiva en Instituciones Educativas',
          objetivo: 'Al finalizar el curso el alumno explicará las dimensiones que abarcan la administración educativa y las relaciones entre las funciones docentes y las funciones de administración y gestión en educación, a fin de establecer una coordinación entre ambos para el adecuado funcionamiento del currículo.',
          temas: [
            { titulo: 'Teoría y práctica de la administración', items: ['Definición', 'Los educadores y la Administración', 'Relación entre las funciones docentes y las funciones de administración y gestión de la Educación'] },
            { titulo: 'Dimensiones de la administración educativa', items: ['La escuela como estructura organizacional', 'La gestión escolar', 'Las dimensiones de la organización educativa: la dimensión pedagógica, la organizacional, la económica, la administrativa, la socio-comunitaria', 'Los actores de la organización: los directivos, los docentes, los alumnos, los padres, el personal no docente'] },
            { titulo: 'Diseño organizativo y proyecto educativo institucional', items: ['Relación entre el Proyecto Educativo Institucional y el diseño organizativo', 'Diseños organizacionales más comunes', 'La coordinación entre las áreas', 'El control', 'La cultura organizacional'] },
            { titulo: 'El análisis institucional', items: ['La planificación y administración estratégica como herramienta fundamental de la gestión', 'El diagnóstico del funcionamiento interno de la organización', 'Planificación estratégica', 'Formulación e implementación de las estrategias', 'Planificación operativa'] },
            { titulo: 'El sistema de comunicación', items: ['Características e importancia del proceso de comunicación en la organización', 'El funcionamiento del sistema de comunicación'] }
          ],
          actividadesDocente: ['Análisis y solución de casos de planificación estratégica y operativa', 'Estudio orientado', 'Discusión y el intercambio de experiencias acerca de la problemática de administración y gestión de las instituciones educativas', 'Análisis de casos sobre un diagnóstico y formulación de planes de gestión para una institución x'],
          actividadesIndependiente: ['Lectura de textos', 'Investigación bibliográfica', 'Elaboración de diagnósticos de organización y operación educativo', 'Elaboración de reportes de investigación sobre la organización y coordinación inter e intra institucional', 'Análisis y solución de casos'],
          evaluacion: [
            { concepto: 'Dos exámenes parciales y final', porcentaje: '40%' },
            { concepto: 'Análisis y solución de casos', porcentaje: '20%' },
            { concepto: 'Entrega de diagnósticos', porcentaje: '20%' },
            { concepto: 'Entrega de reportes de investigación', porcentaje: '20%' }
          ]
        }
      ]
    }
  };

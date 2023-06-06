export default {
  global: {
    componenteFormativo: 'Curso de la enfermedad y tratamiento',
    descripcionCurso:
      'El abordaje del paciente con diagnóstico probable de dengue tiene como objetivo identificar la fase clínica de la enfermedad en la que se encuentra. Esta información es necesaria para instaurar un manejo adecuado y rápido evitando así que entre en choque y muera. El manejo puede ser ambulatorio u hospitalario, si presenta inestabilidad hemodinámica o signos de dengue grave.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evolución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Signos y Síntomas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Secuencia de los Signos Clínicos.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diagnósticos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación para el manejo del Dengue:',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Grupos de Riesgo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manejo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tratamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Atención de primer nivel',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Atención de segundo nivel',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Atención de Tercer Nivel',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Criterios de Egresos.',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_2_33130192.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evolución',
      referencia:
        'CD55.R6 - Estrategia para la prevención y el control de las enfermedades arbovirales. (s. f.). OPS/OMS | Organización Panamericana de la Salud. Recuperado 14 de septiembre de 2022, ',
      tipo: 'Página de internet',
      descarga:
        'https://www.paho.org/es/documentos/cd55r6-estrategia-para-prevencion-control-enfermedades-arbovirales',
    },
    {
      tema: 'Secuencias de los signos clínicos',
      referencia:
        'Usme-Ciro, José A., Gómez-Castañeda, Alba M., & Gallego-Gómez, Juan C.. (2012). Detección molecular y tipificación del virus dengue por RT-PCR y PCR anidada usando oligonucleótidos mejorados. Revista Salud Uninorte, 28(1), 1-15. Retrieved September 14, 2022, from ',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-55522012000100002&lng=en&tlng=es',
    },
    {
      tema: 'Tratamiento',
      referencia:
        'Frantchez, V. (s. f.). Dengue en adultos: diagnóstico, tratamiento y abordaje de situaciones especiales. Recuperado 14 de septiembre de 2022',
      tipo: 'Revista médica',
      descarga:
        'http://www.scielo.edu.uy/scielo.php?script=sci_arttext&pid=S1688-03902016000100006',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'Son acciones de los proveedores de salud Institucionales y comunitarios para la promoción de la salud, prevenir las enfermedades, recuperar la salud y rehabilitar el daño, ejecutando intervenciones a escala individual, familiar y comunitaria.',
    },
    {
      termino: '<em>Brote</em>',
      significado:
        'Ocurrencia de dos o más casos asociados epidemiológicamente entre sí. La existencia de un caso único bajo vigilancia en un área donde no existía el padecimiento se considera también un brote.',
    },
    {
      termino: '<em>Cardiogénico</em>',
      significado:
        'Es una afección mortal en la que el corazón repentinamente no puede bombear sangre suficiente para satisfacer las necesidades del organismo. En general, la afección es provocada por un ataque cardíaco grave, pero no todas las personas que sufren un ataque cardíaco tienen un choque cardiogénico.',
    },
    {
      termino: '<em>Casos</em>',
      significado:
        'Individuo en quien se sospecha, presume o confirma que padece una enfermedad o evento de interés epidemiológico.',
    },
    {
      termino: '<em>Complicaciones</em>',
      significado:
        'Problema médico que se presenta durante el curso de una enfermedad o después de un procedimiento o tratamiento. La complicación puede deberse a una enfermedad, el procedimiento o el tratamiento, o puede no tener relación con ellos.',
    },
    {
      termino: '<em>Convulsión</em>',
      significado:
        'Corresponde a ataques físicos o cambios en el comportamiento que ocurren después de un episodio de actividad eléctrica anormal en el cerebro.',
    },
    {
      termino: '<em>Crítico</em>',
      significado:
        'Aquel individuo que, por padecer una enfermedad aguda o una reagudización de una enfermedad crónica, manifiesta signos y síntomas que, en su conjunto, expresan la máxima respuesta posible de su organismo ante la agresión sufrida.',
    },
    {
      termino: '<em>Choque</em>',
      significado:
        'Es una afección potencialmente mortal que se presenta cuando el cuerpo no está recibiendo un flujo de sangre suficiente. La falta de flujo de sangre significa que las células y órganos no reciben suficiente oxígeno y nutrientes para funcionar apropiadamente. Muchos órganos pueden dañarse como resultado de esto.',
    },
    {
      termino: '<em>Dengue</em>',
      significado:
        'Es una enfermedad viral, de carácter endémico-epidémico, transmitida por mosquitos del género Aedes, principalmente por Aedes aegypti en la región de las Américas, que constituye hoy la arbovirosis más importante a nivel mundial en términos de morbilidad, mortalidad e impacto económico.',
    },
    {
      termino: '<em>Epidemiología</em>',
      significado:
        'El estudio de la distribución y los determinantes de estados o eventos (en particular de enfermedades) relacionados con la salud y la aplicación de esos estudios al control de enfermedades y otros problemas de salud.',
    },
    {
      termino: '<em>Etapas</em>',
      significado:
        'Ocurre antes de las manifestaciones clínicas y depende de las condiciones del medio ambiente, el agente y el huésped.',
    },
    {
      termino: '<em>Evolución</em>',
      significado:
        'Es el proceso mediante el cual los organismos cambian con el tiempo. Cambio o transformación gradual de algo, como un estado, una circunstancia, una situación.',
    },
    {
      termino: '<em>Huésped</em>',
      significado:
        'Es la persona o animal vivo que en circunstancias naturales permiten el alojamiento, subsistencia o reproducción de agentes infecciosos.',
    },
    {
      termino: '<em>Recuperación</em>',
      significado:
        'Es un proceso de cambio mediante el cual los individuos mejoran su salud y bienestar, conducen sus vidas de forma autónoma y se esfuerzan por alcanzar su máximo potencial.',
    },
    {
      termino: '<em>Riesgo</em>',
      significado:
        'La probabilidad de que una población determinada sufra cierta enfermedad o daño.',
    },
    {
      termino: '<em>Serotipos</em>',
      significado:
        'Los virus del dengue han sido agrupados en cuatro serotipos: DENV-1, DENV-2, DENV-3 y DENV-4. Cada serotipo crea inmunidad específica a largo plazo contra el mismo serotipo (homólogo), así́ como una inmunidad cruzada de corto plazo contra los otros tres serotipos, la cual puede durar varios meses. Los cuatro serotipos son capaces de producir infección asintomática, enfermedad febril y cuadros severos que pueden conducir hasta la muerte, dada la variación genética en cada uno de los cuatro serotipos. Algunas variantes genéticas parecen ser más virulentas o tener mayor potencial epidémico.',
    },
    {
      termino: '<em>Serología</em>',
      significado:
        'Es el estudio científico de la sangre que observa la respuesta del sistema inmunitario a la vacunación o a las infecciones con patógenos, como los virus de la influenza.',
    },
    {
      termino: '<em>Vector</em>',
      significado:
        'Organismo que transmite un agente infeccioso desde los individuos afectados a susceptibles. Los mosquitos de la familia culicidae son vectores de diversos virus y protistas patógenos.',
    },
    {
      termino: '<em>Viremia</em>',
      significado:
        'Es la fase de la enfermedad donde el virus se encuentra en el torrente sanguíneo. En dengue la fase de viremia es desde el primer día de síntomas hasta el quinto día siendo el pico máximo el tercer día.',
    },
  ],
  referencias: [
    {
      referencia:
        'CDC Center for Disiase control y prevention, Manejo en el caso del dengue. (s.f.).',
      link:
        'https://www.cdc.gov/dengue/resources/14_243318-B_Seda-DENGUE-Flyers_508.pdf',
    },
    {
      referencia:
        'Guía de atención clínica integral del paciente con Dengue 2010 y Anexo pediátrico. (2010)',
      link:
        'https://manizalessalud.net/wp-content/uploads/2019/03/guia_atencion_clinica.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.) Abordaje clínico del dengue',
      link: 'https://acortar.link/fNswyP',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012-2013). Dengue Memorias.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/TH/Memorias_dengue.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Lineamientos Generales para la formulación del Plan Decenal de Salud Pública 2022-2031',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/lineamientos-formulacion-pdsp-2022-2031.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Protocolo de vigilancia en salud pública.',
      link:
        'https://www.ins.gov.co/Noticias/Dengue/7.%20Dengue%20PROTOCOLO.pdf',
    },
    {
      referencia: 'OPS. (s.f.). Diagnóstico y manejo clínico del dengue',
      link:
        'https://www.campusvirtualsp.org/es/curso/diagnostico-y-manejo-clinico-del-dengue-2020',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. Dengue. (2010). Guías de atención para enfermos en la región de las Américas.',
      link:
        'https://www.paho.org/hq/dmdocuments/2012/Guias-atencion-enfermos-Americas-2010-esp.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rosalba Mosquera Mosquera',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital-Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rosalba Mosquera Mosquera',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboarde Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitan Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

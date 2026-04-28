export default {
  global: {
    Name: 'Administración y publicación de tu proyecto Web',
    Description:
      'El componente Administración y publicación de proyectos web desarrolla competencias técnicas y operativas orientadas a la gestión de contenidos, el diseño de la experiencia visual y el despliegue de sitios web mediante la plataforma WordPress. Asimismo, promueve el uso eficiente de herramientas de publicación dinámica, la ampliación de funcionalidades a través de plugins y la aplicación rigurosa de protocolos de seguridad, respaldo y migración. De este modo, permite transformar una estructura básica en un ecosistema digital interactivo, publicado exitosamente en la nube.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
        titulo:
          'Administración de contenidos y gestión de la información dinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Naturaleza y edición de las entradas dinámicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Flujo de trabajo en la administración de entradas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gestión integral de la biblioteca de medios',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Moderación y administración de comentarios',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Extensión funcional del sitio web mediante plugins',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentación técnica de los plugins',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procedimientos de instalación y activación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Criterios de usabilidad y selección de plugins en proyectos reales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño de la experiencia visual y apariencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Selección, instalación y configuración de temas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Personalización avanzada de la interfaz',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estructuración mediante widgets y elementos modulares',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Respaldo, migración y publicación del ecosistema digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estrategias de preservación: tareas de respaldo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procesos de exportación e importación de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Pruebas y publicación: del servidor local a la nube',
            hash: 't_4_3',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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

  glosario: [
    {
      termino: 'Accesibilidad Web',
      significado:
        'Conjunto de normativas y técnicas de diseño que garantizan que un sitio web pueda ser utilizado y comprendido por cualquier persona, independientemente de sus capacidades visuales, auditivas, cognitivas o motrices.',
    },
    {
      termino: 'Archivo WXR (WordPress extended RSS)',
      significado:
        'Documento en formato XML generado por la herramienta de exportación nativa de WordPress, utilizado para transferir contenidos (entradas, páginas, menús y metadatos) entre diferentes instalaciones del CMS.',
    },
    {
      termino: '<i>Back End</i>',
      significado:
        'Panel de control o área de administración privada de WordPress. Es el entorno de trabajo al que acceden los usuarios con credenciales para publicar contenidos, instalar complementos y gestionar la base de datos.',
    },
    {
      termino: 'Base de Datos (MySQL/MariaDB)',
      significado:
        'Sistema informático estructurado que almacena de manera relacional toda la información textual, configuraciones de usuario y taxonomías del sitio web, permitiendo su recuperación dinámica.',
    },
    {
      termino: 'Biblioteca de Medios',
      significado:
        'Repositorio centralizado dentro del panel de administración donde se cargan, optimizan y organizan los recursos multimedia (imágenes, documentos, audios) para su posterior inserción en el diseño web.',
    },
    {
      termino: 'Caché Web',
      significado:
        'Tecnología de optimización que almacena copias temporales de las páginas dinámicas generadas por WordPress para servirlas de forma inmediata a los visitantes recurrentes, reduciendo la carga del servidor.',
    },
    {
      termino: 'Dominio',
      significado:
        'Nombre único y alfanumérico que identifica a un sitio web en la red mundial (por ejemplo: sena.edu.co), funcionando como una dirección mnemotécnica para localizar los servidores donde se alojan los archivos.',
    },
    {
      termino: '<i>Front End</i>',
      significado:
        'Fachada pública del sitio web. Es la interfaz visual y responsiva con la que interactúan los visitantes a través de sus navegadores, controlada estéticamente por el tema activo.',
    },
    {
      termino: '<i>Gutenberg</i> (editor de bloques)',
      significado:
        'Interfaz nativa de redacción en WordPress que permite maquetar y diseñar el contenido fragmentándolo en bloques independientes (párrafos, imágenes, galerías, botones), facilitando la diagramación sin uso de código.',
    },
    {
      termino: '<i>Hosting</i> (alojamiento Web)',
      significado:
        'Servicio tecnológico provisto por una infraestructura de servidores interconectados ininterrumpidamente a internet, que alquila espacio de almacenamiento para alojar los archivos y bases de datos de un portal público.',
    },
    {
      termino: '<i>Localhost</i> (Servidor Local)',
      significado:
        'Entorno de software instalado en el ordenador personal del desarrollador que emula las condiciones de un servidor de internet. Se utiliza para el diseño, pruebas y maquetación sin riesgos antes de la publicación oficial.',
    },
    {
      termino: '<i>Plugin</i>',
      significado:
        'Complemento o extensión de software que se instala sobre el núcleo de WordPress para añadir funcionalidades especializadas que la plataforma no incorpora por defecto (ejemplo: pasarelas de pago, cortafuegos, foros).',
    },
    {
      termino: 'Responsividad (Diseño Responsivo)',
      significado:
        'Principio arquitectónico del diseño web que asegura que la disposición geométrica de la interfaz se adapte, escale y reordene fluidamente según el tamaño de la pantalla del dispositivo utilizado (móvil, tableta o escritorio).',
    },
    {
      termino: 'SEO (Optimización para Motores de Búsqueda)',
      significado:
        'Conjunto de estrategias técnicas y de contenido orientadas a mejorar la visibilidad y el posicionamiento de un sitio web en los resultados orgánicos de buscadores como Google.',
    },
    {
      termino: 'Tema (Theme)',
      significado:
        'Paquete integral de archivos y estilos CSS que determinan la apariencia visual, la paleta de colores, las tipografías y el esquema de distribución de la interfaz pública (Front End) en WordPress.',
    },
    {
      termino: '<i>Widget</i>',
      significado:
        'Bloque modular preconfigurado que ejecuta una función o muestra información específica (como un buscador o enlaces de redes sociales) y que se posiciona en áreas estructurales del diseño, como el pie de página o las barras laterales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cabello, J. (2021). *WordPress 100 % práctico: aprende a crear sitios web y tiendas online desde cero*. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Consorcio World Wide Web (W3C). (2023). *Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2*. W3C Recommendation. Recuperado de la biblioteca oficial del W3C.',
      link: '',
    },
    {
      referencia:
        'Fundación WordPress. (2024). *Documentación oficial, manual de administración y desarrollo de extensiones*. Codex y Developer Handbook. Recuperado de WordPress.org.',
      link: '',
    },
    {
      referencia:
        'García, L. M. (2022). *Diseño de interfaces web y experiencia de usuario en entornos formativos digitales*. Editorial Síntesis.',
      link: '',
    },
    {
      referencia:
        'Williams, B., Damstra, D., & Stern, H. (2021). *Desarrollo profesional con WordPress: Diseño, arquitectura y despliegue de plataformas* (4.ª ed.). John Wiley & Sons.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andres Bonza Reyes',
          cargo: 'Instructor virtual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}

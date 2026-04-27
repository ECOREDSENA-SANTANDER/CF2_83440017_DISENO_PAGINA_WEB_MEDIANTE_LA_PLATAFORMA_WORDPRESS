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
        titulo: 'Interpretación de prendas deportivas infantiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Camiseta y camisilla básica para niño(a)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Trazo de camiseta manga ranglán',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazo de sudadera de punto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Trazo de mallas (vestidos de baño)',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Escalado de prendas de vestir',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y objetivos del escalado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios técnicos del escalado en prendas de vestir',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de escalado: proporcional, combinado y diferencial',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Escalado bibásico',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Escalado monobásico y por coordenadas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Separación de tallas y marcación',
            hash: 't_2_6',
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
      termino: 'Bocamanga',
      significado:
        'extremo inferior de la manga de una prenda, cuyo ancho se determina en el patrón según el diseño y el tipo de tejido, y que puede llevar acabados como puños, dobladillo o ribete elástico.',
    },
    {
      termino: 'Capucha',
      significado:
        'pieza complementaria de forma curva que se ensambla al escote de una prenda para cubrir la cabeza, trazada a partir de un rectángulo base con ajustes en sus contornos según las proporciones del cuello y la cabeza infantil.',
    },
    {
      termino: 'Copa de manga',
      significado:
        'parte superior de la pieza de manga que se une a la sisa del corpiño, cuya altura y curvatura determinan el ajuste, la movilidad y la caída del brazo sobre la prenda.',
    },
    {
      termino: 'Corpiño',
      significado:
        'pieza principal de una prenda superior que cubre el tronco del cuerpo, compuesta por las piezas delantera y trasera, y desde la cual se derivan las demás piezas del patrón.',
    },
    {
      termino: 'Escalado bibásico',
      significado:
        'método de graduación que utiliza dos tallas de referencia ubicadas en los extremos de la serie para calcular proporcionalmente los incrementos de cada talla intermedia.',
    },
    {
      termino: 'Escalado diferencial',
      significado:
        'método de graduación que aplica ajustes puntuales y específicos en zonas determinadas del patrón, respondiendo a necesidades ergonómicas o funcionales concretas de la prenda.',
    },
    {
      termino: 'Escalado monobásico',
      significado:
        'método de graduación que parte de una única talla base central para calcular los desplazamientos hacia las tallas superiores e inferiores mediante incrementos definidos en el cuadro de tallas.',
    },
    {
      termino: 'Escalado proporcional',
      significado:
        'método de graduación que aplica incrementos uniformes y constantes en todas las áreas del patrón, manteniendo las proporciones generales del diseño original entre tallas consecutivas.',
    },
    {
      termino: 'Holgura',
      significado:
        'valor adicional incorporado a las medidas corporales durante el trazado del patrón, con el fin de garantizar comodidad, funcionalidad y libertad de movimiento según el tipo de tejido y la prenda.',
    },
    {
      termino: 'Manga ranglán',
      significado:
        'tipo de manga cuya pieza se extiende desde el escote hasta el costado, eliminando la costura de hombro convencional y ampliando el rango de movimiento articular en la zona del brazo.',
    },
    {
      termino: 'Marcación de patrones',
      significado:
        'proceso mediante el cual se inscribe en cada pieza del patrón la información técnica indispensable para su uso en producción, incluyendo nombre, talla, dirección del hilo, cantidad de corte y piquetes de ensamble.',
    },
    {
      termino: 'Nido de escalado',
      significado:
        'representación gráfica que resulta de superponer todas las tallas de una serie sobre un mismo patrón base, utilizada como punto de partida para la separación y marcación individual de cada talla.',
    },
    {
      termino: 'Pretina',
      significado:
        'banda de tejido que se aplica en la parte inferior de prendas superiores o en la cintura de prendas inferiores, trazada con medidas reducidas respecto al contorno corporal para aprovechar la elasticidad del tejido de punto.',
    },
    {
      termino: 'Puntos de control',
      significado:
        'puntos estratégicos identificados en el patrón desde los cuales se originan y regulan los desplazamientos durante el proceso de escalado, garantizando la coherencia dimensional entre tallas.',
    },
    {
      termino: 'Tiro',
      significado:
        'medida de profundidad que determina la distancia entre la cintura y la entrepierna en prendas inferiores, cuya correcta graduación es determinante para el ajuste funcional de mallas y pantalones deportivos infantiles.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barnfield, J., y Richards, A. (2013). Manual de patronaje de moda: diseño, adaptación y personalización de los patrones de costura. Promopress. ISBN 978-84-92810-82-6.',
      link: '',
    },
    {
      referencia:
        'Donnanno, A. (2018). Técnicas de patronaje de prendas infantiles de moda: vestidos, camisas, peleles, pantalones, bermudas, chaquetas y abrigos. Promopress.',
      link: '',
    },
    {
      referencia:
        'Drake, R. L., Vogl, A. W., y Mitchell, A. M. W. (2019). Gray. Anatomía para estudiantes (4.ª ed.). Elsevier. ISBN 978-84-9113-608-8.',
      link: '',
    },
    {
      referencia:
        'Esparza Ros, F. (Ed.). (1993). Manual de cineantropometría. Grupo Español de Cineantropometría; Federación Española de Medicina del Deporte (FEMEDE). ISBN 978-84-88100-08-5.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., y Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje (SENA); Agencia de Cooperación Internacional del Japón (JICA).',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: an introduction to fashion studies. Berg Publishers. ISBN 978-1-85973-814-6.',
      link: '',
    },
    {
      referencia:
        'Lorenzo, M. R. (2017). Patronaje industrial en textil y piel. Videocinco Editorial. ISBN 978-84-16852-03-1.',
      link: '',
    },
    {
      referencia:
        'Nakamichi, T. (2012). Pattern magic, vol. 1: la magia del patronaje. Editorial Gustavo Gili. ISBN 978-84-252-2438-6.',
      link: '',
    },
    {
      referencia:
        'Norton, K., y Eston, R. (Eds.). (2019). Kinanthropometry and exercise physiology (4.ª ed.). Routledge. ISBN 978-1-138-23052-1.',
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
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
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

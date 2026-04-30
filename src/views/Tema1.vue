<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Administración de contenidos y gestión de la información dinámica
      
      .bloque-texto-g.bg01.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La administración de contenidos en un Sistema de Gestión de Contenidos (CMS) constituye una fase fundamental en la gestión de sitios web, al permitir la creación, edición y organización de la información sin necesidad de intervenir directamente en el código fuente. En el caso de WordPress, esta función se desarrolla a través de un conjunto de herramientas que facilitan la publicación y actualización de contenidos, garantizando que el sitio web se mantenga dinámico, estructurado y acorde con los objetivos comunicativos establecidos.
            br

      p En este contexto, la gestión de contenidos comprende la creación de páginas y entradas, así como su organización mediante categorías, etiquetas y menús de navegación. Estos elementos permiten estructurar la información de manera lógica, favoreciendo la accesibilidad y la experiencia del usuario. Asimismo, la integración de recursos multimedia contribuye a enriquecer la presentación de los contenidos y a mejorar su impacto dentro del entorno digital.
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-2.col-7.mb-3.col-md-6
          img(src='@/assets/curso/Tema1/img02.svg', alt='')
        .col-lg-10.bg02.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p Adicionalmente, la administración de contenidos implica la actualización constante de los elementos del sitio, incluyendo temas, #[em plugins] y configuraciones generales, con el fin de asegurar su correcto funcionamiento. Este proceso también contempla la aplicación de principios de usabilidad y accesibilidad, garantizando que la información sea clara, comprensible y disponible para diversos tipos de usuarios, lo que fortalece la calidad y efectividad del sitio web.

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1. Naturaleza y edición de las entradas dinámicas

      p Como se ha establecido previamente en la fundamentación estructural, existe una diferencia semántica y arquitectónica entre las páginas estáticas y las entradas. Las entradas constituyen un elemento esencial de la web dinámica, ya que son unidades de información diseñadas para presentarse en orden cronológico, clasificarse mediante categorías y etiquetas, y fomentar la interacción y recurrencia del usuario. Por esta razón, su creación y edición representan una de las tareas más frecuentes e importantes en la administración de un sitio web.  
      .fondo01.p-5(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-8.mb-3
            .row.justify-content-center
              .col-lg-2.col-5.mb-3.col-md-3
                img(src='@/assets/curso/Tema1/img03.svg', alt='')
              .col-lg-10
                p El proceso de edición en WordPress se basa en un entorno visual conocido como editor de bloques o #[em Gutenberg]. Este sistema organiza el contenido en elementos independientes, como párrafos, encabezados, imágenes, citas, galerías o botones, lo que permite estructurar la información de manera modular. Cada bloque cuenta con opciones de configuración específicas, como ajustes de color, tipografía y alineación, lo que facilita mantener la coherencia visual del sitio sin requerir conocimientos avanzados en lenguajes como HTML o CSS.
            p En un contexto formativo, la edición de entradas permite desarrollar habilidades prácticas en la construcción de contenidos digitales. Por ejemplo, para la publicación de una crónica, se puede iniciar con un encabezado que presente el tema principal, seguido de párrafos que desarrollen la información. Posteriormente, se pueden integrar elementos como galerías de imágenes para complementar el contenido visual y, finalmente, incluir botones o enlaces que dirijan a recursos adicionales. Esta estructura organizada favorece la legibilidad, mejora la experiencia del usuario y contribuye a una adecuada presentación de la información.
          .col-lg-4.col-md-7
            img(src='@/assets/curso/Tema1/img04.svg', alt='')

      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2. Flujo de trabajo en la administración de entradas

      p La creación aislada de un artículo es insuficiente si no se inscribe dentro de un flujo de trabajo administrativo eficiente. El submenú “entradas” en el panel de administración #[em (Back End)] actúa como una central de control donde el administrador puede visualizar el panorama completo de las publicaciones. En este espacio, se despliega una tabla de datos que indica el título de cada entrada, el autor responsable, las categorías y etiquetas asignadas, la fecha de publicación o modificación y el número de comentarios recibidos. Administrar adecuadamente las entradas implica dominar las diferentes etapas del ciclo de vida del contenido:
      .tarjeta.tarjeta--azul.p-5.mb-4(data-aos="zoom-in-left")
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0
              h4 Borradores y revisiones 
              p No todo el contenido se publica de forma inmediata. La plataforma permite guardar entradas como borradores, facilitando el trabajo colaborativo en el que un autor redacta el texto y un editor lo revisa antes de su difusión pública.
            .col-lg-5.col-md-9
              figure
                img(src='@/assets/curso/Tema1/2.png', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0
              h4 Programación de publicaciones
              p Para mantener una presencia digital constante sin depender de la intervención manual diaria, el sistema permite establecer la fecha de publicación hacia el futuro. Una vez llegada la fecha y hora programadas, la entrada cambia automáticamente su estado de “programada” a “publicada”.
            .col-lg-5.col-md-9
              figure
                img(src='@/assets/curso/Tema1/1.png', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0
              h4 Edición rápida y acciones en lote
              p Cuando el sitio web crece y acumula numerosos artículos, modificar elementos uno por uno resulta ineficiente. La herramienta de “edición rápida” permite ajustar el título, la categoría o el autor de una entrada sin abrir el editor de bloques. Del mismo modo, las acciones en lote permiten seleccionar múltiples entradas simultáneamente para aplicar cambios masivos, como asignar categorías o mover a la papelera, optimizando los tiempos de administración.
            .col-lg-5.col-md-9
              figure
                img(src='@/assets/curso/Tema1/3.png', alt='')
         

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 1.
        span Ciclo de vida de una entrada
      img(src='@/assets/curso/Tema1/fig1.svg', alt='Diagrama de flujo con dos secciones: en el entorno privado se presentan tres etapas (concepción y borrador, revisión y taxonomía, programación) y en el entorno público dos etapas (publicación y difusión, mantenimiento y actualización), conectadas de forma secuencial.')

      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3. Gestión integral de la biblioteca de medios
    
      .bloque-texto-g.bloque-texto-g--inverso.bg03.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Un entorno digital estrictamente textual suele presentar altas tasas de abandono. La integración de recursos multimedia es fundamental para retener la atención del usuario, clarificar conceptos complejos y enriquecer la estética general del diseño web. En WordPress, la “biblioteca de medios” funciona como un repositorio centralizado donde se almacenan y gestionan todas las imágenes, documentos PDF, audios y fragmentos de video cargados en la plataforma.
            br
            br
            | La administración de medios trasciende la simple acción de cargar archivos desde el ordenador al servidor. Requiere la aplicación rigurosa de principios de optimización web y de normativas de accesibilidad:

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-4.mb-3.col-9.col-md-7
          img(src='@/assets/curso/Tema1/img06.svg', alt='')
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Optimización del peso y formato")
              .col-md-12.mb-4.mb-md-0
                p Las imágenes de alta resolución obtenidas directamente de cámaras digitales o repositorios suelen tener un peso elevado. Subir estos archivos sin un tratamiento previo puede saturar el servidor, consumir el espacio del alojamiento y ralentizar significativamente el tiempo de carga del #[em Front End], afectando la experiencia del usuario y el posicionamiento en motores de búsqueda (SEO). El aprendiz debe adoptar el hábito técnico de comprimir las imágenes y utilizar formatos de nueva generación (como WebP o AVIF) antes de su carga en la biblioteca.
    
            .row(titulo="Metadatos y accesibilidad")
              .col-md-12.mb-4.mb-md-0
                p Cada archivo multimedia subido genera automáticamente una página de adjunto en la base de datos. Es responsabilidad del administrador diligenciar los metadatos correspondientes, haciendo especial énfasis en el campo “texto alternativo” (#[em Alt Text]). Este elemento no visible cumple una doble función: es leído por los lectores de pantalla utilizados por personas con discapacidad visual, garantizando la accesibilidad; y proporciona contexto semántico a los motores de búsqueda, facilitando la indexación correcta del contenido.
                p Asimismo, la organización adecuada de la biblioteca de medios resulta esencial para mantener la eficiencia del sitio web. La correcta clasificación de los archivos mediante nombres descriptivos, fechas o carpetas virtuales permite una localización rápida de los recursos, evitando duplicidades y facilitando el mantenimiento del contenido a largo plazo.
                p De igual manera, la reutilización estratégica de los recursos multimedia contribuye a optimizar el rendimiento del sitio. Un archivo correctamente gestionado puede ser utilizado en múltiples entradas o páginas sin necesidad de nuevas cargas, lo que reduce el consumo de almacenamiento y mejora la eficiencia operativa del sistema.

      separador
      #t_1_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.4. Moderación y administración de comentarios

      p La transición de la web estática a la web dinámica se caracterizó fundamentalmente por la bidireccionalidad de la comunicación. Las entradas dinámicas fomentan el diálogo al permitir que los lectores expresen sus opiniones, planteen interrogantes o debatan sobre el contenido expuesto a través de la sección de comentarios. Esta interactividad constituye un recurso valioso para la construcción de comunidades digitales, el fortalecimiento de la participación del usuario y la retroalimentación directa sobre los contenidos publicados.
      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-5.col-10.mb-4.col-md-6
          img(src='@/assets/curso/Tema1/img06.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/img07.svg', alt='')
            .col-lg-10
              p Sin embargo, habilitar los comentarios exige una administración rigurosa y permanente. Si esta sección no cuenta con supervisión adecuada, el sitio web puede verse afectado por la publicación de #[em spam] (mensajes automatizados, publicidad no deseada y enlaces maliciosos generados por #[em bots]), lo cual impacta negativamente la reputación institucional, la credibilidad del contenido y la seguridad general de la plataforma. Asimismo, la ausencia de control puede derivar en la publicación de mensajes ofensivos o irrelevantes que deterioran la calidad del espacio de interacción.
          p Para mitigar estos riesgos, WordPress incorpora un sistema de gestión de comentarios basado en la moderación previa. El administrador puede definir reglas de publicación desde el panel de ajustes, estableciendo filtros y condiciones de aprobación. Una práctica recomendada consiste en configurar la aprobación manual del primer comentario de cada usuario, de modo que posteriormente los comentarios de ese mismo usuario puedan publicarse de manera automática, siempre que cumplan con las normas establecidas. Adicionalmente, el sistema permite clasificar los comentarios como “aprobados”, “pendientes”, #[em “Spam”] o “papelera”, facilitando la organización y depuración del flujo de interacción.

      p La gestión de comentarios también incluye herramientas de respuesta y seguimiento, las cuales permiten al administrador o moderador interactuar directamente con los usuarios. Esta función es clave para resolver inquietudes, aclarar información y mantener una comunicación activa dentro del sitio web, fortaleciendo la relación entre la institución y su comunidad digital.
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-12
          img(src='@/assets/curso/Tema1/img08.png', alt='').mb-4
          p Asimismo, la moderación adecuada contribuye a garantizar la calidad del contenido generado por los usuarios, evitando la difusión de información irrelevante, duplicada o que no esté alineada con los objetivos del sitio. Este control editorial asegura que el espacio de comentarios mantenga un enfoque académico, informativo o institucional según el propósito del proyecto web.
          p De igual manera, la administración de comentarios favorece la construcción de entornos digitales seguros y respetuosos. El establecimiento de normas claras de participación permite prevenir conductas inadecuadas, promover el respeto entre usuarios y asegurar un ambiente de interacción adecuado para todos los participantes.
      
      .row.justify-content-center.align-items-center.mb-5.bg02(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/Tema1/img09.png', alt='')
        .col-lg-7
          .row.p-4
            .col-lg-2.col-4.col-md-3
              img(src='@/assets/curso/Tema1/img10.svg', alt='').mb-4
            .col-lg-12
              p Por otra parte, una gestión eficiente de los comentarios contribuye a la reputación digital del sitio web, ya que un entorno ordenado, moderado y libre de #[em spam] transmite confianza a los visitantes y refuerza la imagen profesional de la institución en el entorno digital.
              p Finalmente, la moderación y administración de comentarios constituye un componente esencial en la gestión de sitios web dinámicos, al garantizar la seguridad, la calidad del contenido, la interacción efectiva y la sostenibilidad de los espacios de participación digital dentro de WordPress.

















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

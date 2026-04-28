<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diseño de la experiencia visual y apariencia

    .bloque-texto-g.bg01.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema3/img1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una vez que la arquitectura de la información está estructurada y las funcionalidades han sido extendidas mediante plugins, el desarrollo del sitio web debe enfocarse en la interfaz visual con la que interactuará el usuario final. El diseño de la experiencia de usuario (UX) y el diseño de la interfaz de usuario (UI) en WordPress no consisten en la creación de elementos gráficos arbitrarios, sino en la aplicación de principios de usabilidad, accesibilidad y psicología del color para facilitar la navegación. En esta fase, el administrador configura el Front End del proyecto, asegurando que la presentación visual responda de manera coherente a las necesidades comunicativas del contexto y cumpla con estándares de calidad y accesibilidad web.
            br

    p El diseño visual debe priorizar la claridad, la coherencia y la facilidad de uso. La organización jerárquica de los contenidos, el uso adecuado de espacios y la consistencia en los elementos gráficos permiten orientar al usuario dentro del sitio web. Una interfaz bien estructurada mejora la comprensión de la información y reduce la carga cognitiva durante la navegación.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7
        p.bg002.p-4 La experiencia visual debe considerar la interacción del usuario con los distintos elementos del sitio. Botones, menús, enlaces y formularios deben ser fácilmente identificables y funcionales, garantizando una navegación intuitiva. Estos elementos deben responder a patrones de diseño reconocibles que faciliten su uso sin necesidad de instrucciones adicionales.
        .row 
          .col-lg-2.col-4.mb-3.col-md-3
            img(src='@/assets/curso/Tema3/img02.svg', alt='')
          .col-lg-10
            p Otro aspecto fundamental es la coherencia visual a lo largo de todo el sitio. El uso consistente de colores, tipografías e imágenes contribuye a consolidar una identidad visual clara, evitando cambios bruscos que puedan generar confusión en el usuario. Esta coherencia fortalece la credibilidad y profesionalismo del sitio web.
        p El diseño de la experiencia visual no solo busca una presentación atractiva, sino también funcional. Un equilibrio adecuado entre estética y usabilidad permite que el sitio cumpla sus objetivos comunicativos, garantizando una experiencia de usuario eficiente y satisfactoria.
      .col-lg-5.col-9
        img(src='@/assets/curso/Tema3/img01.png', alt='')
    p Para complementar toda esta información se invita al aprendiz a visitar el siguiente pódcast que será de gran utilidad:
    
    img(src='@/assets/curso/Tema3/img03.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-left")
    .row.justify-content-center.g-0(data-aos="fade-right").mb-4
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
            texto="Pódcast"
            :audio="require('@/assets/curso/Tema3/img03.svg')"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1 Selección, instalación y configuración de temas

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-4.col-8.mb-3.col-md-6
        img(src='@/assets/curso/Tema3/img04.png', alt='')
      .col-lg-8
        p.bg05.p-4 El pilar fundamental de la apariencia en WordPress es el “tema” (#[em theme]). Desde una perspectiva técnica, un tema es un conjunto estructurado de archivos de plantilla en PHP, hojas de estilo (CSS) y scripts en JavaScript que determinan la disposición visual, la paleta de colores, la tipografía y el comportamiento responsivo del sitio web.
        .row
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/Tema3/img05.svg', alt='')
          .col-lg-10
            p La separación entre el contenido (almacenado en la base de datos) y el diseño (controlado por el tema) constituye una de las principales ventajas de este CMS. Esta característica permite modificar completamente la apariencia del sitio web sin afectar la información previamente publicada, facilitando procesos de rediseño y actualización visual.
        p La selección del tema debe realizarse con base en criterios técnicos y funcionales, más allá de la estética. Es necesario evaluar aspectos como la responsividad, la accesibilidad y la pertinencia del diseño en relación con el propósito del sitio web.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Responsividad nativa")
            .col-md-12.mb-4.mb-md-0
              p El tema debe adaptarse correctamente a distintos dispositivos, garantizando una visualización adecuada en computadores, tabletas y teléfonos móviles.
    
          .row(titulo="Cumplimiento de accesibilidad ")
            .col-md-12.mb-4.mb-md-0
              p Es recomendable seleccionar temas que cumplan con estándares de accesibilidad, asegurando que el contenido pueda ser consultado por diversos tipos de usuarios.
          .row(titulo="Propósito del diseño")
            .col-md-12.mb-4.mb-md-0
              p El tema debe responder a las necesidades del proyecto, evitando estructuras visuales que no se ajusten al tipo de contenido o al contexto institucional.
              p La instalación de temas puede realizarse desde el repositorio oficial de WordPress o mediante la carga de archivos comprimidos en formato ZIP. Este proceso permite integrar plantillas gratuitas o comerciales según los requerimientos del proyecto.
              p Es importante mantener una gestión adecuada de los temas instalados. Se recomienda conservar únicamente el tema activo y uno adicional por defecto como respaldo, eliminando aquellos que no se utilizan para evitar riesgos de seguridad y consumo innecesario de recursos.
              p De igual manera, la actualización periódica de los temas es fundamental para garantizar su compatibilidad con el sistema y prevenir vulnerabilidades. Un tema actualizado contribuye al correcto funcionamiento del sitio web y a la estabilidad del entorno digital. La adecuada selección y configuración del tema permite establecer una base sólida para el diseño visual, facilitando la personalización y el desarrollo de una interfaz coherente y funcional.
             
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/Tema3/img05.png', alt='')

    separador
    #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.2. Personalización avanzada de la interfaz

    p La activación de un tema proporciona una base visual inicial, pero requiere ajustes para adaptarse a la identidad del proyecto. WordPress incorpora una herramienta denominada “personalizador”, accesible desde el menú de apariencia, que permite modificar diversos elementos del diseño mediante una vista previa en tiempo real.

    .row.justify-content-center.align-items-center.mb-5.bg001.p-4(data-aos="zoom-in-left")
      .col-lg-1.mb-3.col-4.col-md-3
        img(src='@/assets/curso/Tema3/img06.svg', alt='')
      .col-lg-10
        p El Personalizador funciona como un entorno de prueba seguro, en el cual es posible realizar cambios sin que estos se reflejen inmediatamente en el sitio público. Esta característica permite evaluar distintas configuraciones antes de su publicación definitiva.
        p Entre las configuraciones más relevantes se encuentran la identidad del sitio, la estructura de la página de inicio y la definición de estilos visuales globales. Estos elementos son fundamentales para consolidar una imagen coherente y profesional.
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/Tema3/1.png', alt='')
        .bg01.p-4
          h4 Identidad del sitio
          p.mb-0.mb-md-4.mb-lg-0 Incluye la carga del logotipo y del icono del sitio (#[em favicon]), elementos clave para el reconocimiento visual.
      .col-lg-4.col-md-6.mb-4.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/Tema3/2.png', alt='')
        .bg01.p-4
          h4 Ajustes de la página de inicio
          p.mb-0 Permite definir si se mostrará una página estática o una lista de entradas, según los objetivos del sitio.
      .col-lg-4.col-md-6.mb-4.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/Tema3/3.png', alt='')
        .bg01.p-4
          h4 Paletas y tipografías
          p.mb-4 Garantizan la coherencia visual en todos los contenidos publicados.

    p La personalización debe considerar la experiencia del usuario en términos de navegación y accesibilidad. Los cambios realizados deben facilitar la interacción y no dificultar la comprensión del contenido. De igual manera, es importante mantener una consistencia en los elementos visuales a lo largo de todo el sitio, evitando configuraciones que generen desorden o fragmentación en el diseño.
    p La adecuada utilización del Personalizador permite optimizar la apariencia del sitio sin necesidad de modificar directamente el código, facilitando la gestión del diseño desde el entorno administrativo. La personalización avanzada contribuye a consolidar una identidad visual clara y coherente, alineada con los objetivos comunicativos del proyecto web.

    separador
    #t_3_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.3. Estructuración mediante widgets y elementos modulares

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-1.col-4.col-md-3.mb-3
        img(src='@/assets/curso/Tema3/img06.svg', alt='')
      .col-lg-11
        p Para comprender la diagramación periférica del sitio, es necesario estudiar los Widgets. Un widget es un bloque modular de código preconfigurado que ejecuta una funcionalidad específica o muestra un contenido determinado (por ejemplo, una barra de búsqueda, una lista de las entradas más recientes, un calendario o un bloque de texto libre).

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5
        p.mb-4 Históricamente, el uso de widgets estaba restringido a las barras laterales (sidebars). Sin embargo, en el diseño web moderno y con la evolución de WordPress, las áreas de widgets se han expandido para construir secciones estructurales críticas como el pie de página (footer). El pie de página es un espacio de alto valor estratégico; allí se ubican elementos que brindan confianza y soporte al usuario, como los enlaces a las políticas de privacidad, los datos de contacto físico, los íconos de redes sociales y los sellos de certificación de la entidad.
        p.bg001.p-4 Al igual que en el editor de entradas, la gestión de widgets ha adoptado el sistema de bloques. Esto permite al diseñador web insertar galerías, botones o códigos HTML personalizados directamente en el pie de página con una facilidad sin precedentes. El diseño de estas áreas debe regirse por la claridad: un pie de página saturado de módulos irrelevantes distrae al usuario de la navegación principal y contraviene las normas mínimas de acceso y diagramación.
      .col-lg-7
        img(src='@/assets/curso/Tema3/img08.svg', alt='')
    p La correcta selección y distribución de los widgets permite fortalecer la funcionalidad del sitio web sin alterar su estructura principal. La inclusión de elementos como formularios de contacto, enlaces rápidos o secciones informativas complementarias puede mejorar la interacción del usuario y facilitar el acceso a contenidos relevantes.
    p De igual manera, es importante mantener un equilibrio entre funcionalidad y simplicidad en el uso de widgets. Una adecuada planificación de estos elementos contribuye a una navegación más organizada, evita la sobrecarga visual y garantiza que cada componente cumpla un propósito claro dentro de la arquitectura del sitio web.




























</template>

<script>
export default {
  name: 'Tema3',
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

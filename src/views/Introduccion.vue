<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="zoom-in-left") La consolidación de un proyecto digital no concluye con la instalación del software ni con la estructuración inicial de su arquitectura de la información. Por el contrario, es en la fase de administración, diseño visual y despliegue técnico donde el sitio web adquiere su verdadera dimensión funcional y estética. En este contexto, el presente documento académico aborda las fases operativas y estratégicas del diseño de páginas web mediante la plataforma WordPress, proporcionando al aprendiz las competencias necesarias para transformar una estructura básica en una plataforma dinámica, interactiva y orientada al público objetivo.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.col-md-9.mb-3.d-none.d-lg-block
        img(src='@/assets/curso/portada/img01.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.col-md-3.mb-3.col-4
            img(src='@/assets/curso/portada/img02.svg', alt='')
          .col-lg-10
            p A través de este componente formativo, el estudiante aprenderá a administrar los contenidos del sitio de manera profesional, integrando textos, elementos multimedia y mecanismos de participación comunitaria. Asimismo, comprenderá cómo ampliar las capacidades del sistema mediante la instalación de plugins y cómo diseñar una experiencia de usuario (UX) coherente e inclusiva a través de la configuración de temas, widgets y opciones de personalización visual. Finalmente, el aprendiz desarrollará habilidades relacionadas con la seguridad de la información y la gestión de la infraestructura web, dominando tareas como respaldo, exportación, importación y despliegue del proyecto desde entornos locales hacia servidores en la nube.
    p El abordaje de estos contenidos se realizará desde una perspectiva analítica y pedagógica, superando la memorización de procedimientos para fomentar un pensamiento sistémico orientado a la resolución de problemas. Se analizarán las implicaciones de cada decisión técnica en relación con las necesidades del usuario y los estándares de accesibilidad y usabilidad web. Esta metodología garantiza la formación de un criterio sólido que permita sustentar decisiones de diseño y arquitectura, a la vez que fortalece la pertinencia del curso frente a las demandas del sector productivo, brindando al aprendiz herramientas para desarrollar proyectos digitales, apoyar procesos organizacionales y gestionar la publicación efectiva de sitios web.
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")      
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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

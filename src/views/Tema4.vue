<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Respaldo, migración y publicación del ecosistema digital

    .bloque-texto-g.bloque-texto-g--inverso.bg06.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema4/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La creación de un sitio web no culmina con su diseño visual. El profesional en tecnologías de la información debe anticiparse a posibles fallos técnicos, garantizar la portabilidad de los datos y dominar los procesos de despliegue que permiten trasladar el proyecto desde un entorno de desarrollo hacia la web. Estas competencias diferencian a un usuario básico del sistema de un administrador de plataformas digitales con enfoque profesional.
            br

    p La gestión integral de un sitio web implica comprender su ciclo de vida completo, desde su creación hasta su mantenimiento y actualización. Esto incluye la prevención de riesgos, la optimización del rendimiento y la capacidad de recuperación ante fallos. De igual manera, el dominio de estas prácticas permite asegurar la continuidad del servicio digital, evitando pérdidas de información y garantizando la disponibilidad del sitio para los usuarios finales.
    p La correcta aplicación de estos procesos contribuye a fortalecer la confiabilidad del sitio web, consolidando una infraestructura digital estable, segura y alineada con los objetivos del proyecto.

    separador
    #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.1 Estrategias de preservación: tareas de respaldo

    p La información constituye el activo más valioso de cualquier proyecto digital. Un sitio web está expuesto de forma permanente a diversos riesgos, como fallos en actualizaciones, errores humanos, problemas en el servidor o ataques informáticos. En este contexto, la implementación de copias de seguridad (#[em backups]) es una práctica obligatoria dentro de la administración web.
    p Un respaldo integral en WordPress requiere la protección de dos componentes fundamentales:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-3.col-9.mb-3.col-md-7
        img(src='@/assets/curso/Tema4/img02.svg', alt='')
      .col-lg-9
        TabsA.color-acento-botones(data-aos="zoom-in-left")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Respaldo de la base de datos")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p Contiene la información textual del sitio, configuraciones, usuarios y estructura de contenidos. Aunque su tamaño suele ser reducido, su pérdida puede comprometer completamente el funcionamiento del sitio. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Respaldo de los archivos del servidor") 
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p Incluye el núcleo del sistema, los #[em plugins], los temas y la biblioteca de medios, donde se almacenan imágenes y documentos. 

    .fondo01.p-5(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-8.mb-3
            .row.justify-content-center
              .col-lg-2.col-5.mb-3.col-md-3
                img(src='@/assets/curso/Tema4/img03.svg', alt='')
              .col-lg-10
                p En el proceso formativo, se promueve la automatización de los respaldos mediante herramientas especializadas. Estas permiten programar copias periódicas y almacenarlas en servicios externos en la nube, garantizando la disponibilidad de la información incluso ante fallos críticos del servidor principal.
            p Asimismo, es importante establecer una frecuencia adecuada de respaldo según la dinámica del sitio. Sitios con actualizaciones constantes requieren copias más frecuentes, mientras que proyectos estáticos pueden manejar intervalos más amplios.
            p De igual manera, se recomienda verificar periódicamente la integridad de los respaldos generados, asegurando que los archivos puedan ser restaurados correctamente en caso de ser necesario.
            p Otra práctica relevante consiste en mantener múltiples versiones de respaldo, lo que permite recuperar el sitio en diferentes puntos del tiempo ante posibles errores o incidentes. La correcta gestión de respaldos garantiza la continuidad operativa del sitio web, protegiendo la información y facilitando su recuperación ante cualquier eventualidad.
          .col-lg-4.col-md-7
            img(src='@/assets/curso/Tema4/img03.png', alt='')

    separador
    #t_4_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.2. Procesos de exportación e importación de datos

    p En determinados escenarios, no es necesario trasladar la totalidad del sitio web, sino únicamente su contenido. Por ejemplo, puede requerirse migrar entradas, páginas o usuarios hacia un nuevo entorno sin replicar configuraciones anteriores.
    p WordPress incorpora herramientas nativas que facilitan este proceso desde el submenú “herramientas”:

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg07.p-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-6.col-md-5
                figure
                  img(src='@/assets/curso/Tema4/1.svg', alt='Texto que describa la imagen')          
            h3.text-center Exportar
            p Permite generar un archivo en formato XML que contiene el contenido seleccionado del sitio, como entradas, páginas o categorías.
          
          .col-md.tarjeta.bg08.p-5
            .row.justify-content-center.mb-4
              .col-lg-4.col-6.col-md-5
                figure
                  img(src='@/assets/curso/Tema4/2.svg', alt='Texto que describa la imagen')          
            h3.text-center Importar
            p Permite cargar este archivo en otro sitio WordPress, reconstruyendo la estructura del contenido de manera automatizada.
          
    p Este proceso facilita la migración de información sin necesidad de realizar tareas manuales complejas, optimizando tiempos de trabajo. La exportación e importación permite realizar copias parciales del sitio con fines de respaldo o reorganización de contenidos.

    .row.justify-content-center.align-items-center.mb-3.bg001.p-4(data-aos="zoom-in-left")
      .col-lg-1.mb-3.col-4.col-md-3
        img(src='@/assets/curso/Tema4/img04.svg', alt='')
      .col-lg-10
        p Estas herramientas son útiles en entornos de prueba, donde se requiere replicar información para realizar ajustes sin afectar el sitio original. Es importante verificar que los recursos multimedia asociados al contenido sean correctamente transferidos, ya que en algunos casos requieren descarga adicional desde el servidor de origen.

    p Estos procesos permiten una gestión flexible de la información, facilitando la migración, reorganización y reutilización de contenidos dentro de distintos entornos digitales.
    
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2.
      span NO TIENE nombres
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-10
        img(src='@/assets/curso/Tema4/FIG2.svg', alt='Diagrama del proceso de exportación e importación de datos en WordPress. Muestra dos fases: la exportación desde un sitio de origen (seleccionando contenido para generar un archivo XML/WXR) y la importación en un sitio de destino (cargando el archivo para reconstruir automáticamente las entradas y sus imágenes). Incluye un caso práctico de migración de 500 artículos hacia un nuevo diseño.')


    separador
    #t_4_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.3. Pruebas y publicación: del servidor local a la nube

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-2.col-7.mb-3.col-md-6
          img(src='@/assets/curso/Tema4/img05.svg', alt='')
        .col-lg-10.bg02.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p El desarrollo de sitios web suele iniciarse en entornos locales (#[em localhost]), donde es posible diseñar y realizar pruebas sin exposición pública. Sin embargo, el objetivo final es la publicación en internet, lo que implica trasladar el proyecto a un servidor de alojamiento (#[em hosting]).
              P Este proceso requiere especial atención, ya que la base de datos contiene rutas y direcciones que deben ajustarse al nuevo entorno. Una migración incorrecta puede generar errores en la visualización del sitio.

    p El proceso de publicación manual incluye las siguientes etapas:

    .fondo02.p-5.mb-4(data-aos="zoom-in-left")
      .tarjeta.tarjeta--gris2.p-4
        PasosB.color-acento-botones
          .row.justify-content-center(titulo="")
            .col-lg-6.mb-3
              figure
                img(src='@/assets/curso/Tema4/01.svg', alt='Texto que describa la imagen')
            .col-lg-3.mb-4.mb-md-0
              h5 Empaquetado y exportación local
              p Generación de la base de datos en formato .sql y compresión de los archivos del sitio. 
            
          .row.justify-content-center(titulo="")
            .col-lg-6.mb-3
              figure
                img(src='@/assets/curso/Tema4/02.svg', alt='Texto que describa la imagen')
            .col-lg-3.mb-4.mb-md-0
              h5 Transferencia de archivos
              p Envío de los archivos al servidor remoto mediante protocolos seguros como SFTP.
          
          .row.justify-content-center(titulo="")
            .col-lg-6.mb-3
              figure
                img(src='@/assets/curso/Tema4/03.svg', alt='Texto que describa la imagen')
            .col-lg-3.mb-4.mb-md-0
              h5 Configuración de la base de datos
              p Creación e importación de la base de datos en el servidor de destino.
          
          .row.justify-content-center(titulo="")
            .col-lg-6.mb-3
              figure
                img(src='@/assets/curso/Tema4/04.svg', alt='Texto que describa la imagen')
            .col-lg-3.mb-4.mb-md-0
              h5 Sincronización de credenciales
              p Ajuste del archivo de configuración para establecer la conexión con la nueva base de datos.
          
          .row.justify-content-center(titulo="")
            .col-lg-6.mb-3
              figure
                img(src='@/assets/curso/Tema4/05.svg', alt='Texto que describa la imagen')
            .col-lg-3.mb-4.mb-md-0
              h5 Sustitución de URL
              p Actualización de las rutas internas para garantizar el correcto funcionamiento del sitio.

        
    p Es recomendable realizar pruebas posteriores a la migración para verificar que todos los elementos del sitio funcionen correctamente, incluyendo enlaces, imágenes y formularios.
    p Se deben validar aspectos como el rendimiento, la seguridad y la compatibilidad con distintos dispositivos antes de la publicación definitiva.
    p Otra práctica importante consiste en realizar una copia de seguridad completa antes de iniciar el proceso de migración, con el fin de prevenir pérdidas de información. La correcta ejecución de este proceso permite llevar el sitio web a un entorno de producción de manera segura, garantizando su disponibilidad y correcto funcionamiento para los usuarios finales.




</template>

<script>
export default {
  name: 'Tema4',
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

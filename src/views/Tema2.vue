<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Extensión Funcional del Sitio web mediante #[em Plugins]
    
    .bloque-texto-g.bloque-texto-g--inverso.bg03.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Un Si bien el núcleo (Core) de WordPress proporciona un robusto sistema de gestión de contenidos, diseño y categorización taxonómica, sus capacidades nativas están concebidas para satisfacer necesidades generales de publicación. Cuando los requerimientos del cliente o el análisis del proyecto exigen características especializadas, tales como la venta de productos, la gestión de matrículas académicas, el blindaje perimetral contra ciberataques o la optimización avanzada para motores de búsqueda, el entorno de trabajo debe escalarse. Esta ampliación tecnológica se logra mediante la arquitectura modular de los #[em plugins.]
            br
    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1. Fundamentación técnica de los #[em plugins]

    p Desde una definición técnica rigurosa, un #[em plugin] es un paquete de software adicional compuesto por código en lenguaje PHP, hojas de estilo (CSS) y scripts en JavaScript, que se integra al núcleo de WordPress para añadir nuevas funcionalidades o modificar el comportamiento de las existentes. Estos componentes operan bajo un principio de no interferencia, lo que permite ampliar las capacidades del sistema sin alterar directamente los archivos originales del CMS. De este modo, cuando WordPress recibe actualizaciones, las funcionalidades implementadas mediante #[em plugins] se mantienen estables y operativas.
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7
        .row 
          .col-lg-2.col-4.mb-3.col-md-3
            img(src='@/assets/curso/Tema2/img03.svg', alt='')
          .col-lg-10
            p Para facilitar la comprensión de este concepto, puede establecerse una analogía en el ámbito formativo: WordPress representa la estructura base de una vivienda, mientras que los #[em plugins] equivalen a los dispositivos o sistemas adicionales que se incorporan para mejorar su funcionalidad, como sistemas de seguridad, climatización o electrodomésticos. Aunque la estructura puede operar sin estos elementos, su incorporación amplía significativamente las posibilidades de uso y adaptación a necesidades específicas.
        p.bg04.p-4 En el contexto de la administración web, los #[em plugins] permiten incorporar funciones avanzadas sin requerir conocimientos profundos de programación. Entre las funcionalidades más comunes se encuentran la creación de formularios de contacto, la optimización para motores de búsqueda (SEO), la implementación de tiendas virtuales, la gestión de copias de seguridad y la integración con redes sociales. Esta flexibilidad convierte a WordPress en una plataforma altamente adaptable a distintos tipos de proyectos digitales.
      .col-lg-5.col-8
        img(src='@/assets/curso/Tema2/img02.png', alt='')
    p La instalación de #[em plugins] debe realizarse de manera controlada y estratégica. El uso excesivo o inadecuado de estos componentes puede afectar el rendimiento del sitio web, generar conflictos entre funcionalidades o comprometer la seguridad del sistema. Por esta razón, se recomienda seleccionar únicamente #[em plugins] confiables, actualizados y compatibles con la versión de WordPress utilizada.

    .row.justify-content-center.align-items-center.mb-4.bg02(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/Tema2/img04.png', alt='')
        .col-lg-7
          .row.p-4
            .col-lg-2.col-4.col-md-3
              img(src='@/assets/curso/Tema2/img05.svg', alt='').mb-4
            .col-lg-12
              p Es fundamental realizar un proceso constante de actualización y mantenimiento de los #[em plugins] instalados. Las actualizaciones no solo incorporan nuevas funcionalidades, sino que también corrigen vulnerabilidades de seguridad y errores de funcionamiento. Una gestión adecuada de estos componentes contribuye a la estabilidad y protección del sitio web.
              p De igual manera, es importante evaluar la pertinencia de cada #[em plugin] dentro del proyecto web. No todas las funcionalidades disponibles son necesarias, por lo que se debe priorizar la instalación de aquellos recursos que realmente aporten valor al sitio y respondan a sus objetivos comunicativos y técnicos.

    p La correcta implementación de #[em plugins] permite ampliar significativamente las capacidades de WordPress, transformándolo en una herramienta robusta y versátil para el desarrollo de soluciones digitales. Su uso adecuado fortalece la funcionalidad, mejora la experiencia del usuario y optimiza la gestión integral del sitio web.

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2. Procedimientos de instalación y activación

    p La gestión de estos módulos se centraliza en el submenú #[em “plugins”], ubicado dentro del panel de administración de WordPress. Es importante tener en cuenta que esta capacidad de expansión técnica es una característica propia de la versión autoalojada (WordPress.org); en contraste, la versión comercial en sus planes básicos (WordPress.com) presenta restricciones para la instalación de #[em plugins] externos, limitando las posibilidades de personalización del sitio web.
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Instalación desde el repositorio oficial")
            .col-md-12.mb-4.mb-md-0
              p Es el método más seguro, rápido y recomendado en entornos de formación. WordPress dispone de un repositorio integrado con miles de #[em plugins] gratuitos, verificados por la comunidad. El administrador puede utilizar el buscador interno, evaluar las opciones disponibles y seleccionar “Instalar ahora”. El sistema se encarga automáticamente de descargar e integrar el #[em plugin] en el directorio correspondiente.
    
          .row(titulo="Carga de archivos comprimidos (ZIP)")
            .col-md-12.mb-4.mb-md-0
              p Algunos #[em plugins] profesionales o desarrollados a medida se distribuyen fuera del repositorio oficial. En estos casos, el proveedor entrega un archivo en formato ZIP. El administrador debe utilizar la opción “subir #[em plugin]” desde el panel de administración, seleccionar el archivo desde su equipo local y permitir que la plataforma realice el proceso de instalación.
          .row(titulo="Instalación manual vía FTP")
            .col-md-12.mb-4.mb-md-0
              p En situaciones donde existen restricciones del servidor o fallos en los permisos de carga, se requiere un procedimiento técnico adicional. El #[em plugin] debe descomprimirse previamente y luego transferirse al servidor mediante un cliente FTP, ubicándolo en la carpeta correspondiente. Este método exige mayor conocimiento técnico sobre la estructura de archivos del sistema.
              p Es importante comprender que la instalación de un #[em plugin] no implica su funcionamiento inmediato. Una vez instalado, el #[em plugin] permanece inactivo hasta que se ejecuta la acción de “activar”. Asimismo, puede ser desactivado temporalmente para realizar pruebas o resolver conflictos, sin que esto afecte su configuración previamente establecida.
              p Asimismo, cada #[em plugin] suele incorporar un panel de configuración propio, desde el cual se ajustan sus parámetros de funcionamiento. La correcta configuración de estos elementos es fundamental para garantizar que el #[em plugin] cumpla con su propósito dentro del sitio web y se integre adecuadamente con el resto de componentes del sistema.
              p La gestión eficiente de #[em plugins] también implica realizar evaluaciones periódicas sobre su utilidad y funcionamiento. Los #[em plugins] que no se utilizan deben ser desactivados o eliminados, con el fin de evitar sobrecarga en el sistema y reducir posibles vulnerabilidades de seguridad.
              p Es recomendable verificar la compatibilidad de los #[em plugins] con la versión de WordPress instalada, así como con otros #[em plugins] activos. La incompatibilidad entre componentes puede generar errores en el sitio web, afectar su rendimiento o provocar fallos en la visualización de contenidos.
              p La administración adecuada de #[em plugins] permite mantener un equilibrio entre funcionalidad y rendimiento. Una selección pertinente, junto con una gestión responsable, contribuye al desarrollo de sitios web estables, seguros y adaptados a las necesidades del entorno digital.
      .col-lg-4.mb-3.col-9.col-md-7
        img(src='@/assets/curso/Tema2/img06.svg', alt='')

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3. Criterios de usabilidad y selección de #[em plugins] en proyectos reales 

    .row.justify-content-center.align-items-center.mb-4.bg02(data-aos="zoom-in-left")
        .col-lg-7
          .row.p-4
            .col-lg-2.col-4.col-md-3
              img(src='@/assets/curso/Tema2/img08.svg', alt='').mb-4
            .col-lg-12
              p La facilidad con la que se pueden añadir funcionalidades en WordPress constituye uno de los riesgos arquitectónicos más relevantes en el desarrollo web contemporáneo: la sobreinstalación de #[em plugins], también conocida como “síndrome de diógenes digital”. Cada módulo añadido incrementa las peticiones a la base de datos, incorpora más código al sistema y, en consecuencia, puede aumentar los tiempos de respuesta del servidor. Un sitio saturado de #[em plugins] innecesarios afecta negativamente la experiencia del usuario y eleva la vulnerabilidad frente a posibles ataques, alejándose del objetivo de una administración eficiente del sitio web.
        .col-lg-5.d-none.d-lg-block
          img.der(src='@/assets/curso/Tema2/img07.png', alt='')

    p En este contexto, es fundamental desarrollar un criterio analítico riguroso para la selección de #[em plugins]. Antes de instalar cualquier herramienta, se deben considerar aspectos como la necesidad real de la funcionalidad, su aporte al objetivo del proyecto y la posibilidad de resolver el requerimiento mediante herramientas nativas del sistema o del tema activo. Este análisis previo permite evitar la sobrecarga del sitio y promueve una gestión más eficiente de los recursos.
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/Tema2/img09.png', alt='').mb-3
        p En el ámbito de la formación profesional, la selección de #[em plugins] debe basarse en criterios técnicos que garanticen su calidad, seguridad y compatibilidad:

    TabsA.color-acento-botones(data-aos="zoom-in-left")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Fecha de última actualización")
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-2.col-5.col-md-4
            img(src='@/assets/curso/Tema2/2.svg', alt='').mb-3
          .col-lg-10
            p Un #[em plugin] que no ha sido actualizado durante un periodo prolongado puede representar un riesgo de seguridad y presentar incompatibilidades con versiones recientes de WordPress o del lenguaje PHP.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Número de instalaciones activas y reputación") 
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-2.col-5.col-md-4
            img(src='@/assets/curso/Tema2/1.svg', alt='').mb-3
          .col-lg-10
            p La valoración de la comunidad es un indicador relevante. Los #[em plugins] con un alto número de instalaciones y buenas calificaciones suelen ofrecer mayor estabilidad, soporte y documentación.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Compatibilidad declarada")  
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-2.col-5.col-md-4
            img(src='@/assets/curso/Tema2/3.svg', alt='').mb-3
          .col-lg-10
            p Es necesario verificar que el #[em plugin] sea compatible con la versión de WordPress instalada, ya que el entorno digital se actualiza constantemente y pueden generarse conflictos entre versiones.
          .col-lg-12
            p En cuanto a su aplicación práctica, los #[em plugins] permiten resolver necesidades específicas dentro de distintos tipos de proyectos web. Por ejemplo: en el desarrollo de un sitio de comercio electrónico, es posible integrar herramientas especializadas que gestionen productos, pagos y envíos, ampliando significativamente las funcionalidades del sistema base.
            p En proyectos institucionales o educativos, resulta fundamental implementar #[em plugins] orientados a la seguridad, como aquellos que controlan accesos no autorizados, así como herramientas de optimización de rendimiento, que mejoran los tiempos de carga y la estabilidad del sitio ante múltiples usuarios concurrentes.
            p Por otra parte, la instalación controlada de #[em plugins] contribuye a mantener un equilibrio entre funcionalidad y rendimiento. Un sitio optimizado no depende de la cantidad de herramientas instaladas, sino de la pertinencia y correcta configuración de las mismas, lo que garantiza un entorno más estable y eficiente.
            p Es recomendable realizar auditorías periódicas de los #[em plugins] instalados, con el fin de identificar aquellos que no se encuentran en uso o que pueden ser reemplazados por soluciones más eficientes. Esta práctica contribuye a reducir riesgos de seguridad y a mejorar el desempeño general del sitio web.
            p La gestión estratégica de #[em plugins] permite consolidar un entorno digital seguro, funcional y alineado con los objetivos del proyecto. La correcta toma de decisiones en este ámbito fortalece la calidad del sitio web y optimiza su funcionamiento dentro del ecosistema digital.
























</template>

<script>
export default {
  name: 'Tema2',
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

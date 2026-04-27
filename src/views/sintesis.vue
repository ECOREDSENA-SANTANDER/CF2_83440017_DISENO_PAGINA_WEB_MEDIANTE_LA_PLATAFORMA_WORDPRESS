<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El diseño y la administración de sitios web en WordPress constituyen un proceso integral que va más allá de la configuración técnica, convirtiéndose en una herramienta estratégica para la gestión de la información y la comunicación digital. La competencia profesional no se limita a la instalación del sistema, sino que implica la capacidad de administrar contenidos, organizar bibliotecas de medios y gestionar la interacción con los usuarios, garantizando coherencia y pertinencia en la información publicada. Asimismo, el uso de plugins permite ampliar las funcionalidades del sitio, fortaleciendo su capacidad para responder a necesidades específicas en distintos contextos.
    p Por otra parte, el diseño de la experiencia visual y la correcta implementación de los procesos de despliegue son fundamentales para la consolidación del proyecto web. La adecuada selección y personalización de temas y widgets asegura una interfaz accesible, usable y adaptada a diferentes dispositivos. Finalmente, el dominio de procesos como el respaldo, la exportación, la importación y la publicación en servidores en la nube permite garantizar la estabilidad, seguridad y disponibilidad del sitio web en entornos reales.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de la administración y publicación de un proyecto web en WordPress, dividido en gestión de contenidos (entradas, medios, comentarios y plugins) y diseño y operaciones técnicas (experiencia de usuario, temas, widgets, respaldo y publicación).")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

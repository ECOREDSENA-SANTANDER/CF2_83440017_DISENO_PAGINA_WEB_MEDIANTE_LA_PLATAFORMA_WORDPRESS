<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Administración y publicación de tu proyecto Web',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con la administración de contenidos, la instalación de <i>plugins</i>, la personalización visual, el respaldo de la información y la publicación del sitio web en WordPress.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la herramienta <em>Layer</em> en la ventana <em>Board</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Layer</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Seleccionar y editar capas que identifican márgenes, pistas y componentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ajustar automáticamente las pistas de cada componente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar el tamaño de los componentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué herramienta permite agregar texto en la ventana <em>Board</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Layer</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Auto</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Text</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Route</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Para qué sirve la herramienta <em>Show</em> en EAGLE?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para borrar conexiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para cambiar de ventana entre <em>Schematic</em> y <em>Board</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para agregar nuevas capas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para resaltar conexiones de pines.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué botón se utiliza para cambiar entre las ventanas <em>Schematic</em> y <em>Board</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Text</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Layer</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Board</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Route</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función más importante del texto alternativo en una imagen subida a la biblioteca de medios?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir automáticamente el peso del archivo multimedia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aportar accesibilidad para lectores de pantalla y contexto semántico para buscadores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Impedir que la imagen sea visible en el Front End.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transformar la imagen en un archivo comprimido para FTP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la accesibilidad y los metadatos en la biblioteca de medios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión integral de medios y el diligenciamiento de metadatos.',
        },
        {
          id: 6,
          texto:
            '¿Qué práctica se recomienda para moderar comentarios y reducir riesgos de spam en WordPress?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que todos los comentarios se publiquen sin revisión previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Desactivar permanentemente el sistema de comentarios en todas las entradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Configurar que el primer comentario de cada usuario sea aprobado manualmente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar la papelera para evitar que queden rastros de mensajes maliciosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la moderación preventiva de comentarios en WordPress.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la administración de comentarios y la mitigación del spam.',
        },
        {
          id: 7,
          texto: '¿Qué es un plugin en el ecosistema técnico de WordPress?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una base de datos externa que reemplaza a MySQL o MariaDB.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un complemento de software que añade o modifica funcionalidades del sitio sin alterar el núcleo del CMS.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un formato especial de imagen utilizado por la biblioteca de medios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una plantilla visual que controla tipografías y colores del Front End.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los plugins como arquitectura modular de expansión funcional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la fundamentación técnica de los plugins.',
        },
        {
          id: 8,
          texto:
            'Después de instalar un plugin en WordPress, ¿qué acción permite que comience a funcionar dentro del sitio?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activarlo desde el panel de plugins.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exportarlo en formato XML/WXR.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Moverlo a la papelera y restaurarlo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convertirlo en widget desde el personalizador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la diferencia entre instalar y activar un plugin.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procedimientos de instalación y activación de plugins.',
        },
        {
          id: 9,
          texto:
            '¿Qué criterio indica un posible riesgo al seleccionar un plugin para un proyecto real?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el plugin tenga múltiples instalaciones activas y valoraciones positivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que su función responda directamente a una necesidad del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que declare compatibilidad con la versión actual de WordPress.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que lleve más de un año sin recibir actualizaciones por parte de su desarrollador.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los criterios de selección responsable de plugins.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la evaluación de usabilidad, seguridad y vigencia de plugins.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el propósito principal de compilar una base de datos a formato .accde?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un widget exclusivo para el pie de página.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una copia de seguridad incremental del servidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un plugin robusto de comercio electrónico, como WooCommerce.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una entrada programada con categorías de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la selección de plugins según necesidades funcionales del proyecto.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los casos de uso reales de los plugins en WordPress.',
        },

        {
          id: 11,
          texto: '¿Cuál es la función principal de un tema en WordPress?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir la apariencia visual y la disposición de la interfaz pública del sitio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir el sistema de comentarios por formularios externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenar las credenciales de acceso a la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exportar todas las entradas en formato XML.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el papel del tema en la experiencia visual del sitio web.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la selección, instalación y configuración de temas.',
        },
        {
          id: 12,
          texto:
            '¿Qué característica debe priorizarse al elegir un tema para cumplir normas mínimas de acceso web?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que sea accesible, responsivo y compatible con navegación por teclado y lectores de pantalla.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que incluya la mayor cantidad posible de animaciones automáticas en todas las páginas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que obligue al usuario a visualizar el sitio únicamente desde computador de escritorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que dependa de múltiples temas activos al mismo tiempo para mostrar el contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la accesibilidad y responsividad en la selección de temas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los criterios de accesibilidad en la experiencia visual.',
        },

        {
          id: 13,
          texto:
            '¿Qué ventaja ofrece el Personalizador de WordPress durante el proceso de diseño de la interfaz?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publica automáticamente todos los cambios tan pronto se modifican los colores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elimina la posibilidad de definir una página de inicio estática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituye la biblioteca de medios por una vista previa del Front End.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permite previsualizar cambios de diseño antes de hacerlos públicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el Personalizador como entorno seguro de previsualización.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la personalización avanzada de la interfaz en WordPress.',
        },
        {
          id: 14,
          texto:
            '¿Para qué se utilizan principalmente los widgets en la diagramación de un sitio WordPress?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para editar el archivo wp-config.php desde el Front End.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para insertar bloques funcionales o informativos en áreas como barras laterales y pie de página.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para reemplazar por completo los plugins instalados en el servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para convertir entradas dinámicas en copias de seguridad automáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los widgets como elementos modulares de estructuración visual.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la diagramación mediante widgets y elementos modulares.',
        },
        {
          id: 15,
          texto:
            '¿Qué debe incluir un respaldo integral de un sitio WordPress?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solamente las entradas publicadas durante el último mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el tema activo y los comentarios aprobados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La base de datos y los archivos del servidor, incluida la carpeta de medios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente la portada del sitio y el archivo robots.txt.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la preservación integral de la información en WordPress.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las estrategias de respaldo del ecosistema digital.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de archivo genera la herramienta nativa Exportar de WordPress para transferir contenidos? ',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un archivo XML/WXR.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un archivo PSD editable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un archivo EXE instalable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un archivo PHP comprimido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la exportación nativa de contenidos en WordPress.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los procesos de exportación e importación de datos.',
        },
        {
          id: 17,
          texto:
            'Durante una importación en WordPress, ¿qué capacidad facilita reconstruir contenidos en un nuevo entorno?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desactivar automáticamente todos los usuarios del sitio de origen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Convertir cada entrada importada en un tema premium.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reconstruir entradas y ofrecer la descarga de imágenes adjuntas desde el servidor de origen.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar de manera definitiva las fechas y autores originales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la importación automatizada de contenidos y recursos asociados.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las herramientas nativas de importación en WordPress.',
        },
        {
          id: 18,
          texto:
            '¿Qué operación es indispensable al migrar manualmente un sitio desde localhost hacia un dominio en la nube?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desactivar las categorías para evitar conflictos taxonómicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir en la base de datos las URL absolutas del entorno local por el nuevo dominio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar el archivo wp-config.php para forzar una reinstalación total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cambiar todas las entradas dinámicas por páginas estáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la sustitución de URL durante la publicación en servidores remotos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las pruebas y publicación del sitio desde localhost a la nube.',
        },
        {
          id: 19,
          texto:
            '¿Qué archivo de configuración debe editarse para sincronizar WordPress con las credenciales de la nueva base de datos remota?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'robots.txt',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'index.html',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'wp-config.php',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'license.txt',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la sincronización de credenciales en el archivo de configuración principal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la configuración técnica del sitio durante la migración.',
        },
        {
          id: 20,
          texto:
            '¿Qué protocolo de transferencia segura de archivos se recomienda para publicar manualmente un sitio WordPress en un servidor remoto?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SFTP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'SMTP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'RSS.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'JSON.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la transferencia segura de archivos hacia el servidor remoto.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la publicación web y la transferencia de archivos al hosting.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la administración y publicación de proyectos web en WordPress.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

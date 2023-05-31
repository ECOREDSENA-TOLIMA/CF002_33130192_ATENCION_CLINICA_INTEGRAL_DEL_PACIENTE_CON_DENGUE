<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mt-5(data-aos="fade-up") El presente componente abarca todos aquellos temas de atención clínica integral del paciente con dengue, es importante recordar que el dengue es una enfermedad dinámica y que el paciente puede evolucionar rápidamente de un estadio a otro.
    p.mt-5(data-aos="fade-up") El dengue es una de las patologías infecciosas con mayor impacto en Colombia, veamos su desarrollo en el siguiente video:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/watch?v=yEs4o8Gr0Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

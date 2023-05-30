<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El dengue es una enfermedad viral aguda que puede afectar a personas de cualquier edad, especialmente a niños y adultos mayores, causada por un virus transmitido a través de la picadura de mosquitos infectados (Aedes aegypti l).
    p.mb-5 El manejo de los casos de dengue clásico y dengue grave en todo el territorio nacional es la identificación temprana y la comprensión de los problemas clínicos durante las diferentes fases de la enfermedad, lo que da lugar a un enfoque racional del abordaje de casos y una buena respuesta clínica.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/Sintesis_CF_02_33130191_2.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis_CF_02_33130191.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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

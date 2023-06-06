<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Secuencia de los signos clínicos
    
    p.mt-5(data-aos="fade-up") Identificar la secuencia de las manifestaciones clínicas y de laboratorio es muy importante para diferenciar el dengue de otra enfermedad que pudiera tener alteraciones semejantes, pero en distinto orden de presentación y, además, constituye la única posibilidad de detectar precozmente cual es el paciente de dengue que puede evolucionar o está ya evolucionando hacia la forma clínica grave como dengue hemorrágico y choque por dengue. 
    p.mt-3(data-aos="fade-up") Veamos el conjunto de síntomas que presenta un enfermo del dengue:

    .row.mb-4 
      .col-md-10.offset-1
        .bloque-texto-a__texto.pt-5.caja_escalada_hover(style="background-color: #E2E7FE;")
          .container.tarjeta.tarjeta.p-4.p-md-5
            SlyderB.mb-5(:datos="datosSlyder")
    
    Separador
    #t_2_1.titulo-segundo.mt-2.color-acento-contenido
      h2 2.1 Diagnósticos

    p.mt-5(data-aos="fade-up") El diagnóstico se hace en el laboratorio y depende de la detección de anticuerpos específicos en el suero del paciente, de la detección del antígeno viral o el RNA viral en el suero o tejido o el aislamiento viral.

    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .cajon.color-acento-contenido.pt-4.px-4.pb-3.caja_flotante_azul
          .row
            .col-sm-12.col-lg-7
              p.px-3.pt-1.pb-2(data-aos="fade-up") Un alto índice de sospecha por parte del médico y su equipo es fundamental para hacer un diagnóstico tentativo de dengue. Hay exámenes como la prueba ELISA que determinan la probabilidad de la enfermedad o la confirman.
              p.px-3.pt-1.pb-2(data-aos="fade-up") El reconocer los signos de alarma permite un manejo apropiado y rápido del paciente que puede de otra forma entrar en choque y morir.
            .col-sm-12.col-lg-5
              figure
                img(src='@/assets/curso/temas/Tema2/7.svg', alt='')

    p.px-2.pt-4.pb-3(data-aos="fade-up") El abordaje del paciente con diagnóstico probable de dengue tiene como objetivo identificar la fase clínica de la enfermedad en la que se encuentra el paciente.

    p.px-2.pt-1.pb-3(data-aos="fade-up") Definiciones de caso:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tXpXxAqrsPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador
    #t_2_2.titulo-segundo.mt-2.color-acento-contenido
      h2 2.2 Clasificación para el manejo del dengue:

    .row
      .col-md-12
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #E8E3F0; border-radius: 20px")
          .row.pt-5
            .col-lg-1
            .col-sm-12.col-lg-3
              img(src='@/assets/curso/temas/Tema2/8.svg', alt='')

            .col-sm-12.col-lg-8
              div.d-flex.mb-4
                div.p-0.position-relative
                  img.mb-0.position-relative(style="width:45px;" src="@/assets/template/ico-01.svg")
                div.py-2.px-3.pe-5
                  h3.mb-0.text-decorator Dengue grave:
              ul.lista-ul--color
                li 
                  i(style="color:#4462FE")
                  |● Extravasación severa del plasma conducente a: Síndrome de Choque por dengue (SCD).
                li
                  i(style="color:#4462FE")
                  |● Acumulo de líquidos con dificultad respiratoria.
                li 
                  i(style="color:#4462FE")
                  |● Hemorragias severas según criterio clínico.
                li 
                  i(style="color:#4462FE")
                  |● Daño grave de órganos: Hígado: TGO o TGP > o igual a 1.000.
                li 
                  i(style="color:#4462FE")
                  |● Sistema Nervioso Central: Alteraciones estado de consciencia (convulsiones, inconsciencia).
                li 
                  i(style="color:#4462FE")
                  |● Corazón: miocarditis o miocardiopatía.
                li 
                  i(style="color:#4462FE")
                  |● Otros órganos.

    div.d-flex.mb-4.mt-5
      div.p-0.position-relative
        img.mb-0.position-relative(style="width:45px;" src="@/assets/template/ico-01.svg")
      div.py-2.px-3.pe-5
        h3.mb-0.text-decorator Choque por dengue:
    
    p.px-3.pt-1.pb-3(data-aos="fade-up") Está presente en la inmensa mayoría de los enfermos que se agravan y fallecen, como causa directa de muerte o dando paso a complicaciones tales como: hemorragias masivas, coagulación intravascular diseminada, edema pulmonar no cardiogénico, fallo múltiple de órganos (síndrome de hipoperfusión-reperfusión). 

    .row
      .col-sm-12.col-lg-10.offset-lg-1
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Otras formas graves: 
              p En los enfermos con dengue es frecuente que exista alguna alteración hepática, generalmente recuperable. También pueden existir alteraciones miocárdicas particularmente en adultos, con poca expresión electrocardiográfica. Con menor frecuencia se observan alteraciones renales y neurológicas.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/Tema2/9.svg', alt='')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/Tema2/10.svg', alt='')
            .col-md-6
              p(style="text-align: left") Algunos enfermos con dengue pueden manifestar alteraciones de un órgano o sistema por lo que se les han llamado “formas graves de dengue con compromiso de órganos”, en ocasiones asociadas a extrema gravedad y muerte.
          .row
            .col-md-6.mb-4.mb-md-0
              p Por poca frecuencia se les ha llamado “formas atípicas de dengue”, a veces asociadas a una determinada predisposición individual u otra enfermedad previa o coexistente (infecciosa o no infecciosa)
            .col-md-6
              figure
                img(src='@/assets/curso/temas/Tema2/11.svg', alt='')
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/Tema2/12.svg', alt='')
            .col-md-6.mb-4.mb-md-0
              p(style="text-align: left") Durante una epidemia es posible que se presente alguno de estos casos: hepatitis o hepatopatía, que conduce a fallo hepático agudo, encefalitis o encefalopatía, expresada frecuentemente en alteraciones de la conciencia (coma) a veces también con convulsiones; miocarditis o miocardiopatía, que se manifiesta como hipo contractilidad miocárdica con disminución de la fracción de eyección del ventrículo izquierdo y posible insuficiencia cardiaca; así́ como nefritis o nefropatía que puede ser causa de insuficiencia renal agudo o puede afectar selectivamente a la función de reabsorción propia del túbulo renal distal y de esa manera contribuir al aumento de líquido del espacio extravascular.
               
    Separador
    #t_2_3.titulo-segundo.mt-2.color-acento-contenido
      h2 2.3 Grupos de riesgo

    .col-md-12
      .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #54397C; border-radius: 15px")
        .row.pt-5
          .col-sm-12.col-lg-4
            img(src='@/assets/curso/temas/Tema2/13.svg', alt='')
          .col-sm-12.col-lg-7
            ul(style="color:white").lista-ul--color
              li                
                |● Personas mayores de 60 años
              li
                |● Menores de dos años
              li 
                |● Pacientes cardíacos con problemas cardiovasculares
              li 
                |● Patologías del corazón o enfermedades crónicas: Se incluyen la obesidad, enfermedades de riñón y diabetes
    br
    br

    div.d-flex.mb-4.mt-5
      div.p-0.position-relative
        img.mb-0.position-relative(style="width:45px;" src="@/assets/template/ico-01.svg")
      div.py-2.px-3.pe-5
        h3.mb-0.text-decorator Complicaciones
    
    .row.justify-content-left.mb-5
      .col-sm-12.col-lg-4.mt-2
        .tarjeta--boton.color-secundario.p-4(style="height:100%")
          .crd.crd--avatarHorizontal.crd--first.py-4(style="height:100%")
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema2/24.svg", alt="alt").img250
              .col
                p El dengue grave puede causar hemorragias internas y daños en los órganos.
                
      .col-sm-12.col-lg-4.mt-2
        .tarjeta--boton.color-secundario.p-4(style="height:100%")
          .crd.crd--avatarHorizontal.crd--first.py-4(style="height:100%")
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema2/25.svg", alt="alt").img250
              .col
                p La presión arterial puede descender a niveles peligrosos y causar choque.
      
      .col-sm-12.col-lg-4.mt-2
        .tarjeta--boton.color-secundario.p-4(style="height:100%")
          .crd.crd--avatarHorizontal.crd--first.py-4(style="height:100%")
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/Tema2/26.svg", alt="alt").img250
              .col
                p En algunos casos, el dengue grave puede provocar la muerte.

    div.d-flex.mb-4.mt-5
      div.p-0.position-relative
        img.mb-0.position-relative(style="width:45px;" src="@/assets/template/ico-01.svg")
      div.py-2.px-3.pe-5
        h3.mb-0.text-decorator Serotipos de dengue:
    
    .row.mb-3
      .col-sm-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/Tema2/20.svg', alt='')
      .col-sm-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/Tema2/21.svg', alt='')
      .col-sm-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/Tema2/22.svg', alt='')
      .col-sm-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/Tema2/23.svg', alt='')
    br
    p.px-3.mt-3.pb-2(data-aos="fade-up") La infección por un serotipo, seguida por otra infección con un serotipo diferente aumenta el riesgo de una persona de padecer dengue grave y hasta morir.

    div.d-flex.mb-4.mt-5
      div.p-0.position-relative
        img.mb-0.position-relative(style="width:45px;" src="@/assets/template/ico-01.svg")
      div.py-2.px-3.pe-5
        h3.mb-0.text-decorator Factores de riesgo: 
        
    p.px-3.pt-1.pb-3(data-aos="fade-up") Cualquier característica o circunstancia detectable de una persona o grupo de personas asociadas con la probabilidad de estar especialmente expuesta a desarrollar o padecer un proceso mórbido, sus características se asocian a un cierto tipo de daño a la salud.
    br

    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema2/16.svg', alt='')
    .row
      .col-sm-12.col-lg-10.offset-lg-1.mb-4.mb-md-0
        .pt-4.px-4.pb-3.caja_flotante(style="background-color: #E2E7FE")
          .row
            .col-sm-12.col-lg-7
          p.px-3.pt-1.pb-2(data-aos="fade-up") Este grupo de riesgo define al dengue como un problema de salud pública en la región de las Américas a pesar de los esfuerzos por parte de los Estados Miembros para contenerlo y mitigar el impacto de las epidemias.
          p.px-3.pt-1.pb-2(data-aos="fade-up") El dengue requiere abordarse como una única enfermedad con presentaciones clínicas diferentes que van de estados benignos hasta evolución clínica severa y desenlaces que causan la muerte.
    
    Separador
    #t_2_4.titulo-segundo.mt-2.color-acento-contenido
      h2 2.4 Manejo
    
    p.px-3.pt-1.pb-3(data-aos="fade-up") Para una enfermedad que es compleja en sus manifestaciones, el tratamiento es relativamente simple, barato y muy efectivo para salvar vidas, siempre y cuando se hagan las intervenciones correctas y oportunas. 

    .row 
      .col-md-10.offset-md-1
        .bloque-texto-g.color-primario.p-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema2/27.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3(data-aos="fade-up") La clave es la identificación temprana y la comprensión de los problemas clínicos durante las diferentes fases de la enfermedad, lo que da lugar a un enfoque racional del abordaje de casos y una buena respuesta clínica.
            br
            br
            p.pt-1.pb-3(data-aos="fade-up") Las actividades de gestión, triaje y tratamiento en los niveles primario y secundario de atención, donde los pacientes son vistos y evaluados inicialmente, son fundamentales para determinar el resultado clínico del dengue. 

    p.px-3.mt-3.pb-3(data-aos="fade-up") Una buena atención primaria no sólo reduce el número de hospitalizaciones innecesarias, sino que también salva la vida de los pacientes con dengue. 
    p.px-3.pt-1.pb-3(data-aos="fade-up") La atención primaria y secundaria, es crucial para la identificación de los brotes y el inicio de la respuesta oportuna, a continuación, explicamos como es la evaluación:
    
    .row
      .col-sm-12.col-lg-8.offset-lg-2.mb-4.mb-md-0
        figure.desktop 
          img(src='@/assets/curso/temas/Tema2/18.png', alt='')
        figure.movil
          img(src='@/assets/curso/temas/Tema2/19.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Fiebre elevada:',
        texto:
          'Debe sospecharse que una persona tiene dengue cuando presenta una fiebre elevada (40 °C/104 °F) acompañada de dos de los siguientes síntomas durante la fase febril (2 a 7 días): dolor de cabeza muy intenso. dolor detrás de los globos oculares. dolores musculares y articulares.',
        imagen: require('@/assets/curso/temas/Tema2/1.svg'),
      },
      {
        titulo: 'Detección de anticuerpos:',
        texto:
          'El diagnóstico definitivo de infección por dengue se hace en el laboratorio y depende de la detección de anticuerpos específicos en el suero del paciente, de la detección del antígeno viral o el RNA viral en el suero o tejido o el aislamiento viral.',
        imagen: require('@/assets/curso/temas/Tema2/2.svg'),
      },
      {
        titulo: 'Evaluación y signos de alarma:',
        texto:
          'Posteriormente la evaluación diaria hasta que pase el periodo crítico (48 horas después de la caída de la fiebre) donde se tiene que evaluar el recuento de plaquetas, hematocrito y aparición de signos de alarma.',
        imagen: require('@/assets/curso/temas/Tema2/3.svg'),
      },
      {
        titulo: 'Tratamiento a signos de alarma:',
        texto:
          'Los signos de alarma indican el momento en el cual el paciente puede ser salvado si recibe tratamiento con soluciones hidroelectrolíticas en cantidades suficientes para reponer las perdidas producidas por la extravasación de plasma, a veces agravada por pérdidas al exterior (sudoración, vómitos, diarreas).',
        imagen: require('@/assets/curso/temas/Tema2/4.svg'),
      },
      {
        titulo: 'Etapa crítica:',
        texto:
          'Entre el 3º y 6º día para los niños, y entre el 4º y 6º día para los adultos (como período más frecuente pero no exclusivo de los enfermos que evolucionan al dengue grave) la fiebre desciende, el dolor abdominal se hace intenso y mantenido, se observa derrame pleural o ascitis, los vómitos aumentan en frecuencia y comienza la ETAPA CRÌTICA de la enfermedad, por cuanto es el momento de mayor frecuencia de instalación del choque. ',
        imagen: require('@/assets/curso/temas/Tema2/5.svg'),
      },
      {
        titulo: 'Etapa de recuperación:',
        texto:
          'Después de la etapa crítica, el enfermo pasa un tiempo variable en la ETAPA DE RECUPERACIÓN, durante este período es que el paciente debe eliminar fisiológicamente el exceso de líquidos que se había extravasado hasta normalizar todas sus funciones vitales. Algunos pacientes adultos se mantienen muchos días con astenia y algunos refieren bradipsiquia durante semanas. ',
        imagen: require('@/assets/curso/temas/Tema2/6.svg'),
      },
    ],
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

<template>
    <div class="default-layout default-container slow-appear">
        <div class="text-container">
            <h2>My name is Titouan,</h2>
            <p>I am a 26 years old product designer based in Paris, currently working at 
                <a href="https://www.sofya.fr/projet/" target="_blank" class="link simple-link">Sofya</a> 
                as ux/ui designer. 
            </p>
            <p class="p-break">After a master degree in product management I decided to extend my skillset 
                with Le Wagon coding boot camp.
            </p>
            <p class="p-break">Interested about my career ? 
                <a href="CV_Titouan_MARTIN.pdf" download class="link simple-link">Download my resume.</a>
            </p>
            <p class="margin-bottom">Apart from design, most of my free time is dedicated to making music and 
                watching movies, two passions that have been impacting most of my adult life.
            </p>

            <div class="more">
                <p class="bold know-more">Want to know more ?</p>
                <GetInTouch />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
  import Vue from 'vue'
  import GetInTouch from '~/components/GetInTouch.vue'

  export default Vue.extend({
    components: {
      GetInTouch
    }
  })
</script>

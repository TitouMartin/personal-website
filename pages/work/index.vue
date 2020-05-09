<template>
  <div class="default-layout default-container">

    <div class="cards-container">
      <template v-for="card in cards">
        <project-card :cardInfos="card" />
      </template>
    </div>

    <div class="more">
      <h2>& Many to come...</h2>
      <GetInTouch />
    </div>
  </div>
</template>

<style lang="scss">

</style>


<script>
  import Vue from 'vue'
  import ProjectCard from '~/components/ProjectCard.vue'
  import GetInTouch from '~/components/GetInTouch.vue'
  import * as projects from '~/assets/files/projects.js'

  export default Vue.extend({
    components: {
      ProjectCard,
      GetInTouch
    },

    data() {
      return {
        cards: projects.projectsCards
      }
    },
  })

</script>

<template>
  <div class="default-layout">
    <div class="above-the-fold">
      <div class="presentation">
        <h1 class="super-fat">Hi, I'm <span class="double-text Titouan">Titouan.</span></h1>
        <p class="medium-fat">I design and craft <span class="double-text human-friendly">human friendly</span> products</p>
        <p class="medium-fat">while making them <span class="double-text beautiful">beautiful</span> on the way.</p>
      </div>
    </div>

    <div class="cards-container">
      <template v-for="card in cards">
        <project-card :cardInfo="card" />
      </template>
    </div>

    <div class="more">
      <h2>& Many to come...</h2>
      <GetInTouch />
    </div>
  </div>
</template>

<style lang="scss">

  .default-layout {
    padding: 0 base-unit(25);
  }

  .above-the-fold {
    height: 100vh; // 100vh - index container padding

    .presentation {
      position: absolute;
      top: 50%;
      transform: translateY(-60%);

      h1 {
        font-family: 'Lato', sans-serif;
        margin-bottom: base-unit(4);
      }


      .double-text {
        -webkit-text-stroke: 1px $text-color;
        color: transparent;
        position: relative;
      }

      .super-fat {
        font-size: 70px;
        font-weight: 800;

        .Titouan:before {
          content: 'Titouan.';
          color: $title-blue;
          -webkit-text-stroke: 0px transparent;
          position: absolute;
          top: 4px;
          left: -5px;
          z-index: -1;
        }
      }

      .medium-fat {
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 0;

        .human-friendly:before {
          content: 'human friendly';
          color: $title-beige;
          @include small-double-text-before
        }
        .beautiful:before {
          content: 'beautiful';
          color: $title-beige;
          @include small-double-text-before
        }
      }
    }
  }

  .cards-container {
    margin-bottom: base-unit(10);

    .card-link {
      display: inline-block;
      margin-left: 0;
      width: 100%;

      &:not(:last-child) {
        margin-bottom: base-unit(10);
      }
    }
  }

  .more {
    width: fit-content;
    margin: 0 auto base-unit(10) auto;

    .get-in-touch {
      margin: auto;
    }

    .know-more {
      color: $title-blue;
      margin-bottom: base-unit(4);
    }
  }

</style>

<script>
  import Vue from 'vue'
  import ProjectCard from '~/components/ProjectCard.vue'
  import GetInTouch from '~/components/GetInTouch.vue'
  import * as projects from '~/assets/files/projectCards'

  export default Vue.extend({
    components: {
      ProjectCard,
      GetInTouch
    },

    data() {
      return {
        cards: projects.projects
      }
    },
  })

</script>

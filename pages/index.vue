<template>
  <div class="default-layout slow-appear bottom-page-margin">
    <div class="above-the-fold">
      <div class="presentation">
        <h1 class="super-fat">Hi, I'm <span class="double-text Titouan">Titouan.</span></h1>
        <div class="intro">
          <p class="medium-fat">I design and craft <span class="double-text human-friendly">human friendly</span> products,</p>
          <p class="medium-fat">making them <span class="double-text beautiful">beautiful</span> on the way.</p>
        </div>
        <GetInTouch />
      </div>
    </div>

    <div class="cards-container">
      <div v-for="card in cards" :key="card" class="card-link">
        <project-card :cardInfos="card" />
      </div>
    </div>

    <div class="more">
      <h2>& Many to come...</h2>
      <GetInTouch />
    </div>
  </div>
</template>

<style lang="scss">

  .above-the-fold {
    height: 100vh;

    .presentation {
      position: absolute;
      top: 50%;

      h1, .intro {
        margin-bottom: base-unit(4);
      }


      .double-text {
        -webkit-text-stroke: 1px $text-color;
        color: transparent;
        position: relative;
      }

      .super-fat {
        font-weight: 800;

        .Titouan:before {
          content: 'Titouan.';
          color: $title-blue;
          -webkit-text-stroke: 0px transparent;
          position: absolute;
          z-index: -1;
        }
      }

      .medium-fat {
        // font-size: 40px;
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

  @media screen and ($media-gt-xs) {
    .presentation {
      transform: translateY(-60%);
    }
    .super-fat {
      font-size: 70px;

        .Titouan:before {
          top: 4px;
          left: -5px;
        }
    }
    .medium-fat {
      font-size: 40px;
    }
  }

  @media screen and ($media-lt-sm) {

    .presentation {
      max-width: 70%;
      transform: translateY(-50%);
    }
    .super-fat {
      font-size: 45px;

      .Titouan:before {
        top: 4px;
        left: -3px;
      }
    }
    .medium-fat {
      line-height: 40px;
      font-size: 30px;
    }
  }

  .cards-container {
    margin-bottom: base-unit(15);

    .card-link {
      display: inline-block;
      margin-left: 0;
      width: 100%;

      &:not(:last-child) {
        margin-bottom: base-unit(15);

        @media screen and ($media-lt-sm) {
          margin-bottom: base-unit(7);
        }
      }
    }
  }

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

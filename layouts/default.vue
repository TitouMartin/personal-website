<template>
  <div>
    <Navbar />
    <div class="default-layout">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Navbar from '~/components/Navbar.vue'

  export default Vue.extend({
    components: {
      Navbar
    }
  })
</script>

<style lang="scss">

  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: $text-color;
  }

  h2 {
    font-family: 'Playfair Display';
    font-size: 25px;
    font-weight: 800;
    margin-bottom: base-unit(3);
  }

  p {
    margin-bottom: $base-unit;
  }

  .default-layout {
    padding: 0 base-unit(25);
  }

  .bold {
    font-weight: bold;
  }

  .white {
    color: $white;
  }

  .link {
  width: fit-content;
  position: relative;

  &:before {
    content: '';
    height: 3px;
    width: 0px;
    background-color: $text-color;
    border-radius: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    @include transition;
  }

    &:hover {
      cursor: pointer;

      &:before {
        width: 100%;
      }
    }
  }

  .get-in-touch {

    width: fit-content;

    .button {
      padding: $base-unit base-unit(3);
      width: fit-content;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin-left: 50%;
        transform: translateX(-50%);
        background: $button-background;
        border-radius: 5px;
        @include transition;
        @include get-in-touch-animation-out;
      }

      .apps {
        position: absolute;
        height: 100%;
        width: 80%;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        opacity: 0;
        @include transition;

        .app {
          height: base-unit(4);
          width: base-unit(4);
          border-radius: 50%;
          background: $button-background;
          @include transition;

          &:hover {
            cursor: pointer;
            transform: rotate(180deg);
          }
        }
      }
    }

      &:hover {

        .button::before {
          @include get-in-touch-animation;
        }

        .apps {
          opacity: 1;
          top: 40%;
          width: 100%;
        }
      }
  }

</style>

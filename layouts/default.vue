<template>
  <div>
    <Navbar />
    <div>
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

  .default-layout {
    padding: 0 base-unit(25);

    &.default-container {
      padding-top: 20vh;
    }
  }

  h1 {
    font-size: 50px;
    margin-bottom: base-unit(10);
    // font-family: 'Playfair Display';
    font-weight: 900;
  }

  h2 {
    // font-family: 'Playfair Display';
    font-size: 25px;
    // font-weight: 800;
    font-weight: 900;
    margin-bottom: base-unit(7);
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: base-unit(5);
  }

  p {
    margin-bottom: $base-unit;
  }

  a {
    color: $text-color;
    text-decoration: none;

    &:hover {
      color: $text-color;
      text-decoration: none;
    }
  }

  .bold {
    font-weight: bold;
  }

  .light-text {
    opacity: 0.5;
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

    &:after {
      content: '';
      z-index: -1;
      opacity: 0;
      width: base-unit(2);
      height: base-unit(2);
      border-radius: 50%;
      background: $button-background;
      position: absolute;
      top: calc(100% - #{base-unit(2)});
      left: 0;
      @include transition;
    }

    &:hover {
      cursor: pointer;

      &:before {
        width: 100%;
      }

      &:after {
        opacity: 1;
        top: base-unit(0.5);
        left: calc(100% - #{base-unit(2)});
      }
    }
  }

</style>

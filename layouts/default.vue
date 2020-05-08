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

</style>

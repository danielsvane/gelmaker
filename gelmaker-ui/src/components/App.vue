<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>

  import Navigation from './Navigation.vue'

  export default {
    components: {
      Navigation
    }
  }

</script>

<style>

  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
  }

  .container {
    display: flex;
  }
</style>

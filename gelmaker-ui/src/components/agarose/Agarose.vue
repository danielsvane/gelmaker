<template>
  <div class="container">
    <AgaroseControl />
    <div class="agarosestatus">
      <AgaroseStatus/>
    </div>
  </div>
</template>

<script>

  import AgaroseControl from './AgaroseControl.vue'
  import AgaroseStatus from './AgaroseStatus.vue'

  export default {
    components: {
      AgaroseControl,
      AgaroseStatus
    }
  }

</script>

<style>  
  .agarosestatus {
    height: 70vh;
    width: 35vh;
    padding: 15vh;
  }
</style>

<template>
  <div class="container">
    <BufferControl />
    <div class="bufferstatus">
      <BufferStatus/>
    </div>
  </div>
</template>

<script>

  import BufferControl from './BufferControl.vue'
  import BufferStatus from './BufferStatus.vue'

  export default {
    components: {
      BufferControl,
      BufferStatus
    }
  }

</script>

<style>
  .bufferstatus {
    height: 70vh;
    width: 35vh;
    padding: 15vh;
  }
</style>

<template>
  <div class="container">
    {{weight}}
  </div>
</template>

<script>
  export default {
    sockets: {
      weightStatus(weight){
        this.weight = weight
      }
    },
    data(){
      return {
        weight: 0
      }
    }
  }
</script>

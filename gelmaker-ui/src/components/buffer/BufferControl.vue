<template>
  <div class="controls">

      <div class="status-text">{{statusText}}</div>
      <div class="value-text">{{value}} ml</div>
      <Slider v-model="value" :loading="dispensing" :time="time" min="1" max="100" step="1"/>
      <div class="button" v-on:click="toggleDispensing">{{toggleText}}</div>

  </div>
</template>

<script>
  import Slider from '../Slider.vue'

  export default {
    sockets: {
      dispenseStarted(time){
        this.time = time
        this.dispensing = true
      },
      dispenseDone(){
        this.dispensing = false
      }
    },
    methods: {
      toggleDispensing(){
        if(!this.dispensing){
          this.$socket.emit('dispenseBuffer', this.value)
        } else {
          this.$socket.emit('dispenseBufferStop')
        }
      }
    },
    computed: {
      statusText(){
        return this.dispensing ? 'Dispensing' : 'Dispense'
      },
      toggleText(){
        return this.dispensing ? 'Stop' : 'Start'
      }
    },
    data() {
      return {
        value: 50,
        dispensing: false,
        time: 0
      }
    },
    components: {
      Slider
    }
  }
</script>

<style>
  
  .controls {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15vh 0 15vh 15vh;
  }
  
  .button {
    color: #fff;
    background: #40A4DF;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    margin-top: 3rem;
    cursor: pointer;
  }

  .status-text {
    font-size: 1.5rem;
  }
  
  .value-text {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  
</style>

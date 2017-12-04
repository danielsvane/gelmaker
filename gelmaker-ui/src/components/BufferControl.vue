<template>
  <div class="control d-flex justify-content-center align-items-center">
    <div :class="{dispensing}" class="control-overlay d-flex flex-column align-items-center justify-content-center">
      <span>Dispensing buffer</span>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{width: progress + '%'}"></div>
      </div>
      <div v-on:click="cancel" class="cancel-btn btn btn-danger">Cancel</div>
    </div>
    <div :class="{dispensing}" class="control-menu">
      <!-- <div class="form-group">
        <legend>Dispense buffer</legend>
        <label>Dispense amount</label>
        <NumberSpinner v-model="value" step="1" min="1" max="100" unit="ml"/>
        <small class="form-text text-muted">Minimum 1 ml, maximum 100 ml.</small>
      </div> -->
      <Slider />
      <!-- <div v-on:click="dispense" class="btn btn-primary">Dispense</div> -->
    </div>
  </div>
</template>

<script>
  import {TweenLite} from 'gsap'
  import NumberSpinner from './NumberSpinner.vue'
  import Slider from './Slider.vue'

  export default {
    sockets: {
      dispenseStarted(time){
        this.dispensing = true
        this.progress = 0
        this.tween = TweenLite.to(this, time/1000, {progress:100, ease:Linear.easeNone})
      },
      dispenseDone(){
        this.dispensing = false
        this.tween.kill()
      }
    },
    methods: {
      dispense(){
        this.$socket.emit('dispenseBuffer', this.value)
      },
      cancel(){
        this.$socket.emit('dispenseBufferStop')
      }
    },
    data(){
      return {
        value: 50,
        dispensing: false,
        progress: 0,
        timer: '',
        tween: ''
      }
    },
    components: {
      NumberSpinner,
      Slider
    }
  }
</script>

<style>
  .control {
    position: relative;
  }

  .control-menu {
    width: 100%;
    filter: blur(0px);
    transition: filter 0.3s ease-out;
  }
  
  .control-menu.dispensing {
    filter: blur(3px);
    transition: filter 0.3s ease-out;
    pointer-events: none;
  }

  .control-overlay {
    position: absolute;
    width: 80%;
    background: #fff;
    z-index: 3;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
  
  .control-overlay.dispensing {
    opacity: 1;
    transition: opacity 0.3s ease-out;
    pointer-events: auto;
  }

  .progress {
    width: 100%;
    margin-top: 1rem;
  }

  .cancel-btn {
    margin-top: 1rem;
  }
</style>

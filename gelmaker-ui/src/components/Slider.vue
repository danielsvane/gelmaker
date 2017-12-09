<template>
  <div class="slider">
    <input :class="{invisible: visible}" id="slider" type="range" :min="min" :max="max" :step="step" :value="value" v-on:input="$emit('input', $event.target.value)"/>
    <div class="progressbar">
      <div ref="progress" class="progress" :style="progressStyle"></div>
    </div>
  </div>
</template>

<script>

  import {TweenLite} from 'gsap'

  export default {
    props: ['value', 'loading', 'time', 'min', 'max', 'step'],
    computed: {
      progressStyle: function(){
        if(!this.loading){
          let position = (this.value-this.min)/this.max*100
          return {
            // Make fake thumb same position as slider thumb
            // CHANGE TO ONLY DOING ONCE ON START
            'margin-left': 'calc(' + position + '% - 2.5rem*' + position/100 +')',
            'transition': 'width 500ms, margin-left 500ms',
          }
        } else {
          this.visible = true
          return {
            'width': '100%',
            'margin-left': '0',
            'transition': 'width ' + this.time + 'ms linear, margin-left 500ms',
          }
        }
      }
    },
    watch: {
      loading(isLoading){
        if(!isLoading){
          setTimeout(() => {
            this.visible = false
          }, 500)
        }
      }
    },
    data(){
      return {
        visible: false
      }
    }
  }
</script>

<style lang="scss">

  @mixin track(){
    background: #ddd;
    border-radius: 3rem;
    box-shadow: inset 0px 0px 5px #ccc;
    padding: 0.25rem;
    height: 3rem;
    cursor: pointer;
  }
  
  @mixin thumb(){
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 1.5rem;
    background: #40A4DF;
    cursor: pointer;
  }
  
  .invisible {
    visibility: hidden;
  }
  
  .slider {
    width: 100%;
    position: relative;
  }
  
  .progressbar {
    @include track();
    box-sizing: border-box;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  
  .progress {
    @include thumb();
  }

  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
  }
  
  input[type=range]:focus {
    outline: none;
  }
  
  input[type=range]::-webkit-slider-runnable-track {
    @include track();
  }
  
  input[type=range]::-webkit-slider-thumb {
    @include thumb();
    -webkit-appearance: none;
  }
  
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ddd;
  }
  
</style>

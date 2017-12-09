<template>
  <svg width="100%" height="100%" viewBox="25 0 50 100" >
    
    <defs>
      <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="#afecff"/>
        <stop offset="100%" stop-color="#7bb3c4"/>
      </linearGradient>
    </defs>
    
    <rect x="26" :y="top" width="48" :height="height" :fill="color" fill-opacity="1"/>
    
    <rect x="25" y="0" width="1" height="100" fill="#5d90a0" fill-opacity="0.5"/>
    <rect x="74" y="0" width="1" height="100" fill="#5d90a0" fill-opacity="0.5" />
    <rect x="26" y="99" width="48" height="1" fill="#5d90a0" fill-opacity="0.5" />
    <rect x="25" y="0" width="50" height="100" fill="url(#gradient)" fill-opacity="0.5"/>
    <rect x="27" y="1" width="8" height="97" fill="#fff" fill-opacity="0.5"/>
  </svg>
</template>

<script>
  import {bufferValueMax, bufferValueMin} from '../../imports/constants.js'

  let baseColor = '#40a4df'
  let errorColor = '#f74e2c'

  export default {
    sockets: {
      bufferStatus(status){
        let height = (status-bufferValueMin)/(bufferValueMax-bufferValueMin)*99
        this.height = height
        this.top = 99-height
        
        if(status < 100)
          this.color = errorColor
        else
          this.color = baseColor
      }
    },
    data(){
      return {
        height: 0,
        top: 0,
        color: baseColor
      }
    }
  }
</script>

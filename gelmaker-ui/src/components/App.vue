<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-6 col-sm-6">
        <Controls />
      </div>      
      <div class="col-12 col-lg-6 col-sm-6">
        <BufferStatus />
      </div>
    </div>
  </div>
</template>

<script>

import Controls from './Controls.vue'
import BufferStatus from './BufferStatus.vue'
import socket from '../imports/socket.js'

export default {
  components: {
    Controls,
    BufferStatus
  }
}

</script>

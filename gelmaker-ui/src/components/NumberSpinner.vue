<template>
  <div class="input-group">
    <span class="input-group-btn">
      <div v-on:click="stepDown" class="btn btn-dark"><b>-</b></div>
    </span>
    <input class="form-control" type="number" ref="number" :value="value" :step="step" :min="min" :max="max">
    <span class="input-group-addon">{{unit}}</span>
    <span class="input-group-btn">
      <div v-on:click="stepUp" class="btn btn-dark"><b>+</b></div>
    </span>
  </div>
</template>

<script>
export default {
  props: ['min', 'max', 'value', 'step', 'unit'],
  methods: {
    stepDown(){
      this.$refs.number.stepDown()
      this.$emit('input', this.$refs.number.value)
    },
    stepUp(){
      this.$refs.number.stepUp()
      this.$emit('input', this.$refs.number.value)
    }
  }
}
</script>

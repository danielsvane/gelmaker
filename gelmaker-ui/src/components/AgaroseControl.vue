<template>
  <div class="control">
    <div class="control-overlay invisible d-flex align-items-center justify-content-center"><span>Dispensing</span></div>
    <div class="form-group">
      <legend>Dispense agarose</legend>
      <label>Dispense amount</label>
      <NumberSpinner value="2.0" step="0.1" min="0.5" max="2.0" unit="g"/>
      <small class="form-text text-muted">Minimum 0.5 g, maximum 2.0 g.</small>
    </div>
    <button type="submit" class="btn btn-primary">Dispense</button>
  </div>
</template>

<script>
import NumberSpinner from './NumberSpinner.vue'

export default {
  components: {
    NumberSpinner
  }
}
</script>

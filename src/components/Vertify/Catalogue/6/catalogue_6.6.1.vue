<template>
  <div>
    <label for='input-one'>
      Tyre/wheel combination(s) (for tyres indicate size designation, minimum load-capacity index, minimum speed category symbol; for wheels indicate rim size(s) and off-set(s)
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {twc6611: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Schematics or drawing of the general arrangement of electrical and/or electronic components (concerned by this Regulation) and the general wiring harness arrangement:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_74_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.74.1"
  }
</script>

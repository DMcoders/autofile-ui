<template>
  <div>
    <label for='input-one'>
      Vehicles with three or more axles:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_1_1_1: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.1.1.1"
  }
</script>

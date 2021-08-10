<template>
  <div>
    <label for='input-one'>
      Description of the energy storage device (battery, capacitor, flywheel/generator):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_4_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.4.4"
  }
</script>

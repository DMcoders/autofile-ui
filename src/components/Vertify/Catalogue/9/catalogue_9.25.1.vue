<template>
  <div>
    <label for='input-one'>
      Detailed technical description (including photographs and drawings, as well as description of the materials) of the vehicle parts relevant to Part C, point 1.4 of Annex I to Regulation (EU) No 1230/2012:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_25_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.25.1"
  }
</script>

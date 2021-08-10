<template>
  <div>
      <label for='input-one'>
        Photograph(s) and/or drawing(s) of a representative vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_1_7: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.1.7"
  }
</script>

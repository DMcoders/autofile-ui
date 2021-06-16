<template>
  <div>
    <div>
      <label for='input-one'>
        Photograph(s) and/or drawing(s) of a representative vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_8: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.8"
  }
</script>

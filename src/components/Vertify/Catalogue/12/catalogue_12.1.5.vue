<template>
  <div>
    <label for='input-one'>
      Rated voltage or pressure:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1215: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.1.5"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Location of indication:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {locationofindication1052: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5.2"
  }
</script>

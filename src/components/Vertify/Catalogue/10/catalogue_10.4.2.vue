<template>
  <div>
    <label for='input-one'>
      Location of indication:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {locationofindication1042: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.4.2"
  }
</script>

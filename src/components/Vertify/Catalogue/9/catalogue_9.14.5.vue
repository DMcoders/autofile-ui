<template>
  <div>
    <label for='input-one'>
      Dimensions (length x width):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dimensionslw: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.14.5"
  }
</script>

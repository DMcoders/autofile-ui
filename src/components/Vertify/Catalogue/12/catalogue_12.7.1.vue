<template>
  <div>
    <label for='input-one'>
      Vehicle equipped with 24GHz short-range radar equipment:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {vew2sre: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.7.1"
  }
</script>

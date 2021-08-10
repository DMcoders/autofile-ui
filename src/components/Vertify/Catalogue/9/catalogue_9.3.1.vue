<template>
  <div>
    <label for='input-one'>
      Door configuration and number of doors:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_3_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.3.1"
  }
</script>

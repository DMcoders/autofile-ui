<template>
  <div>
    <label for='input-one'>
      A brief description of the electrical/electronic components (if any):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {abdotec1223: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.3"
  }
</script>

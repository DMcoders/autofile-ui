<template>
  <div>
    <label for='input-one'>
      A brief description of the electrical/electronic components (if any) of the window lifting mechanism:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {abdotecotwlm: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.2.3"
  }
</script>

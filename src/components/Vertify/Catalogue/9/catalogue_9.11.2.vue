<template>
  <div>
    <label for='input-one'>
      Drawings of the 'external surface' to demonstrate compliance with the requirements:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_11_2: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.11.2"
  }
</script>

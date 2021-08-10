<template>
  <div>
    <label for='input-one'>
      Brief description of the vehicle with regard to its spray-suppressio system and the constituent components:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {bdotvwrtiss: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20.1"
  }
</script>

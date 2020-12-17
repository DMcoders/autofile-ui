<template>
  <div>
    <label for='input-one'>
      Materials used:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {materialsused9511: $event.target.value})">

    </label>
    Ordinary laminated glass
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.1.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      A brief description of the electronic components (if any) of the adjustment system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {abdotecotas: $event.target.value})">

    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.9.7"
  }
</script>

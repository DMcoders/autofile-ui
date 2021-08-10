<template>
  <div>
    <label for='input-one'>
      Brief description of the vehicle with regard to its wheel guards:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {bdotvwrtiwg: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.16.1"
  }
</script>

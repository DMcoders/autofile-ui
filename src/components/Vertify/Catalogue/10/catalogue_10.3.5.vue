<template>
  <div>
    <label for='input-one'>
      Any specific mounting and wiring provisions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {asmawp: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.3.5"
  }
</script>

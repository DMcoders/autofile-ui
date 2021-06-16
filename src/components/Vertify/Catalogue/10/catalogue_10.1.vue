<template>
  <div>
    <label for='input-one'>
      Table of all devices: number, make, model, type-approval mark, maximum intensity of main-beam headlamps, colour, tell-tale:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {toad: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.1"
  }
</script>

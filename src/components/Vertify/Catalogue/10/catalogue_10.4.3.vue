<template>
  <div>
    <label for='input-one'>
      Description/drawing and type of headlamp leveling device (e.g. automatic, stepwise manually adjustable, continuously manually adjustable):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {datohld1043: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.4.3"
  }
</script>

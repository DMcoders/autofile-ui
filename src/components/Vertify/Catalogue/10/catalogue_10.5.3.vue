<template>
  <div>
    <label for='input-one'>
      Description/drawing and type of headlamp levelling device (e.g. automatic, stepwise manually adjustable, continuously adjustable, etc.):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {datohld1053: $event.target.value})">
    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5.3"
  }
</script>

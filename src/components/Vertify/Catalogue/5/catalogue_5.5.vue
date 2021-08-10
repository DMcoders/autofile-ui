<template>
  <div>
    <label for='input-one'>
      Position of loadable axle(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pola55: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_5.5"
  }
</script>

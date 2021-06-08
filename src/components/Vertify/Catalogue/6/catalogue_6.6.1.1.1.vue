<template>
  <div>
    <label for='input-one'>
      Axle 1:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {axle1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1.1.1"
  }
</script>

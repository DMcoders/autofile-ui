<template>
  <div>
    <label for='input-one'>
      Transmission and control：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tac: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.2"
  }
</script>

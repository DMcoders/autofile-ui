<template>
  <div>
    <label for='input-one'>
      Audible warning device(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type121: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.1"
  }
</script>

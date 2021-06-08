<template>
  <div>
    <label for='input-one'>
      Number of device(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1212: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.1.2"
  }
</script>

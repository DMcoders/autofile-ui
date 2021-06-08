<template>
  <div>
    <label for='input-one'>
      Drawing of the protective device and of its fitting to the vehicle:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type12212: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.2"
  }
</script>

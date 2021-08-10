<template>
  <div>
      <label for='input-one'>
        Position of ECE approval mark on the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_0_10: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.0.10"
  }
</script>

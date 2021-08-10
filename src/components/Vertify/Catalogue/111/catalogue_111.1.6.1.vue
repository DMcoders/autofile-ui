<template>
  <div>
      <label for='input-one'>
        Position of ECE approval mark on the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_1_6_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.1.6.1"
  }
</script>

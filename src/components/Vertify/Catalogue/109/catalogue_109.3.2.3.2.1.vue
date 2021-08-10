<template>
  <div>
      <label for='input-one'>
        Number, capacity, material:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_109_3_2_3_2_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_109.3.2.3.2.1"
  }
</script>

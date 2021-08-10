<template>
  <div>
    <label for='input-one'>
      Total:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_2_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.2.1"
  }
</script>

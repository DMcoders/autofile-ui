<template>
  <div>
    <label for='input-one'>
      Manufacturer of the engine:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.1"
  }
</script>

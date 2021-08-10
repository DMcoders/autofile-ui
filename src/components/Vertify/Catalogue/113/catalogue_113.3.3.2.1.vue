<template>
  <div>
    <label for='input-one'>
      Number of cells:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_3_2_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.3.2.1"
  }
</script>

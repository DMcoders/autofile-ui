<template>
  <div>
    <label for='input-one'>
      Specific engine information:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_2_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.2.1"
  }
</script>

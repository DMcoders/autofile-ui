<template>
  <div>
    <label for='input-one'>
      Liquid cooling, maximum temperature at outlet:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_6_1_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.6.1.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Make(s): 
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_2_7_3_2_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.2.7.3.2.1"
  }
</script>

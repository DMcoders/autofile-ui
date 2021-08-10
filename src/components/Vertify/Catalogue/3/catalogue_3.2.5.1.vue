<template>
  <div>
    <label for='input-one'>
      Rated voltage(... V, positive/negative ground):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_2_5_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.5.1"
  }
</script>

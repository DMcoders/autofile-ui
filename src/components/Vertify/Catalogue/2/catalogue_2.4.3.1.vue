<template>
  <div>
    <label for='input-one'>
      Length:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_4_3_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.3.1"
  }
</script>

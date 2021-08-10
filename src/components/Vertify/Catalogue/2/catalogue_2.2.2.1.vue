<template>
  <div>
    <label for='input-one'>
      Fifth wheel lead (maximum and minimum; indicate the permissible values in the case of an incomplete vehicle):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_2_2_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.2.2.1"
  }
</script>

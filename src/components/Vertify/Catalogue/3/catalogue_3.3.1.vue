<template>
  <div>
    <label for='input-one'>
      Type (winding, excitation):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_3_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      A detailed description of the vehicle type with regard to the arrangement and design of the control or of the unit on which the protective device acts:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type12211: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.1"
  }
</script>

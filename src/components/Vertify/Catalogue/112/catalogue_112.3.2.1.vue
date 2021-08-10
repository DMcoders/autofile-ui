<template>
  <div>
      <label for='input-one'>
        Layout of the heating system showing its position in the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_2_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.2.1"
  }
</script>

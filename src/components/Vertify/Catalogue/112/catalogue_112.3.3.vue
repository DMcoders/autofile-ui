<template>
  <div>
      <label for='input-one'>
        A brief description of the vehicle type with regard to the combustion heating system and the automatic control:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.3"
  }
</script>

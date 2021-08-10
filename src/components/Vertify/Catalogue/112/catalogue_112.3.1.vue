<template>
  <div>
      <label for='input-one'>
        A brief description of the vehicle with regard to the heating system if the heating system uses the heat of the engine cooling fluid:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.1"
  }
</script>

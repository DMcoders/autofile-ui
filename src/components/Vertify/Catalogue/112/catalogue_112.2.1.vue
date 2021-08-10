<template>
  <div>
      <label for='input-one'>
        Manufacturer's engine code as marked on the engine:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.2.1"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        On the vehicle's coupling point for a trailer:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_11_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.11.1"
  }
</script>

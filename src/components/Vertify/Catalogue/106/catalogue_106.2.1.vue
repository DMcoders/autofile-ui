<template>
  <div>
      <label for='input-one'>
        Drawing of the exhaust system:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_2_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.2.1"
  }
</script>

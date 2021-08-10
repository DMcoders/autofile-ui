<template>
  <div>
      <label for='input-one'>
        Structure:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_3_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.3.1"
  }
</script>

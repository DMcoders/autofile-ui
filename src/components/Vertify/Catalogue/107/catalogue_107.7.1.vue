<template>
  <div>
      <label for='input-one'>
        Details of any non-engine devices designed to reduce noise (if not covered by other items):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_7_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.7.1"
  }
</script>

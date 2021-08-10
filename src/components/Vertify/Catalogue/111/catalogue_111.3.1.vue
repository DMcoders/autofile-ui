<template>
  <div>
      <label for='input-one'>
        Trade name and mark of the REESS:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.1"
  }
</script>

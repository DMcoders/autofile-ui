<template>
  <div>
      <label for='input-one'>
        Trade name and mark of the fuel cell:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_4_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.4.1"
  }
</script>

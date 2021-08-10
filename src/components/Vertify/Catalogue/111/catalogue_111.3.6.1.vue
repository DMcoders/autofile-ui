<template>
  <div>
      <label for='input-one'>
        Physical support:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_6_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.6.1"
  }
</script>

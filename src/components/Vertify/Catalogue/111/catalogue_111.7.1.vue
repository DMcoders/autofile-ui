<template>
  <div>
      <label for='input-one'>
        Description of the protection concept:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_7_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.7.1"
  }
</script>

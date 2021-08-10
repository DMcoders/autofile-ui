<template>
  <div>
      <label for='input-one'>
        Type:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_6_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.6.1"
  }
</script>

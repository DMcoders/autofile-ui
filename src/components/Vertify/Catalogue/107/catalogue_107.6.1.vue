<template>
  <div>
      <label for='input-one'>
        Type of bodywork:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_6_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.6.1"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        Class and type of the coupling device(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_11_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_11.1"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        Type(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_7_1: $event.target.value})">
      </label>
  </div>
</template>s

<script>
  export default {
    name: "catalogue_112.2.7.1"
  }
</script>

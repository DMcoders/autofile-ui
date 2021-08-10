<template>
  <div>
      <label for='input-one'>
        Tyres and wheels:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_5_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.5.1"
  }
</script>

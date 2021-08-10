<template>
  <div>
      <label for='input-one'>
        Make (trade name of manufacturer):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_1_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.1.1"
  }
</script>

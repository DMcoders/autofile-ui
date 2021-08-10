<template>
  <div>
      <label for='input-one'>
        Width:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_2_1_2_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.2.1.2.2"
  }
</script>

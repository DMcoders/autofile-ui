<template>
  <div>
      <label for='input-one'>
        Number of axles and wheels:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_1_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.1.2"
  }
</script>

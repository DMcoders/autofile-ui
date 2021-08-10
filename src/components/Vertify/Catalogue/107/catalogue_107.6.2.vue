<template>
  <div>
      <label for='input-one'>
        Materials used and methods of construction:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_6_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.6.2"
  }
</script>

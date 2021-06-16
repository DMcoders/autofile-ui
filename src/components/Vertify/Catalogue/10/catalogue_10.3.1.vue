<template>
  <div>
    <label for='input-one'>
      Drawing showing the extent of the illuminating surface:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dsteotis: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.3.1"
  }
</script>

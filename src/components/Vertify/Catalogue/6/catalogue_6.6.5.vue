<template>
  <div>
    <label for='input-one'>
      Brief description of temporary-use spare unit, if any:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tparbtvm: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.5"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        Number of catalytic converters and elements:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_3_2_5_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.3.2.5.1"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        The cell chemistry:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_2_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.2.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Front hook/eye/other:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_12_3_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.3.1"
  }
</script>

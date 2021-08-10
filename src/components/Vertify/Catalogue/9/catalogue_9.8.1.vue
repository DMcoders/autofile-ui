<template>
  <div>
    <label for='input-one'>
      Detailed technical description (including photographs or drawings):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_8_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.8.1"
  }
</script>

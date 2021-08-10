<template>
  <div>
    <label for='input-one'>
      Interior protection for occupants:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_10_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.1"
  }
</script>

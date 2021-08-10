<template>
  <div>
      <label for='input-one'>
        Number and arrangement of cylinders:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.2.3"
  }
</script>

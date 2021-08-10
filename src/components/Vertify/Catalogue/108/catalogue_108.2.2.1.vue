<template>
  <div>
      <label for='input-one'>
        Fifth wheel lead (maximum and minimum):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_2_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.2.1"
  }
</script>

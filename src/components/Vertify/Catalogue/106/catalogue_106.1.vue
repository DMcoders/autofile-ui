<template>
  <div>
      <label for='input-one'>
        Intake system:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.1"
  }
</script>

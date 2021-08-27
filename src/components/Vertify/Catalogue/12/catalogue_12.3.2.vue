<template>
  <div>
    <label for='input-one'>
      Rear hook/eye/other:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {rheo: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.3.2"
  }
</script>

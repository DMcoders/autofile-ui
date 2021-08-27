<template>
  <div>
    <label for='input-one'>
      A brief description of the electrical/electronic component (if any):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {abdotec9124: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.12.4"
  }
</script>

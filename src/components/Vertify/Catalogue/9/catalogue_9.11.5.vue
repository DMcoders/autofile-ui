<template>
  <div>
    <label for='input-one'>
      Drawing of the floor line:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {drawingofthefloorline: $event.target.value})">
    </label>
    See annex G
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.11.5"
  }
</script>

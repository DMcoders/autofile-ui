<template>
  <div>
    <label for='input-one'>
      Drawing and description of the device:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dadotd: $event.target.value})">

    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.25.1"
  }
</script>

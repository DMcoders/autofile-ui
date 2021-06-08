<template>
  <div>
    <label for='input-one'>
      A list of the main components comprising the alarm system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type122222: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.2.2.2"
  }
</script>

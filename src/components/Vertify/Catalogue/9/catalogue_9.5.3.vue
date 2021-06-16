<template>
  <div>
    <label for='input-one'>
      Opening roof glazing:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {openingroofglazing: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.3"
  }
</script>

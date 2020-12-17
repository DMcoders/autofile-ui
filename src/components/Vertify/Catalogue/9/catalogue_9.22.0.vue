<template>
  <div>
    <label for='input-one'>
      Presence:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {presence9220: $event.target.value})">

    </label>
    yes/no/incomplete
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.22.0"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Occupant doors, latches and hinges:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_3: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.3"
  }
</script>

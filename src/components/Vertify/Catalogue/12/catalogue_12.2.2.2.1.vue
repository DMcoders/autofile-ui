<template>
  <div>
    <label for='input-one'>
      A detailed description of the alarm system and of the vehicle parts related to the alarm system installed:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type122221: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.2.2.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      A technical description of the device:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type12213: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.3"
  }
</script>

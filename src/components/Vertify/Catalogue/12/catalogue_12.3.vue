<template>
  <div>
    <label for='input-one'>
      Towing device(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {towingdevice: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.3"
  }
</script>

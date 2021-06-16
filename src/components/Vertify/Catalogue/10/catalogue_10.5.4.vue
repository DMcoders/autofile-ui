<template>
  <div>
    <label for='input-one'>
      Control device:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {controldevice1054: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5.4"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Control device:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {controldevice1044: $event.target.value})">
    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.4.4"
  }
</script>

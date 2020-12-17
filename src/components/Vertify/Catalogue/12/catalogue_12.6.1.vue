<template>
  <div>
    <label for='input-one'>
      Manufacturer(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {manufacturer1261: $event.target.value})">
    </label>
    CONTINENTAL
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.6.1"
  }
</script>

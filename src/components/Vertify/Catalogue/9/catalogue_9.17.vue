<template>
  <div>
    <label for='input-one'>
      Manufacturer’s statutory plates and VIN:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mspav: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17"
  }
</script>

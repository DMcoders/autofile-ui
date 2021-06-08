<template>
  <div>
    <label for='input-one'>
      Location, method of affixing, placement and orientation of the device(s), with dimensions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1211: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.1.1"
  }
</script>

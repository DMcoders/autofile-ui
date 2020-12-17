<template>
  <div>
    <label for='input-one'>
      Devices to prevent unauthorized use of the vehicle:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dtpuuotv: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Control of the voltage at the terminals of the lamp (OVIG):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {cotvattotl: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.6"
  }
</script>

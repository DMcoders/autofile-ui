<template>
  <div>
    <label for='input-one'>
      A detailed description of the composition of the VIN:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {addotcotv: $event.target.value})">

    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17.5"
  }
</script>

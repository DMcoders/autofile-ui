<template>
  <div>
    <label for='input-one'>
      Photographs and/or drawings of the manufacturer’s statutory plate and inscriptions (completed example with dimensions):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {padotlotmsp9172: $event.target.value})">

    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17.2"
  }
</script>

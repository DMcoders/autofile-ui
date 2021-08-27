<template>
  <div>
    <label for='input-one'>
      Photographs and/or drawings of the location of the manufacturer’s statutory plates and inscriptions and of the VIN:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {padotlotmsp9171: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17.1"
  }
</script>

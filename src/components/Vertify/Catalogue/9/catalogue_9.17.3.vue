<template>
  <div>
    <label for='input-one'>
      Photographs and/or drawings of the vehicle identification number (completed example with dimensions):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {padotv: $event.target.value})">

    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17.3"
  }
</script>

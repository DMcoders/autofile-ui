<template>
  <div>
    <label for='input-one'>
      Photographs and/or drawings of the identification of controls, tell-tales and indicators and of the vehicle parts mentioned in ECE-R121 where relevant:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {padot91021: $event.target.value})">

    </label>
    See annex J
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.2.2"
  }
</script>

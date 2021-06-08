<template>
  <div>
    <label for='input-one'>
      Operating diagram, description and/or drawing of the following braking devices (as defined in item 2.6. of ECE - R13H) with e.g. Transmission and control (construction, adjustment, lever ratios, accessibility of control and its position, ratchet controls in the case of mechanical transmission, characteristics of the main parts of the linkage, cylinders and control pistons, brake cylinders or equivalent components in the case of electrical braking systems):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {od: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.2"
  }
</script>

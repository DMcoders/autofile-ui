<template>
  <div>
    <div>
      <label for='input-one'>
        A technical specification and operator's manual of the camera-monitor system according to ISO 16505 2015:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_2_8: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.2.8"
  }
</script>

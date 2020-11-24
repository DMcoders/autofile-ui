<template>
  <div>
    <label for='input-one'>
      Method of operation and description of drive mechanism：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mooadodm: $event.target.value})">
      Electronic frequency signal from Transmission output shaft (8 sprocket/rev) output converted to CAN signal which drives the speedometer
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8.1"
  }
</script>

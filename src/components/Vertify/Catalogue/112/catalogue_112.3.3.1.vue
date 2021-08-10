<template>
  <div>
      <label for='input-one'>
        Layout drawing of the combustion heater, the air inlet system, the exhaust system, the fuel tank, the fuel supply system (including the valves) and the electrical connections showing their positions in the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_3_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.3.1"
  }
</script>

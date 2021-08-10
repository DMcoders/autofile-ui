<template>
  <div>
      <label for='input-one'>
        Drawing and technical description of the tank(s) with all the connections and all lines of the breathing and venting system, locks, valves, fastening devices:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_109_3_2_3_1_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_109.3.2.3.1.2"
  }
</script>

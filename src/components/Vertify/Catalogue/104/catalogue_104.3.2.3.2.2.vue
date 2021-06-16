<template>
  <div>
    <label for='input-one'>
      Drawing and technical description of the tank(s) with all connections and all lines of the breathing and venting system, locks, valves, fastening devices:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type104_3_2_3_2_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_104_3.2.3.2.2"
  }
</script>

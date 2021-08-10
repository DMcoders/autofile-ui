<template>
  <div>
    <label for='input-one'>
      Drawing with dimensions showing the interior arrangement as regards the seating positions, area for standees, wheelchair user(s), luggage compartments including racks and ski-box, if any:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_12: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.12"
  }
</script>

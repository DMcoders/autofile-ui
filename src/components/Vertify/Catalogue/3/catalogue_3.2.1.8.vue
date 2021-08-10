<template>
  <div>
      <label for='input-one'>
        Maximum net power (...kW/min):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_3_2_1_8: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_3.2.1.8"
  }
</script>

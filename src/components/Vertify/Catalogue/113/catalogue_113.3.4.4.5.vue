<template>
  <div>
    <label for='input-one'>
      Energy (for battery: voltage and capacity Ah in 2 h, for capacitor):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_4_4_5: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.4.4.5"
  }
</script>

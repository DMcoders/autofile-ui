<template>
  <div>
      <label for='input-one'>
        Maximum net torque:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_110_3_2_1_10: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_110.3.2.1.10"
  }
</script>

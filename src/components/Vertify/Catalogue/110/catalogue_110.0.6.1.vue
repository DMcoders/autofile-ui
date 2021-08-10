<template>
  <div>
      <label for='input-one'>
        On the chassis:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_110_0_6_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_110.0.6.1"
  }
</script>

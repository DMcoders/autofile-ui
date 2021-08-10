<template>
  <div>
    <label for='input-one'>
      Frequency and damping of the oscillation of the sprung mass:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_6_2_4_2: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.2.4.2"
  }
</script>

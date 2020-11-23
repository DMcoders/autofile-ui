<template>
  <div>
    <label for='input-one'>
      Instrument constant：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {instrumentconstant: $event.target.value})">
      14592 plus/km
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8.2"
  }
</script>

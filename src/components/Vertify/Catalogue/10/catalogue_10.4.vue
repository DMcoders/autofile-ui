<template>
  <div>
    <label for='input-one'>
      Dipped beam lamps: normal orientation as per item 6.2.6.1 of the documents referred to in ECE regulation No. 48:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dbl: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.4"
  }
</script>

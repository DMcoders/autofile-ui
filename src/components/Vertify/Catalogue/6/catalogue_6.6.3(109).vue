<template>
  <div>
    <label for='input-one'>
      Tyre pressure as recommended by the vehicle manufacturer: kPa:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tparbtvm: $event.target.value})">
      Front: 760/724 ; Rear: 760/724
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.3(109)"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Tyre/wheel combination(s)
      (a) for tyres indicate
      (i) size designation
      (ii) load-capacity index
      (iii) speed category symbol
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {twc6611: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1"
  }
</script>

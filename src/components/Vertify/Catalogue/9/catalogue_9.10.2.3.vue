<template>
  <div>
    <label for='input-one'>
      Summary table
      The vehicle is equipped with the follwing controls, indicators and tell-tales pursuant to table 1 point of ECE-R121:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {summarytable: $event.target.value})">

    </label>
    See annex J
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.2.3"
  }
</script>

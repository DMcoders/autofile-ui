<template>
  <div>
    <label for='input-one'>
      Table of installation and use of RF transmitters in the vehicle(s), if applicable (see Annex I, 3.1.8.):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {toiauortitv: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.7"
  }
</script>

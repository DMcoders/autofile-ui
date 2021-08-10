<template>
  <div>
    <label for='input-one'>
      Manufacturer's declaration of compliance with the requirements set out in point 2.2 of Part B of Annex I to Regulation (EU) No 19/2011:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mdocwtr: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17.4"
  }
</script>

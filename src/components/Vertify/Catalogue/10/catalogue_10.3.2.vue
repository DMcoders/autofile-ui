<template>
  <div>
    <label for='input-one'>
      Method used for the definition of the apparent surface (paragraph 2.10 of the documents referred to in ECE regulation No. 48):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {muftdotas: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.3.2"
  }
</script>

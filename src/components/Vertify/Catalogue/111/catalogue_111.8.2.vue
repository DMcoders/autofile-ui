<template>
  <div>
      <label for='input-one'>
        Schematic diagram of all electrical functions included in power circuit:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_8_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.8.2"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        Instructions for attachment of the coupling type to the vehicle and photographs or drawings of the fixing points at the vehicle given by the manufacturer;additional information, if the use-of the coupling is restricted to special types of vehicles:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_11_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_11.3"
  }
</script>

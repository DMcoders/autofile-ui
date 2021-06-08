<template>
  <div>
    <label for='input-one'>
      Description and/or drawing of the energy supply (also to be specified for power-assisted braking systems):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dadotesa: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.7"
  }
</script>

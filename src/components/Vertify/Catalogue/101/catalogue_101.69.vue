<template>
  <div>
    <div>
      <label for='input-one'>
        Basic vehicle interface functions: ex: L1/L2/L3/N/E/control pilot:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {bv101_69: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.69",
    props: ['value']
  }
</script>

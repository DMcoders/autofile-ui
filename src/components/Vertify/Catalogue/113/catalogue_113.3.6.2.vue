<template>
  <div>
    <label for='input-one'>
      Maximum outlet temperature of the inlet intercooler:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_6_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.6.2"
  }
</script>

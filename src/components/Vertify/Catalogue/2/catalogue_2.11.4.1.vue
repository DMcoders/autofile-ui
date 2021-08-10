<template>
  <div>
    <label for='input-one'>
      Maximum ratio of the coupling overhang (p) to the wheelbase:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_11_4_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.4.1"
  }
</script>

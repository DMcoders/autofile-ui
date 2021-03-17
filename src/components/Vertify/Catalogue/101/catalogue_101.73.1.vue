<template>
  <div>
    <label for='input-one'>
      A list with make(s) and type(s) of all electrical and/or electronic components concerned by this Regulation (see paragraphs 2.9. and 2.10. of this Regulation) and not previously listed:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {al101_73_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.73.1"
  }
</script>

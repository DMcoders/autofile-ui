<template>
  <div>
    <label for='input-one'>
      Type of bodywork using the codes defined in Part C of Annex I to Regulation (EU) 2018/858 or in case of a special purpose vehicle the codes defined in point 5 to Part A of that Annex:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tob: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.1"
  }
</script>

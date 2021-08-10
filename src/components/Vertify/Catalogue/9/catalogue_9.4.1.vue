<template>
  <div>
    <label for='input-one'>
      Particulars of the primary reference marks in sufficient detail to enable them to be readily identified and the position of each in relation to the others and to the R-point to be verified:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_4_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.4.1"
  }
</script>

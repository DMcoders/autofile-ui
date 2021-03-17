<template>
  <div>
    <label for='input-one'>
      Relevant test report(s) supplied by the manufacturer from a test laboratory accredited to ISO 17025 and recognized by the Approval Authority for the purpose of drawing up the type approval certificate:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_76_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.76.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Number(s) of the type-approval certificate(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {approvalnumber9522: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.2.2"
  }
</script>

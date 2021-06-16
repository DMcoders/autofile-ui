<template>
  <div>
    <label for='input-one'>
      Type-approval number(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {typeapprovalnumber9532: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.3.2"
  }
</script>

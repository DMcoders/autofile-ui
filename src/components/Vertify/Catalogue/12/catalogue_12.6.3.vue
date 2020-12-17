<template>
  <div>
    <label for='input-one'>
      Type-approval number(s), if available:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {typeapprovalnumber1263: $event.target.value})">
    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.6.3"
  }
</script>

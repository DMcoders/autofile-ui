<template>
  <div>
    <label for='input-one'>
      Type-approval number, if available:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type122151: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.5.1"
  }
</script>

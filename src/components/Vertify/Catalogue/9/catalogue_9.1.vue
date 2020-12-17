<template>
  <div>
    <label for='input-one'>
      Type of bodywork:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tob: $event.target.value})">
      BA and BX
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.1"
  }
</script>

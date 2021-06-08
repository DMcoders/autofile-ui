<template>
  <div>
    <label for='input-one'>
      Type-approval number(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1213: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.1.3"
  }
</script>

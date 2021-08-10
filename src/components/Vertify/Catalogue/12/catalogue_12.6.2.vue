<template>
  <div>
    <label for='input-one'>
      Type(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1262: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.6.2"
  }
</script>

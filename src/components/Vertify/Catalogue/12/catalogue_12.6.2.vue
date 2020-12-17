<template>
  <div>
    <label for='input-one'>
      Type(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1262: $event.target.value})">
    </label>
    CM2220/CM2220C
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.6.2"
  }
</script>

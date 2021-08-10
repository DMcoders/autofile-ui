<template>
  <div>
      <label for='input-one'>
        Address(es) of assembly plant(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_0_9: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.0.9"
  }
</script>

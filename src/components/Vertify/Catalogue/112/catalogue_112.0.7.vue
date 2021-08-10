<template>
  <div>
      <label for='input-one'>
        Address(es) of assembly plant(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_0_7: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.0.7"
  }
</script>

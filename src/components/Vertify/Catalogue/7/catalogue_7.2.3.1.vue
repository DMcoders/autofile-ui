<template>
  <div>
    <label for='input-one'>
      Method and diagram of operation, make(s) and type(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {madofo: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.2.3.1"
  }
</script>

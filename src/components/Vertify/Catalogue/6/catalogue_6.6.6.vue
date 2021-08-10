<template>
  <div>
    <label for='input-one'>
      Brief description of tyre pressure monitoring system (TPMS) (if fitted):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_6_6_6: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.6"
  }
</script>

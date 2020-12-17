<template>
  <div>
    <label for='input-one'>
      Value of initial adjustment (loading condition 1):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {voia: $event.target.value})">
    </label>
    -1.5 %
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Value of initial adjustment:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {void: $event.target.value})">
    </label>
    -1.3 %
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.4.1"
  }
</script>

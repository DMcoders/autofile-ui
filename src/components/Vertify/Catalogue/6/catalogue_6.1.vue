<template>
  <div>
    <label for='input-one'>
      Drawing of the suspension arrangements：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotsa: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.1"
  }
</script>

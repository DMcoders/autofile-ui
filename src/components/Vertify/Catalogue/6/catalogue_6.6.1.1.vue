<template>
  <div>
    <label for='input-one'>
      Axles
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {axles: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Speed limitation devices:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {speedlimitationdevices: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.6"
  }
</script>

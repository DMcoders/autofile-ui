<template>
  <div>
    <label for='input-one'>
      Service braking system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {od: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.2.1"
  }
</script>

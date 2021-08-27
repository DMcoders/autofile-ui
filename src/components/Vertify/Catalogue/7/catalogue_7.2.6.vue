<template>
  <div>
    <label for='input-one'>
      Range and method of adjustment (if any), of the steering control:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ramoa: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.2.6"
  }
</script>

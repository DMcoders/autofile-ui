<template>
  <div>
    <label for='input-one'>
      Any additional braking system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {adbs: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.2.4"
  }
</script>

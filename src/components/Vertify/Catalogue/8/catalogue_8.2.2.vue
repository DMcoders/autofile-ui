<template>
  <div>
    <label for='input-one'>
      Secondary braking system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sbs: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.2.2"
  }
</script>

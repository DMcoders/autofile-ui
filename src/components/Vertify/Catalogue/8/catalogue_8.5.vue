<template>
  <div>
    <label for='input-one'>
      Anti-lock braking system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {albs: $event.target.value})">
      Yes/No/Optional
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.5"
  }
</script>

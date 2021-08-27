<template>
  <div>
    <label for='input-one'>
      Aerodynamic device or equipment:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_25: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.25"
  }
</script>

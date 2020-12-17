<template>
  <div>
    <label for='input-one'>
      Devices designed to reduce aerodynamic drag:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ddtrad: $event.target.value})">

    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.25"
  }
</script>

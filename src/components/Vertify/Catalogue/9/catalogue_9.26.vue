<template>
  <div>
    <label for='input-one'>
      Aerodynamic device or equipment on the front of the vehicle:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_26: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.26"
  }
</script>

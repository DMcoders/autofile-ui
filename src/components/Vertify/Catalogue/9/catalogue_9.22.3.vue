<template>
  <div>
    <label for='input-one'>
      Position on the device of the points of application of the test forces:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_22_3: $event.target.value})">

    </label>
    See annex I
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.22.3"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Description of the snow traction device(s) and the tyre/wheel combination(s) on the front and/or rear axle(s) suitable for the type of vehicle, as recommended by the manufacturer:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotstd: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.4"
  }
</script>

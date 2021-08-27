<template>
  <div>
    <label for='input-one'>
      Inclination of the plane to the vertical:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {iotpttv: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.14.6"
  }
</script>

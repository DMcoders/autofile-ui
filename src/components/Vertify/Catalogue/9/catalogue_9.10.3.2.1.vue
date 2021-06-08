<template>
  <div>
    <label for='input-one'>
      Seating positions designated for use only when the vehicle is stationary:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910321: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.2.1"
  }
</script>

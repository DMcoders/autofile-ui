<template>
  <div>
    <label for='input-one'>
      The parts of the vehicle used as anchorages:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910345: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.4.5"
  }
</script>

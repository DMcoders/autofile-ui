<template>
  <div>
    <label for='input-one'>
      Wheel guards:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {wheelguards: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.16"
  }
</script>

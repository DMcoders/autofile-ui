<template>
  <div>
    <label for='input-one'>
      Axle 3:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type6623: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.2.3"
  }
</script>

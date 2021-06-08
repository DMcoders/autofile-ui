<template>
  <div>
    <label for='input-one'>
      Axle 4:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type66114: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1.1.4"
  }
</script>

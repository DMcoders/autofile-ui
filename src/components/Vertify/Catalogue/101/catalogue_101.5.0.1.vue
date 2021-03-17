<template>
  <div>
      <label for='input-two'>
        Position of ECE approval mark on the vehicle：
        <input id='input-two'
               v-bind:value='value'
               v-on:input="$emit('input', {poeamotv101_5: $event.target.value})">
      </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.5.0.1",
    props: ['value']
  }
</script>

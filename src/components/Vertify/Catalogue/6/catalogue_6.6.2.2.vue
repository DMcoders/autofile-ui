<template>
  <div>
    <label for='input-one'>
      Axle 2:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type6622: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.2.2"
  }
</script>

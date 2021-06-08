<template>
  <div>
    <label for='input-one'>
      Axle 4:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type6624: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.2.4"
  }
</script>

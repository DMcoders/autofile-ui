<template>
  <div>
    <label for='input-one'>
      Axle 3:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {axle3: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1.1.3"
  }
</script>

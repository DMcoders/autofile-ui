<template>
  <div>
    <label for='input-one'>
      4, Vehicle travelling data recorder:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_76_5: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.76.5"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      3, ESC:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_76_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.76.4"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Tyres and wheels：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {taw: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Drawing of the mounting device:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1216: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.1.6"
  }
</script>

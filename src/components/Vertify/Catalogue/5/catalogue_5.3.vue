<template>
  <div>
    <label for='input-one'>
      Type:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type53: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_5.3"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      presence:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {presence9190: $event.target.value})">

    </label>
    Yes
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.19.0"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Other windows:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {otherwindows: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.2"
  }
</script>

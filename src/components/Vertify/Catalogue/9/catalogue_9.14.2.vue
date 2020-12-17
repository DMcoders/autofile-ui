<template>
  <div>
    <label for='input-one'>
      Height above road surface, upper edge:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {harsue: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.14.2"
  }
</script>

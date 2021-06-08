<template>
  <div>
    <label for='input-one'>
      Mass:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type91033: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.3"
  }
</script>

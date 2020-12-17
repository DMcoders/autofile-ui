<template>
  <div>
    <label for='input-one'>
      Windscreen:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {windscreen: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.1"
  }
</script>

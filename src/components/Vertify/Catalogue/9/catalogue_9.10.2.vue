<template>
  <div>
    <label for='input-one'>
      Arrangement and identification of controls, tell-tales and indicators:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {aaioc: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.2"
  }
</script>

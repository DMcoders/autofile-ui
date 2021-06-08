<template>
  <div>
    <label for='input-one'>
      Brief description of temporary use spare unit(s), if any:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {bdotusu: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.6"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Materials used:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {materialsused9531: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.3.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Materials used:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {materialsused9521: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.2.1"
  }
</script>

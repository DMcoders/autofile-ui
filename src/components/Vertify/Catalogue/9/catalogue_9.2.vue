<template>
  <div>
    <label for='input-one'>
      Materials used and methods of construction:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {muamoc: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.2"
  }
</script>

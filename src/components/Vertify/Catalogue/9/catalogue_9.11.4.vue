<template>
  <div>
    <label for='input-one'>
      Drawing of bumpers:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {drawingofbumpers: $event.target.value})">
    </label>
    See annex G
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.11.4"
  }
</script>

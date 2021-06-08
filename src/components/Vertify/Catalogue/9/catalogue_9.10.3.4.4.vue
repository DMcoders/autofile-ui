<template>
  <div>
    <label for='input-one'>
      The seat belt anchorages if incorporated in the seat structure:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910344: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.4.4"
  }
</script>

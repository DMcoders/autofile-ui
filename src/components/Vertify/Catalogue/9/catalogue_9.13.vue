<template>
  <div>
    <label for='input-one'>
      Safety belt anchorages:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type913: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.13"
  }
</script>

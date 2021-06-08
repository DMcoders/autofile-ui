<template>
  <div>
    <label for='input-one'>
      All other seating positions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {aosp: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.5.2"
  }
</script>

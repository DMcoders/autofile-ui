<template>
  <div>
    <label for='input-one'>
      The seats and their anchorages:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910341: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.4.1"
  }
</script>

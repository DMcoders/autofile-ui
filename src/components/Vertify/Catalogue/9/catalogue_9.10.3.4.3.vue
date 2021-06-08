<template>
  <div>
    <label for='input-one'>
      The displacement and locking systems:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910343: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.4.3"
  }
</script>

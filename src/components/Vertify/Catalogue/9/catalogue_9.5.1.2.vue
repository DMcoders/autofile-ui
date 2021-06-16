<template>
  <div>
    <label for='input-one'>
      Method of mounting:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {methodofmounting: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.1.2"
  }
</script>

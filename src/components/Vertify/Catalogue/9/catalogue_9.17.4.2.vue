<template>
  <div>
    <label for='input-one'>
      If characters are used in the second part to comply with 3.1.1.3, indication of those characters:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {icauitsptcw: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.17.4.2"
  }
</script>

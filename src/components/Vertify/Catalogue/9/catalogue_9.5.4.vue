<template>
  <div>
    <label for='input-one'>
      Other glazing:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {otherglazing: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.4"
  }
</script>

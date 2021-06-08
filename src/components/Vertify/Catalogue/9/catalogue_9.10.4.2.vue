<template>
  <div>
    <label for='input-one'>
      Type-approval number(s), if available:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type91042: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4.2"
  }
</script>

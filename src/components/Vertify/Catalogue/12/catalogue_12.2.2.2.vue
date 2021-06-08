<template>
  <div>
    <label for='input-one'>
      For alarm systems not yet approved:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type12222: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.2.2"
  }
</script>

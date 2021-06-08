<template>
  <div>
    <label for='input-one'>
      Details of the lock combination used:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type12214: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.4"
  }
</script>

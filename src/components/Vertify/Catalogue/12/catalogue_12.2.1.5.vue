<template>
  <div>
    <label for='input-one'>
      Vehicle immobilizer:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type12215: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.5"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      External projections:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {externalprojections: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.11"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Construction and materials:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_26_3_1: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.26.3.1"
  }
</script>

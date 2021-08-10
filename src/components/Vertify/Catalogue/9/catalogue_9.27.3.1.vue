<template>
  <div>
    <label for='input-one'>
      Construction and materials:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_27_3_1: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.27.3.1"
  }
</script>

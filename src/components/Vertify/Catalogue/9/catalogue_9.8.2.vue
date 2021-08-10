<template>
  <div>
    <label for='input-one'>
      Maximum electrical consumption:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_8_2: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.8.2"
  }
</script>

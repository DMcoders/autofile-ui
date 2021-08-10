<template>
  <div>
    <label for='input-one'>
      Area for passengers:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_2: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.2"
  }
</script>

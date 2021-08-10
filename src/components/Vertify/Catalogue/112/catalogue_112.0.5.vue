<template>
  <div>
      <label for='input-one'>
        Category of vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_0_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.0.5"
  }
</script>

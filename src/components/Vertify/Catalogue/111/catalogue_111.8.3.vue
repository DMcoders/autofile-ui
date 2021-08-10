<template>
  <div>
      <label for='input-one'>
        Working voltage (V):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_8_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.8.3"
  }
</script>

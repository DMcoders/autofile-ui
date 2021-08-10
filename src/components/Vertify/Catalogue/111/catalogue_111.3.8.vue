<template>
  <div>
      <label for='input-one'>
        Electronic control:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_8: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.8"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        Number of cells:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_4_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.4.4"
  }
</script>

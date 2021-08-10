<template>
  <div>
      <label for='input-one'>
        Indication of all types of cells:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.2"
  }
</script>

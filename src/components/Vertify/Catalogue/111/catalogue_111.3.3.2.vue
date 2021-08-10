<template>
  <div>
      <label for='input-one'>
        Configuration (number of cells, mode of connection, etc.):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_3_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.3.2"
  }
</script>

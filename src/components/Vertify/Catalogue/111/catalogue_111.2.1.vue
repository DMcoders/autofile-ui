<template>
  <div>
      <label for='input-one'>
        Type (winding, excitation):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_2_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.2.1"
  }
</script>

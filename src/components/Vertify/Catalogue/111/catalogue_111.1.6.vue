<template>
  <div>
      <label for='input-one'>
        Name and address of the manufacturer's representative (if any):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_1_6: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.1.6"
  }
</script>

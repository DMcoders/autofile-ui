<template>
  <div>
      <label for='input-one'>
        Commercial name(s) (if available):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_1_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.1.4"
  }
</script>

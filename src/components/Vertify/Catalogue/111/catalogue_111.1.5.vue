<template>
  <div>
      <label for='input-one'>
        Name and address of manufacturer:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_1_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.1.5"
  }
</script>

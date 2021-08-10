<template>
  <div>
      <label for='input-one'>
        Physical dimensions:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_2_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.2.2"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        Types of fuel cell:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_4_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.4.2"
  }
</script>

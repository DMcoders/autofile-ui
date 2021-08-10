<template>
  <div>
      <label for='input-one'>
        Diagram showing the functional range:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_5_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.5.2"
  }
</script>

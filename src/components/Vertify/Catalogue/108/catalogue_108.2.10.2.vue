<template>
  <div>
      <label for='input-one'>
        Semi-trailer:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_10_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.10.2"
  }
</script>

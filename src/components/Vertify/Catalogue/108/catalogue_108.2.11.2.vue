<template>
  <div>
      <label for='input-one'>
        On the drawbar of a trailer,semi-trailer:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_11_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.11.2"
  }
</script>

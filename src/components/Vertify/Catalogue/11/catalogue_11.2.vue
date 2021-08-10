<template>
  <div>
      <label for='input-one'>
        Maximum D-value:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_11_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_11.2"
  }
</script>

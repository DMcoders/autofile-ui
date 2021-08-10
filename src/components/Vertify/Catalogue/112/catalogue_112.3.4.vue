<template>
  <div>
      <label for='input-one'>
        Maximum electrical consumption:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.4"
  }
</script>

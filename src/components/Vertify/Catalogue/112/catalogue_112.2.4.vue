<template>
  <div>
      <label for='input-one'>
        Maximum net power:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.2.4"
  }
</script>

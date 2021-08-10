<template>
  <div>
      <label for='input-one'>
        Maximum vertical load:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_11: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.11"
  }
</script>

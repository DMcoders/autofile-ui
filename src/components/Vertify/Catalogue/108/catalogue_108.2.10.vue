<template>
  <div>
      <label for='input-one'>
        Maximum mass of trailer which may be coupled:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_10: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.10"
  }
</script>

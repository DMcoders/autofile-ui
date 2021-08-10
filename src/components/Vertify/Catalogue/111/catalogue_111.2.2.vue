<template>
  <div>
      <label for='input-one'>
        Maximum net power and/or maximum 30 minutes power (kw):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_2_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.2.2"
  }
</script>

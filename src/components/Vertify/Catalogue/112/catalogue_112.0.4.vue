<template>
  <div>
      <label for='input-one'>
        Location of that marking:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_0_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.0.4"
  }
</script>

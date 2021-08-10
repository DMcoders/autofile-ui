<template>
  <div>
      <label for='input-one'>
        Volume of exhaust system:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.3"
  }
</script>

<template>
  <div>
      <label for='input-one'>
        Category of engine:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_0_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.0.5"
  }
</script>

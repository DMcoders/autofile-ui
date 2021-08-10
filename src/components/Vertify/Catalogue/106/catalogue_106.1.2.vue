<template>
  <div>
      <label for='input-one'>
        Air filter make and type:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_1_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.1.2"
  }
</script>

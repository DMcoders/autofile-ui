<template>
  <div>
      <label for='input-one'>
        Name and address of manufacturer:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_0_6: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.0.6"
  }
</script>

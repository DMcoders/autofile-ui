<template>
  <div>
      <label for='input-one'>
        In the case of components and separate technical units, location and method of affixing of the EU approval mark:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_0_8: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.0.8"
  }
</script>

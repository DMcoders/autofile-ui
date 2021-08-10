<template>
  <div>
      <label for='input-one'>
        Exhaust system back pressure at rated engine speed and at 100% load:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_2_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.2.5"
  }
</script>

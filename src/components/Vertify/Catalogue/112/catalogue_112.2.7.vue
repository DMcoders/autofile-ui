<template>
  <div>
      <label for='input-one'>
        Pressure charger (yes/no):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_7: $event.target.value})">
      </label>
  </div>
</template>s

<script>
  export default {
    name: "catalogue_112.2.7"
  }
</script>

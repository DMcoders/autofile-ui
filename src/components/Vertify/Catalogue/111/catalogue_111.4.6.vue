<template>
  <div>
      <label for='input-one'>
        Max Power (kW):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_4_6: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.4.6"
  }
</script>

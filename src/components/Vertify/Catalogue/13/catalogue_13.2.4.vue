<template>
  <div>
    <label for='input-one'>
      For standing passengers:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_2_4: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.2.4"
  }
</script>

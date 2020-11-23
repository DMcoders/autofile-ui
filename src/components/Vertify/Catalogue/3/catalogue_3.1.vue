<template>
  <div>
    <label for='input-one'>
      Manufacturer：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {manufacturer: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.1"
  }
</script>

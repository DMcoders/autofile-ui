<template>
  <div>
    <label for='input-one'>
      Manufacturer's engine code (as marked on the engine, or other means of identificaton)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mec: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.1.1"
  }
</script>

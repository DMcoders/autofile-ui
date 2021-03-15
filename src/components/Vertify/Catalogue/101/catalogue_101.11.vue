<template>
  <div>
    <div>
      <label for='input-one'>
        Working principle (positive ignition/ compression
        ignition, four stroke/ two stroke) ：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {wp101_11: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.11",
    props: ['value']
  }
</script>

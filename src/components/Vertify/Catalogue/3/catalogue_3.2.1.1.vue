<template>
  <div>
    <label for='input-one'>
      Working principle (positive ignition / compression ignition, four stroke / two stroke)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {wp: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.1.1"
  }
</script>

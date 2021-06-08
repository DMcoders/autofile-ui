<template>
  <div>
    <label for='input-one'>
      The system(s) on which the vehicle immobilizer acts:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1221522: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.5.2.2"
  }
</script>

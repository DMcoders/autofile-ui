<template>
  <div>
    <label for='input-one'>
      Height (in running order) (for suspensions adjustable for height, indicate normal running position)
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {heightg2413: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.3"
  }
</script>

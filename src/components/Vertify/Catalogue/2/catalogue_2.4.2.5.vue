<template>
  <div>
    <label for='input-one'>
      Rear overhang:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {roverhang2425: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.5"
  }
</script>

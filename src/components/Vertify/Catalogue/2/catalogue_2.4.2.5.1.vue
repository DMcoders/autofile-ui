<template>
  <div>
    <label for='input-one'>
      Departure angle
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dangle24251: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.5.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Calculation of the braking system : determination of the ratio between the total braking forces at the circumference of the wheels and the force applied to the braking control :
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dorbt: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.8"
  }
</script>

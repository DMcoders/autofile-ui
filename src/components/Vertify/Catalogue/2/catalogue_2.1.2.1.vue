<template>
  <div>
    <label for='input-one'>
      Axle spacing between consecutive axles going from the foremost to the rearmost axle：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_1_2_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.1.2.1"
  }
</script>

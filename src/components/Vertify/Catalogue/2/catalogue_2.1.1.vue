<template>
  <div>
    <label for='input-one'>
      Two-axle vehicles：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tav: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.1.1"
  }
</script>

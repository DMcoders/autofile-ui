<template>
  <div>
    <label for='input-one'>
      Rear overhang
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {roverhang2415: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.5"
  }
</script>

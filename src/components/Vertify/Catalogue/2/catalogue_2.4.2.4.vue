<template>
  <div>
    <label for='input-one'>
      Front overhang:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {foverhang2424: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.4"
  }
</script>

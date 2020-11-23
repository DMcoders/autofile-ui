<template>
  <div>
    <label for='input-one'>
      Front overhang
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {foverhang2414: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.4"
  }
</script>

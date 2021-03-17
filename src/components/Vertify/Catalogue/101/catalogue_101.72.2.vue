<template>
  <div>
      <label for='input-one'>
        Cross sectional area (mm2)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {csa101_72: $event.target.value})">
      </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.72.2",
    props: ['value']
  }
</script>

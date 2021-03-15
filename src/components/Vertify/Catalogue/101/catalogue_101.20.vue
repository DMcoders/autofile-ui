<template>
  <div>
    <div>
      <label for='input-one'>
        Rated voltage: V,pos./neg. ground：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {rv101_20: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.20",
    props: ['value']
  }
</script>

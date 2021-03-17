<template>
  <div>
      <label for='input-one'>
        Length (m) ：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {length101_72: $event.target.value})">
      </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.72.1",
    props: ['value']
  }
</script>

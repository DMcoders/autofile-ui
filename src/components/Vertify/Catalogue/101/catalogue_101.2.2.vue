<template>
  <div>
      <label for='input-one'>
        Variant：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdVariant101_2: $event.target.value})">
      </label>
  </div>
</template>
<style>

  input{
    display: inline-block;
    vertical-align: middle;
  }

  label{
    vertical-align: middle;
  }
</style>

<script>
  export default {
    name: "catalogue_101.2.2",
    props: ['value']
  }
</script>

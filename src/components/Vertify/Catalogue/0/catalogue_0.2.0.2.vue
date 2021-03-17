<template>
  <div>
      <label for='input-one'>
        Variant：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdVariant: $event.target.value})">
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
    name: "catalogue_0.2.0.2",
    props: ['value']
  }
</script>

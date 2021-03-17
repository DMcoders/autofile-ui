<template>
  <div>
      <label for='input-one'>
        Version：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdVersion: $event.target.value})">
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
    name: "catalogue_0.2.0.3",
    props: ['value']
  }
</script>

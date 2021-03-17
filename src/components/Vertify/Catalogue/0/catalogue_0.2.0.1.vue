<template>
  <div>
      <label for='input-one'>
        Type:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdType: $event.target.value})">
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
    name: "catalogue_0.2.0.1",
    props: ['value']
  }
</script>

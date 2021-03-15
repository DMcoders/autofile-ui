<template>
  <div>
    <div>
      <label>
        Type and general commercial description(s)
      </label>
      <br/>
      <label for='input-one'>
        Type:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdType101_2: $event.target.value,
               tagcdVariant101_2:value.tagcdVariant101_2,tagcdVersion101_2:value.tagcdVersion101_2})">
      </label>

      <br/>
      <label for='input-two'>
        Variant：
        <input id='input-two'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdVariant101_2: $event.target.value,
               tagcdType101_2:value.tagcdType101_2,tagcdVersion101_2:value.tagcdVersion101_2
               })">
      </label>

      <br/>
      <label for='input-three'>
        Version：
        <input id='input-three'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdVersion101_2: $event.target.value,
                tagcdType101_2:value.tagcdType101_2, tagcdVariant:value.tagcdVariant101_2
               })">
      </label>
    </div>
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
    name: "catalogue_101.2",
    props: ['value']
  }
</script>

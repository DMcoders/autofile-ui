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
               v-on:input="$emit('input', {tagcdType: $event.target.value,
               tagcdVariant:value.tagcdVariant,tagcdVersion:value.tagcdVersion})">
      </label>

      <br/>
      <label for='input-two'>
        Variant：
        <input id='input-two'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdVariant: $event.target.value,
               tagcdType:value.tagcdType,tagcdVersion:value.tagcdVersion
               })">
        See annex A
      </label>

      <br/>
      <label for='input-three'>
        Version：
        <input id='input-three'
               v-bind:value='value'
               v-on:input="$emit('input', {tagcdVersion: $event.target.value,
                tagcdType:value.tagcdType, tagcdVariant:value.tagcdVariant
               })">
        See annex A
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
    name: "catalogue_0.2",
    props: ['value']
  }
</script>

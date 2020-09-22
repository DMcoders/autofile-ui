<template>
  <div>
    <div>
      Type and general commercial description(s)
      <br>
      <label for='input-one'>
        Type:
        <input id='input-one'
               v-bind:value='value.tagcdType'
               v-on:input="$emit('input', {tagcdType: $event.target.value,
               tagcdVariant:value.tagcdVariant,tagcdVersion:value.tagcdVersion})">
      </label>

      <br>
      <label for='input-two'>
        Variant：
        <input id='input-two'
               v-bind:value='value.tagcdVariant'
               v-on:input="$emit('input', {tagcdVariant: $event.target.value,
               tagcdType:value.tagcdType,tagcdVersion:value.tagcdVersion
               })">
        See annex A
      </label>

      <br>
      <label for='input-three'>
        Version：
        <input id='input-three'
               v-bind:value='value.tagcdVersion'
               v-on:input="$emit('input', {tagcdVersion: $event.target.value,
                tagcdType:value.tagcdType, tagcdVariant:value.tagcdVariant
               })">
        See annex A
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_02",
    props: ['value']
  }
</script>

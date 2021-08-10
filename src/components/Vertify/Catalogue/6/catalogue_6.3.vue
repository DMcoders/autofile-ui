<template>
  <div>
    <label for='input-one'>
      Distribution of the mass between the axles which are part of a group of axles (where necessary, provide appropriate graphs):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_6_3: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.3"
  }
</script>

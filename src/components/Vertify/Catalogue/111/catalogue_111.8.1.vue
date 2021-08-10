<template>
  <div>
      <label for='input-one'>
        Brief description of the power circuit components installation or drawings/pictures showing the location of the power circuit components installation:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_8_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.8.1"
  }
</script>

<template>
   <div>
      <label for='input-one'>
        Photograph(s) and/or drawing(s) of a representative vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10321: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.2.1"
  }
</script>

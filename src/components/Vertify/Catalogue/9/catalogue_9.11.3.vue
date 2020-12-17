<template>
  <div>
    <label for='input-one'>
      Drawings of parts of the external surface in
      accordance with ECE-R26, item 6.9.1 :
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dopotesiaw: $event.target.value})">
    </label>
    See annex G
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.11.3"
  }
</script>

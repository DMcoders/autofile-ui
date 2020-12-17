<template>
  <div>
    <label for='input-one'>
      Axis of reference and centre of reference:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {aoracor: $event.target.value})">
    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.3.3"
  }
</script>

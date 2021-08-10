<template>
  <div>
      <label for='input-one'>
        Working principle: positive ignition/compression ignition, four-stroke/two stroke1:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.2.2"
  }
</script>

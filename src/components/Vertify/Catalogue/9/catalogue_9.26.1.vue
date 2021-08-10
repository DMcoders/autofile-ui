<template>
  <div>
    <label for='input-one'>
      Vehicle equipped with aerodynamic device or equipment on the front:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_26_1: $event.target.value})">

    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.26.1"
  }
</script>

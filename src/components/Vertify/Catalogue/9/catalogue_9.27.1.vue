<template>
  <div>
    <label for='input-one'>
      Vehicle equipped with aerodynamic device or equipment on the rear:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_27_1: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.27.1"
  }
</script>

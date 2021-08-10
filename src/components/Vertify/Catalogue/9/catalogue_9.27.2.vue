<template>
  <div>
    <label for='input-one'>
      Number of the type-approval certificate of the aerodynamic device or equipment, if available:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_27_2: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.27.2"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Coordinates or drawing of the R-point (t):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {codotr: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.5"
  }
</script>

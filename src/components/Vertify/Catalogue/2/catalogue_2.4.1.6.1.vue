<template>
  <div>
    <label for='input-one'>
      Between the axles:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {bta24161: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.6.1"
  }
</script>

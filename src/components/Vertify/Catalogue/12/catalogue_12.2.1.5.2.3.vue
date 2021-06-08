<template>
  <div>
    <label for='input-one'>
      Number of effective interchangeable codes, if applicable:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1221523: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.5.2.3"
  }
</script>

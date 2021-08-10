<template>
  <div>
      <label for='input-one'>
        Description of the system (e.g. maximum charge pressure: ... kPa, wastegate if applicable) :
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_7_2: $event.target.value})">
      </label>
  </div>
</template>s

<script>
  export default {
    name: "catalogue_112.2.7.2"
  }
</script>

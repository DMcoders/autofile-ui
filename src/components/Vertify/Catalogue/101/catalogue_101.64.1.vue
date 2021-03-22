<template>
  <div>
    <div>
      <label for='input-one'>
        The applicant for type approval must also supply, where appropriate:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ve101_64_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.64.1",
    props: ['value']
  }
</script>

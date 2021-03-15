<template>
  <div>
    <div>
      <label for='input-one'>
        Vehicle equipped with 24 GHz short-range radar equipment yes/no/optional
        The applicant for type approval must also supply, where appropriate:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ve101_64: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.64",
    props: ['value']
  }
</script>

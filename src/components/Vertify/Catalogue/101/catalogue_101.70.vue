<template>
  <div>
    <div>
      <label for='input-one'>
        Minimum Rsce value (see chapter 7.3.):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {mrv101_70: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.70",
    props: ['value']
  }
</script>

<template>
  <div>
    <div>
      <label for='input-one'>
        Table and drawing of radio interference control equipment:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tadorice101_58: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.58",
    props: ['value']
  }
</script>

<template>
  <div>
    <div>
      <label for='input-one'>
        Charging current: direct current/ alternating current (number of phases / frequency):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {c101_66: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.66",
    props: ['value']
  }
</script>

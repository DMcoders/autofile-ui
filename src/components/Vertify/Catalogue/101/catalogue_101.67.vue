<template>
  <div>
    <div>
      <label for='input-one'>
        Maximal nominal current (in each mode if necessary):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {mnc101_67: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.67",
    props: ['value']
  }
</script>

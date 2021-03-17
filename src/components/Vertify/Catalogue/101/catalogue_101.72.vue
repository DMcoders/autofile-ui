<template>
  <div>
      <label for='input-one'>
        If charging cable delivered with the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ic101_72: $event.target.value})">
      </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.72",
    props: ['value']
  }
</script>

<template>
  <div>
    <div>
      <label for='input-one'>
        Devices to prevent unauthorized use of the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {dt101_61: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.61",
    props: ['value']
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Speed or range of speeds at which the speed limitation may be set:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sorosawtslmbs: $event.target.value})">
    </label>
    110 km/h
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.6.4"
  }
</script>

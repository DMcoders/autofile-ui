<template>
  <div>
    <label for='input-one'>
      In the case of vaccum braking systems,the initial energy level in the reservior(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {itcovbs: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.7.2"
  }
</script>

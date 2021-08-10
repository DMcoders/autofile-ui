<template>
  <div>
    <label for='input-one'>
      Hybrid electric vehicle (yes/no):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {hev: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.1"
  }
</script>

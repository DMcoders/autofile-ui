<template>
  <div>
    <label for='input-one'>
      Pure fuel consuming (yes/no):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {purefuelconsuming: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.3.1.2"
  }
</script>

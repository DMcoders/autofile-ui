<template>
  <div>
    <label for='input-one'>
      Width：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {width2412: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.2"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Range of vehicle dimensions (overall)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {rovd: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Width：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {width2422: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.2"
  }
</script>

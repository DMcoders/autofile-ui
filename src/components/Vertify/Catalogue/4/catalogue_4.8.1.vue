<template>
  <div>
    <label for='input-one'>
      Method of operation and description of drive mechanism：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mooadodm: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8.1"
  }
</script>

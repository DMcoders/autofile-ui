<template>
  <div>
    <label for='input-one'>
      In the case of compressed air systems, working pressure p2 in the pressure reservoir(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {itcocas: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.7.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Distance from the left vehicle edge:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dftlve: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.14.4"
  }
</script>

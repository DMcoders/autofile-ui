<template>
  <div>
    <label for='input-one'>
      To the right: Number of turns of the steering wheel (or equivalent data)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ttr: $event.target.value})">
      See below table
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.3.1"
  }
</script>

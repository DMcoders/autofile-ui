<template>
  <div>
    <label for='input-one'>
      Description of each axle：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {doea: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_5.1"
  }
</script>

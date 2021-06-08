<template>
  <div>
    <label for='input-one'>
      Upper and lower limit of rolling radii:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type662: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.2"
  }
</script>

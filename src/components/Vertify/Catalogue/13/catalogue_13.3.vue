<template>
  <div>
    <label for='input-one'>
      Number of passengers (seated and standing):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_3: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.3"
  }
</script>

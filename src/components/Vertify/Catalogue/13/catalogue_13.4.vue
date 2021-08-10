<template>
  <div>
    <label for='input-one'>
      Number of passengers seated:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_4: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.4"
  }
</script>

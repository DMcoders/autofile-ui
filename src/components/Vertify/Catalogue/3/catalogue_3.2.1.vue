<template>
  <div>
    <label for='input-one'>
      Specific engine information:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sei: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.1"
  }
</script>

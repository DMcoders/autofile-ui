<template>
  <div>
    <label for='input-one'>
      Engine code:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_75_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.75.4"
  }
</script>

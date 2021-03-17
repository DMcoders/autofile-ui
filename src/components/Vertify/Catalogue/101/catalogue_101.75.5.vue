<template>
  <div>
    <label for='input-one'>
      Left or right hand drive:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_75_5: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.75.5"
  }
</script>

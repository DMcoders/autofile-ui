<template>
  <div>
    <label for='input-one'>
      of the motor vehicle：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {otmv: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.12.1"
  }
</script>

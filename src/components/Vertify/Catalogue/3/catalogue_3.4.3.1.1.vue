<template>
  <div>
    <label for='input-one'>
      Pure electric (yes/no):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pureelectric: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.3.1.1"
  }
</script>

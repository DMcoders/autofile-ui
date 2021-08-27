<template>
  <div>
    <label for='input-one'>
      Battery：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type332: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.2"
  }
</script>

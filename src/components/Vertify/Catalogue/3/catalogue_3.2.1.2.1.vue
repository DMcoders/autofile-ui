<template>
  <div>
    <label for='input-one'>
      Firing order：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {fo: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.1.2.1"
  }
</script>

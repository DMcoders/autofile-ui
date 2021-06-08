<template>
  <div>
    <label for='input-one'>
      Full trailer：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type2111: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.1"
  }
</script>

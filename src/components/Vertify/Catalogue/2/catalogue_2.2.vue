<template>
  <div>
    <label for='input-one'>
      Fifth wheel：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {fw: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.2"
  }
</script>

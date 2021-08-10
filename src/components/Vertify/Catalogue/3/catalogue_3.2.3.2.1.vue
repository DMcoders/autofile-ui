<template>
  <div>
    <label for='input-one'>
      Make(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {make232321: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.3.2.1"
  }
</script>

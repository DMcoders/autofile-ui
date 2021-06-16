<template>
  <div>
    <label for='input-one'>
      Minimum permissible width：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {minpw: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.2.2"
  }
</script>

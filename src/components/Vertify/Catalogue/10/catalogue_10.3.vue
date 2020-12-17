<template>
  <div>
    <label for='input-one'>
      For every lamp and reflector specified in ECE regulation No. 48 supply the following information (in writing and/or by diagram)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {felars: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.3"
  }
</script>

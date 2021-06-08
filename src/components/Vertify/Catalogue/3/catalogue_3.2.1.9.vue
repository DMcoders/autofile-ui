<template>
  <div>
    <label for='input-one'>
      Prescribed by the manufacturer Maximum permitted engine speed as prescribed by the manufacturer：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pbtmmpesapbtm: $event.target.value})">
      min
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.1.9"
  }
</script>

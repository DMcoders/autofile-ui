<template>
  <div>
    <label for='input-one'>
      Number and arrangement of cylinders：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {naaoc: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.1.2"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Description and/or drawing of the exhaust system：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dadotes: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.4.1"
  }
</script>

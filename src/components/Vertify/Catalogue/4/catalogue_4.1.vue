<template>
  <div>
    <label for='input-one'>
      Drawing of the transmission：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type41: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_4.1"
  }
</script>

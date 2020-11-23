<template>
  <div>
    <label for='input-one'>
      Make：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {make3441: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.4.1"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Length：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {lengthg2411: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.1"
  }
</script>

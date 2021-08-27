<template>
  <div>
    <label for='input-one'>
      Engine capacity：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ec: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.1.3"
  }
</script>

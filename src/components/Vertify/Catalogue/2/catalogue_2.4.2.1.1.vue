<template>
  <div>
    <label for='input-one'>
      Length of the loading area:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {lotloa: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.1.1"
  }
</script>

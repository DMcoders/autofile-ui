<template>
  <div>
    <label for='input-one'>
      2, LDWS and AEBS Forward Looking Camera:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_76_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.76.3"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      1, LDWS and AEBS:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_76_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.76.2"
  }
</script>

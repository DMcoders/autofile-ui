<template>
  <div>
    <label for='input-one'>
      Operating voltage:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_3_1_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.1.2"
  }
</script>

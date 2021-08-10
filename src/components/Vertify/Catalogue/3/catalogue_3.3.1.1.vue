<template>
  <div>
    <label for='input-one'>
      Maximum hourly output(KW):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_3_1_1: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.1.1"
  }
</script>

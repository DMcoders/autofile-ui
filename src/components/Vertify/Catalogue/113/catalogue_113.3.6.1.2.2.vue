<template>
  <div>
    <label for='input-one'>
      Maximum temperature at reference point:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_6_1_2_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.6.1.2.2"
  }
</script>

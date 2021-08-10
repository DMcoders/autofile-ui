<template>
  <div>
    <label for='input-one'>
      Drive ratio(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_2_7_2_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.2.7.2.4"
  }
</script>

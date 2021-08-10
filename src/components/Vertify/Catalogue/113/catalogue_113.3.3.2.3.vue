<template>
  <div>
    <label for='input-one'>
      Capacity:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_3_2_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.3.2.3"
  }
</script>

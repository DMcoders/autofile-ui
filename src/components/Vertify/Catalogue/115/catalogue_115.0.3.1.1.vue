<template>
  <div>
    <div>
      <label for='input-one'>
        Chassis: 
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_115_0_3_1_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_115.0.3.1.1"
  }
</script>

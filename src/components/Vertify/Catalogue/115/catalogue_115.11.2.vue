<template>
  <div>
    <div>
      <label for='input-one'>
        Characteristics D, U, S and V of the coupling device(s) fitted or minimal characteristics D, U, S and V of the coupling device(s) to be fitted: 
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_115_11_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_115.11.2"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Electrical system: 
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_2_5: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.5"
  }
</script>

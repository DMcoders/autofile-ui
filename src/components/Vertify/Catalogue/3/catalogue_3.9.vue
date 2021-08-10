<template>
  <div>
    <label for='input-one'>
      List of equipment to for alternative propulsion (and indication of the mass of the parts): 
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_9: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.9"
  }
</script>

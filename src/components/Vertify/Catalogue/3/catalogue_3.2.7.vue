<template>
  <div>
    <label for='input-one'>
      Cooling system (liquid/air):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_2_7: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.7"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Additional mass for alternative propulsion(kg):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_6_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.6.4"
  }
</script>

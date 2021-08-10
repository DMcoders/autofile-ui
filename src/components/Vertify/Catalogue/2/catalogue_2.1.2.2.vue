<template>
  <div>
    <label for='input-one'>
      Total axle spacing:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_1_2_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.1.2.2"
  }
</script>

<template>
  <div>
    <label for='input-one'>
      Type (mechanical, hydraulic, electric, etc.)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type42: $event.target.value})">
      Mechanical
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_4.2.(R39R89)"
  }
</script>

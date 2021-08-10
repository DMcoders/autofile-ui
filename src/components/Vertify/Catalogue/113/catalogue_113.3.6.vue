<template>
  <div>
    <label for='input-one'>
      Temperatures permitted by the manufacturer:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_6: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.6"
  }
</script>

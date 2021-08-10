<template>
  <div>
    <label for='input-one'>
      Width:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_4_3_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.3.2"
  }
</script>

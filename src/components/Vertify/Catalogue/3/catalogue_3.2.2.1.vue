<template>
  <div>
    <label for='input-one'>
      By fuel injection (compression ignition only):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_2_2_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.2.1"
  }
</script>

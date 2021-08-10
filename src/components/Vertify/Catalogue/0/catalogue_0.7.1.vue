<template>
  <div>
    <div>
      <label for='input-one'>
        On the chassis:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_0_7_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.7.1"
  }
</script>

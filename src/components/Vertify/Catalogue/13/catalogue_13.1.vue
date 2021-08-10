<template>
  <div>
    <label for='input-one'>
      Class of vehicle (Class I/Class II/Class III/Class A/Class B):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.1"
  }
</script>

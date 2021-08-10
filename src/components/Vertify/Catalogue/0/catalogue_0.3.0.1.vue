<template>
  <div>
    <div>
      <label for='input-one'>
        Chassis:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_0_3_0_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.3.0.1"
  }
</script>
